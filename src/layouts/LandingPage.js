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

export default function LandingPage(props) {
    const { title, subTitle, children} = props;
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
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
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
