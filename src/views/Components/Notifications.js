import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components

import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Clearfix from "mui/Clearfix/Clearfix.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js";

const useStyles = makeStyles(styles);

const SUCCESS_NOTIF = 'SUCCESS_NOTIF'
, INFO_NOTIF = 'INFO_NOTIF'
, WARNING_NOTIF = 'WARNING_NOTIF'
, DANGER_NOTIF = 'DANGER_NOTIF';

const dispatchNotification = (type, message) => {
  let event = new Event(type);
  event.message = message;
  document.dispatchEvent(event);
}

export const dispatchInfo = (message) => dispatchNotification(INFO_NOTIF,message);
export const dispatchWarning = (message) => dispatchNotification(WARNING_NOTIF,message);
export const dispatchDanger = (message) => dispatchNotification(DANGER_NOTIF,message);
export const dispatchSuccess = (message) => dispatchNotification(SUCCESS_NOTIF,message);

export default function Notifications() {
  const classes = useStyles();

  const [notifs, updateNotifs] = useState([]);

  const addNotif = notif => {
    updateNotifs([...notifs,notif]);
  };
  
  const handleRemoveItem = (closeKey) => {
    updateNotifs(notifs.filter(item => item.closeKey !== closeKey));
  };

  const newNotif = (message,color,icon) => { return { message, color, icon, closeKey: message + notifs.length }}
    , successNotif = (message) => newNotif(message, 'success', Check)
    , warningNotif = (message) => newNotif(message, 'warning', Warning)
    , dangerNotif = (message) => newNotif(message,'danger','info_outline')
    , infoNotif = (message) => newNotif(message,'info','info_outline');

  document.addEventListener(SUCCESS_NOTIF,e => addNotif(successNotif(e.message)))
  document.addEventListener(INFO_NOTIF,e => addNotif(infoNotif(e.message)))
  document.addEventListener(WARNING_NOTIF,e => addNotif(warningNotif(e.message)))
  document.addEventListener(DANGER_NOTIF,e => addNotif(dangerNotif(e.message)))

  return (
    <div className={classes.section} id="notifications">
      {notifs.map((notif, i) => (
        <Snack
          message={
            <div>
              {typeof icon === "object"
              ? <notif.icon className={classes.icon} />
              : typeof icon === "string"
              ? <Icon className={classes.icon}>{notif.icon}</Icon>
              : null}
              {notif.message}
              <IconButton
                  className={classes.iconButton}
                  key={notif.closeKey}
                  aria-label="Close"
                  color="inherit"
                  onClick={handleRemoveItem.bind(null,notif.closeKey)}
                >
                <Close className={classes.close} />
              </IconButton>
            </div>
          }
          classes={{
            root: classes.root + " " + classes[notif.color],
            message: classes.message + " " + classes.container
          }}
        />
      ))}
      <Clearfix />
    </div>
  );
}
