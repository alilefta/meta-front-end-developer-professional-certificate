import React from "react";
import Nav from "./Nav";
const Header = (props) => {
	return (
		<>
			<h1>Hello, {props.firstName}</h1>
			<Nav />
		</>
	);
};

export default Header;
