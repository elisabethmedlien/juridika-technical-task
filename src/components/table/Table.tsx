const Table = (props:any) => {
  return(
    <table className={props.cn}>
      {props.children}
    </table>
  );
}; 

export default Table;