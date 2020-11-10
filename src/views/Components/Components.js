import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridItem from "mui/Grid/GridItem.js";
import Button from "mui/CustomButtons/Button.js";
// sections for this page
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import LandingPage from "layouts/LandingPage.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  return (
    <LandingPage
      title="Material Kit React."
      subtitle="A Badass Material-UI Kit based on Material Design."
      >
      <SectionBasics />
      <SectionNavbars />
      <SectionTabs />
      <SectionPills />
      <SectionTypography />
      <SectionJavascript />
      <SectionCarousel />
      <SectionCompletedExamples />
      <SectionLogin />
      <GridItem md={12} className={classes.textCenter}>
        <Link to={"/login-page"} className={classes.link}>
          <Button color="primary" size="lg" simple>
            View Login Page
          </Button>
        </Link>
      </GridItem>
      <SectionExamples />
      <SectionDownload />
    </LandingPage>
  );
}
