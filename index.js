// constants never change
const TAG = 'NODE_APP';
const Reader = require('./reader');
const Writer = require('./writer');

let data = {
	eyes: 'blue',
	tallness: 'tall',
	job: 'web developer'
}

// let is only scoped to a block of code
{
	// a simple block of code :)
let test = new Writer('russell.json', JSON.stringify(data));
console.log(test.toString());
test.writeData();

let experiment = new Reader('russell.json');
console.log(experiment.toString());
experiment.readFile();
console.log(experiment.toJSON());
}














