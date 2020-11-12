import React from "react";
// nodejs library that concatenates classes

// import classNames from "classnames";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";

// import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import LandingPage from "layouts/LandingPage.js";
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import { Button } from "@material-ui/core";

import { 
  dispatchInfo, 
  dispatchWarning, 
  dispatchDanger, 
  dispatchSuccess 
} from "views/Components/Notifications";

// const useStyles = makeStyles(styles);

export default function HomePage(props) {
  // const classes = useStyles();
  const handleInfo = () => dispatchInfo('This is an info event');
  const handleSuccess = () => dispatchSuccess('This is a success event');
  const handleDanger = () => dispatchDanger('This is a dangerous event yo!');
  const handleWarning = () => dispatchWarning('DANGER WILL ROBINSON!!!!!!');

  return (
    <LandingPage
      bg="random render"
      title="Raidsmith"
      subTitle="The ultimate resource for RAID Shadow Legends."
      >
        <Button onClick={handleInfo} >Test Info Notif</Button>
        <Button onClick={handleSuccess} >Test Success Notif</Button>
        <Button onClick={handleWarning} >Test Warning Notif</Button>
        <Button onClick={handleDanger} >Test Danger Notif</Button>
      <ProductSection />
      <TeamSection />
      <WorkSection />
    </LandingPage>
  );
}
