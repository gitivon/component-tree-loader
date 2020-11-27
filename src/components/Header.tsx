import React, { FC } from 'react';
import styled from 'styled-components';

export const Header: FC<{
  title: string;
}> = ({ title, children, ...props }) => {
  console.log('Header.tsx:10', 'render');
  return (
    <>
      <H1 {...props}>[H1]: {title}</H1>
      {children}
    </>
  );
};

const H1 = styled.h1`
  margin: 10px 0;
  font-size: 32px;
  color: red;
`;
