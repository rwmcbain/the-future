// constants never change
const TAG = 'NODE_APP';
const Reader = require('./Reader');
const Writer = require('./Writer');

let data = {
	eyes: 'blue',
	tallness: 'tall',
	job: 'Web Developer'
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














