import React, { ComponentType, FC, createElement, createContext, useContext } from "react";
import { useNode } from './RootCtx';
import { DebugNode } from './Debug';

export interface MapNodeTypeProps {
  [key: string]: ComponentType<any>;
}

export interface NodeDataProps {
  type: string;
  props: any;
  context?: NodeProps;
  children?: NodeDataProps[];
}

interface NodeProps {
  data: NodeDataProps;
  level?: number;
  mapNodeTypes?: MapNodeTypeProps;
}
export const Node: FC<NodeProps> = ({
  children: ownerChildren,
  data,
  level = 0,
  mapNodeTypes: ownerMapNodeTypes,
}) => {
  const { debug, mapNodeTypes } = useNode();
  const { type, props, context, children = [] } = data;
  if (!(type in mapNodeTypes)) {
    throw new Error(`没有找到对应的组件: ${type}`);
  }
  const dataChildren = children.map(child => {
    return <Node data={child} level={level + 1} />
  })
  const child = createElement(mapNodeTypes[type], props, ...dataChildren)
  return debug ? <DebugNode level={level}>
    {child}
  </DebugNode> : child;
}
