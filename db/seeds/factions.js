const _ = require('underscore');
const { Faction } = require('@raid/model');

let seeds = [
    'Lizardmen'
    , 'Skinwalker'
    , 'Knight Revenant'
    , 'Undead Horde'
    , 'Demonspawn'
    , 'Ogryn'
    , 'Orc'
    , 'High Elf'
    , 'Dark Elf'
    , 'Sacred Order'
    , 'Banner Lord'
    , 'Barbarian'
    , 'Dwarf'
];

const seed = () => new Promise((resolve, reject) => {
    console.log('\tSeeding factions...');
    
    Promise.all(
        seeds.map(f => Faction.createOrUpdate({ name: f }).then(result => f = result))
    )
    .then((results) => {
        console.log('\tFactions seeded!');
        resolve();
    })
    .catch(e => {
        console.log(`\tFailed seeding Factions: ${e.message || e}`);
        reject(e)
    });
});

module.exports = {
    seed
};