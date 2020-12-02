import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import CustomInput from "mui/CustomInput/CustomInput";

export function AutoFilter(props) {
    const { label, id, collection, filterBy, onFilter} = props;

    const filter = (e) => {
        const term = e.currentTarget.value;
        const match = (t) => t.toLowerCase().indexOf(term.toLowerCase()) > -1
        const filteredItems = term.length > 1 
            ? collection.filter(c => match(filterBy ? c[filterBy] : c))
            : collection;
        onFilter(filteredItems);
    }

    return (
        <Fragment>
            <CustomInput
                labelText={label}
                id={id}
                formControlProps={{fullWidth: true}}
                onKeyDown={filter}
                onChange={filter}
                crystal
            />
        </Fragment>
    );
}

AutoFilter.propTypes = {
    filterBy: PropTypes.string,
    onFilter: PropTypes.func,
}