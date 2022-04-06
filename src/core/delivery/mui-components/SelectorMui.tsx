import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { StringMenuItem } from "../../types/StringMenuItem";

interface Props {
  className?: string;
  items: StringMenuItem[];
  defaultValue?: string;
  changeHandler: (s:string) => void;
}

const SelectorMui = (props: Props) => {

  const handleChange = (event: SelectChangeEvent) => {
    props.changeHandler(event.target.value);
  };
  
  return (
    <Select defaultValue={props.defaultValue} className={props.className} onChange={handleChange}>
      {props.items.map((i) => (
        <MenuItem key={i.id} value={i.value}>
          {i.content}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectorMui;
