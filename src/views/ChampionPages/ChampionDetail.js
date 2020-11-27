import React from "react";
import DetailPage from "layouts/DetailPage.js";

import styles from "assets/jss/raidsmith/pages/detailPageStyle.js";
import { makeStyles } from "@material-ui/core";

import { championsEager } from "data/mocks";
import { Thumbnail } from "helpers/Champions";
import { ChampIcon } from "helpers/Backgrounds";

import SplashPage from "layouts/SplashPage";
import GridContainer from "mui/Grid/GridContainer";
import GridItem from "mui/Grid/GridItem";

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
            <SplashPage
                bg="random render"
                title="YahNope"
                subTitle="Something did not work."
            >
                <h2 style={{ color: 'red' }}>{JSON.stringify(usecase)}</h2>
            </SplashPage>
        )
        : (
            <DetailPage
                bg="random render"
                pageTitle={`RAIDsmith / Champions / ${champ.name || 'Champion'}`}
                media={champ.faction.video}
                header={(
                    <div>
                        <div className={classes.headerClass}>
                            <h1 className={classes.champName}>{champ.name}</h1>
                            <img className={classes.affinityIcon}
                                src={ChampIcon(champ.affinity.icon)}
                                alt={champ.affinity.name} />
                        </div>
                        <h3 className={classes.specialtyName}>{champ.specialty.name}</h3>
                        <h4 className={classes.factionName}>{champ.faction.name}</h4>
                    </div>
                )}
                >
                <img className={classes.champThumb} src={Thumbnail(champ.thumb)} alt={champ.name} />
                
                <GridContainer container justify="space-evenly">
                    <GridItem xs={12} md={9}>
                        <div>HP: {champ.HP}</div>
                        <div>Attack: {champ.attack}</div>
                        <div>Defense: {champ.defense}</div>
                        <div>Speed: {champ.speed}</div>
                        <div>Crit. Rate: {champ.crate}</div>
                        <div>Crit. Dmg: {champ.cdamage}</div>
                        <div>ACC: {champ.accuracy}</div>
                        <div>Resist: {champ.resist}</div>
                    </GridItem>
                    {champ.aura !== 0 && (
                        <GridItem xs={12} md={9}>
                            <h5>
                                {champ.aura.name}&nbsp;
                                <img className={classes.auraIcon}
                                    src={ChampIcon(champ.aura.icon)}
                                    alt={champ.aura.name} />
                            </h5>
                            <div>{champ.aura.description}</div>
                        </GridItem>
                    )}
                </GridContainer>

            </DetailPage>
        )
}
