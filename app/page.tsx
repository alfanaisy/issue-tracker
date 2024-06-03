import LatestIssue from './LatestIssue';
import { Pagination } from './components';

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return <LatestIssue />;
}
