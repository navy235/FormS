/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by navy on 15/4/2.
	 */
	var React = __webpack_require__(1);
	var Form = __webpack_require__(2);
	__webpack_require__(4);
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
	    React.createElement("div", {className: "container"}, 
	        React.createElement(Form, {formfields: formfields, 
	            url: "url"})
	    )
	    , document.getElementById('formcontainer'));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by navy on 15/4/2.
	 */
	var React = __webpack_require__(1);
	var _ = __webpack_require__(3);
	var FormField = __webpack_require__(7);

	var Form = React.createClass({displayName: "Form",

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
	            React.createElement("form", {url: this.props.url, onSubmit: this.onSubmit}, 
	                this.state.formfields.map(function (field, i) {
	                    return React.createElement(FormField, {
	                        type: field.type, 
	                        id: field.id, 
	                        placeholder: field.placeholder, 
	                        label: field.label, 
	                        ref: field.id, 
	                        validateRules: field.validateRules, 
	                        key: i}
	                    )
	                }), 

	                React.createElement("button", {
	                    type: "submit", 
	                    className: "button button_wide"}, 
	                    "CREATE ACCOUNT"
	                )

	            )
	        );

	    }
	})
	module.exports = Form;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = _;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!e:\\WorkSpace\\Study\\FormS\\node_modules\\css-loader\\index.js!e:\\WorkSpace\\Study\\FormS\\node_modules\\less-loader\\index.js!e:\\WorkSpace\\Study\\FormS\\public\\styles\\application.less", function() {
			var newContent = require("!!e:\\WorkSpace\\Study\\FormS\\node_modules\\css-loader\\index.js!e:\\WorkSpace\\Study\\FormS\\node_modules\\less-loader\\index.js!e:\\WorkSpace\\Study\\FormS\\public\\styles\\application.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(30)();
	exports.push([module.id, "html {\n  color: #000;\n  background: #FFF;\n  overflow-y: scroll;\n  font-size: 100%;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  font-family: sans-serif;\n}\nhtml,\nbody {\n  height: 100%;\n  min-height: 100%;\n}\na {\n  background: transparent;\n}\na,\na:active,\na:hover {\n  outline: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection,\nbody,\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\ncode,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\np,\nblockquote,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nfieldset,\nimg {\n  border: 0;\n}\naddress,\ncaption,\ncite,\ncode,\ndfn,\nem,\nstrong,\nth,\nvar {\n  font-style: normal;\n  font-weight: normal;\n}\nol,\nul {\n  list-style: none;\n}\ncaption,\nth {\n  text-align: left;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\nq:before,\nq:after {\n  content: '';\n}\nabbr,\nacronym {\n  border: 0;\n  font-variant: normal;\n}\n/* to preserve line-height and selector appearance */\nsup {\n  vertical-align: text-top;\n}\nsub {\n  vertical-align: text-bottom;\n}\ninput,\ntextarea,\nselect {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  *font-size: 100%;\n  /*to enable resizing for IE*/\n}\nlegend {\n  color: #000;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection {\n  display: block;\n}\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n}\naudio:not([controls]) {\n  display: none;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n  font-size: 100%;\n  vertical-align: middle;\n}\nbutton,\ninput {\n  *overflow: visible;\n  line-height: normal;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\npre {\n  overflow: auto;\n}\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\nsvg {\n  display: block;\n}\n.hidden {\n  display: none !important;\n  visibility: hidden !important;\n  opacity: 0;\n}\n::selection {\n  background: #40b4de;\n  color: #fff;\n}\n::-moz-selection {\n  background: #40b4de;\n  color: #fff;\n}\n* {\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n}\na {\n  color: #40b4de;\n  text-decoration: none;\n  -webkit-transition: color 0.3s ease-in-out;\n  -moz-transition: color 0.3s ease-in-out;\n  -ms-transition: color 0.3s ease-in-out;\n  -o-transition: color 0.3s ease-in-out;\n  transition: color 0.3s ease-in-out;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\na:hover {\n  color: #1b7a9d;\n  text-decoration: none;\n}\na:active {\n  color: #97d6ed;\n}\na:focus {\n  outline: none;\n}\np {\n  font-size: 14px;\n  line-height: 1.6;\n  margin: 0 0 11px;\n}\ntable {\n  width: 100%;\n}\ntable thead,\ntable tr,\ntable th,\ntable td {\n  vertical-align: middle;\n}\ntable td {\n  padding-right: 20px;\n}\n.input_group {\n  display: block;\n  position: relative;\n  width: 100%;\n  min-height: 70px;\n  margin-bottom: 10px;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .input_group {\n    min-height: 64px;\n    margin-bottom: 0;\n  }\n}\n.input_group label.input_label {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  -ms-align-items: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  -webkit-box-sizing: border-box;\n  -khtml-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  position: absolute;\n  z-index: 10;\n  cursor: text;\n  padding: 0 0 0 15px;\n}\n.input_group label.input_label .label_text {\n  font-size: 18px;\n  font-weight: 100;\n  letter-spacing: .7px;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .input_group label.input_label .label_text {\n    font-size: 16px;\n    font-weight: 300;\n  }\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .input_group label.input_label {\n    height: 64px;\n  }\n}\n.input_group.input_empty.input_unfocused {\n  color: #c1c5cc;\n}\n.input_group.input_focused label.input_label,\n.input_group.input_hasValue label.input_label {\n  height: 46px;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .input_group.input_focused label.input_label,\n  .input_group.input_hasValue label.input_label {\n    height: 40px;\n  }\n}\n.input_group.input_focused label.input_label .label_text,\n.input_group.input_hasValue label.input_label .label_text {\n  color: #b8bdc4;\n  letter-spacing: .7px;\n  font-size: 11px;\n}\n.input_group.input_unfocused.input_hasValue.input_valid label.input_label {\n  color: #b1b0b1;\n}\n.input_group input.input {\n  display: block;\n  position: relative;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n  -khtml-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-transition: all 0.7s ease-in-out;\n  -moz-transition: all 0.7s ease-in-out;\n  -ms-transition: all 0.7s ease-in-out;\n  -o-transition: all 0.7s ease-in-out;\n  transition: all 0.7s ease-in-out;\n  z-index: 1;\n  -webkit-appearance: none;\n  border: none;\n  outline: none;\n  padding: 18px 15px 0 15px;\n  margin: 0 auto 13px auto;\n  color: #363b4a;\n  letter-spacing: .7px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  height: 70px;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .input_group input.input {\n    font-size: 14px;\n    padding: 15px 15px 0 15px;\n    height: 64px;\n  }\n}\n.input_group input.input:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0px 1000px white inset;\n  color: #cacaca;\n}\n.input_group i {\n  top: 0;\n  right: 15px;\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  -ms-align-items: center;\n  align-items: center;\n  width: 20px;\n  height: 70px;\n  z-index: 1000;\n  position: absolute;\n  z-index: 100;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .input_group i {\n    height: 64px;\n  }\n}\n.input_group i svg {\n  opacity: 0;\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -ms-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  width: 20px;\n  height: 20px;\n}\n.input_group i.input_error_icon {\n  z-index: 10;\n}\n.input_group i.input_error_icon path {\n  fill: #f16767;\n}\n.input_group i.input_valid_icon {\n  z-index: 1;\n}\n.input_group i.input_valid_icon path {\n  fill: #50b87f;\n}\n.input_group .validationIcons.invisible i {\n  display: none;\n}\n.input_group.input_error i.input_error_icon svg {\n  opacity: 1;\n}\n.input_group.input_valid i.input_error_icon {\n  z-index: 1;\n}\n.input_group.input_valid i.input_valid_icon {\n  z-index: 10;\n}\n.input_group.input_valid.input_hasValue i.input_valid_icon svg {\n  opacity: 1;\n}\n.error_container {\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  left: 100%;\n  white-space: nowrap;\n  line-height: 70px;\n  width: auto;\n  height: 70px;\n  background: #f16767;\n  -webkit-box-sizing: border-box;\n  -khtml-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 0 20px 0 20px;\n  color: white;\n  font-size: 14px;\n  font-weight: 100;\n  letter-spacing: .6px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -ms-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .error_container {\n    position: relative;\n    top: -13px;\n    left: 0;\n    line-height: 30px;\n    font-size: 12px;\n    padding: 0 15px 0 15px;\n    font-weight: 300;\n  }\n}\n.error_container.visible {\n  -o-transform: translateX(0px);\n  -webkit-transform: translateX(0px);\n  -moz-transform: translateX(0px);\n  -ms-transform: translateX(0px);\n  transform: translateX(0px);\n  opacity: 1;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .error_container.visible {\n    height: 30px;\n  }\n}\n.error_container.invisible {\n  -o-transform: translateX(-30px);\n  -webkit-transform: translateX(-30px);\n  -moz-transform: translateX(-30px);\n  -ms-transform: translateX(-30px);\n  transform: translateX(-30px);\n  opacity: 0;\n  -webkit-animation-delay: 2s;\n  /* Chrome, Safari, Opera */\n  animation-delay: 2s;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .error_container.invisible {\n    height: 0;\n    line-height: 0;\n    -o-transform: translateX(0px);\n    -webkit-transform: translateX(0px);\n    -moz-transform: translateX(0px);\n    -ms-transform: translateX(0px);\n    transform: translateX(0px);\n  }\n}\n.password_validator {\n  top: 0;\n  left: 105%;\n  position: absolute;\n  display: block;\n  opacity: 0;\n  width: 320px;\n  height: auto;\n  -webkit-box-sizing: border-box;\n  -khtml-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -ms-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  opacity: 1;\n  z-index: 100;\n}\n.password_validator:after {\n  display: block;\n  position: absolute;\n  top: 30px;\n  left: -10px;\n  content: '';\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid #e4e7e8;\n}\n.password_validator .validator_container {\n  display: block;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  -khtml-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n  background: #e4e7e8;\n  padding: 10px 0px 10px 20px;\n}\n.password_validator .validator_container h4.validator_title {\n  display: block;\n  position: relative;\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -ms-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  margin: 12px 0 5px 0;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #363b4a;\n  opacity: .25;\n  letter-spacing: 1.5px;\n}\n.password_validator .validator_container h4.validator_title.valid {\n  color: #50b87f;\n  opacity: 1;\n}\n.password_validator .validator_container ul.rules_list {\n  display: block;\n  position: relative;\n  margin: 0;\n  padding: 0;\n}\n.password_validator .validator_container ul.rules_list > li {\n  display: block;\n  position: relative;\n  margin: 12px 0 12px 0;\n  font-size: 12px;\n  letter-spacing: .3px;\n  font-weight: 200;\n  color: #363b4a;\n}\n.password_validator .validator_container ul.rules_list > li .bad_word {\n  font-style: italic;\n  padding: 0 5px 0 0;\n}\n.password_validator .validator_container ul.rules_list > li .bad_word:after {\n  content: ',';\n  display: inline;\n}\n.password_validator .validator_container ul.rules_list > li .bad_word:last-child {\n  padding: 0;\n}\n.password_validator .validator_container ul.rules_list > li .bad_word:last-child:after {\n  display: none;\n}\n.password_validator .validator_container ul.rules_list > li .icon_invalid {\n  display: block;\n  position: absolute;\n  top: 1px;\n  left: 0;\n  -webkit-transform: scale(1);\n  -moz-transform: scale(1);\n  -ms-transform: scale(1);\n  -o-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n  width: 18px;\n  height: 18px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -ms-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.password_validator .validator_container ul.rules_list > li .icon_invalid svg {\n  opacity: 1;\n  width: 18px;\n  height: 18px;\n}\n.password_validator .validator_container ul.rules_list > li .icon_invalid svg path {\n  fill: #f16767;\n}\n.password_validator .validator_container ul.rules_list > li .icon_valid {\n  position: absolute;\n  top: 1px;\n  left: 0;\n  -webkit-transform: scale(0);\n  -moz-transform: scale(0);\n  -ms-transform: scale(0);\n  -o-transform: scale(0);\n  transform: scale(0);\n  opacity: 0;\n  width: 19px;\n  height: 19px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -ms-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.password_validator .validator_container ul.rules_list > li .icon_valid svg {\n  opacity: 1;\n  width: 19px;\n  height: 19px;\n}\n.password_validator .validator_container ul.rules_list > li .error_message {\n  display: block;\n  position: relative;\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -ms-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  padding: 0 0 0 27px;\n  opacity: .9;\n}\n.password_validator .validator_container ul.rules_list > li.valid .icon_invalid {\n  -webkit-transform: scale(0);\n  -moz-transform: scale(0);\n  -ms-transform: scale(0);\n  -o-transform: scale(0);\n  transform: scale(0);\n  opacity: 0;\n}\n.password_validator .validator_container ul.rules_list > li.valid .icon_valid {\n  -webkit-transform: scale(1);\n  -moz-transform: scale(1);\n  -ms-transform: scale(1);\n  -o-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n}\n.password_validator .validator_container ul.rules_list > li.valid .error_message {\n  opacity: .3;\n}\n.password_validator.visible {\n  -o-transform: translateX(0px);\n  -webkit-transform: translateX(0px);\n  -moz-transform: translateX(0px);\n  -ms-transform: translateX(0px);\n  transform: translateX(0px);\n  opacity: 1;\n}\n.password_validator.invisible {\n  -o-transform: translateX(-15px);\n  -webkit-transform: translateX(-15px);\n  -moz-transform: translateX(-15px);\n  -ms-transform: translateX(-15px);\n  transform: translateX(-15px);\n  opacity: 0;\n  -webkit-animation-delay: 2s;\n  /* Chrome, Safari, Opera */\n  animation-delay: 2s;\n}\n.Select {\n  position: relative;\n}\n.Select .Select-control {\n  display: block;\n  position: relative;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  width: 100%;\n  height: 70px;\n  -webkit-box-sizing: border-box;\n  -khtml-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-transition: all 0.7s ease-in-out;\n  -moz-transition: all 0.7s ease-in-out;\n  -ms-transition: all 0.7s ease-in-out;\n  -o-transition: all 0.7s ease-in-out;\n  transition: all 0.7s ease-in-out;\n  background: white;\n  z-index: 1;\n  -webkit-appearance: none;\n  border: none;\n  outline: none;\n  margin: 0 auto 13px auto;\n  color: #363b4a;\n  letter-spacing: .5px;\n  font-weight: 300;\n  font-size: 18px;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .Select .Select-control {\n    height: 64px;\n  }\n}\n.Select.is-searchable.is-open > .Select-control {\n  cursor: text;\n}\n.Select.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: white;\n  border-color: #b3b3b3 #cccccc #d9d9d9;\n}\n.Select.is-open > .Select-control > .Select-arrow {\n  border-color: transparent transparent #999999;\n  border-width: 0 8px 8px;\n}\n.Select.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text;\n}\n.Select .Select-placeholder {\n  display: block;\n  top: 20px;\n  left: 0;\n  font-size: 18px;\n  font-weight: 100;\n  letter-spacing: .7px;\n  position: absolute;\n  cursor: text;\n  padding: 0 0 0 15px;\n  color: #c1c5cc;\n  z-index: 10;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .Select .Select-placeholder {\n    font-size: 16px;\n    font-weight: 300;\n  }\n}\n.Select .Select-actual-placeholder {\n  position: absolute;\n  display: none;\n  color: #b8bdc4;\n  letter-spacing: .3px;\n  font-size: 11px;\n  top: 14px;\n  left: 15px;\n  z-index: 10;\n  font-weight: 300;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .Select .Select-actual-placeholder {\n    font-weight: 300;\n  }\n}\n.Select.is-focused .Select-placeholder {\n  opacity: 0;\n}\n.Select.has-value .Select-actual-placeholder,\n.Select.is-focused.has-value .Select-actual-placeholder {\n  display: block;\n}\n.Select.has-value .Select-placeholder,\n.Select.is-focused.has-value .Select-placeholder {\n  color: #333333;\n  opacity: 1;\n  top: 30px;\n  color: #363b4a;\n  letter-spacing: .5px;\n  font-weight: 300;\n  font-size: 16px;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .Select.has-value .Select-placeholder,\n  .Select.is-focused.has-value .Select-placeholder {\n    font-size: 14px;\n  }\n}\n.Select.is-focused .Select-placeholder {\n  opacity: 0;\n}\n.Select.is-focused .Select-actual-placeholder {\n  display: block;\n}\n.Select.is-open .Select-actual-placeholder {\n  display: block;\n}\n.Select.is-open .Select-placeholder {\n  display: none;\n}\n.Select.is-open.has-value .Select-placeholder,\n.Select.is-open.has-value.is-focused .Select-placeholder {\n  display: block;\n}\n.Select .Select-input > input {\n  display: block;\n  position: relative;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  width: 410px;\n  height: 70px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  -webkit-transition: all 0.7s ease-in-out;\n  -moz-transition: all 0.7s ease-in-out;\n  -ms-transition: all 0.7s ease-in-out;\n  -o-transition: all 0.7s ease-in-out;\n  transition: all 0.7s ease-in-out;\n  -webkit-box-sizing: border-box;\n  -khtml-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 1;\n  -webkit-appearance: none;\n  border: none;\n  outline: none;\n  padding: 16px 15px 0 15px;\n  margin: 0 auto 13px auto;\n  color: #363b4a;\n  letter-spacing: .5px;\n  font-weight: 300;\n  font-size: 16px;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .Select .Select-input > input {\n    height: 64px;\n    font-size: 14px;\n  }\n}\n.is-focused .Select .Select-input > input {\n  cursor: text;\n}\n.Select .Select-control:not(.is-searchable) > .Select-input {\n  outline: none;\n}\n.Select .Select-loading {\n  -moz-animation: spin 400ms infinite linear;\n  -ms-animation: spin 400ms infinite linear;\n  -webkit-animation: spin 400ms infinite linear;\n  -o-animation: spin 400ms infinite linear;\n  animation: spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #cccccc;\n  border-right-color: #333333;\n  display: inline-block;\n  position: relative;\n  margin-top: -8px;\n  position: absolute;\n  right: 30px;\n  top: 50%;\n}\n.Select .has-value > .Select-control > .Select-loading {\n  right: 46px;\n}\n.Select .Select-clear {\n  opacity: 0;\n}\n.Select .Select-arrow {\n  border-color: #999999 transparent transparent;\n  border-style: solid;\n  border-width: 8px 8px 0;\n  content: \" \";\n  display: block;\n  height: 0;\n  margin-top: -ceil(4px);\n  position: absolute;\n  right: 15px;\n  top: 32px;\n  width: 0;\n  opacity: .8;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .Select .Select-arrow {\n    top: 30px;\n  }\n}\n.Select .Select-menu {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: white;\n  margin-top: 0px;\n  margin-left: -2px;\n  border: 2px solid #f0f4f5;\n  max-height: 210px;\n  overflow-y: auto;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 1000;\n  -webkit-overflow-scrolling: touch;\n}\n.Select .Select-menu::-webkit-scrollbar {\n  width: 11px;\n  background-color: transparent;\n  background-clip: content-box;\n}\n.Select .Select-menu::-webkit-scrollbar-button {\n  background-color: transparent;\n}\n.Select .Select-menu::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n.Select .Select-menu::-webkit-scrollbar-thumb {\n  border: solid transparent;\n  border-width: 1px 1px 1px 2px;\n  background-color: #c5c5c5;\n  background-clip: content-box;\n}\n.Select .Select-menu::-webkit-scrollbar-thumb:hover {\n  background-color: #bfbfbf;\n}\n.Select .Select-menu::-webkit-scrollbar-track {\n  border: solid #fff;\n  border-width: 1px 1px 1px 2px;\n  background-color: #fff;\n  background-clip: content-box;\n}\n.Select .Select-menu::-webkit-scrollbar-track-piece {\n  border-left: 1px solid #ccc;\n  background-color: transparent;\n}\n.Select .Select-menu::-webkit-scrollbar:horizontal {\n  height: 12px;\n  background-color: transparent;\n  background-clip: content-box;\n}\n.Select .Select-menu::-webkit-scrollbar-track:horizontal {\n  background-color: #fff;\n  background-clip: content-box;\n}\n.Select .Select-menu::-webkit-scrollbar-track-piece:horizontal {\n  border-top: 1px solid #ccc;\n  border-left: 1px solid transparent;\n}\n.Select .Select-menu::-webkit-scrollbar-thumb:horizontal {\n  border: solid transparent;\n  border-width: 2px 1px 2px 2px;\n  background-color: #c5c5c5;\n  background-clip: content-box;\n}\n.Select .Select-menu::-webkit-scrollbar-thumb:horizontal:hover {\n  background-color: #bfbfbf;\n}\n.Select .Select-menu::-webkit-scrollbar-corner {\n  display: none;\n}\n.Select .Select-menu::-webkit-resizer {\n  display: none;\n}\n.Select .Select-menu::-webkit-scrollbar {\n  width: 16px;\n  background-color: transparent;\n  background-clip: content-box;\n  cursor: pointer;\n}\n.Select .Select-menu::-webkit-scrollbar-button {\n  background-color: transparent;\n}\n.Select .Select-menu::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n.Select .Select-menu::-webkit-scrollbar-thumb {\n  border: solid transparent;\n  border-width: 6px;\n  background-color: #c5c5c5;\n  background-clip: content-box;\n  cursor: pointer;\n}\n.Select .Select-menu::-webkit-scrollbar-thumb:hover {\n  background-color: #bfbfbf;\n}\n.Select .Select-menu::-webkit-scrollbar-track {\n  border: solid #fff;\n  border-width: 1px 1px 1px 2px;\n  background-color: #fff;\n  background-clip: content-box;\n}\n.Select .Select-menu::-webkit-scrollbar-track-piece {\n  border-left: 1px solid #f0f4f5;\n  background-color: transparent;\n}\n.Select .Select-menu::-webkit-scrollbar:horizontal {\n  height: 12px;\n  background-color: transparent;\n  background-clip: content-box;\n}\n.Select .Select-menu::-webkit-scrollbar-track:horizontal {\n  background-color: #fff;\n  background-clip: content-box;\n}\n.Select .Select-menu::-webkit-scrollbar-track-piece:horizontal {\n  border-top: 1px solid transparent;\n  border-left: 1px solid transparent;\n}\n.Select .Select-menu::-webkit-scrollbar-thumb:horizontal {\n  border: solid transparent;\n  border-width: 2px 1px 2px 2px;\n  background-color: #c5c5c5;\n  background-clip: content-box;\n}\n.Select .Select-menu::-webkit-scrollbar-thumb:horizontal:hover {\n  background-color: #bfbfbf;\n}\n.Select .Select-menu::-webkit-scrollbar-corner {\n  display: none;\n}\n.Select .Select-menu::-webkit-resizer {\n  display: none;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .Select .Select-menu {\n    top: 64px;\n  }\n}\n.Select .Select-option {\n  box-sizing: border-box;\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 15px;\n  font-weight: 100;\n  letter-spacing: .4px;\n}\n.Select .Select-option:last-child {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Select .Select-option.is-focused {\n  background-color: #82d2f0;\n  color: #fff;\n}\n.Select .Select-noresults {\n  box-sizing: border-box;\n  color: #999999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@-webkit-keyframes spin {\n  to {\n    -webkit-transform: rotate(1turn);\n  }\n}\n.button {\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -ms-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  display: inline-block;\n  position: relative;\n  border: none;\n  border-radius: 3px;\n  background: #545a6a;\n  color: #ffffff;\n  font: normal normal 200 13px/40px 'Roboto', sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  height: 40px;\n  padding: 0px 15px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.button.button_wide {\n  display: block;\n  position: relative;\n  width: 100%;\n  margin: 20px 0 0 0;\n  height: 50px;\n  font-size: 13px;\n}\n.button:hover,\n.button:focus {\n  color: #ffffff;\n  background: #40b4de;\n}\n.button:active,\n.button.active {\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  background: #6bc5e6;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\nbody {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-font-smoothing: subpixel-antialiased;\n  background: #f0f4f5;\n  overflow: hidden;\n  font: normal normal 100 14px/1.6 'Roboto', sans-serif;\n  -webkit-overflow-scrolling: touch;\n  display: block;\n}\n.application_wrapper {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  overflow-y: scroll;\n}\n.application_wrapper::-webkit-scrollbar {\n  width: 11px;\n  background-color: transparent;\n  background-clip: content-box;\n}\n.application_wrapper::-webkit-scrollbar-button {\n  background-color: transparent;\n}\n.application_wrapper::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n.application_wrapper::-webkit-scrollbar-thumb {\n  border: solid transparent;\n  border-width: 1px 1px 1px 2px;\n  background-color: #c5c5c5;\n  background-clip: content-box;\n}\n.application_wrapper::-webkit-scrollbar-thumb:hover {\n  background-color: #bfbfbf;\n}\n.application_wrapper::-webkit-scrollbar-track {\n  border: solid #fff;\n  border-width: 1px 1px 1px 2px;\n  background-color: #fff;\n  background-clip: content-box;\n}\n.application_wrapper::-webkit-scrollbar-track-piece {\n  border-left: 1px solid #ccc;\n  background-color: transparent;\n}\n.application_wrapper::-webkit-scrollbar:horizontal {\n  height: 12px;\n  background-color: transparent;\n  background-clip: content-box;\n}\n.application_wrapper::-webkit-scrollbar-track:horizontal {\n  background-color: #fff;\n  background-clip: content-box;\n}\n.application_wrapper::-webkit-scrollbar-track-piece:horizontal {\n  border-top: 1px solid #ccc;\n  border-left: 1px solid transparent;\n}\n.application_wrapper::-webkit-scrollbar-thumb:horizontal {\n  border: solid transparent;\n  border-width: 2px 1px 2px 2px;\n  background-color: #c5c5c5;\n  background-clip: content-box;\n}\n.application_wrapper::-webkit-scrollbar-thumb:horizontal:hover {\n  background-color: #bfbfbf;\n}\n.application_wrapper::-webkit-scrollbar-corner {\n  display: none;\n}\n.application_wrapper::-webkit-resizer {\n  display: none;\n}\n.application_wrapper::-webkit-scrollbar {\n  width: 16px;\n  background-color: transparent;\n  background-clip: content-box;\n  cursor: pointer;\n}\n.application_wrapper::-webkit-scrollbar-button {\n  background-color: transparent;\n}\n.application_wrapper::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n.application_wrapper::-webkit-scrollbar-thumb {\n  border: solid transparent;\n  border-width: 6px;\n  background-color: #c5c5c5;\n  background-clip: content-box;\n  cursor: pointer;\n}\n.application_wrapper::-webkit-scrollbar-thumb:hover {\n  background-color: #bfbfbf;\n}\n.application_wrapper::-webkit-scrollbar-track {\n  border: solid #fff;\n  border-width: 1px 1px 1px 2px;\n  background-color: #fff;\n  background-clip: content-box;\n}\n.application_wrapper::-webkit-scrollbar-track-piece {\n  border-left: 1px solid #f0f4f5;\n  background-color: transparent;\n}\n.application_wrapper::-webkit-scrollbar:horizontal {\n  height: 12px;\n  background-color: transparent;\n  background-clip: content-box;\n}\n.application_wrapper::-webkit-scrollbar-track:horizontal {\n  background-color: #fff;\n  background-clip: content-box;\n}\n.application_wrapper::-webkit-scrollbar-track-piece:horizontal {\n  border-top: 1px solid transparent;\n  border-left: 1px solid transparent;\n}\n.application_wrapper::-webkit-scrollbar-thumb:horizontal {\n  border: solid transparent;\n  border-width: 2px 1px 2px 2px;\n  background-color: #c5c5c5;\n  background-clip: content-box;\n}\n.application_wrapper::-webkit-scrollbar-thumb:horizontal:hover {\n  background-color: #bfbfbf;\n}\n.application_wrapper::-webkit-scrollbar-corner {\n  display: none;\n}\n.application_wrapper::-webkit-resizer {\n  display: none;\n}\n.application_wrapper .create_account_screen {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  min-height: 520px;\n  opacity: 0;\n  -moz-animation: fadeIn 0.4s ease-in-out forwards;\n  -ms-animation: fadeIn 0.4s ease-in-out forwards;\n  -webkit-animation: fadeIn 0.4s ease-in-out forwards;\n  -o-animation: fadeIn 0.4s ease-in-out forwards;\n  animation: fadeIn 0.4s ease-in-out forwards;\n}\n.application_wrapper .create_account_screen .create_account_form {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  -ms-justify-content: center;\n  justify-content: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  -ms-align-items: center;\n  align-items: center;\n  position: relative;\n  margin: 80px 0 200px 0;\n  min-height: 400px;\n}\n.application_wrapper .create_account_screen .create_account_form > h1 {\n  display: block;\n  position: relative;\n  font-size: 34px;\n  letter-spacing: .8px;\n  font-weight: 200;\n  line-height: 34px;\n  margin: 0 0 5px 0;\n}\n.application_wrapper .create_account_screen .create_account_form p {\n  display: block;\n  position: relative;\n  font-size: 16px;\n  font-weight: 100;\n  letter-spacing: .7px;\n  color: #363b4a;\n  text-align: center;\n  opacity: .5;\n  margin: 0 0 30px 0;\n}\n.application_wrapper .create_account_screen .create_account_form .checkbox_group {\n  display: block;\n  position: relative;\n  min-height: 40px;\n}\n.application_wrapper .create_account_screen .create_account_form .checkbox_group span {\n  letter-spacing: .5px;\n}\n.application_wrapper .create_account_screen .create_account_form .github_link {\n  display: block;\n  position: relative;\n  margin: 50px 0 50px 0;\n  opacity: 0;\n  -moz-animation: fadeIn 0.4s 0.3s ease-in-out forwards;\n  -ms-animation: fadeIn 0.4s 0.3s ease-in-out forwards;\n  -webkit-animation: fadeIn 0.4s 0.3s ease-in-out forwards;\n  -o-animation: fadeIn 0.4s 0.3s ease-in-out forwards;\n  animation: fadeIn 0.4s 0.3s ease-in-out forwards;\n}\n.application_wrapper .create_account_screen .create_account_form .github_link svg {\n  width: 26px;\n  height: 26px;\n}\n.application_wrapper .create_account_screen .create_account_form .github_link svg path {\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -ms-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  fill: #545a6a;\n}\n.application_wrapper .create_account_screen .create_account_form .github_link:hover svg path {\n  fill: #40b4de;\n}\n.application_wrapper .create_account_screen form {\n  width: 430px;\n}\n@media only screen and (min-width : 0px) and (max-width : 870px) {\n  .application_wrapper .create_account_screen form {\n    width: 300px;\n  }\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n", ""]);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by navy on 15/4/2.
	 */
	var React = __webpack_require__(1);
	var _ = __webpack_require__(3);
	var cx = React.addons.classSet;
	var ValidateMixin = __webpack_require__(11);
	var FormValidator = __webpack_require__(12);

	var FormField = React.createClass({displayName: "FormField",

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
	            label = React.createElement("label", {className: "input_label", htmlFor: this.props.label}, 
	                React.createElement("span", {className: "label_text"}, this.props.label)
	            )
	        }
	        var inputClass = "field-input input field-" + this.state.type
	        return (
	            React.createElement("div", {className: formFieldClasses}, 
	                label, 
	                React.createElement("input", React.__spread({}, 
	                    this.props, 
	                    {placeholder: this.props.placeholder, 
	                    className: inputClass, 
	                    id: this.props.label, 
	                    defaultValue: this.props.defaultValue, 
	                    value: this.state.value, 
	                    onChange: this.handleChange, 
	                    onClick: this.handleFocus, 
	                    onBlur: this.handleBlur, 
	                    autoComplete: "off"})
	                ), 
	                React.createElement(FormValidator, {showValidator: this.state.showValidator, 
	                    validateStatus: this.state.validateStatus, 
	                    initial: this.state.initial, 
	                    name: this.props.label, 
	                    valid: this.state.valid})
	            )
	        )

	    }
	})
	module.exports = FormField;

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by navy on 15/4/2.
	 */
	var _ = __webpack_require__(3);
	var $ = __webpack_require__(13);

	function Validator(displayName, rules, id) {
	    this.displayName = displayName;
	    this.rules = rules;
	    this.name = id;
	    this.result = {};
	}

	Validator.prototype = {

	    messageTemplate: {
	        required: 'The {0} is Required',
	        email: 'The {0} is a valid email address'
	    },
	    validate: function (value) {
	        var self = this;
	        var runner=[];

	        _.each(self.rules, function (condition, rule) {
	            function asyncValidate(condition,rule){
	                var d=$.Deferred();
	                self[rule](value, condition);
	                d.resolve(true);
	                return d.promise();
	            }
	            runner.push(asyncValidate(condition,rule))
	        })
	        $.when(runner).then(function () {
	            return self.result;
	        })
	    },
	    required: function (value, condition) {
	        var key = 'required';
	        this.result[key] = {
	            valid: condition ? !_.isEmpty(value) : true,
	            errorMessage: this.getTemplateMessage(key)
	        }
	    },
	    email: function (value, condition) {
	        var key = 'email';
	        this.result[key] = {
	            valid: condition ? /^\w+@[a-zA-Z_\d]+?\.[a-zA-Z]{2,3}$/.test(value) : true,
	            errorMessage: this.getTemplateMessage(key)
	        }
	    },
	    remote: function (value, condition) {
	        var self = this;
	        var key = 'remote';
	        var data = {};
	        data[self.name] = value;
	        self.result[key] = {
	            valid:false,
	            errorMessage: 'remote checking'
	        };
	        $.post(condition.url, data, function (res) {
	            self.result[key] = {
	                valid: res,
	                errorMessage: self.getTemplateMessage(key, condition.message)
	            }
	        })
	    },
	    getTemplateMessage: function (key, message) {
	        var words = [].concat(this.displayName);
	        var templateStr = message || this.messageTemplate[key];
	        var result = templateStr.replace(/\{(\d+)\}/g, function (match, token) {
	            return words[token];
	        });
	        return result;
	    }


	};

	var ValidatorMixin = {

	    componentWillMount: function () {
	        this.displayName = this.props.label;
	        this.rules = this.props.validateRules;
	        this.id = this.props.id;
	        this.result = {};
	        this.validator = new Validator(this.displayName,
	            this.rules,
	            this.id
	        )
	    },
	    checkRules: function (value) {
	        this.validator.validate(value);
	    },

	}
	module.exports = ValidatorMixin;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by navy on 15/4/2.
	 */

	var React = __webpack_require__(1);
	var _ = __webpack_require__(3);
	var Icon = __webpack_require__(29);

	var cx = React.addons.classSet;

	var FormValidator = React.createClass({displayName: "FormValidator",

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
	                React.createElement("h4", {className: "validator_title valid"}, 
	                    this.props.name, " IS OK"
	                )
	        } else {
	            validatorTitle =
	                React.createElement("h4", {className: "validator_title invalid"}, 
	                    this.props.name, " RULES"
	                )
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
	            React.createElement("div", {className: "validate"}, 
	                React.createElement(ValidStatus, {name: this.props.name, visible: !this.props.initial && !this.props.showValidator && !this.props.valid}), 
	                React.createElement("div", {className: validatorClass}, 
	                    React.createElement("div", {className: "validator_container"}, 
	                        validatorTitle, 
	                        React.createElement("ul", {className: "rules_list"}, 
	                            messages.map(function (item) {
	                                return React.createElement(ValidateItem, {itemClass: item.itemClass, errorClass: item.errorClass, 
	                                    errorMessage: item.errorMessage})
	                            })
	                        )
	                    )
	                )
	            )
	        )
	    }
	})


	var ValidateItem = React.createClass({displayName: "ValidateItem",

	    render: function () {
	        return (
	            React.createElement("li", {className: this.props.itemClass}, 
	                React.createElement("i", {className: "icon_valid"}, 
	                    React.createElement(Icon, {type: "circle_tick_filled"})
	                ), 
	                React.createElement("i", {className: "icon_invalid"}, 
	                    React.createElement(Icon, {type: "circle_error"})
	                ), 
	                React.createElement("span", {className: this.props.errorClass}, this.props.errorMessage)
	            )
	        )
	    }
	})


	var ValidStatus = React.createClass({displayName: "ValidStatus",

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
	            React.createElement("div", null, 
	                React.createElement("div", {className: errorClass}, 
	                    React.createElement("span", null, this.state.message)
	                ), 
	                React.createElement("div", {className: errorIconClass}, 
	                    React.createElement("i", {className: "input_error_icon"}, 
	                        React.createElement(Icon, {type: "circle_error"})
	                    ), 
	                    React.createElement("i", {className: "input_valid_icon"}, 
	                        React.createElement(Icon, {type: "circle_tick"})
	                    )
	                )
	            )
	        )
	    }

	})


	module.exports = FormValidator;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = jQuery;

/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(1);

	var Icon = React.createClass({displayName: "Icon",

	  render: function() {
	    switch(this.props.type) {

	      case 'circle_error': 
	        return (
	          React.createElement("svg", {viewBox: "0 0 20 20"}, 
	          React.createElement("path", {d: "M10,0.982c4.973,0,9.018,4.046,9.018,9.018S14.973,19.018,10,19.018S0.982,14.973,0.982,10" + ' ' +
	            "S5.027,0.982,10,0.982 M10,0C4.477,0,0,4.477,0,10c0,5.523,4.477,10,10,10s10-4.477,10-10C20,4.477,15.523,0,10,0L10,0z M9,5.703" + ' ' +
	            "V5.441h2.5v0.262l-0.66,5.779H9.66L9,5.703z M9.44,12.951h1.621v1.491H9.44V12.951z"})
	          )
	        )

	      case 'circle_tick': 
	        return (
	          React.createElement("svg", {viewBox: "0 0 23 23"}, 
	          React.createElement("path", {d: "M11.5,23C5.2,23,0,17.8,0,11.5S5.2,0,11.5,0S23,5.2,23,11.5S17.8,23,11.5,23z M11.5,1C5.7,1,1,5.7,1,11.5S5.7,22,11.5,22" + ' ' +
	            "S22,17.3,22,11.5S17.3,1,11.5,1z M10.4,15.2l6.7-7c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,0L10,14.2L7,11" + ' ' +
	            "c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7l3.4,3.5c0.1,0.1,0.2,0.1,0.3,0.1S10.3,15.3,10.4,15.2z"})
	          )
	        )

	      case 'circle_tick_filled':
	        return (
	          React.createElement("svg", {viewBox: "0 0 20 20"}, 
	            React.createElement("path", {fill: "#4FB07F", d: "M9.5,0C14.7,0,19,4.3,19,9.5S14.7,19,9.5,19S0,14.7,0,9.5S4.3,0,9.5,0z"}), 
	            React.createElement("path", {fill: "#FFFFFF", d: "M8.7,12.9c-0.1,0-0.2,0-0.3-0.1l-2.4-2.5c-0.1-0.1-0.1-0.4,0-0.5c0.1-0.2,0.4-0.2,0.5,0L8.7,12l4.6-5" + ' ' +
	              "c0.1-0.1,0.4-0.1,0.5,0c0.1,0.2,0.1,0.4,0,0.5L9,12.8C9,12.8,8.9,12.9,8.7,12.9C8.8,12.9,8.8,12.9,8.7,12.9z"})
	          )
	        )

	      case 'guthub': 
	        return (
	          React.createElement("svg", {viewBox: "0 0 34 34"}, 
	          React.createElement("path", {"fill-rule": "evenodd", "clip-rule": "evenodd", fill: "#191717", d: "M32.6,16.3c0,7.2-4.7,13.3-11.1,15.5c-0.8,0.2-1.1-0.3-1.1-0.8" + ' ' +
	            "c0-0.5,0-2.3,0-4.5c0-1.5-0.5-2.5-1.1-3c3.6-0.4,7.4-1.8,7.4-8c0-1.8-0.6-3.2-1.7-4.4c0.2-0.4,0.7-2.1-0.2-4.3c0,0-1.4-0.4-4.5,1.7" + ' ' +
	            "c-1.3-0.4-2.7-0.5-4.1-0.5c-1.4,0-2.8,0.2-4.1,0.5C9.1,6.3,7.7,6.8,7.7,6.8C6.8,9,7.4,10.7,7.6,11.1c-1,1.1-1.7,2.6-1.7,4.4" + ' ' +
	            "c0,6.2,3.8,7.6,7.4,8.1c-0.5,0.4-0.9,1.1-1,2.2c-0.9,0.4-3.3,1.1-4.7-1.4c0,0-0.9-1.6-2.5-1.7c0,0-1.6,0-0.1,1c0,0,1.1,0.5,1.8,2.4" + ' ' +
	            "c0,0,1,3.2,5.5,2.2c0,1.4,0,2.4,0,2.8c0,0.4-0.3,0.9-1.1,0.8C4.7,29.6,0,23.5,0,16.3C0,7.3,7.3,0,16.3,0C25.3,0,32.6,7.3,32.6,16.3z"
	            })
	          )
	        )
	    } 
	  }
	});

	module.exports = Icon;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ }
/******/ ]);