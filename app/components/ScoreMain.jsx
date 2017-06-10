var React = require('react');

var ScoreMain = React.createClass({
	getInitialState: function() {
		var assist = localStorage.getItem( 'assist' ) || 0;
		var turnover = localStorage.getItem( 'turnover' ) || 0;
		var offrebound = localStorage.getItem( 'offrebound' ) || 0;
		var defrebound = localStorage.getItem( 'defrebound' ) || 0;
		var steal = localStorage.getItem( 'steal' ) || 0;
		var block = localStorage.getItem( 'block' ) || 0;
		var ptmk3 = localStorage.getItem( 'ptmk3' ) || 0;
		var ptms3 = localStorage.getItem( 'ptms3' ) || 0;
		return {
			assist: assist,
			turnover: turnover,
			offrebound: offrebound,
			defrebound: defrebound,
			steal: steal,
			block: block,
			ptmk3: ptmk3,
			ptms3: ptms3,
		}
	},
	componentDidMount: function() {
		var {scoreUpdate} = this.props;
		var {assist, turnover, offrebound, defrebound, steal, block, ptmk3, ptms3} = this.state;
		assist = Number.parseInt(assist);
		turnover = Number.parseInt(turnover);
		offrebound = Number.parseInt(offrebound);
		defrebound = Number.parseInt(defrebound);
		steal = Number.parseInt(steal);
		block = Number.parseInt(block);
		ptmk3 = Number.parseInt(ptmk3);
		ptms3 = Number.parseInt(ptms3);
		if(scoreUpdate== 'ASSIST') {
			assist += 1;
			window.location.hash = '#/';
			localStorage.setItem( 'assist', assist );
	    	this.setState( { assist: assist } );
		} else if(scoreUpdate== 'turnover') {
			turnover += 1;
			window.location.hash = '#/';
			localStorage.setItem( 'turnover', turnover );
	    	this.setState( { turnover: turnover } );
		} else if(scoreUpdate== 'offrebound') {
			offrebound += 1;
			window.location.hash = '#/';
			localStorage.setItem( 'offrebound', offrebound );
	    	this.setState( { offrebound: offrebound } );
		} else if(scoreUpdate== 'defrebound') {
			defrebound += 1;
			window.location.hash = '#/';
			localStorage.setItem( 'defrebound', defrebound );
	    	this.setState( { defrebound: defrebound } );
		} else if(scoreUpdate== 'steal') {
			steal += 1;
			window.location.hash = '#/';
			localStorage.setItem( 'steal', steal );
	    	this.setState( { steal: steal } );
		} else if(scoreUpdate== 'block') {
			block += 1;
			window.location.hash = '#/';
			localStorage.setItem( 'block', block );
	    	this.setState( { block: block } );
		} else if(scoreUpdate== 'ptmk3') {
			ptmk3 += 1;
			window.location.hash = '#/';
			localStorage.setItem( 'ptmk3', ptmk3 );
	    	this.setState( { ptmk3: ptmk3 } );
		} else if(scoreUpdate== 'ptms3') {
			ptms3 += 1;
			window.location.hash = '#/';
			localStorage.setItem( 'ptms3', ptms3 );
	    	this.setState( { ptms3: ptms3 } );
		}
	},
	render: function() {
		var {scoreUpdate} = this.props;
		var {
			assist,
			turnover,
			offrebound,
			defrebound,
			steal,
			block,
			ptmk3,
			ptms3
		} = this.state;
		return (
			<div>
				<div className="points_sec">
					<div className="row header">
						<span className="data-col">PTS</span>
						<span className="data-col">FGM-FGA</span>
						<span className="data-col">FG%</span>
						<span className="data-col">3PM-3PA</span>
						<span className="data-col">3P%</span>
						<span className="data-col">FTM-FTA</span>
						<span className="data-col">FT%</span>
						<span className="data-col">OREB</span>
						<span className="data-col">DREB</span>
						<span className="data-col">TREB</span>
						<span className="data-col">AST</span>
						<span className="data-col">STL</span>
						<span className="data-col">BLK</span>
						<span className="data-col">TOV</span>
						<span className="data-col">PF</span>
					</div>
					<div className="row">
						<span className="data-col">0</span>
						<span className="data-col">0-0</span>
						<span className="data-col">0</span>
						<span className="data-col">{ptmk3}-{ptms3}</span>
						<span className="data-col">0</span>
						<span className="data-col">0-0</span>
						<span className="data-col">0</span>
						<span className="data-col">{offrebound}</span>
						<span className="data-col">{defrebound}</span>
						<span className="data-col">0</span>
						<span className="data-col">{assist}</span>
						<span className="data-col">{steal}</span>
						<span className="data-col">{block}</span>
						<span className="data-col">{turnover}</span>
						<span className="data-col">0</span>
					</div>
				</div>
			</div>
		)
	}
});
module.exports = ScoreMain;