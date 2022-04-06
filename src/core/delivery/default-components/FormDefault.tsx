interface Props {
  className?: string;
  autoComplete?: string;
  onSubmit?: (event: React.FormEvent) => void;
  onReset?: (event: React.FormEvent) => void;
  children: React.ReactNode;
}

const FormDefault = (props: Props) => {
  return (
    <form
      className={props.className}
      autoComplete={props.autoComplete}
      onSubmit={props.onSubmit}
      onReset={props.onReset}
    >
      {props.children}
    </form>
  );
};

export default FormDefault;
