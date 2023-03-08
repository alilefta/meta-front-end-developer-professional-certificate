import "./App.css";
import wallpaper from "./assets/images/wallpaper.jpg";
import ReactPlayer from "react-player/youtube";
function App() {
	const src =
		"https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
	const bird1 = new Audio(
		"https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
	);

	const bird2 = new Audio(
		"https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
	);

	function toggleOne() {
		if (bird1.paused) {
			bird2.pause();
			bird1.play();
		} else {
			bird1.pause();
		}
	}
	function toggleTwo() {
		if (bird2.paused) {
			bird1.pause();
			bird2.play();
		} else {
			bird2.pause();
		}
	}

	return (
		<div className="App">
			<div className="images">
				<img src={wallpaper} alt="wallpaper" />
				<img src={src} alt="wallpaper" />
			</div>
			<div>
				<MyVideo
					url={"https://www.youtube.com/watch?v=Gj5Or-WCoMU&ab_channel=BLUME"}
				/>
			</div>
			<div>
				<button onClick={toggleOne}>Caspian Tern 1</button>
				<button onClick={toggleTwo}>Caspian Tern 2</button>
			</div>
		</div>
	);
}

const MyVideo = ({ url }) => {
	return <ReactPlayer url={url} controls={true} />;
};

export default App;
