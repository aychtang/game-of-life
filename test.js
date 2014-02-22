var test = require('tape');
var board = require('./board');
var print = require('./boardPrinter');
var Simulation = require('./simulation');
var findNeighbours = require('./findNeighbours');

// Board maker.
test('Board maker should return an array with space for n^2', function(t) {
	t.plan(2);
	t.equal(board(3,0).length, 3);
	t.equal(board(3,0)[0].length, 3);
});

test('Board maker should return an array where each element equals the passed cell',
	function(t) {
		t.plan(1);
		t.equal(board(1, 0)[0][0], 0);
});

// Printer.
test('Board printer should return correct representation of passed board if passed correct row length',
	function(t) {
	t.plan(1);
	t.equal(print(board(3,0)), '000\n000\n000\n');
});

// Simulation wrapper.
test('Simulation should start on step 0', function(t) {
	t.plan(1);
	t.equal(new Simulation(board(3, 0)).step, 0);
});

test('Simulation.isDead() should return true if all cells equal 0', function(t) {
	t.plan(1);
	t.equal(new Simulation(board(3, 0)).isDead(), true);
});

test('Simulation.isDead() should return false if not all cells equal 0', function(t) {
	t.plan(1);
	t.equal(new Simulation(board(3, 1)).isDead(), false);
});

// findNeighbours.
test('findNeighbours should return amount of living neighbour cells when passed valid input', function(t) {
	t.plan(1);
	var myBoard = board(3, 0);
	t.equal(findNeighbours(myBoard, 0, 0), 0);
});

test('findNeighbours should return amount of living neighbour cells when passed valid input', function(t) {
	t.plan(1);
	var myBoard = board(3, 1);
	t.equal(findNeighbours(myBoard, 0, 0), 3);
});

test('findNeighbours should return amount of living neighbour cells when passed valid input', function(t) {
	t.plan(1);
	var myBoard = board(3, 1);
	t.equal(findNeighbours(myBoard, 1, 1), 8);
});

test('findNeighbours should return amount of living neighbour cells when passed valid input', function(t) {
	t.plan(1);
	var myBoard = board(3, 1);
	t.equal(findNeighbours(myBoard, 2, 2), 3);
});
