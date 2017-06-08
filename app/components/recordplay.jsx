var React = require('react');
import { Link } from 'react-router';

var RecordPlay = (props) => {
	return (
		<div className="overlay">
		<div className="buttonwrap">
			<Link to="/AreaSelect/Score" type="button" className="button alert round-corners ">Score</Link>
			<Link to="/AreaSelect/Defence" type="button" className="button alert round-corners ">Defence</Link>
			<Link to="/AreaSelect/AST" type="button" className="button alert round-corners ">AST/TO</Link>
			<Link to="/AreaSelect/FOUL" type="button" className="button alert round-corners ">FOUL</Link>
		</div>
		</div>
	)
};

module.exports = RecordPlay;