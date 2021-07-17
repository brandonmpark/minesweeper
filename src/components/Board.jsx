import React, { useState, useEffect } from "react";
import boardUtils from "../utils/board_utils";
import Row from "./Row";
import _ from "lodash";
import "./board.scss";

const Board = ({ stop, width, height, mines }) => {
	const [board, setBoard] = useState(
		boardUtils.createMineBoard(width, height, mines)
	);
	const [clicked, setClicked] = useState(
		boardUtils.createEmptyBoard(width, height)
	);
	const [moves, setMoves] = useState(0);

	const handleMove = (row, column) => {
		setMoves(moves + 1);
		let newBoard = _.cloneDeep(board);
		let newClicked = _.cloneDeep(clicked);
		if (newClicked[row][column] !== 0) {
			return;
		}
		if (newBoard[row][column] === -1) {
			if (moves === 0) {
				newBoard[row][column] = 0;
				const adjustedBoard = _.flattenDeep(newBoard);
				for (let i = 0; i < adjustedBoard.length; i++) {
					if (adjustedBoard[i] === 0 && i !== width * row + column) {
						adjustedBoard[i] = -1;
						break;
					}
				}
				setBoard(_.chunk(adjustedBoard, width));
			} else {
                alert("You clicked a mine!");
				stop();
			}
		}
		newBoard[row][column] = boardUtils.findMines(board, row, column);
		if (newBoard[row][column] === 0) {
			boardUtils.fillEmpty(newBoard, newClicked, row, column);
		} else {
			newClicked[row][column] = 1;
		}

		setBoard(newBoard);
		setClicked(newClicked);
	};

	const handleFlag = (event, row, column) => {
		event.preventDefault();
		let newClicked = _.cloneDeep(clicked);
		if (newClicked[row][column] === 0) {
			newClicked[row][column] = -1;
		} else if (newClicked[row][column] === -1) {
			newClicked[row][column] = 0;
		}
		setClicked(newClicked);
	};

	return (
		<div id="board">
			{board.map((row, i) => (
				<Row
					key={i}
					row={row}
					index={i}
					clicked={clicked[i]}
					handleMove={handleMove}
					handleFlag={handleFlag}
				/>
			))}
		</div>
	);
};

export default Board;
