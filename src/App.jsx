import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import Menu from "./components/Menu";

const App = () => {
	const [playing, setPlaying] = useState(false);
	const [width, setWidth] = useState(30);
	const [height, setHeight] = useState(16);
	const [mines, setMines] = useState(99);

	const sets = {
		width: setWidth,
		height: setHeight,
		mines: setMines,
	};

	const start = (event) => {
		event.preventDefault();
		if (width < 1) {
			alert("Invalid width");
		}
		if (height < 1) {
			alert("Invalid height");
		}
		if (mines < 0 || mines >= width * height) {
			alert("Invalid number of mines");
		} else {
			setPlaying(true);
		}
	};

    const stop = () => {
        setPlaying(false);
    }

	const handleChange = (event) => {
		sets[event.target.name](event.target.value);
	};

	return (
		<>
			{playing ? (
				<Board stop={stop} width={width} height={height} mines={mines} />
			) : (
				<Menu
					start={start}
					width={width}
					height={height}
					mines={mines}
					handleChange={handleChange}
				/>
			)}
		</>
	);
};

export default App;
