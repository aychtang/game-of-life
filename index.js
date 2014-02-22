var board = require('./board');
var print = require('./boardPrinter');
var Simulation = require('./simulation');
var step = require('./step');
var b = new Simulation(board(5, 1), 5);

while (!b.isDead()) {
	process.stdout.write(print(b.board));
	// process.stdout.write('step:' + b.step + '');
	b = step(b);
}
