import React from "react";
const MealsContext = React.createContext();

const MealsPorvider = ({ children }) => {
	const [meals, setMealsList] = React.useState([
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
	return (
		<MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
	);
};

export const useMealsListContext = () => React.useContext(MealsContext);
export default MealsPorvider;
