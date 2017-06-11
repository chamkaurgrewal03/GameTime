var React = require('react');

var ScoreTime = React.createClass({
	getInitialState: function() {
		var count = localStorage.getItem( 'count' ) || 0;
		var record = [];
		var test = 'test,test';
		record = localStorage.getItem( 'record' ) || test;
		return {
			record: record,
			count: count,
		}
	},
	componentDidMount: function() {
		var {scoreUpdate} = this.props;
		var {count, record} = this.state;
		count = Number.parseInt(count);
		var recordArray = record.split(",");
		var play = scoreUpdate;
		if(scoreUpdate) {
			recordArray[count] = play;
			count += 1;
			window.location.hash = '#/';
			localStorage.setItem( 'count', count );
			localStorage.setItem( 'record', recordArray );
	    	this.setState( { count: count } );
	    	this.setState( { record: recordArray } );
		}
	},
	render: function() {
		var that = this;
		var {scoreUpdate} = this.props;
		var {count, record} = this.state;
		var recordArray = record.split(",");
		function renderPlayByPlay() {
			var indents = [];
			for (var i = 0; i < count; i++) {
				indents.push(<div key={i} className="row">
					<span className="data-col">17:26</span>
					<span className="data-col play-by-play-col">{recordArray[i]}</span>
					<span className="data-col actions" name={i}><i className="fa fa-pencil" aria-hidden="true"></i>edit</span>
				</div>);
			};
			return (
				<div>
					{indents}					
				</div>
			);
		}
		return (
			<div>
				<div className="points_sec scoretime">
					<div className="row header">
						<span className="data-col">TIME</span>
						<span className="data-col play-by-play-col">PLAY-BY-PLAY</span>
						<span className="data-col actions"></span>
					</div>
					{renderPlayByPlay()}
					
					<div className="row align_center">
						<span className="see_more">see more...</span>	
					</div>
				</div>
			</div>
		);
	}
});
module.exports = ScoreTime;