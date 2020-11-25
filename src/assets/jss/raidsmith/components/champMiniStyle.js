import { 
    container, 
    title 
} from "assets/jss/material-kit-react.js";
import {
    raidTheme,
    grayColor,
    raidColors,
    robotoSlab
} from "assets/jss/raid-theme.js"

export default {
    ...raidTheme,
    title: {
        ...title,
        ...robotoSlab,
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
    content: {
        top: '0',
        position: 'absolute',
        padding: '10px',
        color: raidColors.font.white,
        width: '100%',
        height: '100%',
    },
    champName: {
        fontSize: '1.1rem',
        fontWeight: 700,
        width: '90%',
        textTransform: 'uppercase',
        textShadow: `0px 2px 2px black`,
    },
    factionName: {
        textShadow: `2px 3px 2px black`,
        position: 'absolute',
        bottom: '8px',
        fontWeight: 400,
    },
    specialtyName: {
        textShadow: `2px 3px 2px black`,
        position: 'absolute',
        bottom: '28px',
        fontWeight: 600,
    },
    affinityIcon: {
        position: `absolute`,
        width: `45%`,
        right: '5px',
        bottom: '5px'
    },
    auraIcon: {
        position: `absolute`,
        height: `20%`,
        right: '-5px',
        top: '5px',
    },
    borderCommon: {
        ...raidTheme.borderCommon
    },
    borderUncommon: {
        ...raidTheme.borderUncommon
    },
    borderRare: {
        ...raidTheme.borderRare
    },
    borderEpic: {
        ...raidTheme.borderEpic
    },
    borderLegendary: {
        ...raidTheme.borderLegendary
    },
};
