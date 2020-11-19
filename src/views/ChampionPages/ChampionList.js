import React from "react";
import LandingPage from "layouts/LandingPage.js";

import styles from "assets/jss/raidsmith/pages/basicPageStyle.js";
import { makeStyles } from "@material-ui/core";

import GridContainer from "mui/Grid/GridContainer";

import { championsEager } from "data/mocks";
import ChampMini from "./ChampMini";

const useStyles = makeStyles(styles);

export default function ChampionList() {
  const classes = useStyles();

  return (
    <LandingPage
      bg="random render"
      title="Raidsmith"
      subTitle="The ultimate resource for RAID Shadow Legends."
      >
        <GridContainer className={classes.container}>
        {championsEager.map (champ => 
            <ChampMini champ={champ} />
        )}
        </GridContainer>
    </LandingPage>
  );
}
