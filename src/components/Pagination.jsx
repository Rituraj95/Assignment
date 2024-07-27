import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  // Handle page click event
  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1; // Convert zero-based index to one-based
    onPageChange(selectedPage);
  };

  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      pageCount={totalPages}
      onPageChange={handlePageClick}
      containerClassName="flex justify-center mt-4"
      pageLinkClassName="mx-1 px-3 py-1 border rounded"
      activeClassName="bg-blue-500 text-white"
      forcePage={currentPage - 1} // Set current active page
    />
  );
};

export default Pagination;
