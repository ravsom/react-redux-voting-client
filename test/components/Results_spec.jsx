import React from 'react'
import ReactDOM from 'react-dom'

import {
	scryRenderedDOMComponentsWithClass,
	renderIntoDocument,
	Simulate
} from 'react-addons-test-utils'

import {List, Map} from 'immutable'

import Results from '../../src/components/Results'
import {expect} from 'chai'
import {describe} from "mocha/lib/mocha";

describe('Results', ()=> {
	it('renders entries with vote counts or zero', ()=> {
		const pair = List.of('India', 'China');
		const tally = Map.of('India', 5);
		const component = renderIntoDocument(<Results pair={pair} tally={tally}/>);
		const entries = scryRenderedDOMComponentsWithClass(component, 'entry');
		const [i ,c] = entries.map(entry=>entry.textContent);
		console.log('entries: ' + [i, c]);
		expect(i).to.contain(5);
		expect(c).to.contain(0);
	});

	it('invokes the next callback when the nect button is called', ()=> {
		let nextInvoked = false;
		const next = ()=>nextInvoked = true;

		const pair = List.of('Pitchford', 'Kenjaev');

		const component = renderIntoDocument(<Results pair={pair} tally={Map()} next={next}/>);

		Simulate.click(ReactDOM.findDOMNode(component.refs.next));

		expect(nextInvoked).to.equal(true);
	});

	it('renders a winner when there is one ', ()=> {
		var component = renderIntoDocument(<Results pair={List.of('Pitchford', 'Kenjaev')} tally={Map()}
																								winner="Pitchford"/>);
		var winnerNode = ReactDOM.findDOMNode(component.refs.winner);
		expect(winnerNode).to.be.ok;

		expect(winnerNode.textContent).to.contains('Pitchford');
	});
});