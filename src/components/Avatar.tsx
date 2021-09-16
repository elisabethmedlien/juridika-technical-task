const Avatar = (props:any) => {
  return (
    <img className="avatar" src={props.path} alt={props.descr} />
  )
}

export default Avatar;