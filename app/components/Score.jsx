var React = require('react');
var Court = require('Court');
var ScoreMain = require('ScoreMain');
var ScoreTime =require('ScoreTime');

var Score = React.createClass({
	render: function() {
		var {id} = this.props.params;
		return (
			<div className="container">
				<h2 className="page-title">Steph Curry</h2>
				<div className="title-wrap">
					<h4>Score</h4>
					<span className="cancel-action">cancel</span>
				</div>
				<Court courtButtonProp={'Score'+id} scorebtn='Score' />
				<ScoreMain />
				<ScoreTime />
			</div>
		);
	}
});

module.exports = Score;