const Avatar = (props:any) => {
  console.log(props.descr)
  return (
    <img className="avatar" src={props.path} alt={props.descr} />
  )
}

export default Avatar;