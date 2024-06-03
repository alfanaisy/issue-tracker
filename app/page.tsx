import { Pagination } from './components';

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Pagination itemCount={100} pageSize={10} currentPage={10} />
    </>
  );
}
