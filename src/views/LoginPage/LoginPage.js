import React from "react";
// layout
import SplashPage from "layouts/SplashPage.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Button from "mui/CustomButtons/Button.js";
import CardBody from "mui/Card/CardBody.js";
import CardHeader from "mui/Card/CardHeader.js";
import CardFooter from "mui/Card/CardFooter.js";
import CustomInput from "mui/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const classes = useStyles();

  return (
    <SplashPage bg='renders/bystophus.jpg'>
      <form className={classes.form}>
        <CardHeader color="primary" className={classes.cardHeader}>
          <h4>Login</h4>
          <div className={classes.socialLine}>
            <Button
              justIcon
              href="#pablo"
              target="_blank"
              color="transparent"
              onClick={e => e.preventDefault()}
            >
              <i className={"fab fa-twitter"} />
            </Button>
            <Button
              justIcon
              href="#pablo"
              target="_blank"
              color="transparent"
              onClick={e => e.preventDefault()}
            >
              <i className={"fab fa-facebook"} />
            </Button>
            <Button
              justIcon
              href="#pablo"
              target="_blank"
              color="transparent"
              onClick={e => e.preventDefault()}
            >
              <i className={"fab fa-google-plus-g"} />
            </Button>
          </div>
        </CardHeader>
        <p className={classes.divider}>Or Be Classical</p>
        <CardBody>
          <CustomInput
            labelText="First Name..."
            id="first"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "text",
              endAdornment: (
                <InputAdornment position="end">
                  <People className={classes.inputIconsColor} />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            labelText="Email..."
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "email",
              endAdornment: (
                <InputAdornment position="end">
                  <Email className={classes.inputIconsColor} />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            labelText="Password"
            id="pass"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "password",
              endAdornment: (
                <InputAdornment position="end">
                  <Icon className={classes.inputIconsColor}>
                    lock_outline
                            </Icon>
                </InputAdornment>
              ),
              autoComplete: "off"
            }}
          />
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          <Button simple color="primary" size="lg">
            Get started
          </Button>
        </CardFooter>
      </form>
    </SplashPage>
  );
}
