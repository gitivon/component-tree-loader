import React, { FC } from 'react';
import { Input, Button } from 'antd';
import { useModel } from 'umi';
import { DataTreeActionType } from '@/models/useDataTree'

export const Parent: FC = ({
  children
}) => {
  
  return <>
    parent
    {children}
  </>;
}

interface ChildProp {
  value: string;
  dispatch: any;
}
export const Child: FC<ChildProp> = ({
  value,
}) => {
  console.log('Child.tsx:19', 'render', value);
  const { dispatch } = useModel('useDataTree', m => ({
    dispatch: m.dispatch
  }));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: DataTreeActionType.UPDATE, value: e.target.value })
  }
  return <>
    <Button>点我</Button>
    <Input placeholder="请输入" value={value} onChange={handleChange} />
  </>
}