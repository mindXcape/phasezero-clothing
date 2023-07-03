import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function ProductCardSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton
        variant="rectangular"
        width={250}
        height={320}
        animation="wave"
      />
    </Stack>
  );
}
