const { server } = require('./config');
const app = require('./express/app');
const { sequelize } = require('./sequelize');

async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}

async function init() {
	await assertDatabaseConnectionOk();

	console.log(`Starting Sequelize + Express example on port ${server.port}...`);

	app.listen(server.port, () => {
		console.log(`Express server started on port ${server.port}. Try some routes, such as '/api/users'.`);
	});
}

init();
