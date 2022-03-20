import React from 'react';

// Components
import Switch from '../../../../components/Switch';
import Button from '../../../../components/Button';

// Utils
import { getDateNow } from '../utils';

// Styles
import { FilterContainer, InputDate, SearchInput, DateForm, Select } from './Filters.styles';
import SearchIcon from '../../../../icons/Search';

export default function Filters({
  setSearchValue,
  searchValue,
  beginDate,
  setBeginDate,
  endDate,
  setEndDate,
  advancedFilters,
  setAdvancedFilters,
  handleSubmit,
  setOrder,
  setPage,
  order
}) {
  const handleChange = (e) => {
    if (e.target.name === 'beginDate') setBeginDate(e.target.value);
    if (e.target.name === 'endDate') setEndDate(e.target.value);
    if (e.target.name === 'filter-switch') setAdvancedFilters(e.target.checked);
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSelect = (e) => {
    setOrder(e.target.value);
    setPage(1);
    // handleSubmit(e, true, e.target.value);
  };

  return (
    <>
      <FilterContainer>
        <form onSubmit={(e) => handleSubmit(e, true)}>
          <SearchInput placeholder="Search" onChange={handleSearch} name="search" value={searchValue} />
        </form>
        <div>
          <Switch onChange={handleChange} value={advancedFilters} name="filter-switch" label="Filters" />
          <Select name="select" value={order} onChange={handleSelect}>
            <option value="" hidden>
              Order by:
            </option>
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </Select>
        </div>
      </FilterContainer>
      {advancedFilters && (
        <DateForm>
          <div>
            <label htmlFor="start">From: </label>
            <InputDate
              type="date"
              id="start"
              name="beginDate"
              value={beginDate}
              min="2018-01-01"
              max={getDateNow()}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="end">To: </label>
            <InputDate type="date" id="end" name="endDate" value={endDate} min="2018-01-01" max={getDateNow()} onChange={handleChange} />
          </div>

          <Button onClick={handleSubmit}>
            <SearchIcon color="#fff" />
          </Button>
        </DateForm>
      )}
    </>
  );
}
