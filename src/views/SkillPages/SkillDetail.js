import React from "react";

import styles from "assets/jss/raidsmith/pages/basicPageStyle.js";
import { makeStyles } from "@material-ui/core";


import { 
  mocks,
  skillsEager
} from "data/mocks";

import GridContainer from "mui/Grid/GridContainer";
import SplashPage from "layouts/SplashPage";
import { SkillIcon } from "helpers/Backgrounds";
import DetailPage from "layouts/DetailPage";
import ChampMini from "views/ChampionPages/ChampMini";

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

  let champs = noSkill() ? [] : skillsEager.filter(s => s.id === skill.id)[0].champions;

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
          pageTiitle={`Raidsmith - Skills - ${skill.name}`}
          header={
            <h2>{skill.name} </h2>
          }
          >
            <img src={SkillIcon(skill.thumb)} alt={skill.name} />
            <div>{skill.description}</div>
            <GridContainer 
              container 
              spacing={2} 
              justify="center"
              className={classes.container}
              >
              {champs && champs.length > 0 && 
                champs.map(champ => 
                  <ChampMini champ={champ} />
                )
              }
            </GridContainer>
        </DetailPage>
      );
}
