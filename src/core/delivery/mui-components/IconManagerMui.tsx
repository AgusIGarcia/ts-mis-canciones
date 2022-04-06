import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LaunchIcon from "@mui/icons-material/Launch";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  className?: string;
  icon?: string;
}

const IconManagerMui = (props: Props) => {
  switch (props.icon) {
    case "home":
      return <HomeIcon className={props.className} />;
    case "search":
      return <SearchIcon className={props.className} />;
    case "addCircle":
      return <AddCircleIcon className={props.className} />;
    case "launch":
      return <LaunchIcon className={props.className} />;
    case "delete":
      return <DeleteIcon className={props.className} />;
    default:
      return null;
  }
};

export default IconManagerMui;
