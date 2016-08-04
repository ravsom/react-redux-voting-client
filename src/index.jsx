/**
 * Created by rs on 29/07/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Dev D', 'Manorama'];

ReactDOM.render(
	<Voting pair={pair} vote={(entry)=> {
		return entry
	}}/>,
	document.getElementById('app')
);
