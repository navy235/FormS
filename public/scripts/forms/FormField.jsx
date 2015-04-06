/**
 * Created by navy on 15/4/2.
 */
var React = require('react/addons');
var _ = require('lodash');
var async = require('async');
var cx = React.addons.classSet;
var ValidateMixin = require('./mixins/ValidateMixin');
var FormValidator = require('./FormValidator');

var FormField = React.createClass({

    mixins: [ValidateMixin],

    getInitialState: function () {
        return {
            name: this.props.name,
            type: this.props.type,
            focus: false,
            empty: _.isEmpty(this.props.value),
            initial: true,
            label: this.props.label,
            value: null,
            validateRules: this.props.validateRules,
            validateStatus: [],
            showValidator: false,
            valid: false
        }
    },
    componentWillReceiveProps: function (newProps) {
        // perform update only when new value exists and not empty
        if (newProps.value) {
            if (!_.isUndefined(newProps.value) && newProps.value.length > 0) {
                this.setState({
                    value: newProps.value,
                    empty: _.isEmpty(newProps.value)
                });
            }
        }
    },
    handleChange: function (event) {
        this.setState({
            value: event.target.value,
            empty: _.isEmpty(event.target.value)
        }, function () {
            // call onChange method on the parent component for updating it's state
            if (this.props.onChange) {
                this.props.onChange(event);
            }
            this.isValid();
        });
    },
    getDisplayName: function () {
        var displayName = this.props.label || this.props.name;
        return displayName;
    },
    getFieldName:function(){
        return this.props.name;
    },
    getValue: function () {
        return this.state.value;
    },
    getFormRef: function () {
        return this.props.getFormRef();
    },
    getValidateRules:function(){
        return this.props.validateRules;
    },
    reset: function () {
        this.setState({
            focus: false,
            initial: true,
            value: null,
            empty: true,
            validateStatus: [],
            showValidator: false,
            valid: false
        })
    },
    isValid: function (callback) {
        if (this.props.validateRules) {
            this.checkRules(this.state.value, function (result) {
                var valid = _.every(_.map(result, function (item) {
                    return item.valid;
                }), Boolean);
                this.setState({
                    validateStatus: result,
                    valid: valid,
                    initial: false
                });
                if (callback) {
                    callback(null, valid);
                }
            }.bind(this));
        }
    },
    handleFocus: function (event) {
        this.setState({
            focus: true,
            showValidator: true,
            initial: false
        }, function () {
            this.isValid();
        });
        this.isValid();
    },

    handleBlur: function () {
        this.setState({
            focus: false,
            showValidator: false
        }, function () {
            this.isValid();
        });
    },

    render: function () {

        var formFieldClasses = cx({
            'input_group': true,
            'input_valid': this.state.valid,
            'input_error': !this.state.valid,
            'input_empty': this.state.empty,
            'input_hasValue': !this.state.empty,
            'input_focused': this.state.focus,
            'input_unfocused': !this.state.focus
        });

        var label;
        if (this.state.label) {
            label = <label className="input_label" htmlFor={this.props.name}>
                <span className="label_text">{this.props.label}</span>
            </label>
        }
        var inputClass = "field-input input field-" + this.state.type
        return (
            <div className={formFieldClasses}>
                {label}
                <input
                    {...this.props}
                    placeholder={this.props.placeholder}
                    className={inputClass}
                    id={this.props.name}
                    name={this.props.name}
                    defaultValue={this.props.defaultValue}
                    value={this.state.value}
                    onChange={this.handleChange}
                    onClick={this.handleFocus}
                    onBlur={this.handleBlur}
                    autoComplete="off"
                />
                <FormValidator showValidator={this.state.showValidator}
                    validateStatus={this.state.validateStatus}
                    initial={this.state.initial}
                    name={this.props.label}
                    valid={this.state.valid} />
            </div>
        )

    }
})
module.exports = FormField;