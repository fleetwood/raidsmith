const { Labels, Affinity } = require('@raid/model');

let MAGIC
    , FORCE
    , SPIRIT
    , VOID;

let affinities = [
    MAGIC
    , FORCE
    , SPIRIT
    , VOID
];

const seed = (seeds) => new Promise((resolve, reject) => {
    console.log(`\tSeeding Affinities...`)
    Promise.all([
        Affinity.createOrUpdate({name: Labels.Affinities.MAGIC})
        , Affinity.createOrUpdate({name: Labels.Affinities.FORCE})
        , Affinity.createOrUpdate({name: Labels.Affinities.SPIRIT})
        , Affinity.createOrUpdate({name: Labels.Affinities.VOID})
    ])
    .then((m) => {
        seeds.affinities = {
            MAGIC: m[0]
            , FORCE: m[1]
            , SPIRIT: m[2]
            , VOID: m[3]
        };
        console.log(`\t[${m.length}] Affinities seeded!`);
        resolve(seeds);
    })
    .catch(e => {
        console.log(`\tERROR: Affinities failed to seed: ${e.message || e}`);
        reject(e);
    })
});

module.exports = {
    affinities
    , seed
}