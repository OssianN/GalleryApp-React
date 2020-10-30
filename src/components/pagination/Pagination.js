import React from 'react';

const Pagination = (props) => {
  const nextPage = () => {
    return props.pageNumber(props.currentPage + 1);
  }

  const prevPage = () => {
    if (props.currentPage > 1) {
      return props.pageNumber(props.currentPage - 1);
    }
  }

  return (
    <div className="pagination">
      <button onClick={prevPage}>Prev</button>
      <button onClick={nextPage}>Next</button>
    </div>
  )
}

export default Pagination;