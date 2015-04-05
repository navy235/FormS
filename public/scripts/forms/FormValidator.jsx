/**
 * Created by navy on 15/4/2.
 */

var React = require('react/addons');
var _ = require('lodash');
var Icon = require('../components/Icon');

var cx = React.addons.classSet;

var FormValidator = React.createClass({

    getInitialState: function () {
        return {
            valid: this.props.valid,
            showValidator: this.props.showValidator
        };
    },
    render: function () {

        var validatorClass = cx({
            'password_validator': true,
            'visible': this.props.showValidator,
            'invisible': !this.props.showValidator
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
                <ValidStatus name={this.props.name} visible={!this.props.initial && !this.props.showValidator && !this.props.valid} />
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
                <i className="icon_valid">
                    <Icon type="circle_tick_filled"/>
                </i>
                <i className="icon_invalid">
                    <Icon type="circle_error"/>
                </i>
                <span className={this.props.errorClass}>{this.props.errorMessage}</span>
            </li>
        )
    }
})


var ValidStatus = React.createClass({

    getInitialState: function () {
        return {
            message: this.props.name + ' is invalid'
        };
    },

    render: function () {
        var errorClass = cx({
            'error_container': true,
            'visible': this.props.visible,
            'invisible': !this.props.visible
        });

        var errorIconClass=cx({
            'validationIcons':true,
            'visible': this.props.visible,
            'invisible': !this.props.visible
        })

        return (
            <div>
                <div className={errorClass}>
                    <span>{this.state.message}</span>
                </div>
                <div className={errorIconClass}>
                    <i className="input_error_icon">
                        <Icon type="circle_error"/>
                    </i>
                    <i className="input_valid_icon">
                        <Icon type="circle_tick"/>
                    </i>
                </div>
            </div>
        )
    }

})


module.exports = FormValidator;
