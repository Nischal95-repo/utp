import React from 'react';

function TitleComponent(props) {
	return (
		<div className="row title">
			<h1> {props.title}</h1>
		</div>
	);
}

export default TitleComponent;
