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

import styles from "assets/jss/raidsmith/pages/detailPageStyle.js";
import Notifications from "views/Components/Notifications";
import { BackgroundImage } from "helpers/Backgrounds";
import { raidColors } from "assets/jss/raid-theme";

const mediaFor = faction => {
  try {
    return require(`assets/media/${faction}.mp4`)
  }
  catch (e) {
    return require(`assets/media/main_page.mp4`)
  }
}

const useStyles = makeStyles(styles);

export default function DetailPage(props) {
    const { pageTitle, header, children, bg, media } = props;
  const classes = useStyles();

  document.title = pageTitle || document.title;
  
  return (
    <div>
      <Header
        color="transparent"
        leftLinks={<LeftLinks />}
        rightLinks={<RightLinks />}
        fixed
        changeColorOnScroll={{
          height: 600,
          color: raidColors.bg.teal
        }}
      />
      <Parallax filter small image={BackgroundImage(bg)}>
        <video autoPlay="autoplay" loop="loop" muted style={{height: '100%', position: 'absolute', borderBottom: 'solid 2px'}}>
          <source src={mediaFor(media)} type="video/mp4" />
          Unable to playback video.
        </video>
        <div className={classes.headerContainer}>
          <GridContainer>
            <GridItem xs={12}>
              {header}
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
