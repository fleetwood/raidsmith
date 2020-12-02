import React from "react";

import styles from "assets/jss/raidsmith/components/champMiniStyle.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";

import { ChampIcon } from "helpers/Backgrounds";
import { Thumbnail } from "helpers/Champions";

const useStyles = makeStyles(styles);

const ChampThumb = (props) => {
    const { champ, detail, name, aura, affinity, children } = props;
    const classes = useStyles();

    const rarityBorder = rarity => classes[`border${rarity}`];

    const thumbClass = classNames({
        [classes.detailThumb]: detail,
        [rarityBorder(champ.rarity.name)]: true
    })
    
    return (
        <div className={thumbClass}>
            <img style={{width: detail ? 'calc(50px + (50) * (100vw / 400))' : ' 100%'}} src={Thumbnail(champ.thumb)} alt={champ.name} />
            <div className={classes.content}>
                {name && 
                    <div className={classes.champName}>{champ.name}</div>
                }
                {aura && champ.aura !== 0 &&
                    <div>
                        <img className={classes.auraIcon} 
                            src={ChampIcon(champ.aura.icon)} 
                            alt={champ.aura.name} />
                    </div>
                }
                {affinity && champ.affinity !== 0 && 
                    <div className={classes.affinityIcon}>
                        <img className={classes.affinityIcon} 
                            src={ChampIcon(champ.affinity.icon)} 
                            alt={champ.affinity.name} />
                    </div>
                }
                {children}
            </div>
        </div>
    )
}

export default ChampThumb;