import React from 'react'
import ReactDOM from 'react-dom'
import Voting from '../../src/components/Voting'
import {describe} from "mocha/lib/mocha";
import {renderIntoDocument, scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils';
import {expect} from 'chai'

describe('Voting', ()=> {
	it('renders pair of buttons', ()=> {
		const component = renderIntoDocument(
			<Voting pair={['NH10', 'Band Baaja Baraat']}/>
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons.length).to.equal(2);
		expect(buttons[0].textContent).to.equal('NH10');
		expect(buttons[1].textContent).to.equal('Band Baaja Baraat');

	})
});