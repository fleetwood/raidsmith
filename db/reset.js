const { sequelize } = require('@raid/model');

async function reset() {
	console.log('Will rewrite the database.');

	await sequelize.sync({ force: true });

	console.log('Done!');
}

reset();
