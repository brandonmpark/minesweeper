import _ from "lodash";

const directions = [
	[-1, -1],
	[-1, 0],
	[-1, 1],
	[0, -1],
	[0, 1],
	[1, -1],
	[1, 0],
	[1, 1],
];

const createMineBoard = (width, height, mines) => {
	let board = new Array(width * height).fill(0);
	for (let i = 0; i < mines; i++) {
		board[i] = -1;
	}
	const shuffledBoard = _.shuffle(board);
	return _.chunk(shuffledBoard, width);
};

const createEmptyBoard = (width, height) => {
	let board = new Array(width * height).fill(0);
	return _.chunk(board, width);
};

const findMines = (board, row, column) => {
	let mines = 0;
	for (const direction of directions) {
		const r = row + direction[0];
		const c = column + direction[1];
		if (r >= 0 && c >= 0 && r < board.length && c < board[r].length) {
			if (board[r][c] === -1) {
				mines++;
			}
		}
	}
	return mines;
};

const fillEmpty = (board, clicked, row, column) => {
	if (
		row >= 0 &&
		column >= 0 &&
		row < board.length &&
		column < board[row].length &&
		clicked[row][column] === 0
	) {
		clicked[row][column] = 1;
		board[row][column] = findMines(board, row, column);
		if (board[row][column] === 0) {
			for (const direction of directions) {
				const r = row + direction[0];
				const c = column + direction[1];
				fillEmpty(board, clicked, r, c);
			}
		}
	}
};

export default {
	directions,
	createMineBoard,
	createEmptyBoard,
	findMines,
	fillEmpty,
};
