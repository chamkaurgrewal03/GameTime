var React = require('react');

var OnCourt = React.createClass({
	startGame: function() {
		this.setState({
			courtButton: 'recordPlay'
		});
	},
	render: function () {
		var courtButton = this.state;
		return (
			<form onSubmit={this.startGame}>
				<button type="submit" className="button round-corners valign" >On Court</button>
			</form>
		);
	}
});

module.exports = OnCourt;