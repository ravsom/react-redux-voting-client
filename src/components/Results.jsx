import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner'

import {connect} from 'react-redux';

export const Results = React.createClass({
	mixins: [PureRenderMixin],

	getPair() {
		return this.props.pair || [];
	},

	getVotes(entry){
		if (this.props.tally && this.props.tally.has(entry)) {
			return this.props.tally.get(entry);
		}
		return 0;
	},
	render: function() {
		return this.props.winner ? <Winner ref="winner" {...this.props}/> :
			<div className="results">
				<div className="tally">
					{this.getPair().map(entry=>
						<div key={entry} className="entry">
							<h1>{entry}</h1>
							<div className="voteCount">
								{this.getVotes(entry)}
							</div>
						</div>
					)}
				</div>
				<div className="management">
					<button ref="next" onClick={this.props.next} className="next">Next</button>
				</div>
			</div>
	},
});

const mapStateToProps = (state)=> {
	return {
		pair: state.getIn(['vote', 'pair']),
		tally: state.getIn(['vote', 'tally']),
		winner: state.get('winner')
	}
};

export const ResultsContainer = connect(mapStateToProps)(Results);