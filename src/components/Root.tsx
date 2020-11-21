import React, { FC, memo } from 'react';

export const Root: FC = 
  ({ children }) => {
    console.log('Root.tsx:6', 'render');
    return (
      <>
        <h1>Root</h1>
        {children}
      </>
    );
  }