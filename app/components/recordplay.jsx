var React = require('react');

var RecordPlay = (props) => {
	return (

		<div className="buttonwrap">
			<button type="button" className="button round-corners ">Score</button>
			<button type="button" className="button round-corners ">Defence</button>
			<button type="button" className="button round-corners ">AST/TO</button>
			<button type="button" className="button round-corners ">FOUL</button>
		</div>
	)
};

module.exports = RecordPlay;