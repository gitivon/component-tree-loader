import { Button, Input } from 'antd';
import React, { FC, memo } from 'react';
import useNodeState from '@/core/useNodeState';
import { connect } from '@/core/Node/connect';

export const Parent: FC<{
  text: string;
}> = ({ children, text = '点我' }) => {
  console.log('Parent.tsx:8', 'render');
  return (
    <>
      <Button>{text}</Button>
      parent
      {children}
    </>
  );
};

interface ChildProp {
  value: string;
  dispatch: any;
}
export const Child = connect<ChildProp>(
  ({ value, dispatch, children, ...rest }) => {
    console.log('Child.tsx:19', 'render', value);
    const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ value: e.target.value, t: 2 });
    };
    return (
      <>
        <Input placeholder="请输入" value={value} onChange={changeHandle} />
        {children}
      </>
    );
  },
);
