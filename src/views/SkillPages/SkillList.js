import React from "react";
import LandingPage from "layouts/LandingPage.js";

import styles from "assets/jss/raidsmith/pages/basicPageStyle.js";
import { makeStyles } from "@material-ui/core";

import GridContainer from "mui/Grid/GridContainer";

import { mocks } from "data/mocks";
import GridItem from "mui/Grid/GridItem";
import { Link } from "react-router-dom";
import { SkillIcon } from "helpers/Backgrounds";
import Autocomplete from "views/Components/Autocomplete";

const useStyles = makeStyles(styles);
const skills = mocks.skills;

export default function SkillList() {
  const classes = useStyles();

  return (
    <LandingPage
      bg="random render"
      title="Raidsmith - Buffs and Debuffs"
      subTitle="The ultimate resource for RAID Shadow Legends."
      >
        <GridContainer 
          container 
          spacing={2} 
          justify="center"
          className={classes.container}
          >
            <GridItem xs={12}>
              <Autocomplete suggestions={[
                'One', 'Two', 'Three'
              ]}
              label="Search skills"
              id="skill-search" />
            </GridItem>
          {skills.map (skill => 
            <GridItem xs={12}>
                <Link to={`/skill/${skill.safename}`}>
                    <h4> {skill.name} <img src={SkillIcon(skill.thumb)} alt={skill.name} /></h4>
                    <div>{skill.description}</div>
                </Link>
            </GridItem>
          )}
        </GridContainer>
    </LandingPage>
  );
}
