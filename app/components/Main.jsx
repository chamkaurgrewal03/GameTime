var React = require('react');
var Court = require('Court');
var ScoreMain = require('ScoreMain');
var ScoreTime =require('ScoreTime');

var Main = React.createClass({
	render: function() {
		var {scoreUpdate} = this.props.params;
		return (
			<div>
				<div className="container">
					<h2 className="page-title">Steph Curry</h2>
					<Court />
					<ScoreMain scoreUpdate={scoreUpdate} />
					<ScoreTime scoreUpdate={scoreUpdate} />
					{/*{props.children}*/}
				</div>
			</div>
		);
	}
});

module.exports = Main;