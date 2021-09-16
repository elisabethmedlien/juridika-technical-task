const TableHeader = (props:any) => {
  return (
    <thead>
      <tr>{props.children}</tr>
    </thead>
  );
}; 

export default TableHeader;