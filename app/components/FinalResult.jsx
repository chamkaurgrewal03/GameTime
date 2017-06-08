var React = require('react');
var ScoreMain = require('ScoreMain');
var ScoreTime =require('ScoreTime');
import { Link } from 'react-router';

var FinalResult = React.createClass({
	render: function() {
		return (
		<div>
			<div className="container">
				<h2 className="page-title">Steph Curry</h2>
				<div className="heading-wrap">
					<h1>Final Result (06/01/2017)</h1>
					<div className="col-50">
						<p>Golden State Warriors</p>
						<p className="bg-white round-corners">65</p>
					</div>
					<div className="col-50">
						<p>Cleveland Cavaliars</p>
						<p className="bg-white round-corners">70</p>
					</div>
				</div>
				<ScoreMain />
				<ScoreTime />
				<Link to='/' className="button round-corners space-top-10">New Game</Link>
			</div>
		</div>
		);
	}
});

module.exports = FinalResult;