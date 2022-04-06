import { Button } from "@mui/material";
import IconManagerMui from "./IconManagerMui";

interface Props {
  className?: string;
  color?:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  icon?: string;
  iconClassName?: string;
  onClick?: React.MouseEventHandler;
  buttonText?: string;
}

const IconTextButtonMui = (props: Props) => {
  return (
    <Button className={props.className} color="primary" onClick={props.onClick}>
      <IconManagerMui icon={props.icon} className={props.iconClassName} />
      {props.buttonText}
    </Button>
  );
};

IconTextButtonMui.defaultProps = {
  color: "primary",
};

export default IconTextButtonMui;
