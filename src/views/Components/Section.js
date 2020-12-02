import React from "react";

import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { raidColors } from "assets/jss/raid-theme";

const useStyles = makeStyles({
    Section: {
        color: raidColors.font.beige,
        "& h3": {
            color: raidColors.font.teal,
            borderBottom: `solid 1px ${raidColors.border.teal1}`
        }
    }
});

const Section = (props) => {
    const {sectionStyle, title, children} = props;
    const classes = useStyles();

    const sectionClass = classNames(
        classes.Section,
        sectionStyle
    )

    return (
    <div className={sectionClass}>
        {title && (
            <h3>{title}</h3>
        )}
        {children}
    </div>
    )
}

export default Section;