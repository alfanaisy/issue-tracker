import { Box, Button, Skeleton, Spinner } from '@radix-ui/themes';

const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl space-y-3">
      <Skeleton width={'100%'} height={'30px'}></Skeleton>
      <Skeleton width={'100%'} height={'340px'}></Skeleton>
      <Button className="w-max" disabled>
        <Spinner />
      </Button>
    </Box>
  );
};

export default LoadingNewIssuePage;
