import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "mui/Header/Header.js";
import LeftLinks from "mui/Header/LeftLinks.js";
import RightLinks from "mui/Header/RightLinks.js";
import Footer from "mui/Footer/Footer.js";
import GridContainer from "mui/Grid/GridContainer.js";
import GridItem from "mui/Grid/GridItem.js";
import Card from "mui/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { BackgroundImage } from "helpers/Backgrounds";

const useStyles = makeStyles(styles);

export default function SplashPage(props) {
  const { pageTitle, children, bg } = props;

  document.title = pageTitle || document.title;

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();
  return (
    <div>
      <Header
        absolute
        color="transparent"
        leftLinks={<LeftLinks />}
        rightLinks={<RightLinks />}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + BackgroundImage(bg) + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          {<GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                {children}
              </Card>
            </GridItem>
          </GridContainer>
          }</div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
