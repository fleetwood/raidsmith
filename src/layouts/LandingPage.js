import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "mui/Header/Header.js";
import Footer from "mui/Footer/Footer.js";
import GridContainer from "mui/Grid/GridContainer.js";
import GridItem from "mui/Grid/GridItem.js";

import LeftLinks from "mui/Header/LeftLinks.js";
import RightLinks from "mui/Header/RightLinks.js";
import Parallax from "mui/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Notifications from "views/Components/Notifications";

// Sections for this page

const useStyles = makeStyles(styles);

const rand = (min,max) => Math.floor(min + Math.random() * ((max - min + 1)));

const wps = [
  'alure'
  , 'banner_lady'
  , 'butterflies'
  , 'durham'
  , 'grinner'
  , 'mausoleum_mage'
  , 'occult_brawler'
  , 'skullcrown'
].map(m => `wp/${m}.jpg`);

const renders = [
  'alure',
  'athel',
  'athel2',
  'bystophus',
  'cardinal',
  'krisk',
  'scyl',
  'whisper',
  'whisper2',
  'zargala',
].map(r => `renders/${r}.jpg`);

export const ResolveImage = (img) => {
  try {
    if (img === "random wp") {
      img = wps[rand(0,wps.length-1)]
    }
    else if (img === "random render") {
      img = renders[rand(0,renders.length-1)]
    }
    else if (img === "random") {
      let all = wps.concat(renders);
      img = all[rand(0,all.length-1)]
    }
    return require(`assets/img/${img}`);
  }
  catch(e) {
      return require(`assets/img/landing-bg.jpg`)
  }
}
export default function LandingPage(props) {
    const { title, subTitle, children, bg } = props;
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        leftLinks={<LeftLinks />}
        rightLinks={<RightLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Parallax filter image={ResolveImage(bg)}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} className={classes.titleGrid}>
              <h1 className={classes.title}>{title}</h1>
              <br/>
              {subTitle}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Notifications />
        <div className={classes.container}>
            {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
