const Link = (props:any) => {
  return(
    <a href={props.path}>
      {props.children}
    </a>
  )
};

export default Link;
