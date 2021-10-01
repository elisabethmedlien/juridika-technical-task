const Pagination = (props:any) => {

  let { handleChangePage, currentPage, numberOfPages } = props;

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={_ => handleChangePage(currentPage - 1)}>Previous Page</button>

        {Array
        .from(Array(props.numberOfPages+1).keys())    // creates an array with n+1 indexes, and names them by index
        .slice(1)                                     // remove zero 
        .map(page => 
          <button
            key={page}
            className={currentPage === page ? "active": ""} 
            onClick={_ => handleChangePage(page)} 
          >
            {page}
          </button>
        )}

      <button disabled={currentPage === numberOfPages} onClick={_ => handleChangePage(currentPage + 1)}>Next page</button>
    </div>
  )
};

export default Pagination;