import { List } from "@mui/material";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const ListMui = (props: Props) => {
  return <List className={props.className}>{props.children}</List>;
};

export default ListMui;
