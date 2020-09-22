const { Labels, Modifier } = require('@raid/model');

let modifiers = [
];

const seed = (seeds) => new Promise((resolve, reject) => {
    console.log('\tSeeding Modifiers...');
    seeds.modifiers = {};
    Promise.all([
        Modifier.upsert({
            alias: 'LifeSet'
            , description: '+15% HP'
            , attribute: Labels.Attributes.HP
            , method: Labels.Methods.PERC
            , value: 15
        })
        , Modifier.upsert({
            alias: 'AttackSet'
            , description: '+15% ATK'
            , attribute: Labels.Attributes.ATK
            , method: Labels.Methods.PERC
            , value: 15
        })
        , Modifier.upsert({
            alias: 'DefenseSet',
            description: '+15% DEF'
            , attribute: Labels.Attributes.DEF
            , method: Labels.Methods.PERC
            , value: 15
        })
        , Modifier.upsert({
            alias: 'SpeedSet',
            description: '+12% SPD'
            , attribute: Labels.Attributes.SPD
            , method: Labels.Methods.PERC
            , value: 12
        })
        , Modifier.upsert({
            alias: 'CRateSet',
            description: '+12% C. RATE'
            , attribute: Labels.Attributes.CRATE
            , method: Labels.Methods.PERC
            , value: 12
        })
        , Modifier.upsert({
            alias: 'CDmgSet',
            description: '+20% C. DMG'
            , attribute: Labels.Attributes.CDMG
            , method: Labels.Methods.PERC
            , value: 20
        })
        , Modifier.upsert({
            alias: 'AccuracySet',
            description: 'ACC +40'
            , attribute: Labels.Attributes.ACC
            , method: Labels.Methods.PLUS
            , value: 40
        })
        , Modifier.upsert({
            alias: 'ResistSet',
            description: 'RESIST +40'
            , attribute: Labels.Attributes.RES
            , method: Labels.Methods.PLUS
            , value: 40
        })
        , Modifier.upsert({
            alias: 'LifestealSet',
            description: 'Heals by 30% of damage dealt'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'FurySet',
            description: 'Damage increases as HP decreases'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'DazeSet',
            description: '25% chance to place Sleep debuff'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'CursedSet',
            description: '50% chance to place 50% Heal Reduction debuff'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'FrostSet',
            description: '20% chance to place Freeze debuff on attacker'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'FrenzySet',
            description: '+10% Turn Meter for every 5% HP lost'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'RegenerationSet',
            description: 'Heals by 10% every turn'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'ImmunitySet',
            description: 'Immunity for 2 turns'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'ShieldSet',
            description: '+30% HP ally Shield for 3 Turns'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'RelentlessSet',
            description: '18% chance to get Extra Turn'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'SavageSet',
            description: 'Ignores 25% of enemy DEF'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'DestroySet',
            description: 'Decreases enemy MAX HP by 30% of damage dealt'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'StunSet',
            description: '18% chance to place Stun debuff'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'ToxicSet',
            description: '50% chance to place 2.5% Poison debuff'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'TauntingSet',
            description: '30% chance to place Provoke debuff'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'RetaliationSet',
            description: '25% chance to Counterattack when hit'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'AvengingSet',
            description: '30% chance to Counterattack when hit with a critical hit'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'StalwartSet',
            description: '-30% Damage taken from enemy AoE attacks'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'ReflexSet',
            description: '30% chance to reduce random Skill cooldown'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'CuringSet',
            description: '10% bonus Heal'
            , method: Labels.Methods.PASSIVE
        })
        , Modifier.upsert({
            alias: 'CruelSet',
            description: 'ATK +15%, Ignores 5% of enemy DEF'
            , attribute: Labels.Attributes.ATK
            , method: Labels.Methods.PERC
            , value: 15
        })
        , Modifier.upsert({
            alias: 'ImmortalSet',
            description: 'HP +15%, Heals by 3% every turn'
            , attribute: Labels.Attributes.HP
            , method: Labels.Methods.PERC
            , value: 15
        })
        , Modifier.upsert({
            alias: 'DivineOffenseSet',
            description: 'ATK +15%, +15% HP Self Shield for 3 turns'
            , attribute: Labels.Attributes.ATK
            , method: Labels.Methods.PERC
            , value: 15
        })
        , Modifier.upsert({
            alias: 'DivineCRateSet',
            description: 'C. RATE +12%, +15% HP Self Shield for 3 turns'
            , attribute: Labels.Attributes.CRATE
            , method: Labels.Methods.PERC
            , value: 12
        })
        , Modifier.upsert({
            alias: 'DivineLifeSet',
            description: 'HP +15%, +15% HP Self Shield for 3 turns'
            , attribute: Labels.Attributes.HP
            , method: Labels.Methods.PERC
            , value: 15
        })
        , Modifier.upsert({
            alias: 'DivineSpeedSet',
            description: 'Speed +12%, +15% HP Self Shield for 3 turns'
            , attribute: Labels.Attributes.SPD
            , method: Labels.Methods.PERC
            , value: 15
        })
    ])
    .then(results => {
        console.log(`\t[${results.length}] Modifiers seeded!`)
        results.forEach(r => {
            let modifier = r[0]; //Modifier.build(r.dataValues);
            seeds.modifiers[modifier.alias] = modifier;
        });
        resolve(seeds);
    })
    .catch(e => {
        console.log(`ERROR seeding Modifiers: ${e.message || e}`);
        reject(e);
    });
});

module.exports = {
    modifiers
    , seed
}