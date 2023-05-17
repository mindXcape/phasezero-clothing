import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
  totalPage: number;
}

export default function BasicPagination(props: PaginationProps) {
  const { totalPage } = props;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPage}
        color="primary"
        page={currentPage}
        onChange={handlePageChange}
      />
    </Stack>
  );
}
