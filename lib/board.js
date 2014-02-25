
module.exports = function(n, cell) {
	var board = [];
	for (var i = 0; i < n; i++) {
		board.push([]);
		for (var j = 0; j < n; j++) {
			board[i].push(cell);
		}
	}
	return board;
};
