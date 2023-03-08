import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	let time = new Date();
	let day = time.toLocaleString("en-us", { weekday: "long" });
	let morning = time.getHours() >= 6 && time.getHours() <= 12;
	let dayMessage;
	if (day.toLowerCase() === "monday") {
		dayMessage = `Happy ${day}`;
	} else if (day.toLowerCase() === "tuesday") {
		dayMessage = `${day}, four days to go`;
	} else if (day.toLowerCase() === "wednesday") {
		dayMessage = `${day}, three days to go`;
	} else {
		dayMessage = "Stay calm, and have fun";
	}

	return (
		<div className="App">
			<h1>{dayMessage}</h1>
			{morning ? "morning" : "AfterNoon"}
		</div>
	);
}

export default App;
