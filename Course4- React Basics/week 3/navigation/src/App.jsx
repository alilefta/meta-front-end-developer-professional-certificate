import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import HomePage from "./components/HomePage";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
	return (
		<div className="App">
			<nav>
				<Link to="/" className="nav-item">
					Home
				</Link>

				<Link to="/about-me" className="nav-item">
					About Me
				</Link>
				<Link to="/contact-us" className="nav-item">
					Contact Us
				</Link>
			</nav>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about-me" element={<AboutMe />} />
				<Route path="/contact-us" element={<ContactUs />} />
			</Routes>
		</div>
	);
}

export default App;
