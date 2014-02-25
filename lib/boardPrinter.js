
module.exports = function(board) {
	var representation = '';
	board.forEach(function(e, i) {
		e.forEach(function(e, i, a) {
			representation += e;
			if (i === a.length - 1)
				representation+= '\n';
		})
	});
	return representation;
};
