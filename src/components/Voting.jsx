import React from 'react';

export default React.createClass({
	renderButton: function(entry) {
		console.log("Entry is : " + entry);
		return <button key={entry}>
			<h1>{entry}</h1>
		</button>
	},
	render: function() {
		console.log("This value pair :" + JSON.stringify(this.props.pair));
		return <div className="voting">
			{this.props.pair.map((entry)=> {
				return this.renderButton(entry);
			})}
		</div>;
	}
})

