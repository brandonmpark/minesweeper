import React, { useState, useEffect } from "react";

const Menu = ({ start, width, height, mines, handleChange }) => {
	return (
		<div>
			<form onSubmit={(event) => start(event)}>
				<div>
					Width:
					<input
						type="number"
						value={width}
						name="width"
						onChange={(event) => handleChange(event)}
					/>
				</div>
				<div>
					Height:
					<input
						type="number"
						value={height}
						name="height"
						onChange={(event) => handleChange(event)}
					/>
				</div>
				<div>
					Mines:
					<input
						type="number"
						value={mines}
						name="mines"
						onChange={(event) => handleChange(event)}
					/>
				</div>
				<button type="submit">Start</button>
			</form>
		</div>
	);
};

export default Menu;
