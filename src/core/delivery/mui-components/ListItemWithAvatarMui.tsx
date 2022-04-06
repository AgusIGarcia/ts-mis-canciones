import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";

interface Props {
  className?: string;
  children?: React.ReactNode;
  img?: string;
  imgClassName?:string;
  primaryText?: string;
  secondaryText?: string;
  textClassName?:string;
}

const ListItemWithAvatarMui = (props: Props) => {
  return (
    <ListItem className={props.className}>
      <ListItemAvatar >
        <Avatar className={props.imgClassName} src={props.img} />
      </ListItemAvatar>
      <ListItemText
        className={props.textClassName}
        primary={props.primaryText}
        secondary={props.secondaryText}
      />
      <ListItemSecondaryAction>{props.children}</ListItemSecondaryAction>
    </ListItem>
  );
};

export default ListItemWithAvatarMui;
