import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import inputStyles from "assets/jss/material-kit-react/components/customInputStyle.js";
import { raidColors } from "assets/jss/raid-theme";

const bolder = { fontWeight: 700 };
const styles = {
  ...inputStyles,
  goldInput: {
    ...bolder,
    "&,&::placeholder": {
      color: raidColors.font.gold,
      opacity: "1"
    }
  },
  goldUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: raidColors.font.gold
    },
    "&:after": {
      borderColor: raidColors.font.gold
    }
  },
  beigeInput: {
    ...bolder,
    "&,&::placeholder": {
      color: raidColors.font.beige,
      opacity: "1"
    }
  },
  beigeUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: raidColors.font.beige
    },
    "&:after": {
      borderColor: raidColors.font.beige
    }
  },
  crystalInput: {
    ...bolder,
    "&,&::placeholder": {
      color: raidColors.font.crystal,
      opacity: "1"
    }
  },
  crystalUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: raidColors.font.crystal
    },
    "&:after": {
      borderColor: raidColors.font.crystal
    }
  },
  tealInput: {
    ...bolder,
    "&,&::placeholder": {
      color: raidColors.font.teal,
      opacity: "1"
    }
  },
  tealUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: raidColors.font.teal
    },
    "&:after": {
      borderColor: raidColors.font.teal
    }
  },
  greenInput: {
    ...bolder,
    "&,&::placeholder": {
      color: raidColors.font.green,
      opacity: "1"
    }
  },
  greenUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: raidColors.font.green
    },
    "&:after": {
      borderColor: raidColors.font.green
    }
  },
}

const useStyles = makeStyles(styles);

export default function CustomInput(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    gold,
    beige,
    crystal,
    teal,
    green,
    inputRootCustomClasses,
    success,
    onChange,
    onKeyUp,
    onKeyDown,
    onKey,
    value
  } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
    [classes.goldUnderline]: gold,
    [classes.beigeUnderline]: beige,
    [classes.crystalUnderline]: crystal,
    [classes.tealUnderline]: teal,
    [classes.greenUnderline]: green,
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
    [classes.goldInput]: gold,
    [classes.beigeInput]: beige,
    [classes.crystalInput]: crystal,
    [classes.tealInput]: teal,
    [classes.greenInput]: green,
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + " " + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses
        }}
        onKeyUp={onKeyUp || onKey}
        onKeyDown={onKeyDown || onKey}
        onChange={onChange}
        id={id}
        {...inputProps}
        value={value}
      />
    </FormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  value: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKey: PropTypes.func,
  onChange: PropTypes.func
};
