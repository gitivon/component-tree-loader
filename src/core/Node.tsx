import React, { ComponentType, FC, createElement, createContext, useContext } from "react";
import styled from 'styled-components';

export interface MapNodeTypeProps {
  [key: string]: ComponentType<any>;
}

interface NodeDataProps {
  type: string;
  props: any;
  children?: NodeDataProps[];
}

interface NodeProps {
  data: NodeDataProps;
  level?: number;
}
export const Node: FC<NodeProps> = ({
  children: ownerChildren,
  data,
  level = 0,
}) => {
  const { debug, mapNodeTypes } = useNode();
  const { type, props, children = [] } = data;
  if (!(type in mapNodeTypes)) {
    throw new Error(`没有找到对应的组件: ${type}`);
  }
  const dataChildren = children.map(child => {
    return <Node data={child} level={level + 1} />
  })
  const child = createElement(mapNodeTypes[type], props, ...dataChildren)
  return debug ? <SNode level={level}>
    {child}
  </SNode> : child;
}

const levelColors = [
  'red', 'blue', 'green', 'yellow',
  'red', 'blue', 'green', 'yellow',
  'red', 'blue', 'green', 'yellow'
]

interface SNodeProp {
  level: number;
}
const SNode = styled.div<SNodeProp>`
  padding: 5px;
  border: 1px dashed ${props => levelColors[props.level]};
  border-radius: 4px;
`

interface NodeCtxProps {
  debug: boolean;
  mapNodeTypes: MapNodeTypeProps;
}
const NodeCtx = createContext<NodeCtxProps | undefined>(undefined);

interface RootNodeProps {
  debug?: boolean;
  mapNodeTypes: MapNodeTypeProps;
}
export const RootNode: FC<RootNodeProps> = ({children, mapNodeTypes, debug = false}) => {
  return <NodeCtx.Provider value={{
    debug,
    mapNodeTypes
  }}>
    {children}
  </NodeCtx.Provider>
}
export const useNode = () => {
  const ctx = useContext(NodeCtx);
  if (!ctx) {
    throw new Error('没有找到 RootNode 节点，请检查!');
  }
  return ctx;
}