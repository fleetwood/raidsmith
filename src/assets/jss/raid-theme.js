import tinycolor from 'tinycolor2';

const darken = (hex, amount = 10) => tinycolor(hex).darken(amount).toHexString();
const lighten = (hex, amount = 10) => tinycolor(hex).lighten(amount).toHexString();

const robotoSlab = { fontFamily: `"Roboto Slab", "Times New Roman", serif` };
const roboto = { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }

const raidColors = {
  red: "#803356",
  pink: "#86367d",
  purple: "#44449a",
  indigo: "#4228b4",
  blue: "#0963b6",
  cyan: "#097994",
  teal: "#098e80",
  green: "#097d50",
  yellow: "#888737",
  orange: "#886337",

  font: {
    white: "#ffffff",
    cream: "#e7e3d1",
    crystal: '#76f4ff',
    beige: "#adab5b",
    gold: "#b2872f",
    teal: "#6be9fc",
    green: "#22e600"
  },

  border: {
    width: "2px",
    teal1: "#4ed9fc",
    teal2: "#11c8e3",
    gold: "#b28324",
    yellow: "#feeb00",
    black: "#060f15",
  },

  rarity: {
    empty: "#66603e",
    common: "#aeaeae",
    uncommon: "#1bcf40",
    rare: "#2a97ff",
    epic: "#e74aff",
    legendary: "#ed8100"
  },

  bg: {
    main: "#1c666a",
    athel: "#114f6d",
    darkathel: "#1b4562",
    banner: "#173a55",
    storm: "#102b43",
    sea: "#112b37",
    bleak: "#092a2f",
    teal: '#21878a'
  }
};

const primaryColor = raidColors.teal;
const primaryRGB = tinycolor(primaryColor).toRgbString();
const primaryRGBA = (op) => tinycolor(primaryColor).setAlpha(op).toRgbString();

const warningColor = raidColors.cyan;
const warningRGB = tinycolor(warningColor).toRgbString();
const warningRGBA = (op) => tinycolor(warningColor).setAlpha(op).toRgbString();

const dangerColor = raidColors.red;
const dangerRGB = tinycolor(dangerColor).toRgbString();
const dangerRGBA = (op) => tinycolor(dangerColor).setAlpha(op).toRgbString();

const successColor = raidColors.green;
const successRGB = tinycolor(successColor).toRgbString();
const successRGBA = (op) => tinycolor(successColor).setAlpha(op).toRgbString();

const infoColor = raidColors.orange;
const infoRGB = tinycolor(infoColor).toRgbString();
const infoRGBA = (op) => tinycolor(infoColor).setAlpha(op).toRgbString()

const roseColor = raidColors.pink;
const roseRGB = tinycolor(roseColor).toRgbString();
const roseRGBA = (op) => tinycolor(roseColor).setAlpha(op).toRgbString()

const grayColor = "#888";

const boxShadowGradient = (color) => `0 2px 2px 0 ${color}, 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 ${color}`;
const hoverShadowGradient = (color) => `0 10px 20px -10px ${color}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${color * .5}`;
const linearGradient = (color) => `linear-gradient(60deg, ${color}, ${darken(color, 7)})`
const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: boxShadowGradient(raidColors.bg.dark),
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const primaryBoxShadow = {
  boxShadow: boxShadowGradient(primaryRGBA(0.28))
};
const primaryHoverShadow = {
  boxShadow: hoverShadowGradient(primaryRGBA(0.4))
};
const infoBoxShadow = {
  boxShadow: boxShadowGradient(infoRGBA(0.28))
};
const infoHoverShadow = {
  boxShadow: hoverShadowGradient(infoRGBA(0.4))
};
const successBoxShadow = {
  boxShadow: boxShadowGradient(successRGBA(0.28))
};
const successHoverShadow = {
  boxShadow: hoverShadowGradient(successRGBA(0.4))
};
const warningBoxShadow = {
  boxShadow: boxShadowGradient(warningRGBA(0.28))
};
const warningHoverShadow = {
  boxShadow: hoverShadowGradient(warningRGBA(0.4))
};
const dangerBoxShadow = {
  boxShadow: boxShadowGradient(dangerRGBA(0.28))
};
const dangerHoverShadow = {
  boxShadow: hoverShadowGradient(dangerRGBA(0.4))
};
const roseBoxShadow = {
  boxShadow: boxShadowGradient(roseRGBA(0.28))
};
const roseHoverShadow = {
  boxShadow: hoverShadowGradient(roseRGBA(0.4))
};

const warningCardHeader = {
  color: "#fff",
  background: linearGradient(warningColor),
  ...warningBoxShadow
};
const successCardHeader = {
  color: "#fff",
  background: linearGradient(successColor),
  ...successBoxShadow
};
const dangerCardHeader = {
  color: "#fff",
  background: linearGradient(dangerColor),
  ...dangerBoxShadow
};
const infoCardHeader = {
  color: "#fff",
  background: linearGradient(infoColor),
  ...infoBoxShadow
};
const primaryCardHeader = {
  color: "#fff",
  background: linearGradient(primaryColor),
  ...primaryBoxShadow
};
const roseCardHeader = {
  color: "#fff",
  background: linearGradient(roseColor),
  ...roseBoxShadow
};
const raidTheme = {
  '@global': {
    body: {
      backgroundColor: raidColors.bg.bleak,
      color: raidColors.font.cream
    }
  },

  borderLegendary: {
    position: 'relative',
    margin: '3px',
    padding: '3px',
    border: `solid 2px ${raidColors.rarity.legendary}`,
    '&:before': {
      content: `''`,
      position: 'absolute',
      top: 0, right: 0, bottom: 0, left: 0,
      zIndex: -1,
      margin: 0,
      background: `linear-gradient(to bottom, ${raidColors.rarity.legendary}, white,${raidColors.rarity.legendary})`
    }
  },
  borderEpic: {
    position: 'relative',
    margin: '3px',
    padding: '3px',
    border: `solid 2px ${raidColors.rarity.epic}`,
    '&:before': {
      content: `''`,
      position: 'absolute',
      top: 0, right: 0, bottom: 0, left: 0,
      zIndex: -1,
      margin: 0,
      background: `linear-gradient(to bottom, ${raidColors.rarity.epic}, white,${raidColors.rarity.epic})`
    }
  },
  borderRare: {
    position: 'relative',
    margin: '3px',
    padding: '3px',
    border: `solid 2px ${raidColors.rarity.rare}`,
    '&:before': {
      content: `''`,
      position: 'absolute',
      top: 0, right: 0, bottom: 0, left: 0,
      zIndex: -1,
      margin: 0,
      background: `linear-gradient(to bottom, ${raidColors.rarity.rare}, white,${raidColors.rarity.rare})`
    }
  },
  borderUncommon: {
    position: 'relative',
    margin: '3px',
    padding: '3px',
    border: `solid 2px ${raidColors.rarity.uncommon}`,
    '&:before': {
      content: `''`,
      position: 'absolute',
      top: 0, right: 0, bottom: 0, left: 0,
      zIndex: -1,
      margin: 0,
      background: `linear-gradient(to bottom, ${raidColors.rarity.uncommon}, white,${raidColors.rarity.uncommon})`
    }
  },
  borderCommon: {
    position: 'relative',
    margin: '3px',
    padding: '3px',
    border: `solid 2px ${raidColors.rarity.common}`,
    '&:before': {
      content: `''`,
      position: 'absolute',
      top: 0, right: 0, bottom: 0, left: 0,
      zIndex: -1,
      margin: 0,
      background: `linear-gradient(to bottom, ${raidColors.rarity.common}, white,${raidColors.rarity.common})`
    }
  },
}

const colorProps = [
  "warning",
  "success",
  "danger",
  "info",
  "primary",
  "rose"
];

export {
  //variables
  raidTheme,
  primaryColor, primaryRGB, primaryRGBA,
  warningColor, warningRGB, warningRGBA,
  dangerColor, dangerRGB, dangerRGBA,
  successColor, successRGB, successRGBA,
  infoColor, infoRGB, infoRGBA,
  roseColor, roseRGB, roseRGBA,
  grayColor,
  raidColors,
  boxShadow,
  defaultBoxShadow,
  primaryBoxShadow,
  primaryHoverShadow,
  infoBoxShadow,
  infoHoverShadow,
  successBoxShadow,
  successHoverShadow,
  warningBoxShadow,
  warningHoverShadow,
  dangerBoxShadow,
  dangerHoverShadow,
  roseBoxShadow,
  roseHoverShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  lighten,
  darken,
  robotoSlab,
  roboto,
  colorProps
};
