import React, { FC } from 'react';
import styled from 'styled-components';

const levelColors = [
  'red', 'blue', 'green', '#078e9c',
  'red', 'blue', 'green', '#078e9c',
  'red', 'blue', 'green', '#078e9c'
];
interface SNodeProp {
  level: number;
}
const SNode = styled.div<SNodeProp>`
  padding: 5px;
  border: 1px dashed ${props => levelColors[props.level]};
  border-radius: 4px;
`

export const DebugNode: FC<SNodeProp> = ({
  level, children
}) => {
  return <SNode level={level}>
    {children}
  </SNode>;
}
