/**
 * Created by navy on 15/4/2.
 */
var React = require('react/addons');
var _ = require('lodash');
var FormField=require('./FormField');

var Form=React.createClass({

    getInitialState:function(){
        return {
            formfields:this.props.formfields,
            url:this.props.url,
            submiting:false
        }
    },
    onSubmit:function(e){
      e.preventDefault();
    },
    render:function(){
        var fields=[];
        this.state.formfields.map(function(field){


        })
        return (
            <form url={this.props.url} onSubmit={this.onSubmit}>
                {this.state.formfields.map(function(field,i){

                    return <FormField type={field.type}
                                      id={field.id}
                                      placeholder={field.placeholder}
                                      label={field.label}
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
module.exports=Form;