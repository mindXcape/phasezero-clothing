import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
  count: number;
}

export default function BasicPagination(props: PaginationProps) {
  const { count } = props;
  return (
    <Stack spacing={2}>
      <Pagination count={count} color="primary" />
    </Stack>
  );
}
