/**
 * Created by navy on 15/4/2.
 */
var React = require('react/addons');
var _ = require('lodash');
var FormField = require('./FormField');
var async = require('async');

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
        this.isValid(function (valid) {
            if(valid){
                var data = this.getData();
                if(this.props.onFormSubmit){
                    this.props.onFormSubmit(data);
                }
                console.log(data);
                this.reset();
            }
        }.bind(this));
    },
    reset: function () {
        var self = this;
        _.each(this.state.formfields, function (field) {
            self.refs[field.name].reset();
        })
    },
    isValid: function (cb) {
        var self = this;
        async.map(this.state.formfields, function (field,callback) {
            self.refs[field.name].isValid(callback)
        }, function (err, results) {
            var valid=_.every(results,Boolean);
            cb(valid)
        });
    },
    getData: function () {
        var self = this;
        var data = {};
        _.map(this.state.formfields, function (field) {
            data[field.name] = self.refs[field.name].getValue();
        });
        return data;
    },
    getFormRef:function(){
       return this.refs;
    },
    render: function () {
        var fields = [];
        var self=this;
        return (
            <form url={this.props.url} onSubmit={this.onSubmit}>
                {this.state.formfields.map(function (field, i) {
                    return <FormField
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        label={field.label}
                        ref={field.name}
                        validateRules={field.validateRules}
                        key={i}
                        getFormRef={self.getFormRef}
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