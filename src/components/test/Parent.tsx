import { Button, Input } from 'antd';
import React, { FC, memo } from 'react';
import { useModel } from 'umi';

export const Parent: FC = ({ children }) => {
  console.log('Parent.tsx:8', 'render');
  return (
    <>
      parent
      {children}
    </>
  );
}

interface ChildProp {
  value: string;
  dispatch: any;
}
export const Child: FC<ChildProp> = ({ value, children }) => {
  console.log('Child.tsx:19', 'render', value);
  const { dispatch } = useModel('useDataTree', m => ({
    dispatch: m.dispatch,
  }));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch('children[0].children[1]', 'props.value', e.target.value);
  };
  return (
    <>
      <Input placeholder="请输入" value={value} onChange={handleChange} />
      {children}
    </>
  );
};
