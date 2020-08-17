const { Labels, Rarity } = require('@raid/model');

let COMMON = Labels.Rarity.COMMON
    , UNCOMMON = Labels.Rarity.UNCOMMON
    , RARE = Labels.Rarity.RARE
    , EPIC = Labels.Rarity.EPIC
    , LEGENDARY = Labels.Rarity.LEGENDARY;
let rarities = [
    COMMON, UNCOMMON, RARE, EPIC, LEGENDARY
];

const seed = () => new Promise((resolve, reject) => {
    console.log('\tSeeding Rarities...');
    
    Promise.all(
        rarities.map(f => Rarity.createOrUpdate({ name: f }))
    )
    .then((results) => {
        console.log('\tRarities seeded!');
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