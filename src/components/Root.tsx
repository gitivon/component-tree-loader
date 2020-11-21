import React, { FC } from 'react';

export const Root: FC = ({
  children
}) => {
  console.log('Root.tsx:5', 'render');
  return <>
    Root
    {children}
  </>;
}
