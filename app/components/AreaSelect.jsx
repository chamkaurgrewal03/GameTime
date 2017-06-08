var React = require('react');
var Court = require('Court');
var ScoreMain = require('ScoreMain');
var ScoreTime =require('ScoreTime');

var AreaSelect = React.createClass({
	render: function() {
		var {button} = this.props.params;
		return (
			<div className="container">
				<h2 className="page-title">Steph Curry</h2>
				<div className="title-wrap">
					<h4>Location for {button}</h4>
					<span className="cancel-action">cancel</span>
				</div>
				<Court pagecall={button} courtButtonProp='noButton' />
				<ScoreMain />
				<ScoreTime />
			</div>
		);
	}
});

module.exports = AreaSelect;