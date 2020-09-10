import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Fuse from 'fuse.js';

import './App.css';

import {
  Divider,
  MarketPanel,
  MarketTitle,
  MarketTable,
  SearchPanel,
} from './components';
import { WidgetContext } from './context';
import { categories, columns as marketTableColumns } from './constants';

import { scientificToDecimal } from './utils';

const WidgetContainer = styled.div`
  width: 390px;
`;

const SocketControlButton = styled.button`
  display: inline-block;
  color: #4d4d4d;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #999;
  border-radius: 3px;
  display: block;
  cursor: ${({ disabled }) => (disabled ? 'wait' : 'pointer')};
  outline: none;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
`;

const options = {
  // Search in `pair` field
  includeMatches: true,
  threshold: 0.1,
  location: 0,
  distance: 100,
  keys: ['pair'],
};

function App() {
  const [market, setMarket] = useState('BTC');
  const [filter, setFilter] = useState('change');
  const [sortBy] = useState([{ id: 'pair', desc: false }]);
  const [searchString, setSearchString] = useState('');
  //Data from server
  const [requestData, setRequestData] = useState(new Map());
  //Data for context
  const [data, setData] = useState([]);
  //Data for Table Widget
  const [tableData, setTableData] = useState([]);
  //Socket connection state
  const [conncetion, setConnection] = useState(true);
  const [connectionProgress, setConnectionProgress] = useState(false);

  const ws = useRef(null);

  //EFFECT FOR GETTING DATA FROM SERVER AND STORING IT

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products',
      );
      setRequestData(
        new Map(result.data.data.map((item) => [item.s, { ...item }])),
      );
    };

    fetchData();
  }, []);

  //EFFECT FOR GETTING FILTERED DATA FOR TABLE

  useEffect(() => {
    const filteredData = Array.from(requestData.values())
      .filter(({ pm, q }) => q === market || pm === market)
      .map((item) => ({
        pair: `${item.b}/${item.q}`,
        lastPrice: scientificToDecimal(item.c),
        change: `${(((item.c / item.o).toFixed(4) - 1) * 100).toFixed(2)}%`,
      }));

    setData(filteredData);

    const filteredFuse = new Fuse(filteredData, options);
    if (!searchString.length) {
      return setTableData(filteredData);
    }
    setTableData(() =>
      filteredFuse.search(searchString).map(({ item }) => ({ ...item })),
    );
  }, [requestData, market, searchString]);

  //EFFECT FOR SUBSCRIBING TO WEBSOCKET

  useEffect(() => {
    if (conncetion) {
      ws.current = new WebSocket(
        'wss://stream.binance.com/stream?streams=!miniTicker@arr',
      );
      ws.current.onopen = () => {
        console.log('ws opened');
        setConnectionProgress(false);
      };
      ws.current.onclose = () => {
        console.log('ws closed');
        setConnectionProgress(false);
      };
    } else {
      ws.current.close();
    }

    return () => {
      ws.current.close();
    };
  }, [conncetion]);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      if (!conncetion) return;

      const message = JSON.parse(e.data);

      const updatedDataFromSocket = new Map();
      message.data
        .filter(({ s }) => s.indexOf(market) > 0)
        .forEach(({ c, o, s }) =>
          updatedDataFromSocket.set(s, {
            ...requestData.get(s),
            c: parseFloat(c),
            o: parseFloat(o),
          }),
        );
      setRequestData(
        new Map([...requestData].concat([...updatedDataFromSocket])),
      );
    };
  }, [conncetion, requestData, market]);

  return (
    <div className="App">
      <WidgetContext.Provider
        value={{
          title: 'Market',
          market,
          setMarket,
          filter,
          setFilter,
          searchString,
          setSearchString,
          data,
        }}
      >
        <WidgetContainer>
          <MarketTitle />
          <MarketPanel categories={categories} />
          <SearchPanel />
          <MarketTable
            columns={marketTableColumns}
            data={tableData}
            sortBy={sortBy}
          />
          <Divider />
          <SocketControlButton
            disabled={connectionProgress}
            onClick={() => {
              setConnectionProgress(true);
              setConnection(!conncetion);
            }}
          >
            {conncetion ? 'Disconnect' : 'Reconnect'}
          </SocketControlButton>
        </WidgetContainer>
      </WidgetContext.Provider>
    </div>
  );
}

export default App;
