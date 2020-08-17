const { Labels, Set, Modifier } = require('@raid/model');
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

let sets = [
    LifeSet
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
];

const seed = () => new Promise((resolve, reject) => {
   console.log('\tSeeding Sets...');
    Promise.all([
        Set.createOrUpdate({
            name: 'Life'
            , description: '+15% HP'
            , requirement: 2
            , icon: ''
            , modifier: {
                description: '+15% HP'
                , attribute: Labels.Attributes.HP
                , method: Labels.Methods.PERC
                , value: 15
            }
        })
    ])
    .then((results) => {
        console.log('\tSets seeded!');
        resolve();
    })
    .catch(e => {
        console.log(`\tERROR: Sets failed to seed. ${e.message || e}`);
        reject(e);
    });
});

module.exports = {
    sets
    , seed
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