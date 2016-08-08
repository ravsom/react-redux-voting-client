import React from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Dev D', 'Manorama');
const tally = Map.of('Dev D', 5, 'Manorama', 8);
const winner = 'Manorama';
export default React.createClass({
	render: function() {
		return React.cloneElement(this.props.children, {
			pair: pair,
			tally: tally
		});
	}
});