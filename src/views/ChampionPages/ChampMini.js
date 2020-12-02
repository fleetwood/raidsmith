import React from "react";

// import classNames from "classnames";
import styles from "assets/jss/raidsmith/components/champMiniStyle.js";
import { makeStyles } from "@material-ui/core";

import GridItem from "mui/Grid/GridItem";
import { Link } from "react-router-dom";
import ChampThumb from "./ChampThumb";

const useStyles = makeStyles(styles);

const ChampMini = (props) => {
    const { champ } = props;
    const classes = useStyles();

    return (
        <GridItem sm={6} md={2}>
            <Link to={`/champ/${champ.safename}`} >
                <ChampThumb name aura affinity champ={champ}>
                    <div className={classes.specialtyName}>{champ.specialty.name}</div>
                    <div className={classes.factionName}>{champ.faction.name}</div>
                </ChampThumb>
            </Link>
        </GridItem>
    )
}

export default ChampMini;