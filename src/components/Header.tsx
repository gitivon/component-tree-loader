import React, { FC } from 'react';
import styled from 'styled-components';
import { connect } from '@/core/Node/connect';

interface HeaderProps {
  title: string;
}
export const Header = connect<HeaderProps>(
  ({ title, children, dispatch, ...props }) => {
    console.log('Header.tsx:10', 'render', children);
    return (
      <>
        <H1 {...props}>[H1]: {title}</H1>
        {children}
      </>
    );
  },
);

const H1 = styled.h1`
  margin: 10px 0;
  font-size: 32px;
  color: red;
`;
