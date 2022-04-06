import { CircularProgress } from "@mui/material";

interface Props {
  className?: string;
  loaderClassName?: string;
  size?:string;
}

const LoaderMui = (props: Props) => {
  return (
    <div className={props.className}>
      <CircularProgress className={props.loaderClassName} size={props.size}/>
    </div>
  );
};

export default LoaderMui;
