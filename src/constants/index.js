import React from 'react';
import styled from 'styled-components';

const ChangeValue = styled.span`
  color: ${({ positive }) => (positive ? '#2da300' : '#d00000')};
  font-weight: 500;
`;

export const categories = [
  { title: 'BNB' },
  { title: 'BTC' },
  { title: 'ALTS', options: ['ALTS', 'XRP', 'ETH', 'TRX'] },
  { title: 'USDⓈ', options: ['USDⓈ', 'EUR', 'RUB'] },
];

export const columns = [
  {
    Header: 'Pair',
    accessor: 'pair',
  },
  {
    Header: 'LastPrice',
    accessor: 'lastPrice',
    maxWidth: 100,
  },
  {
    Header: 'Change',
    accessor: 'change',
    maxWidth: 100,
    className: 'Right',
    sortType: (a, b) =>
      parseFloat(a.values['change']) - parseFloat(b.values['change']),
    Cell: ({ value }) => (
      <ChangeValue positive={parseFloat(value) >= 0}>{value}</ChangeValue>
    ),
  },
];

export const data = [
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '100$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
  { pair: 'BTC/ETH', lastPrice: '10$', change: '100%' },
];
