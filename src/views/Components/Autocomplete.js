import CustomInput from "mui/CustomInput/CustomInput";
import React, { Fragment, useState } from "react";

export default function Autocomplete(props) {
    const { label, id, suggestions } = props;

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
                <ul class="suggestions">
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
                // inputProps={{
                //     endAdornment: (<InputAdornment position="end"><People/></InputAdornment>)
                // }}
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={status.userInput}
            />
            {suggestionsListComponent}
        </Fragment>
    );
}
