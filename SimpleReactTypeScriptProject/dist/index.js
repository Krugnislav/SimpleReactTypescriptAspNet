"use strict";
var React = require("react");
var react_dom_1 = require('react-dom');
var App_1 = require('./containers/App');
var Admin_1 = require('./components/Admin');
var Genre_1 = require('./components/Genre');
var Home_1 = require('./components/Home');
var react_router_1 = require('react-router');
react_dom_1.render(React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, React.createElement(react_router_1.Route, {path: '/', component: App_1.default}, React.createElement(react_router_1.IndexRoute, {component: Home_1.default}), React.createElement(react_router_1.Route, {path: 'admin', component: Admin_1.default}), React.createElement(react_router_1.Route, {path: 'genre', component: Genre_1.default}))), document.getElementById('root'));
//# sourceMappingURL=index.js.map