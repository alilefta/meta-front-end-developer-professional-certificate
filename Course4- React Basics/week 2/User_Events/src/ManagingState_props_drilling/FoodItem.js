import React from "react";

const FoodItem = (props) => {
	return (
		<div>
			<h4>
				{props.meal.foodItem}, {props.meal.calroies}
			</h4>
			<button onClick={(e) => props.handleEat(e, props.meal)}>
				{props.meal.eaten ? "Eaten !" : "Eat it"}
			</button>
		</div>
	);
};

export default FoodItem;
