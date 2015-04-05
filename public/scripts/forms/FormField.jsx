/**
 * Created by navy on 15/4/2.
 */
var React = require('react/addons');
var _ = require('lodash');
var cx = React.addons.classSet;
var ValidateMixin = require('./mixins/ValidateMixin');
var FormValidator = require('./FormValidator');

var FormField = React.createClass({

    mixins: [ValidateMixin],


    getInitialState: function () {
        return {
            id: this.props.id,
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
    handleChange: function (event) {
        this.setState({
            value: event.target.value,
            empty: _.isEmpty(event.target.value)
        });

        // call onChange method on the parent component for updating it's state
        if (this.props.onChange) {
            this.props.onChange(event);
        }
        this.isValid();
    },
    getValue: function () {
        return this.state.value;
    },
    reset: function () {
        this.setState({
            focus: false,
            initial: true,
            value: null,
            empty:true,
            validateStatus: [],
            showValidator: false,
            valid: false
        })
    },
    isValid: function () {
        if (this.props.validateRules) {
            var result = this.checkRules(this.state.value);
            var valid = _.every(_.map(result, function (item) {
                return item.valid;
            }), Boolean);
            this.setState({
                validateStatus: result,
                valid: valid,
                initial:false
            });
            return valid;
        }
        return true;
    },
    handleFocus: function (event) {
        this.setState({
            focus: true,
            showValidator: true,
            initial: false
        });
        this.isValid();
    },

    handleBlur: function () {
        this.setState({
            focus: false,
            showValidator: false
        });
        this.isValid();
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
            label = <label className="input_label" htmlFor={this.props.label}>
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
                    id={this.props.label}
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