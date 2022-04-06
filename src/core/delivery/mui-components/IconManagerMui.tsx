import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";

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
    default:
      return null;
  }
};

export default IconManagerMui;
