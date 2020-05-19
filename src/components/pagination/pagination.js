import React from 'react';
import {
  PaginationList,
  PaginationItem,
  PaginationLink
} from './pagination.styles';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <PaginationList>
        {pageNumbers.map(number => (
          <PaginationItem key={number} className={`${currentPage === number ? 'active' : ''}`}>
            <PaginationLink onClick={() => paginate(number)} href='!#'>
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationList>
  );
};

export default Pagination;