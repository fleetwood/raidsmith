import React from "react";

// import classNames from "classnames";
import styles from "assets/jss/raidsmith/components/champMiniStyle.js";
import { makeStyles } from "@material-ui/core";

import GridItem from "mui/Grid/GridItem";
import { Thumbnail } from "helpers/Champions";
import { ChampIcon } from "helpers/Backgrounds";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

const ChampMini = (props) => {
    const { champ } = props;
    const classes = useStyles();

    const rarityBorder = rarity => classes[`border${rarity}`]

    return (
        <GridItem sm={6} md={2}>
            <Link to={`/champ/${champ.safename}`} >
                <div className={rarityBorder(champ.rarity.name)}>
                <div className={classes.content}>
                    <div className={classes.champName}>{champ.name}</div>
                    <div>
                        <img className={classes.auraIcon} 
                            src={ChampIcon(champ.aura.icon)} 
                            alt={champ.aura.name} />
                    </div>
                    <div className={classes.affinityIcon}>
                        <img className={classes.affinityIcon} 
                            src={ChampIcon(champ.affinity.icon)} 
                            alt={champ.affinity.name} />
                    </div>
                    <div className={classes.specialtyName}>{champ.specialty.name}</div>
                    <div className={classes.factionName}>{champ.faction.name}</div>
                </div>
                <img style={{width: '100%'}} src={Thumbnail(champ.thumb)} alt={champ.name} />

                </div>
            </Link>
        </GridItem>
    )
}

export default ChampMini;