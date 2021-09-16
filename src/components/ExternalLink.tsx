const ExternalLink = (props:any) => {
  return(
    <a href={props.path} rel="nofollow" target="_blank">
      {props.children}
    </a>
  )
};

export default ExternalLink;
