import { Button, Input } from 'antd';
import React, { FC } from 'react';
import useNodeState from '@/core/useNodeState';

export const Parent: FC<{
  text: string;
}> = ({ children, text='点我' }) => {
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
export const Child: FC<ChildProp> = ({ value, children }) => {
  console.log('Child.tsx:19', 'render', value);
  const { set } = useNodeState();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    set('props.value', e.target.value);
  };
  return (
    <>
      <Input placeholder="请输入" value={value} onChange={handleChange} />
      {children}
    </>
  );
};
