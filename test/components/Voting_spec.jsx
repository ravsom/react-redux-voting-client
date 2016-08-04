import React from 'react'
import ReactDOM from 'react-dom'
import Voting from '../../src/components/Voting'
import {describe} from "mocha/lib/mocha";
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	Simulate
} from 'react-addons-test-utils';
import {expect} from 'chai'
import {it} from "mocha/lib/mocha";

describe('Voting', ()=> {
	it('renders pair of buttons', ()=> {

		const vote = entry => entry;
		const component = renderIntoDocument(
			<Voting pair={['NH10', 'Band Baaja Baraat']} vote={vote}/>
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons.length).to.equal(2);
		expect(buttons[0].textContent).to.equal('NH10');
		expect(buttons[1].textContent).to.equal('Band Baaja Baraat');
	});

	it('invokes callback when a button is clicked', ()=> {

		let votedWith;

		const vote = entry=> votedWith = entry;
		const component = renderIntoDocument(
			<Voting pair={['NH10', 'Band Baaja Baraat']} vote={vote}
			/>
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		Simulate.click(buttons[0]);
		expect(votedWith).to.equal('NH10');
	});

	it('disables when the user has voted', ()=> {

		const component = renderIntoDocument(
			<Voting pair={['NH10', 'Band Baaja Baraat']} hasVoted="NH10"
			/>);

		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons.length).to.equal(2);

		expect(buttons[0].hasAttribute('disabled')).to.equal(true);
		expect(buttons[1].hasAttribute('disabled')).to.equal(true);

	});

	it('adds label to the voted entry', ()=> {
		const component = renderIntoDocument(
			<Voting pair={['NH10', 'Band Baaja Baraat']} hasVoted="NH10"
			/>);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons[0].textContent).to.contain('Voted');
	});

	it('renders winner when the winner is selected', ()=> {
		const component = renderIntoDocument(
			<Voting pair={['NH10', 'Band Baaja Baraat']} winner="Band Baaja Baraat"
			/>);

		var winnerNode = ReactDOM.findDOMNode(component.refs.winner);
		expect(winnerNode).to.be.ok;
		expect(winnerNode.textContent).to.contain('Band Baaja Baraat');

	})
});