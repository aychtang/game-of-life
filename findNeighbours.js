var addIfAlive = function(point) {
	if (typeof point === 'number') {
		return point;
	}
	return 0;
};

module.exports = function(board, row, col) {
	var neighbours = -1;

	for (var i = row - 1; i <= row + 1; i++) {
		for (var j = col - 1; j <= col + 1; j++) {
			if (i >= 0 && j >= 0)
				neighbours += addIfAlive(board[i][j]);
		}
	}

	return neighbours > 0 ? neighbours : 0;
};