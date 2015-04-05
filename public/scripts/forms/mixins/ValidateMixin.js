/**
 * Created by navy on 15/4/2.
 */
var _ = require('lodash');
var $ = require('jquery');

function Validator(displayName, rules, id) {
    this.displayName = displayName;
    this.rules = rules;
    this.name = id;
    this.result = {};
}

Validator.prototype = {

    messageTemplate: {
        required: 'The {0} is Required',
        email: 'The {0} is a valid email address'
    },
    validate: function (value) {
        var self = this;
        var runner=[];

        _.each(self.rules, function (condition, rule) {
            function asyncValidate(condition,rule){
                var d=$.Deferred();
                self[rule](value, condition);
                d.resolve(true);
                return d.promise();
            }
            runner.push(asyncValidate(condition,rule))
        })
        $.when(runner).then(function () {
            return self.result;
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
    remote: function (value, condition) {
        var self = this;
        var key = 'remote';
        var data = {};
        data[self.name] = value;
        self.result[key] = {
            valid:false,
            errorMessage: 'remote checking'
        };
        $.post(condition.url, data, function (res) {
            self.result[key] = {
                valid: res,
                errorMessage: self.getTemplateMessage(key, condition.message)
            }
        })
    },
    getTemplateMessage: function (key, message) {
        var words = [].concat(this.displayName);
        var templateStr = message || this.messageTemplate[key];
        var result = templateStr.replace(/\{(\d+)\}/g, function (match, token) {
            return words[token];
        });
        return result;
    }


};

var ValidatorMixin = {

    componentWillMount: function () {
        this.displayName = this.props.label;
        this.rules = this.props.validateRules;
        this.id = this.props.id;
        this.result = {};
        this.validator = new Validator(this.displayName,
            this.rules,
            this.id
        )
    },
    checkRules: function (value) {
        this.validator.validate(value);
    },

}
module.exports = ValidatorMixin;