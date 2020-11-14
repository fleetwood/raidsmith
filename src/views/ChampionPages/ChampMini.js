import React from "react";

import GridItem from "mui/Grid/GridItem";

// import classNames from "classnames";
import styles from "assets/jss/raidsmith/pages/basicPageStyle";
import { makeStyles } from "@material-ui/core";
import {raidColors} from "assets/jss/raid-theme"

import { Thumbnail } from "helpers/Champions";
import { ChampIcon } from "helpers/Backgrounds";

const colorLegendary = raidColors.rarity.legendary
    , colorEpic = raidColors.rarity.epic
    , colorRare = raidColors.rarity.rare
    , colorUncommon = raidColors.rarity.uncommon
    , colorCommon = raidColors.rarity.common;

const miniStyles = {
    ...styles,
    borderLegendary: {
        position: 'relative',
        margin: '3px',
        padding: '3px',
        border: `solid 2px ${colorLegendary}`,
        '&:before': {
            content: `''`,
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            zIndex: -1,
            margin: 0,
            background: `linear-gradient(to bottom, ${colorLegendary}, white,${colorLegendary})`
        }
    },
    borderEpic: {
        position: 'relative',
        margin: '3px',
        padding: '3px',
        border: `solid 2px ${colorEpic}`,
        '&:before': {
            content: `''`,
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            zIndex: -1,
            margin: 0,
            background: `linear-gradient(to bottom, ${colorEpic}, white,${colorEpic})`
        }
    },
    borderRare: {
        position: 'relative',
        margin: '3px',
        padding: '3px',
        border: `solid 2px ${colorRare}`,
        '&:before': {
            content: `''`,
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            zIndex: -1,
            margin: 0,
            background: `linear-gradient(to bottom, ${colorRare}, white,${colorRare})`
        }
    },
    borderUncommon: {
        position: 'relative',
        margin: '3px',
        padding: '3px',
        border: `solid 2px ${colorUncommon}`,
        '&:before': {
            content: `''`,
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            zIndex: -1,
            margin: 0,
            background: `linear-gradient(to bottom, ${colorUncommon}, white,${colorUncommon})`
        }
    },
    borderCommon: {
        position: 'relative',
        margin: '3px',
        padding: '3px',
        border: `solid 2px ${colorCommon}`,
        '&:before': {
            content: `''`,
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            zIndex: -1,
            margin: 0,
            background: `linear-gradient(to bottom, ${colorCommon}, white,${colorCommon})`
        }
    },
    content: {
        top: '0',
        position: 'absolute',
        padding: '10px',
        color: raidColors.font.white,
        width: '100%',
        height: '100%',
    },
    champName: {
        textShadow: `0px 0px 5px black`,
        fontWeight: 700,
        width: '90%',
        opacity: 0.8,
        textTransform: 'uppercase'
    },
    factionName: {
        textShadow: `2px 3px 2px black`,
        position: 'absolute',
        bottom: '8px'
    },
    affinityIcon: {
        position: `absolute`,
        height: `25px`,
        left: '3px',
    },
    auraIcon: {
        position: `absolute`,
        height: `40px`,
        right: '-5px',
        top: '5px',
    }
}

const useStyles = makeStyles(miniStyles);

const rarity = (champ) => {
    switch(champ.rarity) {
        case 5:
            return "Legendary";
        case 4:
            return "Epic";
        case 3:
            return "Rare";
        case 2:
            return "Uncommon"
        default:
            return "Common";
    }
}

const ChampMini = (props) => {
    const { champ } = props;
    const classes = useStyles();
    const rarityChamp = rarity(champ);

    return (
        <GridItem xs={2} className={classes[`border${rarityChamp}`]}>
            <div className={classes.content}>
                <div className={classes.champName}>{champ.name}</div>
                <div>
                    <img className={classes.auraIcon} src={ChampIcon(champ.aura.icon)} alt={champ.aura.name} />
                </div>
                <div className={classes.factionName}>{champ.faction.name}</div>
                <div className={classes.affinityIcon}>
                    <img className={classes.affinityIcon} src={ChampIcon(champ.affinity.icon)} alt={champ.affinity.name} />
                </div>
            </div>
            <img style={{width: '100%'}} src={Thumbnail(champ.thumb)} alt={champ.name} />
        </GridItem>
    )
}

export default ChampMini;