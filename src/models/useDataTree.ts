import { useState, useReducer, Reducer } from 'react';
import { NodeDataProps } from '../core/Node';
import { dataTree } from '@/data/dataTree';

export enum DataTreeActionType {
  UPDATE,
}
interface DataTreeAction {
  type: DataTreeActionType;
  payload?: NodeDataProps;
  [key: string]: any;
}
const reducer: Reducer<NodeDataProps, DataTreeAction> = (state, action) => {
  const { type, payload } = action;
  switch(type) {
    case DataTreeActionType.UPDATE:
      const v = state.children?.[1]?.children?.[1]?.children?.[0]?.children?.[1];
      if (v) {
        v.props.value = action.value;
      }
      console.log('useDataTree.ts:17', state);
      return {...state};
  }
}

export default function useDataTree(initialState: NodeDataProps) {
  const [data, dispatch] = useReducer(reducer, dataTree);
  return {
    dataTree: data,
    dispatch,
  }
}
