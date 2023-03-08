import React from "react";

const Result = (props) => {
	return (
		<div>
			<h1>Meals</h1>
			<p>Total Calories: {props.calories}</p>
		</div>
	);
};

export default Result;
