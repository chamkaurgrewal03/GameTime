var React = require('react');
var RecordPlay = require('RecordPlay');
var OnCourt = require('OnCourt');
var EndGame =require('EndGame');
var imageMap = require("image-map");

var Court = React.createClass({
	getInitialState: function() {
		return {
			courtButton: 'onCourt'
		}
	},
	componentDidMount: function() {
		$('img[usemap]').imageMap();
	},
	render: function () {
		var {courtButton} = this.state;
		function renderCourtButton () {
			if(courtButton == 'onCourt') {
				return <OnCourt/>;
			} else if(courtButton == 'recordPlay') {
				return <RecordPlay/>;
			}
		}
		function renderEndGame () {
			if(courtButton == 'recordPlay') {
				return <EndGame/>;
			}
		}
		return (
			<div>
				<div className="court-wrap valign-parent">
					<img src="assets/court.png" alt="" useMap="#image-map" />

					<map name="image-map">
					    <area target="" alt="one" title="one" href="" coords="6,8,179,318" shape="rect" />
					    <area target="" alt="two" title="two" href="" coords="9,319,179,319,192,396,215,455,243,502,268,533,304,566,340,594,382,617,409,627,409,788,9,787" shape="poly" />
					    <area target="" alt="three" title="three" href="" coords="411,789,411,629,462,644,514,650,562,649,607,642,638,635,667,622,673,788" shape="poly" />
					    <area target="" alt="four" title="four" href="" coords="675,787,1052,788,1051,315,882,315,868,398,839,467,799,526,758,568,720,595,670,622" shape="poly" />
					    <area target="" alt="five" title="five" href="" coords="882,8,1053,314" shape="rect" />
					    <area target="" alt="six" title="six" href="" coords="187,7,412,389" shape="rect" />
					    <area target="" alt="seven" title="seven" href="" coords="419,8,534,390" shape="rect" />
					    <area target="" alt="eight" title="eight" href="" coords="536,9,648,389" shape="rect" />
					    <area target="" alt="nine" title="nine" href="" coords="656,8,873,388" shape="rect" />
					    <area target="" alt="ten" title="ten" href="" coords="199,390,859,389,843,441,817,484,789,521,756,556,706,594,649,621,592,637,529,641,469,636,412,620,341,587,281,538,248,495,217,444" shape="poly" />
					</map>

					{renderCourtButton()}
				</div>
				{renderEndGame()}
			</div>
		);
	}
})

module.exports = Court;