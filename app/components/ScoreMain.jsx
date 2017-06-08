var React = require('react');

var ScoreMain = (props) => {
	return (
		<div>
			<div className="points_sec">
				<div className="row header">
					<span className="data-col">PTS</span>
					<span className="data-col">FGM-FGA</span>
					<span className="data-col">3PM-3PA</span>
					<span className="data-col">REB</span>
					<span className="data-col">AST</span>
					<span className="data-col">STL</span>
					<span className="data-col">BLK</span>
				</div>
				<div className="row">
					<span className="data-col">0</span>
					<span className="data-col">0-0</span>
					<span className="data-col">0-0</span>
					<span className="data-col">0</span>
					<span className="data-col">0</span>
					<span className="data-col">0</span>
					<span className="data-col">0</span>
				</div>
			</div>
		</div>
	)
};
module.exports = ScoreMain;