import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { WidgetContext } from '../context';

const MarketPanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const MarketItem = styled.div`
  border-radius: 2px;
  cursor: pointer;
  font-family: Arial;
  padding: 8px;
  line-height: 20px;
  background-color: ${({ children, market }) =>
    children === market ? `#f2f2f2` : `#FFF`};
  &:hover {
    background-color: #f2f2f2;
  }
`;

const MarketItemSelect = styled(({ className, options, setMarket }) => {
  const [value, setValue] = useState('');

  return (
    <select
      className={className}
      onChange={({ target }) => {
        setValue(target.value);
        setMarket(target.value);
      }}
      value={value}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
})`
  border-radius: 2px;
  cursor: pointer;
  font-family: Arial;
  padding: 8px;
  line-height: 20px;
  background-color: ${({ options, market }) =>
    options.includes(market) ? `#f2f2f2` : `#FFF`};
  &:hover {
    background-color: #f2f2f2;
  }
  outline: none;
  border: 0px;
`;

export const MarketPanel = ({ categories }) => {
  const { market, setMarket } = useContext(WidgetContext);

  return (
    <MarketPanelContainer>
      {/* Fake controls start */}
      <MarketItem key="favorites">&#9733;</MarketItem>
      <MarketItem key="Margin">Margin</MarketItem>
      {/* Fake controls end */}
      {categories.map(({ title, options }) =>
        options !== undefined && Array.isArray(options) ? (
          <MarketItemSelect
            key={title}
            options={options}
            market={market}
            setMarket={setMarket}
          />
        ) : (
          <MarketItem
            key={title}
            market={market}
            onClick={() => setMarket(title)}
          >
            {title}
          </MarketItem>
        ),
      )}
    </MarketPanelContainer>
  );
};
