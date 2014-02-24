var _ = require('underscore');

var Simulation = function(board, step) {
	this.board = board;
	this.step = step || 0;
};

Simulation.prototype.isDead = function() {
	return _.flatten(this.board).reduce(function(acc, e) {
		return acc + e;
	}) === 0;
};

module.exports = Simulation;
