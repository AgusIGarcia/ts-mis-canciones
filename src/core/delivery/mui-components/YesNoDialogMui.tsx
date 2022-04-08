import {
    Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

interface Props {
  className?: string;
  title?: string;
  message?: string;
  open: boolean;
  yes: () => void;
  no: () => void;
  yesText: string;
  noText: string;
}

const YesNoDialogMui = (props: Props) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.no} autoFocus>
          {props.noText}
        </Button>
        <Button
          onClick={props.yes}
        >
          {props.yesText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default YesNoDialogMui;
