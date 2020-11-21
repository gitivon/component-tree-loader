import React, { FC } from 'react';
import { useNode } from '@/core/Node/RootCtx';

export const Root: FC = ({
  children
}) => {
  return <>
    Root
    {children}
  </>;
}
