
module.exports = function(n, cell) {
	var board = [];
	var length = n * n;
	for (var i = 0; i < length; i++)
		board.push(cell);
	return board;
};
