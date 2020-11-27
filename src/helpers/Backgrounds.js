const rand = (min,max) => Math.floor(min + Math.random() * ((max - min + 1)));

const wps = [
  'alure'
  , 'banner_lady'
  , 'butterflies'
  , 'durham'
  , 'grinner'
  , 'mausoleum_mage'
  , 'occult_brawler'
  , 'skullcrown'
].map(m => `wp/${m}.jpg`);

const renders = [
  'alure',
  'athel',
  'athel2',
  'bystophus',
  'cardinal',
  'krisk',
  'scyl',
  'whisper',
  'whisper2',
  'zargala',
].map(r => `renders/${r}.jpg`);

export const BackgroundImage = (img) => {
  try {
    if (img === "random wp") {
      img = wps[rand(0,wps.length-1)]
    }
    else if (img === "random render") {
      img = renders[rand(0,renders.length-1)]
    }
    else if (img === "random") {
      let all = wps.concat(renders);
      img = all[rand(0,all.length-1)]
    }
    return require(`assets/img/${img}`);
  }
  catch(e) {
      return require(`assets/img/landing-bg.jpg`)
  }
}

export const SkillIcon = (icon) => {
  try {
    return require(`assets/img/skills/${icon}`);
  }
  catch (e) {
    return null;
  }
}

export const ChampIcon = (icon) => {
  try {
    return require(`assets/img/icons/${icon}`);
  }
  catch (e) {
    return null;
  }
}

export const BackgroundSrc = (img) => {
    try {
      if (img === "random wp") {
        img = wps[rand(0,wps.length-1)]
      }
      else if (img === "random render") {
        img = renders[rand(0,renders.length-1)]
      }
      else if (img === "random") {
        let all = wps.concat(renders);
        img = all[rand(0,all.length-1)]
      }
      return `assets/img/${img}`;
    }
    catch(e) {
        return `assets/img/landing-bg.jpg`;
    }
  }