const _ = require('underscore');
const { Labels, Set } = require('@raid/model');

let LifeSet
    , OffenseSet
    , DefenseSet
    , SpeedSet
    , CriticalRateSet
    , CritDamageSet
    , AccuracySet
    , ResistanceSet
    , LifestealSet
    , FurySet
    , DazeSet
    , CursedSet
    , FrostSet
    , FrenzySet
;
const seed = (seeds) => new Promise((resolve, reject) => {
   console.log('\tSeeding Sets...');
   seeds.sets = {}
    Promise.all([
        Set.upsert({
            name: 'Life'
            , description: '+15% HP'
            , requirement: 2
            , icon: ''
        })
        , Set.upsert({
            name: 'Offense'
            , description: '+15% ATK'
            , requirement: 2
            , icon: ''
        })
    ])
    .then((results) => {
        results.forEach(r => {
            let set = r[0];
            seeds.sets[set.name] = set;
        });
        let updateModifers = [];

        seeds.sets.Life.setModifier(seeds.modifiers.LifeSet);
        updateModifers.push(seeds.sets.Life.update());

        seeds.sets.Offense.setModifier(seeds.modifiers.OffenseSet);
        updateModifers.push(seeds.sets.Offense.update());

        Promise.all(updateModifers)
            .then((results) => {
                resolve(seeds);
            });
    })
    .catch(e => {
        console.log(`\tERROR: Sets failed to seed. ${e.message || e}`);
        reject(e);
    });
});

module.exports = {
    seed
}

// OffenseSet = Set.upsert({
    //     id: i++,
    //     name: 'Offense'
    //     , description: 'ATK +15%'
    //     , modifier: 15
    //     , requirement: 2
    //     , icon: ''
    // });
    // DefenseSet = Set.upsert({
    //     id: i++,
    //     name: 'Defense'
    //     , description: 'DEF +15%'
    //     , modifier: 15
    //     , requirement: 2
    //     , icon: ''
    // });
    // SpeedSet = Set.upsert({
    //     id: i++,
    //     name: 'Speed'
    //     , description: 'SPD +15%'
    //     , modifier: 15
    //     , requirement: 2
    //     , icon: ''
    // });
    // CriticalRateSet = Set.upsert({
    //     id: i++,
    //     name: 'Critical Rate'
    //     , description: 'C. RATE +12%'
    //     , modifier: 12
    //     , requirement: 2
    //     , icon: ''
    // });
    // CritDamageSet = Set.upsert({
    //     id: i++,
    //     name: 'Crit Damage'
    //     , description: 'C. DMG +20%'
    //     , modifier: 20
    //     , requirement: 2
    //     , icon: ''
    // });
    // AccuracySet = Set.upsert({
    //     id: i++,
    //     name: 'Accuracy'
    //     , description: 'ACC +40'
    //     , modifier: 40
    //     , requirement: 2
    //     , icon: ''
    // });
    // ResistanceSet = Set.upsert({
    //     id: i++,
    //     name: 'Resistance'
    //     , description: 'RES +40'
    //     , modifier: 40
    //     , requirement: 2
    //     , icon: ''
    // });
    // Set.createOrUpdate({
    //     name: 'Lifesteal'
    //     , description: 'Heals by 30% of damage dealt'
    //     , modifier: {
    //         description: 'Heals by 30% of damage dealt'
    //     }
    //     , requirement: 4
    //     , icon: ''
    // })
    // FurySet = Set.upsert({
    //     id: i++,
    //     name: 'Fury'
    //     , description: 'Damage increases as HP decreases'
    //     , modifier: 0
    //     , requirement: 4
    //     , icon: ''
    // });
    // DazeSet = Set.upsert({
    //     id: i++,
    //     name: 'Daze'
    //     , description: '25% chance to place Sleep debuff'
    //     , modifier: 0
    //     , requirement: 4
    //     , icon: ''
    // });
    // CursedSet = Set.upsert({
    //     id: i++,
    //     name: 'Cursed'
    //     , description: '50% chance to place 50% Heal Reduction debuff'
    //     , modifier: 0
    //     , requirement: 4
    //     , icon: ''
    // });
    // FrostSet = Set.upsert({
    //     id: i++,
    //     name: 'Frost'
    //     , description: '20% chance to place Freeze debuff on Attacker'
    //     , modifier: 0
    //     , requirement: 4
    //     , icon: ''
    // });
    // FrenzySet = Set.upsert({
    //     id: i++,
    //     name: 'Frenzy'
    //     , description: '+10% Turn Meter for every 5% HP lost'
    //     , modifier: 0
    //     , requirement: 4
    //     , icon: ''
    // });