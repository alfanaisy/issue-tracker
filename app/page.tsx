import prisma from '@/prisma/client';
import IssueSummary from './IssueSummary';
import LatestIssue from './LatestIssue';
import { Pagination } from './components';
import IssueTable from './issues/list/IssueTable';
import IssueChart from './IssueChart';
import { Flex, Grid } from '@radix-ui/themes';
import { Metadata } from 'next';

export default async function Home() {
  const open = await prisma.issue.count({
    where: {
      status: 'OPEN',
    },
  });
  const inProgress = await prisma.issue.count({
    where: {
      status: 'IN_PROGRESS',
    },
  });
  const closed = await prisma.issue.count({
    where: {
      status: 'CLOSED',
    },
  });

  const statuses = { open, inProgress, closed };

  return (
    <Grid columns={{ initial: '1', md: '2' }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary {...statuses} />
        <IssueChart {...statuses} />
      </Flex>
      <LatestIssue />
    </Grid>
  );
}

export const metadata: Metadata = {
  title: 'Issue Tracker - Dashboard',
  description: 'View summary of project issues',
};
