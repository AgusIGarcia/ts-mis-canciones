interface Props {
  alt: string;
  className?: string;
  src: string;
}

const ImageDefault = (props: Props) => {
  return <img className={props.className} src={props.src} alt={props.alt} />;
};

export default ImageDefault;
