const model = require('@raid/model');

async function reset() {
	console.log('Rebuilding the database!');
	
	model.reset()
		.then(console.log('SUCCESS!'))
		.catch(e => console.log(`ERRORRRRRR: ${e.message || e}`));
}

reset();
