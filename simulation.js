var _ = require('underscore');

var Simulation = function(board) {
	this.board = board;
	this.step = 0;
};

Simulation.prototype.isDead = function() {
	return _.flatten(this.board).reduce(function(acc, e) {
		return acc + e;
	}) === 0;
};

module.exports = Simulation;
