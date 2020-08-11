const { sequelize, Artifact, Attribute, Character, Faction, Rarity, Set } = require('@raid/model');

const init = () => new Promise((resolve) => resolve(sequelize.sync()));

let Lizardmen
    , Skinwalker
    , KnightRevenant
    , UndeadHorde
    , Demonspawn
    , Ogryn
    , Orc
    , HighElf
    , DarkElf
    , SacredOrder
    , BannerLord
    , Barbarian
    , Dwarf;

const createFactions = () => new Promise((resolve, reject) => {
    console.log('\rCreating factions...')
    let i = 1;
    Lizardmen = Faction.upsert({ id: i++, name: 'Lizardmen' });
    Skinwalker = Faction.upsert({ id: i++, name: 'Skinwalker' });
    KnightRevenant = Faction.upsert({ id: i++, name: 'Knight Revenant' });
    UndeadHorde = Faction.upsert({ id: i++, name: 'Undead Horde' });
    Demonspawn = Faction.upsert({ id: i++, name: 'Demonspawn' });
    Ogryn = Faction.upsert({ id: i++, name: 'Ogryn Tribe' });
    Orc = Faction.upsert({ id: i++, name: 'Orc' });
    HighElf = Faction.upsert({ id: i++, name: 'High Elf' });
    DarkElf = Faction.upsert({ id: i++, name: 'Dark Elf' });
    SacredOrder = Faction.upsert({ id: i++, name: 'Sacred Order' });
    BannerLord = Faction.upsert({ id: i++, name: 'Banner Lord' });
    Barbarian = Faction.upsert({ id: i++, name: 'Barbarian' });
    Dwarf = Faction.upsert({ id: i++, name: 'Dwarf' });
    
    Promise.all([
        Lizardmen,
        Skinwalker,
        KnightRevenant,
        UndeadHorde,
        Demonspawn,
        Ogryn,
        Orc,
        HighElf,
        DarkElf,
        SacredOrder,
        BannerLord,
        Barbarian,
        Dwarf
    ])
    .then(() => {
        console.log('\tFactions complete!');
        resolve();
    })
    .catch(e => reject(e));
});

let COMMON
    , UNCOMMON
    , RARE
    , EPIC
    , LEGENDARY;

const createRarities = () => new Promise((resolve, reject) => {
    console.log('\tCreating Rarities...');
    let i = 1;
    COMMON = Rarity.upsert({ id: i++, name: 'COMMON' });
    UNCOMMON = Rarity.upsert({ id: i++, name: 'UNCOMMON' });
    RARE = Rarity.upsert({ id: i++, name: 'RARE' });
    EPIC = Rarity.upsert({ id: i++, name: 'EPIC' });
    LEGENDARY = Rarity.upsert({ id: i++, name: 'LEGENDARY' });

    Promise.all([
        COMMON,
        UNCOMMON,
        RARE,
        EPIC,
        LEGENDARY
    ])
    .then(() => {
        console.log('\tRarities complete!');
        resolve();
    })
    .catch(e => reject(e));
});

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
    , FrenzySet;

const createSets = () => new Promise((resolve, reject) => {
   console.log('\tCreating Sets...');
   let i = 1;
    LifeSet = Set.upsert({
        id: i++,
        name: 'Life'
        , description: 'HP +15%'
        , modifier: 15
        , requirement: 2
        , icon: ''
    });
    OffenseSet = Set.upsert({
        id: i++,
        name: 'Offense'
        , description: 'ATK +15%'
        , modifier: 15
        , requirement: 2
        , icon: ''
    });
    DefenseSet = Set.upsert({
        id: i++,
        name: 'Defense'
        , description: 'DEF +15%'
        , modifier: 15
        , requirement: 2
        , icon: ''
    });
    SpeedSet = Set.upsert({
        id: i++,
        name: 'Speed'
        , description: 'SPD +15%'
        , modifier: 15
        , requirement: 2
        , icon: ''
    });
    CriticalRateSet = Set.upsert({
        id: i++,
        name: 'Critical Rate'
        , description: 'C. RATE +12%'
        , modifier: 12
        , requirement: 2
        , icon: ''
    });
    CritDamageSet = Set.upsert({
        id: i++,
        name: 'Crit Damage'
        , description: 'C. DMG +20%'
        , modifier: 20
        , requirement: 2
        , icon: ''
    });
    AccuracySet = Set.upsert({
        id: i++,
        name: 'Accuracy'
        , description: 'ACC +40'
        , modifier: 40
        , requirement: 2
        , icon: ''
    });
    ResistanceSet = Set.upsert({
        id: i++,
        name: 'Resistance'
        , description: 'RES +40'
        , modifier: 40
        , requirement: 2
        , icon: ''
    });
    LifestealSet = Set.upsert({
        id: i++,
        name: 'Lifesteal'
        , description: 'Heals by 30% of damage dealt'
        , modifier: 0
        , requirement: 4
        , icon: ''
    });
    FurySet = Set.upsert({
        id: i++,
        name: 'Fury'
        , description: 'Damage increases as HP decreases'
        , modifier: 0
        , requirement: 4
        , icon: ''
    });
    DazeSet = Set.upsert({
        id: i++,
        name: 'Daze'
        , description: '25% chance to place Sleep debuff'
        , modifier: 0
        , requirement: 4
        , icon: ''
    });
    CursedSet = Set.upsert({
        id: i++,
        name: 'Cursed'
        , description: '50% chance to place 50% Heal Reduction debuff'
        , modifier: 0
        , requirement: 4
        , icon: ''
    });
    FrostSet = Set.upsert({
        id: i++,
        name: 'Frost'
        , description: '20% chance to place Freeze debuff on Attacker'
        , modifier: 0
        , requirement: 4
        , icon: ''
    });
    FrenzySet = Set.upsert({
        id: i++,
        name: 'Frenzy'
        , description: '+10% Turn Meter for every 5% HP lost'
        , modifier: 0
        , requirement: 4
        , icon: ''
    });
    Promise.all([
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
    ])
    .then(() => {
        console.log('\tSets complete!');
        resolve();
    })
    .catch(e => reject(e));
});

const seed = () => {
    console.log('SEEDING....');

    Promise.all([
        init(),
        createFactions(),
        createRarities(),
        createSets()
    ])
    .then(() => {
        console.log('SEEDING COMPLETE!')
    })
    .catch(e => {
        console.log(`ERROR: ${e.message || e}`);
    })
    // create Athel
    let Athel = Character.build({
        id: 1,
        name: 'Athel'
        , stars: 5
        , level: 50
        , thumbnail: null
    });
    let weapon =Artifact.build({
        id: 1,
        name: Artifact.Types.WEAPON,
        icon: '',
        stars: 5,
        level: 16
    });
    Promise.all([
        Athel.save(),
        weapon.save()
    ])
    .then(r => {
        Promise.all([
            weapon.setRarity(EPIC),
            weapon.setSet(LifestealSet),
            weapon.update(),
            Athel.setFaction(SacredOrder),
            Athel.setRarity(RARE),
            Athel.addArtifact(weapon),
            Athel.update()
        ]);
    })
    .catch(e => {
        console.error(e.message || e);
    });

    // let helmet = Artifact.create({
    //     name: Artifact.Types.HELMET,
    //     icon: '',
    //     stars: 4,
    //     level: 12
    // })
    // // helmet.setRarity(EPIC);
    // // helmet.setSet(LifestealSet);

    // let shield = Artifact.create({
    //     name: Artifact.Types.SHIELD,
    //     icon: '',
    //     stars: 4,
    //     level: 12
    // })
    // // shield.setRarity(EPIC);
    // // shield.setSet(LifestealSet);

    // let gauntlets = Artifact.create({
    //     name: Artifact.Types.GAUNTLETS,
    //     icon: '',
    //     stars: 5,
    //     level: 16
    // })
    // // gauntlets.setRarity(LEGENDARY);
    // // gauntlets.setSet(LifestealSet);

    // let chestplate = Artifact.create({
    //     name: Artifact.Types.CHESTPLATE,
    //     icon: '',
    //     stars: 4,
    //     level: 12
    // })
    // // chestplate.setRarity(EPIC);
    // // chestplate.setSet(LifestealSet);

    // let boots = Artifact.create({
    //     name: Artifact.Types.BOOTS,
    //     icon: '',
    //     stars: 5,
    //     level: 12
    // })
    // // boots.setRarity(RARE);
    // // boots.setSet(LifestealSet);

    // Athel.addArtifacts([
    //     weapon, helmet, shield,
    //     gauntlets, chestplate, boots
    // ]);

    // Athel.update();
}

seed();