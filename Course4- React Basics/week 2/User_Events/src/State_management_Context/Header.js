import React from "react";
import FoodItem from "./FoodItem";
const Header = (props) => {
	return (
		<div>
			{props.data &&
				props.data.map((e) => (
					<FoodItem key={e.id} meal={e} handleEat={props.handleEat} />
				))}
		</div>
	);
};

export default Header;
