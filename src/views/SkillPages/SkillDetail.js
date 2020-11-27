import React from "react";
import LandingPage from "layouts/LandingPage.js";

import styles from "assets/jss/raidsmith/pages/basicPageStyle.js";
import { makeStyles } from "@material-ui/core";

// import GridContainer from "mui/Grid/GridContainer";

import { 
  mocks,
  // championsEager 
} from "data/mocks";
import SplashPage from "layouts/SplashPage";
import { SkillIcon } from "helpers/Backgrounds";
import DetailPage from "layouts/DetailPage";
// import ChampMini from "views/ChampionPages/ChampMini";

const useStyles = makeStyles(styles);
const skills = mocks.skills;

export default function SkillDetail(props) {
  let skill;
  const noSkill = () => (skill === undefined || skill === null);

  let id = props.match.params.id;

  if (isNaN(Number(id))) {
      skill = skills.filter(c => c.safename.toLowerCase() === id.toLowerCase())[0]
  }
  else {
      skill = skills.filter(c => c.id === Number(id))[0];
  }
  const classes = useStyles();

  return (noSkill())
      ? (
          <SplashPage
              bg="random render"
              title="YahNope"
              subTitle="Something did not work."
          >
              <h2 style={{ color: 'red' }}>{`Unable to determine skill for ${id}`}</h2>
          </SplashPage>
      )
      : (
        <DetailPage
          bg="random render"
          title={`Raidsmith - Skills - ${skill.name}`}
          >
            <h4> {skill.name} <img src={SkillIcon(skill.thumb)} alt={skill.name} /></h4>
            <div>{skill.description}</div>
            {/* <GridContainer 
              container 
              spacing={2} 
              justify="center"
              className={classes.container}
              >
              {championsEager.map (champ => 
                <ChampMini skill={champ} />
              )}
            </GridContainer> */}
        </DetailPage>
      );
}
