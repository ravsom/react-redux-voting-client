import React from 'react';
import Winner from './Winner'
import Vote from './Vote'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';

export const Voting = React.createClass({

	mixins: [PureRenderMixin],
	render() {
		return <div>
			{this.props.winner ?
				<Winner ref="winner" winner={this.props.winner}/> :
				<Vote {...this.props}/>
			}
		</div>;
	},
});

const mapStateToProps = (state)=> {
	return {
		pair: state.getIn(['vote', 'pair']),
		winner: state.get('winner')
	}
};

export const VotingContainer = connect(mapStateToProps)(Voting);
