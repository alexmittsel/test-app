import React from 'react';
import styled from 'styled-components';

const RadioContainer = styled.div`
  display: flex;
  cursor: pointer;
  user-select: none;
`;

const RadioOuterCircle = styled.div`
  width: 14px;
  height: 14px;
  min-width: 18px;
  min-height: 18px;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  transition: all 0.1s linear;
`;

const RadioInnerCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? `#f3ab00` : `#fff`)};
  transition: all 0.1s linear;
`;

const RadioTitle = styled.div`
  font-size: 14px;
  font-family: Arial;
`;

export const Radio = ({ selected, onChange, text, value }) => {
  return (
    <RadioContainer>
      <RadioOuterCircle onClick={() => onChange(value)}>
        <RadioInnerCircle selected={selected} />
      </RadioOuterCircle>
      <RadioTitle>{text}</RadioTitle>
    </RadioContainer>
  );
};
