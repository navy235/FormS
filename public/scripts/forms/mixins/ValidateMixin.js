/**
 * Created by navy on 15/4/2.
 */
var _ = require('lodash');
var $ = require('jquery');

var Validator = function () {

}

Validator.prototype = {

    rulesSetting: {
        required: {
            message: 'The {0} is Required'
        },
        email: {
            message: 'The {0} is a valid email address'
        },
        remote: {
            async: true
        },
        equalto: {
            message: 'The {0} equal to {1}'
        }
    },
    isAsyncValidate: function (rule) {
        return this.rulesSetting[rule].async;
    },
    validate: function (value, callback) {
        var self = this;
        var runner = [];

        _.each(self.rules, function (condition, rule) {
            function asyncValidate(condition, rule) {
                var d = $.Deferred();
                self[rule](value, condition);
                d.resolve(true);
                return d.promise();
            }

            if (self.isAsyncValidate(rule)) {
                runner.push(self[rule](value, condition))
            } else {
                runner.push(asyncValidate(condition, rule))
            }

        })
        $.when.apply($, runner).then(function (data) {
            callback(self.result);
        })

    },
    required: function (value, condition) {
        var key = 'required';
        this.result[key] = {
            valid: condition ? !_.isEmpty(value) : true,
            errorMessage: this.getTemplateMessage(key)
        }

    },
    email: function (value, condition) {
        var key = 'email';
        this.result[key] = {
            valid: condition ? /^\w+@[a-zA-Z_\d]+?\.[a-zA-Z]{2,3}$/.test(value) : true,
            errorMessage: this.getTemplateMessage(key)
        }
    },
    equalto: function (value, condition) {
        var key = 'equalto';
        var form = this.field.getFormRef();
        var equalElemnt = form[condition['compare']];
        this.result[key] = {
            valid: equalElemnt.getValue() == value,
            errorMessage: this.getTemplateMessage(key, null, [equalElemnt.getDisplayName()])
        }
    },
    remote: function (value, condition) {
        var self = this;
        var d = $.Deferred();
        var key = 'remote';
        var data = {};
        var fieldName = this.field.getFieldName();
        data[fieldName] = value;
        var othervalid = _.every(_.map(self.result, function (item, name) {
            if (name == key) {
                return true;
            } else {
                return item.valid;
            }
        }), Boolean);
        self.result[key] = {
            valid: false,
            errorMessage: 'Loading for checking'
        };
        if (othervalid) {
            $.post(condition.url, data, function (res) {
                self.result[key] = {
                    valid: res,
                    errorMessage: self.getTemplateMessage(key, condition.message)
                }
                d.resolve(res);
            });
        } else {
            d.resolve(false);
        }
        return d.promise();
    },
    getTemplateMessage: function (key, message, otherwords) {
        var displayName = this.field.getDisplayName();
        var words = [].concat(displayName);
        if (otherwords) {
            words = words.concat(otherwords);
        }
        var templateStr = message || this.rulesSetting[key].message;
        var result = templateStr.replace(/\{(\d+)\}/g, function (match, token) {
            return words[token];
        });
        return result;
    }

};

var ValidatorMixin = {

    componentWillMount: function () {
        this.validator = new Validator();
        this.validator.field = this;
        this.validator.rules = this.getValidateRules();
        this.validator.result = {};
    },
    checkRules: function (value, callback) {
        this.validator.validate(value, callback);
    },

}
module.exports = ValidatorMixin;