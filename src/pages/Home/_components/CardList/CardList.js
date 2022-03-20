import React, { useContext, useState, useEffect } from 'react';
import { ArticlesContext } from '../../../../context/Articles.context';

// Components
import Filters from '../Filters/Filters';
import Button from '../../../../components/Button';
import Card from '../../../../components/Card/Card';
import Spinner from '../../../../components/Spinner';

// Utils
import { getDateNow } from '../utils';

// Styles
import { Grid, Pagination } from './CardList.styles';

export default function CardList() {
  const { articles, firstLoading, loading, maxPages, searchArticles } = useContext(ArticlesContext);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [beginDate, setBeginDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [order, setOrder] = useState('');
  const [advancedFilters, setAdvancedFilters] = useState(false);

  useEffect(() => {
    onSubmit();
  }, [page]);

  const onSubmit = (e, orderBy) => {
    if (e) e.preventDefault();
    const searchWord = searchValue.toLowerCase() || '';
    const begin = beginDate ? beginDate.replace(/-/gi, '') : '';
    const end = endDate ? endDate.replace(/-/gi, '') : beginDate ? getDateNow() : '';
    if (advancedFilters) searchArticles(searchWord, begin, end, orderBy || order, page);
    else searchArticles(searchWord, '', '', orderBy || order, page);
  };

  const nextPage = () => {
    if (loading) return;
    if (page < maxPages) setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    if (loading) return;
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <>
      <Filters
        onSubmit={onSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        beginDate={beginDate}
        setBeginDate={setBeginDate}
        endDate={endDate}
        setEndDate={setEndDate}
        advancedFilters={advancedFilters}
        setAdvancedFilters={setAdvancedFilters}
        setOrder={setOrder}
        order={order}
        handleSubmit={onSubmit}
        setPage={setPage}
      />
      {firstLoading && <Spinner />}
      {!firstLoading && articles && (
        <>
          {articles.length > 0 ? (
            <>
              <Grid>
                {articles.map((article, idx) => (
                  <Card key={idx} article={{ ...article, idx }} />
                ))}
              </Grid>
              <Pagination>
                <Button onClick={prevPage}>Previous</Button>
                <h3>{page}</h3>
                <Button onClick={nextPage}>Next</Button>
              </Pagination>
            </>
          ) : (
            <div>
              <h3>Hmmm...</h3>
              <p>{"We couldn't find any matches. Please try another search"}</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
