var React = require('react');

var ScoreTime = (props) => {
	return (
		<div>
			<div className="points_sec scoretime">
				<div className="row header">
					<span className="data-col">TIME</span>
					<span className="data-col play-by-play-col">PLAY-BY-PLAY</span>
					<span className="data-col actions"></span>
				</div>
				<div className="row">
					<span className="data-col">17:26</span>
					<span className="data-col play-by-play-col">3 Point Make</span>
					<span className="data-col actions"><i className="fa fa-pencil" aria-hidden="true"></i>edit</span>
					
				</div>
				<div className="row align_center">
					<span className="see_more">see more...</span>	
				</div>
			</div>
		</div>
	)
};
module.exports = ScoreTime;