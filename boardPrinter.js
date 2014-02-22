module.exports = function(board, length) {
	var representation = '';
	board.forEach(function(e, i) {
		representation += e;
		if (i % length === length - 1) {
			representation += '\n';
		}
	});
	return representation;
};
