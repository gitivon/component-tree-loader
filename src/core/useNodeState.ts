import { useNode } from '@/core/Node/RootCtx';
import { useCallback, useMemo } from 'react';
import { useModel } from 'umi';

const getPath = (path: (string | number)[]) => {
  return path.reduce((prev, current) => {
    const str =
      typeof current === 'number'
        ? `[${current}]`
        : `${prev ? '.' : ''}${current}`;
    return prev + str;
  }, '');
};

export default function useNodeState() {
  const model = useModel('useDataTree', m => ({
    dispatch: m.dispatch,
  }));
  console.log('useNodeState.ts:18', model);
  const { path } = useNode();
  const target = useMemo(() => getPath(path), [path]);
  const set = useCallback(
    (path: string, value: any) => model.dispatch(target, path, value),
    [target],
  );
  return { set, path };
}
