import { IconButton } from "@mui/material";
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
  type?: "button" | "submit" | "reset" | undefined;
  icon: string;
  iconClassName?: string;
  onClick?: React.MouseEventHandler;
}

const IconButtonMui = (props: Props) => {
  return (
    <IconButton
      color={props.color}
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    >
      <IconManagerMui icon={props.icon} className={props.iconClassName} />
    </IconButton>
  );
};

IconButtonMui.defaultProps = {
  color: "primary",
};

export default IconButtonMui;
