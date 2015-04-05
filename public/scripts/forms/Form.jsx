/**
 * Created by navy on 15/4/2.
 */
var React = require('react/addons');
var _ = require('lodash');
var FormField = require('./FormField');

var Form = React.createClass({

    getInitialState: function () {
        return {
            formfields: this.props.formfields,
            url: this.props.url,
            submiting: false
        }

    },
    onSubmit: function (e) {
        e.preventDefault();
        var valid=this.isValid();
        var data=this.getData();
        if (valid) {
            console.log(data);
            this.reset();
        }
    },
    reset: function () {
        var self = this;
        _.each(this.state.formfields, function (field) {
            self.refs[field.id].reset();
        })
    },
    isValid: function () {
        var self = this;
        var valid = _.every(_.map(this.state.formfields, function (field) {
            return self.refs[field.id].isValid();
        }), Boolean);
        return valid;
    },
    getData: function () {
        var self = this;
        var data = {};
        _.map(this.state.formfields, function (field) {
            data[field.id] = self.refs[field.id].getValue();
        });
        return data;
    },
    render: function () {
        var fields = [];
        return (
            <form url={this.props.url} onSubmit={this.onSubmit}>
                {this.state.formfields.map(function (field, i) {
                    return <FormField
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        label={field.label}
                        ref={field.id}
                        validateRules={field.validateRules}
                        key={i}
                    />
                })}

                <button
                    type="submit"
                    className="button button_wide">
                    CREATE ACCOUNT
                </button>

            </form>
        );

    }
})
module.exports = Form;