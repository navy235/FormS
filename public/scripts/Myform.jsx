/**
 * Created by navy on 15/4/2.
 */
var React = require('react/addons');
var Form = require('./forms/Form');
require('../styles/application.less');
var formfields = [
    {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        validateRules: {
            required: true,
            email:true,
            remote:{
                url:'users',
                minLength:6,
                message:'This {0} is registered,please try another one!'
            }
        }
    },
    {
        id: 'name',
        type: 'text',
        label: 'Name',
        validateRules: {
            required: true
        }
    },
    {
        id: 'password',
        type: 'password',
        label: 'Password',
        validateRules: {
            required: true
        }

    }]
React.render(
    <div className="container">
        <Form formfields={formfields}
            url='url'/>
    </div>
    , document.getElementById('formcontainer'));
