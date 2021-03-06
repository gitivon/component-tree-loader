import React, { ComponentType, createContext, FC, useContext } from 'react';
import { MapNodeTypeProps, Node, NodeDataProps } from './Node';

const DefaultFallbackComponent: FC = ({ children }) => {
  return <>{children}</>;
};

// dataTree 的字段映射类型
export interface MapTreeNodeProps {
  type: string;
  props: string;
  children: string;
  context: string;
}

export interface NodeCtxProps {
  debug: boolean;
  fallbackNode: ComponentType<any>;
  inherit: boolean;
  strict: boolean;
  mapNodeTypes: MapNodeTypeProps;
  mapNodePropName: MapTreeNodeProps;
  path: (string | number)[];
  index?: number;
}

const NodeCtx = createContext<NodeCtxProps | undefined>(undefined);

export const NodeItem: FC<NodeCtxProps> = ({ children, ...props }) => {
  return <NodeCtx.Provider value={props}>{children}</NodeCtx.Provider>;
};

export const useNode = () => {
  const ctx = useContext(NodeCtx);
  if (!ctx) {
    throw new Error('没有找到 RootNode 节点，请检查!');
  }
  return ctx;
};

const defaultMapTreeNodeProps: MapTreeNodeProps = {
  type: 'type',
  props: 'props',
  children: 'children',
  context: 'context',
};

interface RootNodeProps extends Omit<Partial<NodeCtxProps>, 'mapNodeTypes'> {
  mapNodeTypes: MapNodeTypeProps;
  data: NodeDataProps;
}
export const RootNode: FC<RootNodeProps> = ({ children, data, ...props }) => {
  const rootCtx = {
    debug: false,
    strict: false,
    inherit: true,
    fallbackNode: DefaultFallbackComponent,
    mapNodePropName: defaultMapTreeNodeProps,
    ...props,
  };
  return (
    <NodeItem path={[]} {...rootCtx}>
      <Node data={data} path={[]} />
    </NodeItem>
  );
};
