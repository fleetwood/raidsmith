const _ = require('underscore');
const { Faction } = require('@raid/model');

let factions = [
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

const seed = (seeds) => new Promise((resolve, reject) => {
    console.log('\tSeeding factions...');
    seeds.factions = {};
    Promise.all(
        factions.map(f => Faction.createOrUpdate({ name: f }).then(result => f = result))
    )
    .then((results) => {
        results.forEach(r => {
            let faction = Faction.build(r.dataValues);
            seeds.factions[faction.name.replace(' ','')] = faction;
        });
        console.log(`\t[${results.length}] Factions seeded!`);
        resolve(seeds);
    })
    .catch(e => {
        console.log(`\tFailed seeding Factions: ${e.message || e}`);
        reject(e)
    });
});

module.exports = {
    seed
};