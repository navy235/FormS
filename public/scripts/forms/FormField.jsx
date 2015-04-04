/**
 * Created by navy on 15/4/2.
 */
var React = require('react/addons');
var _ = require('lodash');
var cx = React.addons.classSet;
var ValidateMixin=require('./mixins/ValidateMixin');
var FormValidator=require('./FormValidator');

var FormField=React.createClass({

    mixins:[ValidateMixin],

    getDefaultProps:function(){


    },

    getInitialState:function(){
        return {
            id:this.props.id,
            type:this.props.type,
            focus:false,
            empty:_.isEmpty(this.props.value),
            label:this.props.label,
            value:null,
            defaultValue:this.props.defaultValue,
            validateRules:this.props.validateRules,
            validateStatus:[],
            showValidator:false,
            isValid:false
        }
    },

    componentWillReceiveProps: function (newProps) {
        // perform update only when new value exists and not empty
        if(newProps.value) {
            if(!_.isUndefined(newProps.value) && newProps.value.length > 0) {
                if(this.props.validateRules) {
                    var result = this.checkRules(newProps.value);
                    var valid = this.isValid(result);
                    this.setState({
                        validateStatus: result,
                        isValid: valid
                    });
                }
                this.setState({
                    value: newProps.value,
                    empty: _.isEmpty(newProps.value)
                });
            }
        }
    },
    handleChange: function(event){

        this.setState({
            value: event.target.value,
            empty: _.isEmpty(event.target.value)
        });

        if(this.props.validateRules) {
            var result=  this.checkRules(event.target.value);
            var valid=this.isValid(result);
            this.setState({
                validateStatus: result,
                isValid:valid
            });
        }
        // call onChange method on the parent component for updating it's state
        if(this.props.onChange) {
            this.props.onChange(event);
        }
    },
    isValid:function(result){
        var valid=_.every(_.map(result,function(item){
            return item.valid;
        }),Boolean);
        return valid;
    },
    handleFocus: function () {
        this.setState({
            focus: true,
            showValidator:true
        });
    },

    handleBlur: function () {
        this.setState({
            focus: false,
            showValidator:false
        });
    },

    render:function(){

        var formFieldClasses = cx({
            'input_group':     true,
            'input_valid':     this.state.valid,
            'input_error':     !this.state.valid,
            'input_empty':     this.state.empty,
            'input_hasValue':  !this.state.empty,
            'input_focused':   this.state.focus,
            'input_unfocused': !this.state.focus
        });

        var label;
        if(this.state.label){
            label= <label className="input_label" htmlFor={this.props.label}>
                <span className="label_text">{this.props.label}</span>
            </label>
        }
        var inputClass="field-input input field-"+this.state.type
        return (
            <div className={formFieldClasses}>
                {label}
                <input
                    {...this.props}
                    placeholder={this.props.placeholder}
                    className={inputClass}
                    id={this.props.text}
                    defaultValue={this.props.defaultValue}
                    value={this.state.value}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    autoComplete="off"
                    />
                <FormValidator showValidator={this.state.showValidator}
                               validateStatus={this.state.validateStatus}
                               name={this.props.label}
                               valid={this.state.isValid} />
            </div>
        )

    }
})
module.exports=FormField;