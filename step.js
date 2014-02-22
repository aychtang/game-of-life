var Simulation = require('./simulation');
var findNeighbours = require('./findNeighbours');
var makeBoard = require('./board');
var _ = require('underscore');

module.exports = function(simulation) {
	var board = simulation.board;
	var result = makeBoard(simulation.board.length, 0);

	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board.length; j++) {
			var neighbours = findNeighbours(board, i, j);
			if (board[i][j] === 0) {
				if (neighbours === 3) {
					result[i][j] = 1;
				}
			}
			else {
				if (neighbours > 3 || neighbours < 2) {
					result[i][j] = 0;
				}
				else {
					result[i][j] = 1;
				}
			}
		}
	}

	return new Simulation(result, simulation.step + 1);
};