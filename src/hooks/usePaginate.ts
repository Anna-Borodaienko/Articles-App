/* eslint-disable @typescript-eslint/no-floating-promises */
import { useCallback, useEffect, useState } from 'react';

export const usePaginate = (getCount: () => Promise<number>) => {
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const itemsPerPage = 6;

  const handlePageChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  }, []);

  const resetPages = useCallback(() => {
    setPage(1);
  }, []);

  const from = (page - 1) * itemsPerPage;
  const to = from + itemsPerPage;

  useEffect(() => {
    (async () => {
      let count = await getCount();
      setCount(count);
      count = Math.ceil(count / itemsPerPage);
      setPageCount(count);
    })();
  }, [getCount]);

  return { page, pageCount, count, handlePageChange, from, to, resetPages };
};
