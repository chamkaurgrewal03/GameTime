var React = require('react');
var ReactDom = require('react-dom');
var ReactDOMServer = require('react-dom/server');
import { Link } from 'react-router';

var EndGameModal = React.createClass ({
	getDefaultProps: function () {
		return {
			title: 'Are you sure you want to end this game?',
			message: '(You will not be able to edit any plays beyond this point)'
		};
	},
	componentDidMount: function () {
		var {title, message} = this.props;
		var modelMarkup = (
			<div id="end-game-modal" className="reveal small round-corners" data-reveal="">
				<h4>{title}</h4>
				<div>
				<p>{message}</p>
				<p>
					<form action="#/finalresult/end">
					<button type="button" className="button round-corners" data-close="">Cancel</button>
					<button type="submit" className="button red round-corners align-right" >Confirm</button>
					</form>
				</p>
				</div>
			</div>
		);

		var $modal = $(ReactDOMServer.renderToString(modelMarkup));
		$(ReactDom.findDOMNode(this)).html($modal);

		var modal = new Foundation.Reveal($('#end-game-modal'));
		modal.open();
	},
	render: function () {
		return (
			<div>
			</div>
		);
	}
});

module.exports = EndGameModal;