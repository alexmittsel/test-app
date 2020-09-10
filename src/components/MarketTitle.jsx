import React, { useContext } from 'react';
import styled from 'styled-components';

import { WidgetContext } from '../context';

const Title = styled.span`
  font-family: Arial;
  font-size: 24px;
  font-weight: 600;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #f2f2f2;
`;

const MarketTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px 0px;
`;

export const MarketTitle = () => {
  const { title } = useContext(WidgetContext);
  return (
    <MarketTitleContainer>
      <Title>{title}</Title>
      <Divider />
    </MarketTitleContainer>
  );
};
