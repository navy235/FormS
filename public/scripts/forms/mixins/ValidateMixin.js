/**
 * Created by navy on 15/4/2.
 */
var _ = require('lodash');

function Validator(displayName, rules) {
    this.displayName = displayName;
    this.rules = rules;
    this.result = {};
}

Validator.prototype = {


    messageTemplate: {
        required: 'The {0} is Required',

    },
    validate: function (value) {
        var self = this;
        _.each(self.rules, function (condition, rule) {
            self[rule](value, condition);
        })

    },

    required: function (value, condition) {
        var key = 'required';

        this.result[key] = {
            valid: !_.isEmpty(value),
            errorMessage: this.getTemplateMessage(key)
        }

    },
    getTemplateMessage: function (key) {
        var words = [].concat(this.displayName);
        var templateStr = this.messageTemplate[key];
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
        this.result = {};
    },
    checkRules: function (value) {
        var validator = new Validator(this.displayName, this.rules)
        validator.validate(value);
        return validator.result;
    },

}
module.exports = ValidatorMixin;