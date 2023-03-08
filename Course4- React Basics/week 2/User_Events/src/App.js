import MealsProvider from "./State_Management/providers/MealsProvider";
import Counter from "./State_Management/components/Counter";
import MealsList from "./State_Management/components/MealsList";
import "./App.css";
function App() {
	const handler = () => console.log("Clicked");
	return (
		<div className="App">
			<button onClick={handler}>Click</button>
		</div>
	);
}

export default App;
