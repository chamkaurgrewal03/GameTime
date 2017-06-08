var React = require('react');
var EndGameModal = require('EndGameModal');

var EndButtons = React.createClass({
	getInitialState: function() {
		return {
			endGame: false
		}
	},
	offCourt: function() {
		this.props._setCourtButton('offCourt');
	},
	endGame: function() {
		this.setState({
			endGame: true
		});
	},
	render: function () {
		var {buttonState, buttonProp, scorebtn} = this.props;
		var {endGame} = this.state;
		var that = this;
		function renderButtons() {
			if(scorebtn == 'Score' || buttonProp == 'noButton' || buttonProp == 'AST' || buttonProp == 'Defence' || buttonProp == 'Foul' || buttonProp == 'Score') {
				return (
					<div >
						<button type="button" className="button round-corners secondary" disabled>OFF COURT</button>
						<button type="button" className="button red round-corners secondary" disabled data-open="end-game-modal">END GAME</button>
					</div>
				);
			} else if(buttonState=='recordPlay') {
				return (
					<div >
						<button type="button" className="button round-corners" onClick={that.offCourt}>OFF COURT</button>
						<button type="button" className="button red round-corners" onClick={that.endGame} data-open="end-game-modal">END GAME</button>
					</div>
				);
			} else if(buttonState=='offCourt') {
				return (
					<div >
						<button type="button" className="button red round-corners" onClick={that.endGame} data-open="end-game-modal">END GAME</button>
					</div>
				);
			}
		}
		function renderEndGameModal() {
			if(endGame==true) {
				return <EndGameModal/>;
			}
		}
		return (
			<div className="button_end_game">
				{renderButtons()}
				{renderEndGameModal()}
			</div>
		);
	}
});

module.exports = EndButtons;