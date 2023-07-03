import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// defining prop types for Pagination components
interface PaginationProps {
  totalPage: number;
}

export default function BasicPagination(props: PaginationProps) {
  const { totalPage } = props;
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Update the current active page
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPage} // Total number of pages
        page={currentPage} // Current active page
        onChange={handlePageChange} // Event handler for page change
      />
    </Stack>
  );
}
