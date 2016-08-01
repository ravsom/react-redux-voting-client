import React from 'react';

export default React.createClass({
	getPair: ()=> {
		return this.props.pair || [];
	},
	renderButton: (entry)=> {
		return <button key={entry}>
			<h1>{entry}</h1>
		</button>
	},
	render: ()=> {
		return <div className="voting">
			{this.getPair().map((entry)=> {
				this.renderButton(entry);
			})}
		</div>;
	}
})

