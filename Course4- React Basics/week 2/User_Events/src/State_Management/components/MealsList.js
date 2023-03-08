import React from "react";
import { useMealsListContext } from "./../providers/MealsProvider";
const MealsList = () => {
	const { meals } = useMealsListContext();
	return (
		<div>
			<h1>Meals list using Context API</h1>
			{meals.map((meal, i) => (
				<h2 key={i}>{meal}</h2>
			))}
		</div>
	);
};

export default MealsList;
