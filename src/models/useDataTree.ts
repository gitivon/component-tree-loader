import { useState, useReducer, Reducer } from 'react';
import { NodeDataProps } from '../core/Node';

enum DataTreeActionType {
  UPDATE,
}
interface DataTreeAction {
  type: DataTreeActionType;
  [key: string]: any;
}
const reducer: Reducer<NodeDataProps, DataTreeAction> = (state, payload) => {
  const { type, ...nextState } = payload;
  switch(type) {
    case DataTreeActionType.UPDATE:
      return state;
  }
}

export default function useDataTree(initialState: NodeDataProps) {
  const [dataTree, dispatch] = useReducer(reducer, initialState);
  return {
    dataTree
  }
}
