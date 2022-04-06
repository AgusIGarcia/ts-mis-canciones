import { Alert, AlertColor, Snackbar } from "@mui/material";
import { useState } from "react";

interface Props {
  className?: string;
  autoHideDuration?: number;
  severity?: AlertColor;
  message?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  vertical: "bottom" | "top";
  horizontal: "left" | "center" | "right";
}

const SnackbarMui = (props: Props) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    props.setOpen(false);
  };
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={props.autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{vertical: props.vertical, horizontal: props.horizontal}}
    >
      <Alert
        onClose={handleClose}
        severity={props.severity}
        className={props.className}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
};

SnackbarMui.defaultProps = {
  autoHideDuration: 6000,
};

export default SnackbarMui;
