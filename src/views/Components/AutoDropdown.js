import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";
import { 
    raidColors,
    boxShadow 
} from "assets/jss/raid-theme";

import CustomInput from "mui/CustomInput/CustomInput";

export class autoType {
    static skill = 'skill';
    static aura = 'aura';
    static champion = 'champion'
}

const baseStyle = {
    dropDown: {
        ...boxShadow,
        padding: "1rem",
        position: "absolute",
        width: "100%",
        zIndex: 1,
        borderRadius: "0px 0px 10px 10px",
        marginTop: '-15px',
        transition: 'all 0.2s',
        "& li": {
            transition: 'all 0.2s',
            listStyleType: 'none',
            cursor: 'pointer',
            padding: '5px 15px',
        }
    }
}

const autocompleteStyle = {
    athel: {
        dropDown: {
            ...baseStyle.dropDown,
            background: raidColors.bg.athel,
            color: raidColors.font.cream,
            "& li:hover": {
                background: raidColors.bg.main,
                color: raidColors.font.crystal
            }
        }
    },
    darkathel: {
        dropDown: {
            ...baseStyle.dropDown,
            background: raidColors.bg.darkathel,
            color: raidColors.font.cream,
            "& li:hover": {
                background: raidColors.bg.main,
                color: raidColors.font.crystal
            }
        }
    },
    banner: {
        dropDown: {
            ...baseStyle.dropDown,
            background: raidColors.bg.banner,
            color: raidColors.font.cream,
            "& li:hover": {
                background: raidColors.bg.main,
                color: raidColors.font.crystal
            }
        }
    },
    storm: {
        dropDown: {
            ...baseStyle.dropDown,
            background: raidColors.bg.storm,
            color: raidColors.font.cream,
            "& li:hover": {
                background: raidColors.bg.main,
                color: raidColors.font.crystal
            }
        }
    },
    teal: {
        dropDown: {
            ...baseStyle.dropDown,
            background: raidColors.bg.teal,
            color: raidColors.font.cream,
            "& li:hover": {
                background: raidColors.bg.main,
                color: raidColors.font.crystal
            }
        }
    },
    sea: {
        dropDown: {
            ...baseStyle.dropDown,
            background: raidColors.bg.sea,
            color: raidColors.font.cream,
            "& li:hover": {
                background: raidColors.bg.main,
                color: raidColors.font.crystal
            }
        }
    },
    bleak: {
        dropDown: {
            ...baseStyle.dropDown,
            background: raidColors.bg.bleak,
            color: raidColors.font.cream,
            "& li:hover": {
                background: raidColors.bg.main,
                color: raidColors.font.crystal
            }
        }
    }
}


export function AutoDropdown(props) {
    const { label, id, suggestions, type, color } = props;
    const useStyles = makeStyles(autocompleteStyle[color || 'teal']);
    const classes = useStyles();

    const [status, setStatus] = useState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: ''
    });

    // Event fired when the input value is changed
    const onChange = e => {
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(s => s.toLowerCase().indexOf(userInput.toLowerCase()) > -1);

        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown
        setStatus({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    // Event fired when the user clicks on a suggestion
    const onClick = e => {
        // Update the user input and reset the rest of the state
        setStatus({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    };

    // Event fired when the user presses a key down
    const onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = status;

        // User pressed the enter key, update the input and close the
        // suggestions
        if (e.keyCode === 13) {
            setStatus({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        }
        // User pressed the up arrow, decrement the index
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }
            setStatus({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }
            setStatus({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    let suggestionsListComponent;

    if (status.showSuggestions && status.userInput) {
        if (status.filteredSuggestions.length) {
            suggestionsListComponent = (
                <ul class={classes.dropDown}>
                    {status.filteredSuggestions.map((suggestion, index) => {
                        let className;

                        // Flag the active suggestion with a class
                        if (index === status.activeSuggestion) {
                            className = "suggestion-active";
                        }

                        return (
                            <li
                                className={className}
                                key={suggestion}
                                onClick={onClick}
                            >
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            suggestionsListComponent = (
                <div class="no-suggestions">
                    <em>No suggestions, you're on your own!</em>
                </div>
            );
        }
    }

    return (
        <Fragment>
            <CustomInput
                labelText={label}
                id={id}
                formControlProps={{
                    fullWidth: true
                }}
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={status.userInput}
            />
            {suggestionsListComponent}
        </Fragment>
    );
}

AutoDropdown.propTypes = {
    type: PropTypes.oneOfType(autoType),
}