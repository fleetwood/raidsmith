const { sequelize } = require('@raid/model');
const { affinities, factions, modifiers, rarities, sets } = require('./seeds');

const seed = () => {
    console.log('SEEDING....');
    Promise.all([
        sequelize.sync()
        , affinities.seed()
        , factions.seed()
        , rarities.seed()
        , sets.seed()
    ])
    .then(() => {
        console.log('SEEDING COMPLETE!')
        return;
    })
    .catch(e => {
        console.log(`SEEDING FAILED: ${e.message || e}`);
    });
}

seed();