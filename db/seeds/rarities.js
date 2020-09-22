const { Labels, Rarity } = require('@raid/model');
const { result } = require('underscore');

let COMMON = Labels.Rarity.COMMON
    , UNCOMMON = Labels.Rarity.UNCOMMON
    , RARE = Labels.Rarity.RARE
    , EPIC = Labels.Rarity.EPIC
    , LEGENDARY = Labels.Rarity.LEGENDARY;
let rarities = [
    COMMON, UNCOMMON, RARE, EPIC, LEGENDARY
];

const seed = (seeds) => new Promise((resolve, reject) => {
    console.log('\tSeeding Rarities...');
    seeds.rarities = {};
    
    Promise.all(
        rarities.map(r => Rarity.createOrUpdate({ name: r }))
    )
    .then((results) => {
        results.forEach(r => {
            let rarity = Rarity.build(r.dataValues);
            seeds.rarities[rarity.name] = rarity;
        });
        console.log(`\t[${results.length}] Rarities seeded!`);
        resolve();
    })
    .catch(e => {
        console.log(`\tFailed seeding Rarities: ${e.message || e}`);
        reject(e)
    });
});

module.exports = {
    rarities
    , seed
}