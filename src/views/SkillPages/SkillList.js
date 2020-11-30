import React, { useState } from "react";
import LandingPage from "layouts/LandingPage.js";

import baseStyle from "assets/jss/raidsmith/pages/basicPageStyle.js";
import { makeStyles } from "@material-ui/core";

import GridContainer from "mui/Grid/GridContainer";

import { mocks } from "data/mocks";
import GridItem from "mui/Grid/GridItem";
import { Link } from "react-router-dom";
import { SkillIcon } from "helpers/Backgrounds";
import { AutoDropdown, autoType } from "views/Components/AutoDropdown";
import { AutoFilter } from "views/Components/AutoFilter";
import { raidColors } from "assets/jss/raid-theme";

const styles = {
  ...baseStyle,
  skillItem: {
    fontWeight: 'bold',
    color: raidColors.font.cream,
    '&:hover': {
      color: raidColors.font.green
    }
  }
}

const useStyles = makeStyles(styles);

export default function SkillList() {
  const classes = useStyles();
  const skills = mocks.skills;
  const [list, setList] = useState(skills);

  return (
    <LandingPage
      bg="random render"
      title="Raidsmith - Buffs and Debuffs"
      subTitle="The ultimate resource for RAID Shadow Legends."
      >
      {list && 
        <GridContainer 
          container 
          spacing={2} 
          justify="center"
          className={classes.container}
          >
            {/* <GridItem xs={12}>
              <AutoDropdown
                label="Search skills"
                id="skill-search"
                type={autoType.skill}
                suggestions={skills.map(s => s.name)} />
            </GridItem> */}
            <GridItem xs={12}>
              <AutoFilter
                label="Filter skills"
                id="skill-filter"
                type={autoType.skill}
                collection={skills} 
                onFilter={setList}
                filterBy="name"
                />
            </GridItem>
          {list && list.map (skill => 
            <GridItem xs={6} sm={4} md={3} key={skill.safename}>
                <Link to={`/skill/${skill.safename}`} className={classes.skillItem}>
                    <h4><img src={SkillIcon(skill.thumb)} alt={skill.name} /> {skill.name}</h4>
                </Link>
            </GridItem>
          )}
        </GridContainer>
      }
    </LandingPage>
  );
}
