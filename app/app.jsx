var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var FinalResult = require('FinalResult');
var Court = require('Court');
var AreaSelect = require('AreaSelect');
var AST = require('AST');
var Defence = require('Defence');
var Foul = require('Foul');
var Score = require('Score');

//Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// App Css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
		<Route path="AreaSelect/:button" component={AreaSelect}/>
		<Route path="finalresult" component={FinalResult}/>
		<Route path="Score/:id" component={Score}/>
		<Route path="AST/:id" component={AST}/>
		<Route path="Defence/:id" component={Defence}/>
		<Route path="Foul/:id" component={Foul}/>
	</Router>,
	document.getElementById('app')
);