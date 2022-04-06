import { Alert, AlertColor, AlertTitle } from "@mui/material";

interface Props {
  className?: string;
  titleClassName?: string;
  severity?: AlertColor;
  children?: React.ReactNode;
  title: string;
}

const AlertMui = (props: Props) => {
  return (
    <Alert severity={props.severity} className={props.className} icon={false}>
      <AlertTitle className={props.titleClassName}>{props.title}</AlertTitle>
      {props.children}
    </Alert>
  );
};

export default AlertMui;
