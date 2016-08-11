import {Map} from 'immutable'

export const setState = (state, newState)=> {
	return state.merge(newState);
};

export default function(state = Map(), action) {
	switch (action.type) {
		case 'SET_STATE':
			return setState(state, action.state);
	}

	return state;
};

