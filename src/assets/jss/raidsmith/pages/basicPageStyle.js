import { container } from "assets/jss/material-kit-react";
import { title } from "assets/jss/material-kit-react.js";
import {
    // primaryColor,primaryRGB,primaryRGBA,
    //   warningColor,warningRGB,warningRGBA,
    //   dangerColor,dangerRGB,dangerRGBA,
    //   successColor,successRGB,successRGBA,
    //   infoColor,infoRGB,infoRGBA,
    //   roseColor,roseRGB,roseRGBA,
    grayColor,
    raidColors,
    //   boxShadow,
    //   defaultBoxShadow,
    //   primaryBoxShadow,
    //   primaryHoverShadow,
    //   infoBoxShadow,
    //   infoHoverShadow,
    //   successBoxShadow,
    //   successHoverShadow,
    //   warningBoxShadow,
    //   warningHoverShadow,
    //   dangerBoxShadow,
    //   dangerHoverShadow,
    //   roseBoxShadow,
    //   roseHoverShadow,
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    roseCardHeader,
    //   lighten,
    //   darken,
    //   robotoSlab,
    //   roboto,
    //   colorProps
} from "assets/jss/raid-theme.js"

export default {
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    container: {
        ...container,
        padding: '4em',
        color: grayColor,
        "& p, h1, h2, h3": {
            color: grayColor
        }
    },
    champThumb: {
        border: `solid ${raidColors.border.width} ${raidColors.border.teal1}`,
        color: raidColors.blue
    },
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    roseCardHeader
};
