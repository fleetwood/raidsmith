import React from "react";
import LandingPage from "layouts/LandingPage.js";
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
// const useStyles = makeStyles(styles);

export default function HomePage(props) {
  // const classes = useStyles();

  return (
    <LandingPage
      bg="random render"
      title="Raidsmith"
      subTitle="The ultimate resource for RAID Shadow Legends."
      >
      <ProductSection />
      <TeamSection />
      <WorkSection />
    </LandingPage>
  );
}
