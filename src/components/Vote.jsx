import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({

	mixins: [PureRenderMixin],
	hasVotedFor: function(entry) {
		return this.props.hasVoted === entry;
	},
	isDisabled: function() {
		return !!this.props.hasVoted;
	},
	renderButton: function(entry) {
		return <button key={entry} onClick={()=>this.props.vote(entry)} disabled={this.isDisabled()}>
			<h1>{entry}</h1>{this.hasVotedFor(entry) ? <div className="label">Voted</div> : null}
		</button>
	},
	render: function() {
		return <div className="voting">
			{this.props.pair.map((entry)=> {
				return this.renderButton(entry);
			})}
		</div>;
	}
})

