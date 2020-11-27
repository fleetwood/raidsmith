import { container, title } from "assets/jss/material-kit-react.js";
import {
    raidTheme,
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
    // warningCardHeader,
    // successCardHeader,
    // dangerCardHeader,
    // infoCardHeader,
    // primaryCardHeader,
    // roseCardHeader,
    //   lighten,
    //   darken,
    //   robotoSlab,
    //   roboto,
    //   colorProps
} from "assets/jss/raid-theme.js"

export default {
    ...raidTheme,
    headerContainer: {
        ...container,
        zIndex: 12,
    },
    headerClass: {
      display: 'inline-block',
      position: 'relative',
      "& h1": {
        float: 'left',
        margin: 0,
      },
      '& img': {
        bottom: '8px',
        position: 'absolute',
        marginLeft: '20px',
        height: '40px'
      }
    },
    champThumb: {
      right: '5%',
      top: '-5%',
      position: 'absolute',
      border: 'solid 4px',
    },
    container: {
        zIndex: "12",
        color: grayColor,
        ...container
    },
    main: {
      background: raidColors.bg.athel,
      position: "relative",
      zIndex: "3"
    },
    mainRaised: {
      padding: "2rem",
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    }
};
