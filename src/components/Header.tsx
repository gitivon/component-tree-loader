import React, { FC } from 'react';
import styled from 'styled-components';

export const Header: FC<{
  title: string;
} & React.HTMLAttributes<HTMLHeadingElement>> = ({ title, ...props }) => {
  console.log('Header.tsx:6', 'render');
  return <H1 {...props}>{title}</H1>;
};

const H1 = styled.h1`
  margin: 10px 0;
  font-size: 32px;
  color: red;
`
