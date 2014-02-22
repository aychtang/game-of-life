var board = require('./board');
var print = require('./boardPrinter');

process.stdout.write(print(board(5, 0), 5));
