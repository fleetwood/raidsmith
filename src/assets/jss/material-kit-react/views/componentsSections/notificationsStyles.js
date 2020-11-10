import { 
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  defaultBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  primaryBoxShadow,
  defaultFont,
  container, 
  infoColor,
  raidColors,
  title,
} from "assets/jss/material-kit-react.js";

const notificationsStyles = {
  section: {
    backgroundColor: "#FFFFFF",
    display: "block",
    width: "100%",
    position: "relative",
    padding: "0"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  snack: {
    ...defaultFont,
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "0px!important",
    maxWidth: "100%",
    minWidth: "auto",
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor,
    color: raidColors.font.white,
    ...infoBoxShadow
  },
  success: {
    backgroundColor: successColor,
    color: raidColors.font.white,
    ...successBoxShadow
  },
  warning: {
    backgroundColor: warningColor,
    color: raidColors.font.white,
    ...warningBoxShadow
  },
  danger: {
    backgroundColor: dangerColor,
    color: raidColors.font.white,
    ...dangerBoxShadow
  },
  primary: {
    backgroundColor: primaryColor,
    color: raidColors.font.white,
    ...primaryBoxShadow
  },
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%",
    "&,& *": {
      letterSpacing: "normal"
    }
  },
  close: {
    width: "14px",
    height: "14px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    position: "absolute",
    right: "-4px",
    top: "0",
    padding: "0"
  },
  icon: {
    display: "block",
    float: "left",
    marginRight: "1.071rem"
  },
  container: {
    ...container,
    position: "relative"
  }
};

export default notificationsStyles;
