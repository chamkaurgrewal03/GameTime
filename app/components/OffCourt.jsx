var React = require('react');

var OffCourt = React.createClass({
	startGame: function() {
		this.props._setCourtButton('recordPlay');
	},
	render: function () {
		return (
			<form onSubmit={this.startGame}>
				<button type="submit" className="button round-corners valign" >On Court</button>
			</form>
		);
	}
});

module.exports = OffCourt;