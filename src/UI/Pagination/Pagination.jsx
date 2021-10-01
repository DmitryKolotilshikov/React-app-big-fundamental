import React, { useMemo } from 'react';
import { Button } from '../button';

export const Pagination = ({ totalPage, currentPage, changePage }) => {
  const pagesArray = useMemo(() => {
    return Array(totalPage)
      .fill(0)
      .map((_, i) => i + 1);
  }, [totalPage]);

  return (
    <>
      {pagesArray.map(pageNumber => (
        <Button
          style={currentPage === pageNumber ? { border: '3px solid orange' } : null}
          key={pageNumber}
          onClick={() => changePage(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}
    </>
  );
};
