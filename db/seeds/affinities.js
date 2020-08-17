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

const seed = () => new Promise((resolve, reject) => {
    console.log(`\tSeeding Affinities...`)
    Promise.all([
        Affinity.createOrUpdate({name: Labels.Affinities.MAGIC})
        , Affinity.createOrUpdate({name: Labels.Affinities.FORCE})
        , Affinity.createOrUpdate({name: Labels.Affinities.SPIRIT})
        , Affinity.createOrUpdate({name: Labels.Affinities.VOID})
    ])
    .then((m) => {
        MAGIC = m[0];
        FORCE = m[1];
        SPIRIT = m[2];
        VOID = m[3];
        console.log(`\tAffinities seeded!`);
        resolve();
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