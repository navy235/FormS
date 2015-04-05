/**
 * Created by navy on 15/4/2.
 */
var React = require('react/addons');
var Form = require('./forms/Form');
require('../styles/application.less');
var formfields=[{
    id:'name',
    type:'text',

    label:'Name',
    validateRules:{
        required:true

    }
}]
React.render(

    <div className="container">
        <Form formfields={formfields}
              url='url'/>
    </div>
        , document.getElementById('formcontainer'));
