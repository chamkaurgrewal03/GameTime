var React = require('react');
import { Link } from 'react-router';

var OnCourt = React.createClass({
	startGame: function() {
		this.props._setCourtButton('recordPlay');
	},
	render: function () {
		var {buttonType} = this.props;

		var that = this;
		function renderButton() {
			if(buttonType == 'Scoreone' || buttonType == 'Scoretwo' || buttonType == 'Scorethree' || buttonType == 'Scorefour' || buttonType == 'Scorefive') {
				return (
					<div className="overlay">
					<div className="buttonwrap">
						<Link to="/" type="button" className="button alert round-corners ">3PT MAKE</Link>
						<Link to="/" type="button" className="button alert round-corners ">3PT MISS</Link>
					</div>
					</div>
				);
			} else if(buttonType == 'Scoresix' || buttonType == 'Scorenine') {
				return (
					<div className="overlay">
					<div className="buttonwrap">
						<Link to="/" type="button" className="button alert round-corners ">2PT MAKE</Link>
						<Link to="/" type="button" className="button alert round-corners ">2PT MISS</Link>
					</div>
					</div>
				);
			} else  if(buttonType == 'Scoreten') {
				return (
					<div className="overlay">
					<div className="buttonwrap">
						<Link to="/" type="button" className="button alert round-corners ">FT MAKE</Link>
						<Link to="/" type="button" className="button alert round-corners ">FT MISS</Link>
						<Link to="/" type="button" className="button alert round-corners ">2PT MAKE</Link>
						<Link to="/" type="button" className="button alert round-corners ">2PT MISS</Link>
					</div>
					</div>
				);
			} else if(buttonType == 'Scoreseven' || buttonType == 'Scoreeight') {
				return (
					<div className="overlay">
					<div className="buttonwrap">
						<Link to="/" type="button" className="button alert round-corners ">2PT MAKE</Link>
						<Link to="/" type="button" className="button alert round-corners ">2PT MISS</Link>
						<Link to="/" type="button" className="button alert round-corners ">POST UP MAKE</Link>
						<Link to="/" type="button" className="button alert round-corners ">POST UP MISS</Link>
					</div>
					</div>
				);
			} else if(buttonType == 'AST') {
				return (
					<div className="overlay">
					<div className="buttonwrap">
						<Link to="/" type="button" className="button alert round-corners ">ASSIST</Link>
						<Link to="/" type="button" className="button alert round-corners ">TURNOVER</Link>
					</div>
					</div>
				);
			} else if(buttonType == 'Defence') {
				return (
					<div className="overlay">
					<div className="buttonwrap">
						<Link to="/" type="button" className="button alert round-corners ">OFFENSIVE REBOUND</Link>
						<Link to="/" type="button" className="button alert round-corners ">DEFENSIVE REBOUND</Link>
						<Link to="/" type="button" className="button alert round-corners ">STEAL</Link>
						<Link to="/" type="button" className="button alert round-corners ">BLOCK</Link>
					</div>
					</div>
				);
			} else if(buttonType == 'Foul') {
				return (
					<div className="overlay">
					<div className="buttonwrap">
						<Link to="/" type="button" className="button alert round-corners ">COMMIT FOUL</Link>
						<Link to="/" type="button" className="button alert round-corners ">DRAW FOUL</Link>
					</div>
					</div>
				);
			} else {
				return (
					<form className="overlay" onSubmit={that.startGame}>
						<button type="submit" className="button round-corners valign" >On Court</button>
					</form>
				);
			}
		}
		return (
			<div>
				{renderButton()}
			</div>
		);
	}
});

module.exports = OnCourt;