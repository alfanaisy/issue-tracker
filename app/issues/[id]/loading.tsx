import { Box, Card, Flex, Heading, Skeleton } from '@radix-ui/themes';

const LoadingIssueDetailPage = () => {
  return (
    <div>
      <Heading>
        <Skeleton>This is for issue title</Skeleton>
      </Heading>
      <Box className="flex space-x-5">
        <Skeleton>Text</Skeleton>
        <Skeleton>Created Date</Skeleton>
      </Box>
      <Card className="prose" mt={'4'}>
        <Skeleton>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ut nulla
          mollitia voluptates accusantium veritatis explicabo sapiente rem odio
          ipsum illo beatae cumque quos dolore, excepturi voluptatum quis facere
          vitae eos totam adipisci. Reprehenderit impedit, sequi distinctio
          veniam mollitia reiciendis totam cupiditate aspernatur quos animi.
          Possimus, enim eius maiores sit odio quos porro molestias in nam
          sequi. Voluptatibus veniam fuga provident veritatis odio voluptatem,
          illum ullam facilis deserunt aspernatur minima dignissimos consequatur
          magni cumque corrupti mollitia, fugit esse obcaecati voluptatum
          consequuntur hic, eligendi numquam nulla odit? Expedita, voluptatibus
          inventore eaque voluptatem eius placeat quod rem, quaerat deleniti
          necessitatibus, recusandae debitis.
        </Skeleton>
      </Card>
    </div>
  );
};

export default LoadingIssueDetailPage;
