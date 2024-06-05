import { Skeleton, Stack } from "@mui/material";

const SkeletonDetailsLoading = () => {
  return (
    <Stack spacing={2} direction="column">
      <Skeleton variant="rounded" width={"100%"} height={300} />
      <Skeleton variant="rounded" width={"100%"} height={150} />
    </Stack>
  );
};

export default SkeletonDetailsLoading;
