import React, { useState } from "react";
import LandingPage from "layouts/LandingPage.js";

import styles from "assets/jss/raidsmith/pages/basicPageStyle.js";
import { makeStyles } from "@material-ui/core";

import { championsEager } from "data/mocks";
import { Thumbnail } from "helpers/Champions";
import { ChampIcon } from "helpers/Backgrounds";

const useStyles = makeStyles(styles);

export default function ChampionDetail(props) {
    let champ;
    const noChamp = () => (champ === undefined || champ === null);

    let id = props.match.params.id;

    if (isNaN(Number(id))) {
        champ = championsEager.filter(c => c.safename.toLowerCase() === id.toLowerCase())[0]
    }
    else {
        champ = championsEager.filter(c => c.id === Number(id))[0];
    }

    const classes = useStyles();
    let usecase = 'Unknown'

    if (noChamp()) {
        championsEager.forEach(c => {
            usecase += `${c.name}: [id:${c.id}, safename:${c.safename}] != ${id}`;
        });
    }

    return (noChamp())
        ? (
            <LandingPage
                bg="random render"
                title="YahNope"
                subTitle="Something did not work."
            >
                <h2 style={{ color: 'red' }}>{JSON.stringify(usecase)}</h2>
            </LandingPage>
        )
        : (
            <LandingPage
                bg="random render"
                pageTitle={`RAIDsmith / Champions / ${champ.name || 'Champion'}`}
                title={champ.name}
                subTitle="RAIDSMITH"
            >
                <img style={{ width: '100%' }} src={Thumbnail(champ.thumb)} alt={champ.name} />

                <h1 className={classes.champName}>{champ.name}</h1>
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

            </LandingPage>
        )
}
