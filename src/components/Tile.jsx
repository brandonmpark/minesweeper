import React from "react";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import seven from "../assets/7.png";
import eight from "../assets/8.png";
import empty from "../assets/empty.png";
import flag from "../assets/flag.png";

const nums = {
	1: one,
	2: two,
	3: three,
	4: four,
	5: five,
	6: six,
	7: seven,
	8: eight,
};

const Tile = ({ value, clicked, row, column, handleMove, handleFlag }) => {
	return (
		<div
			className="tile"
			onClick={() => {
				handleMove(row, column);
			}}
			onContextMenu={(event) => {
				handleFlag(event, row, column);
			}}
		>
			{clicked === 1 ? (
				value > 0 ? (
					<img src={nums[value]} alt={value} />
				) : null
			) : clicked === -1 ? (
				<img src={flag} alt="flag" />
			) : (
				<img src={empty} alt="unclicked" />
			)}
		</div>
	);
};

export default Tile;
