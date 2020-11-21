import React, { FC, memo } from 'react';
import styled from 'styled-components';

export const Header: FC<{
  title: string;
} & React.HTMLAttributes<HTMLHeadingElement>> = memo(({
  title,
  children,
  ...props
}) => {
  console.log('Header.tsx:10', 'render');
  return (
    <>
      <H1 {...props}>{title}</H1>
      {children}
    </>
  );
}, (prev, next) => {
  return prev.title === next.title;
});

const H1 = styled.h1`
  margin: 10px 0;
  font-size: 32px;
  color: red;
`;
