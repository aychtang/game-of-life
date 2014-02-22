var Simulation = require('./simulation');
var findNeighbours = require('./findNeighbours');
var _ = require('underscore');


module.exports = function(simulation) {
	var board = simulation.board;
	var result = _.clone(board);

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
			}
		}
	}
	console.log(simulation.step);
	return new Simulation(result, simulation.step + 1);
};