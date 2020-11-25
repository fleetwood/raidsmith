import {
  raidTheme,
  primaryColor,primaryRGB,primaryRGBA,
  warningColor,warningRGB,warningRGBA,
  dangerColor,dangerRGB,dangerRGBA,
  successColor,successRGB,successRGBA,
  infoColor,infoRGB,infoRGBA,
  roseColor,roseRGB,roseRGBA,
  raidColors,
  grayColor,
  boxShadow,
  defaultBoxShadow,
  primaryBoxShadow,
  primaryHoverShadow,
  infoBoxShadow,
  infoHoverShadow,
  successBoxShadow,
  successHoverShadow,
  warningBoxShadow,
  warningHoverShadow,
  dangerBoxShadow,
  dangerHoverShadow,
  roseBoxShadow,
  roseHoverShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  lighten,
  darken,
  colorProps,
  roboto,
  robotoSlab
} from "assets/jss/raid-theme";

/*!

 =========================================================
 * Material Kit React - v1.9.0 based on Material Kit - v2.0.2
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};
const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};

const defaultFont = {
  ...roboto,
  fontWeight: "300",
  lineHeight: "1.5em"
};

const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto",
  ...defaultFont
};

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};

const title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  ...robotoSlab
};

const cardTitle = {
  ...title,
  marginTop: ".625rem"
};

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};

const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};

export {
  //variables
  raidTheme,
  drawerWidth,
  transition,
  container,
  containerFluid,
  card,
  defaultFont,
  primaryColor,primaryRGB,primaryRGBA,
  warningColor,warningRGB,warningRGBA,
  dangerColor,dangerRGB,dangerRGBA,
  successColor,successRGB,successRGBA,
  infoColor,infoRGB,infoRGBA,
  roseColor,roseRGB,roseRGBA,
  raidColors,
  grayColor,
  boxShadow,
  defaultBoxShadow,
  primaryBoxShadow,
  primaryHoverShadow,
  infoBoxShadow,
  infoHoverShadow,
  successBoxShadow,
  successHoverShadow,
  warningBoxShadow,
  warningHoverShadow,
  dangerBoxShadow,
  dangerHoverShadow,
  roseBoxShadow,
  roseHoverShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  cardActions,
  cardHeader,
  title,
  cardTitle,
  cardLink,
  cardSubtitle,
  lighten,
  darken,
  colorProps,
  roboto,
  robotoSlab
};
