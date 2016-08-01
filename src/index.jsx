/**
 * Created by rs on 29/07/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Dev D', 'Zindagi Na Milegi Dobara'];

ReactDOM.render(
	<Voting pair={pair}/>,
	document.getElementById('app')
);
