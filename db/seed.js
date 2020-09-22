const _ = require('underscore');
const { sequelize, Labels } = require('@raid/model');
const { affinities, factions, modifiers, rarities, sets } = require('./seeds');

let seeds = {
    affinities: []
    , factions: []
    , modifiers: []
    , rarities: []
    , sets: []
}

const seed = (set) => new Promise((resolve, reject) => {
    console.log(`\tSEEDING...`);
    Promise.all([
        sequelize.sync()
        , affinities.seed(seeds)
        , factions.seed(seeds)
        , modifiers.seed(seeds)
        , rarities.seed(seeds)
        , sets.seed(seeds)
    ])
    .then((resultSet) => {
        console.log(`\tSEEDING COMPLETE!`);
        resolve();
    })
    .catch(e => {
        console.error(`\tSEEDING ERROR: ${e.message || e}`);
        reject(e);
    });
});

// const seed = () => {
//     console.log('SEEDING....');
//     Promise.all([
//         sequelize.sync()
//         , affinities.seed()
//         , factions.seed()
//         , rarities.seed()
//         , modifiers.seed()
//     ])
//     .then(() => {
//         console.log('SEEDING COMPLETE!')
//         return;
//     })
//     .catch(e => {
//         console.log(`SEEDING FAILED: ${e.message || e}`);
//     });
// }

seed()
    .then(() => {
        console.log('Please wait...');
        return;
    })
    .catch(e => {
        console.error('FAILED...');
        return;
    });