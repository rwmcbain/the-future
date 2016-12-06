const fs = require('fs');

class Reader {
	constructor(filename){
		this.file = filename;
	}
	readFile(){
		this.data = fs.readFileSync(this.file);
	}
	toJSON(){
		if (this.data) {
			return JSON.parse(this.data);
		} else {
			throw new Error('No data available');
		}
	}
	toString() {
		return `Reader of ${this.file}`;
	}
}

module.exports = Reader;