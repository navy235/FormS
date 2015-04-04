/**
 * Created by navy on 15/4/2.
 */

var React = require('react/addons');
var _ = require('lodash');
var Icon = require('../components/Icon');

var cx = React.addons.classSet;

var FormValidator = React.createClass({

    getInitialState: function () {

        var valid = this.props.validateStatus ? _.every(_.map(this.props.validateStatus, function (item) {
            return item.valid;
        }), Boolean) : false;
        return {
            valid: valid,
            showValidator: this.props.showValidator
        };
    },
    render: function () {

        var validatorClass = cx({
            'password_validator': true,
            'visible': this.state.showValidator,
            'invisible': !this.state.showValidator
        });

        var validatorTitle;

        if (this.props.valid) {
            validatorTitle =
                <h4 className="validator_title valid">
                    {this.props.name} IS OK
                </h4>
        } else {
            validatorTitle =
                <h4 className="validator_title invalid">
                    {this.props.name} RULES
                </h4>
        }
        var messages = [];
        _.each(this.props.validateStatus, function (item) {
            var errorClass = cx({
                'error_message': true
            });
            var itemClass = cx({
                'valid': item.valid
            });
            messages.push({
                errorClass: errorClass,
                itemClass: itemClass,
                errorMessage: item.errorMessage
            });
        });


        return (

            <div className="validate">
                <ValidStatus name={this.props.name} visible={!this.state.showValidator&&!this.state.valid} />

                <div className={validatorClass}>
                    <div className="validator_container">
                        {validatorTitle}
                        <ul className="rules_list">
                            {messages.map(function (item) {
                                return <ValidateItem itemClass={item.itemClass} errorClass={item.errorClass}
                                                     errorMessage={item.errorMessage}/>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
})


var ValidateItem = React.createClass({

    render: function () {
        return (
            <li className={this.props.itemClass}>
                <i className="icon_valid"> <Icon type="circle_tick_filled"/> </i>
                <i className="icon_invalid"> <Icon type="circle_error"/> </i>
                <span className={this.props.errorClass}>{this.props.errorMessage}</span>
            </li>
        )
    }
})


var ValidStatus = React.createClass({

    getInitialState: function () {
        return {
            message: this.props.name + 'is invalid'
        };
    },

    render: function () {
        var errorClass = cx({
            'error_container': true,
            'visible': this.props.visible,
            'invisible': !this.props.visible
        });

        return (
            <div className={errorClass}>
                <span>{this.props.errorMessage}</span>
            </div>
        )
    }

})


module.exports = FormValidator;
