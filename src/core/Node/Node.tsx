import React, { ComponentType, createElement, FC, useMemo } from 'react';
import { DebugNode } from './Debug';
import { NodeCtxProps, NodeItem, useNode } from './RootCtx';

export interface MapNodeTypeProps {
  [key: string]: ComponentType<any>;
}

export interface NodeDataProps {
  type: string;
  props: any;
  context?: Partial<NodeCtxProps>;
  children?: NodeDataProps[];
}

export interface NodeProps {
  data: NodeDataProps;
  level?: number;
  mapNodeTypes?: MapNodeTypeProps;
}
export const Node: FC<NodeProps> = ({
  children: ownerChildren,
  data,
  level = 0,
}) => {
  const {
    debug,
    mapNodeTypes,
    strict,
    inherit,
    ...restCtxProps
  } = useNode();
  const { type, props, context, children = [] } = data;
  const nodeItemProps = {
    debug,
    mapNodeTypes,
    ...context,
  };
  if (nodeItemProps.debug) {
    console.log(`[debug][${data.type}]`, {
      context: nodeItemProps,
      data,
      inherit,
    });
  }
  const dataChildren = children.map((child, index) => {
    return <Node data={child} level={level + 1} key={index} />;
  });
  let Component: ComponentType<any>;
  if (!(type in mapNodeTypes)) {
    if (strict) {
      throw new Error(`没有找到对应的组件: ${type}`);
    } else {
      console.log(`%c没有找到对应的组件: ${type}`, 'color: red');
    }
    Component = DefaultComponent;
  } else {
    Component = mapNodeTypes[type];
  }
  const child = createElement(Component, props, ...dataChildren);
  return (
    <NodeItem
      strict={strict}
      inherit={inherit}
      {...restCtxProps}
      {...nodeItemProps}
    >
      {nodeItemProps.debug ? (
        <DebugNode level={level}>{child}</DebugNode>
      ) : (
        child
      )}
    </NodeItem>
  );
};

const DefaultComponent: FC = ({ children }) => {
  return <>{children}</>;
};
