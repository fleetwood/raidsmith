export const Thumbnail = (thumb) => {
    try {
        return require(`assets/img/champs/${thumb}`);
    }
    catch(E) {
        return require(`assets/img/champs/default.png`);
    }
}