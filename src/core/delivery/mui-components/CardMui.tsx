import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { useState } from "react";

interface Props {
  className?: string;
  imgClassName?: string;
  imgSrc?: string;
  children: React.ReactNode[];
  loader: JSX.Element;
  contentClassName?: string;
  actionsClassName?: string;
}

const CardMui = (props: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const loadImg = () => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = props.imgSrc || "";
  };

  loadImg();
  return (
    <Card className={props.className}>
      {imageLoaded ? (
        <CardMedia
          className={props.imgClassName}
          component="img"
          image={props.imgSrc}
        />
      ) : (
        props.loader
      )}
      <CardContent className={props.contentClassName}>
        {props.children[0]}
      </CardContent>
      <CardActions className={props.actionsClassName}>
        {props.children[1]}
      </CardActions>
    </Card>
  );
};

export default CardMui;
