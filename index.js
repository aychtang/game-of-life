var board = require('./lib/board');
var print = require('./lib/boardPrinter');
var Simulation = require('./lib/simulation');
var step = require('./lib/step');

var b = new Simulation(board(5,1));

while (!b.isDead()) {
	process.stdout.write(print(b.board));
	process.stdout.write('step: ' + b.step + '.');
	process.stdout.write('\n');
	b = step(b);
}
