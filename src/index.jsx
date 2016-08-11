/**
 * Created by rs on 29/07/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';
import App from './components/App';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux'
import io from 'socket.io-client';

import {Route, Router, hashHistory} from 'react-router'


const store = createStore(reducer);
store.dispatch(
	{
		type: "SET_STATE",
		state: {}
	}
);
const routes = <Route component={App}>
	<Route path='/results' component={ResultsContainer}/>
	<Route path='/' component={VotingContainer}/>
</Route>;


ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,

	document.getElementById('app')
);
