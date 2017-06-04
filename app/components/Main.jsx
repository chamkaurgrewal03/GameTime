var React = require('react');
var Court = require('Court');
var Score = require('Score');
var ScoreTime =require('ScoreTime');
var Main = (props) => {
	return (
		<div>
			<div className="container">
				<h2 className="page-title">Steph Curry</h2>
				<Court />
				<Score />
				<ScoreTime />
				{props.children}
			</div>
		</div>
	)
};

module.exports = Main;