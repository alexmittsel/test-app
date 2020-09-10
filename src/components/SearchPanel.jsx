import React, { useContext, useState, useMemo } from 'react';
import styled from 'styled-components';

import { WidgetContext } from '../context';
import { debounce } from '../utils';

import { Radio } from './Radio';

const SearchIcon = ({ color }) => (
  <svg viewBox="0 0 20 20" width="20" height="20">
    <path
      fill={color}
      d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
  c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
  c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
  s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"
    ></path>
  </svg>
);

const SearchPanelContainer = styled.div`
  margin: 16px 0px;
  display: flex;
`;

const SearchInputContainer = styled.div`
  display: flex;
  flex: 3;
  justify-content: flex-start;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const SearchFiltersContainer = styled(SearchInputContainer)`
  flex: 2;
  border: 0px;
  display: flex;
  gap: 8px;
`;

const SearchInput = styled.input.attrs({ placeholder: 'Search' })`
  border: 0px;
  outline: none;
  font-size: 14px;
  height: 20px;
  padding-left: 8px;
`;

export const SearchPanel = () => {
  const { filter, setFilter, searchString, setSearchString } = useContext(
    WidgetContext,
  );
  const [value, setValue] = useState(searchString);

  const debouncedSetSearchString = useMemo(
    () => debounce(setSearchString, 400),
    [setSearchString],
  );
  return (
    <SearchPanelContainer>
      <SearchInputContainer>
        <SearchIcon color="#000" />
        <SearchInput
          value={value}
          onChange={({ target }) => {
            setValue(target.value);
            debouncedSetSearchString(target.value);
          }}
        />
      </SearchInputContainer>
      <SearchFiltersContainer>
        <Radio
          text="Change"
          value="change"
          selected={filter === 'change'}
          onChange={setFilter}
        ></Radio>
        <Radio
          text="Volume"
          value="volume"
          selected={filter === 'volume'}
          onChange={setFilter}
        ></Radio>
      </SearchFiltersContainer>
    </SearchPanelContainer>
  );
};
