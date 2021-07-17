import React, { useState, useEffect } from "react";
import Tile from "./Tile";

const Row = ({ row, index, clicked, handleMove, handleFlag }) => {
	return (
		<div className="row">
			{row.map((tile, j) => (
				<Tile
					key={j}
					value={tile}
					clicked={clicked[j]}
					row={index}
					column={j}
					handleMove={handleMove}
					handleFlag={handleFlag}
				/>
			))}
		</div>
	);
};

export default Row;
