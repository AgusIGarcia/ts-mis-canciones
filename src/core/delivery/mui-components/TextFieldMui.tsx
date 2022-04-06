import { TextField } from "@mui/material";

interface Props {
  label: string;
  className?: string;
  value: string;
  onChange: (s: string) => void;
  required?: boolean;
  validationErrorMessage: string;
}

const TextFieldMui = (props: Props) => {
  return (
    <TextField
      className={props.className}
      label={props.label}
      variant="outlined"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      required={props.required}
      onInvalid={(e) =>
        (e.target as HTMLInputElement).setCustomValidity(
          props.validationErrorMessage
        )
      }
      onInput={e => (e.target as HTMLInputElement).setCustomValidity("")}
    />
  );
};

TextFieldMui.defaultProps = {
  validationErrorMessage: "",
};

export default TextFieldMui;
