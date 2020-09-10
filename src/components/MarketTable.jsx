import React from 'react';
import styled from 'styled-components';
import { useTable, useSortBy, useFlexLayout } from 'react-table';

const HeaderCell = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 24px;
`;

const BodyCell = styled(HeaderCell)``;

const BodyRow = styled.div`
  background-color: #fff;
`;

const Styles = styled.div`
  height: 310px;
  overflow: auto;
`;

const SortSymbol = styled.div`
  display: flex;
  flex-direction: column;
`;

const SymbolContainer = styled.div`
  font-size: 10px;
  color: ${({ active }) => (active ? `#f3ab00` : `#ddd`)};
  margin-left: 4px;
`;

const BodyContainer = styled.div`
  padding: 4px;
  background-color: #fff;
  color: #4d4d4d;
  .Right {
    justify-content: flex-end;
  }
`;

const HeaderContainer = styled(BodyContainer)`
  position: sticky;
  top: 0;
  display: flex;
  margin-bottom: 8px;
  .Left {
    justify-content: flex-start;
  }
`;

export const MarketTable = ({ columns, data, sortBy }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headers,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      autoResetSortBy: false,
      initialState: { sortBy },
    },
    useSortBy,
    useFlexLayout,
  );

  return (
    <Styles>
      <div {...getTableProps()} className="table">
        <HeaderContainer>
          {headers.map((column) => (
            <HeaderCell
              {...column.getHeaderProps([
                { className: column.className },
                column.getSortByToggleProps(),
              ])}
            >
              {column.render('Header')}
              <SortSymbol>
                <>
                  <SymbolContainer
                    active={column.isSorted && !column.isSortedDesc}
                  >
                    &#9650;
                  </SymbolContainer>
                  <SymbolContainer
                    active={column.isSorted && column.isSortedDesc}
                  >
                    &#9660;
                  </SymbolContainer>
                </>
              </SortSymbol>
            </HeaderCell>
          ))}
        </HeaderContainer>
        <BodyContainer {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <BodyRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <BodyCell
                      {...cell.getCellProps([
                        { className: cell.column.className },
                      ])}
                    >
                      {cell.column.id === 'pair' && <>&#9733;</>}
                      {cell.render('Cell')}
                    </BodyCell>
                  );
                })}
              </BodyRow>
            );
          })}
        </BodyContainer>
      </div>
    </Styles>
  );
};
