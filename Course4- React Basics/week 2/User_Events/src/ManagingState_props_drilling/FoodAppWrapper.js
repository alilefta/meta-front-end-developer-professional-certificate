import React, { useEffect, useState } from "react";
import Header from "./Header";
import Result from "./Result";
const FoodAppWrapper = () => {
	const [data, setData] = useState([
		{
			id: 0,
			foodItem: "Baked Beans",
			calories: 200,
			eaten: false,
		},
		{
			id: 1,
			foodItem: "Grilled Veggies",
			calories: 80,

			eaten: false,
		},
		{
			id: 2,
			foodItem: "Soup",
			calories: 100,
			eaten: false,
		},
	]);
	const [totalCalories, setTotalCalories] = useState(0);

	const handleEat = (e, meal) => {
		setData((prevData) =>
			prevData.map((food) =>
				food.id === meal.id
					? {
							id: food.id,
							foodItem: food.foodItem,
							calories: food.calories,
							eaten: !food.eaten,
					  }
					: food
			)
		);
	};

	useEffect(() => {
		let cls = 0;
		for (let item of data) {
			if (item.eaten) {
				cls += item.calories;
			}
		}
		setTotalCalories(cls);
	}, [data]);
	return (
		<div>
			<Header data={data} handleEat={handleEat} />
			<Result calories={totalCalories} />
		</div>
	);
};

export default FoodAppWrapper;
