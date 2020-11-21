import React, { FC } from 'react';
import styled from 'styled-components';

export const Header: FC<{
  title: string;
} & React.HTMLAttributes<HTMLHeadingElement>> = ({
  title,
  children,
  ...props
}) => {
  return (
    <>
      <H1 {...props}>{title}</H1>
      {children}
    </>
  );
};

const H1 = styled.h1`
  margin: 10px 0;
  font-size: 32px;
  color: red;
`;
