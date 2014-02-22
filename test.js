var test = require('tape');
var board = require('./board');
var print = require('./boardPrinter');

test('Board maker should return an array with space for n^2', function(t) {
	t.plan(1);
	t.equal(board(3).length, 9);
});

test('Board maker should return an array where each element equals the passed cell',
	function(t) {
		t.plan(1);
		t.equal(board(1, 0)[0], 0);
});

test('Board printer should return correct representation of passed board if passed correct row length',
	function(t) {
	t.plan(1);
	t.equal(print(board(3,0), 3), '000\n000\n000\n');
});
