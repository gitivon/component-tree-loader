import React, { createContext, FC, useContext } from 'react';
import { MapNodeTypeProps } from './Node';

interface NodeCtxProps {
  debug: boolean;
  mapNodeTypes: MapNodeTypeProps;
}
const NodeCtx = createContext<NodeCtxProps | undefined>(undefined);

interface RootNodeProps {
  debug?: boolean;
  mapNodeTypes: MapNodeTypeProps;
}
export const RootNode: FC<RootNodeProps> = ({
  children,
  mapNodeTypes,
  debug = false,
}) => {
  return (
    <NodeCtx.Provider
      value={{
        debug,
        mapNodeTypes,
      }}
    >
      {children}
    </NodeCtx.Provider>
  );
};
export const useNode = () => {
  const ctx = useContext(NodeCtx);
  if (!ctx) {
    throw new Error('没有找到 RootNode 节点，请检查!');
  }
  return ctx;
};
