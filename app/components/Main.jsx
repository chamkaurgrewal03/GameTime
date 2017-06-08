var React = require('react');
var Court = require('Court');
var ScoreMain = require('ScoreMain');
var ScoreTime =require('ScoreTime');

var Main = (props) => {
	return (
		<div>
			<div className="container">
				<h2 className="page-title">Steph Curry</h2>
				<Court />
				<ScoreMain />
				<ScoreTime />
				{props.children}
			</div>
		</div>
	)
};

module.exports = Main;