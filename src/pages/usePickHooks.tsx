import { Input } from 'antd';
import React, { createContext, FC, useContext, useMemo, useState } from 'react';
import { useImmer } from 'use-immer';

const useDemoHook = () => {
  const [count, setCount] = useImmer(0);
  const [str, setStr] = useState('');
  return {
    count,
    str,
    setCount,
    setStr,
  };
};

interface AppProp {}

const DemoCtx = createContext<any>(null);

const useSelector = () => {
  const store = useContext(DemoCtx);
  console.log('usePickHooks.tsx:25', 'useSelector render');
  return {};
};

export const useDemo = (selector: any) => {
  const ctx = useContext(DemoCtx);
  const selectedStates = selector(ctx);
  return useMemo(() => selectedStates, []);
};

const Child = () => {
  const { str, setStr } = useContext(DemoCtx);
  console.log('child render');
  return (
    <>
      {str}
      <Input value={str} onChange={e => setStr(e.target.value)} />
    </>
  );
};

export const App: FC = () => {
  useSelector();
  console.log('usePickHooks.tsx:33', 'parent render');
  return (
    <>
      <Child />
    </>
  );
};
export default () => {
  const value = useDemoHook();
  return (
    <DemoCtx.Provider value={value}>
      <App />
    </DemoCtx.Provider>
  );
};
