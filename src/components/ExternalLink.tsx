const ExternalLink = (props:any) => {
  return(
    <a href={props.path} rel="noreferrer" target="_blank">
      {props.children}
    </a>
  )
};

export default ExternalLink;
