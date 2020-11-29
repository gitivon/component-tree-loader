import React, { ComponentType, useMemo, useCallback, useEffect } from 'react';
import useDataTree from '@/models/useDataTree';
import { useNode } from './RootCtx';
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

interface ConnectInjectedProps {
  dispatch: ReturnType<typeof useDataTree>[1];
}

export const connect = <P,>(
  WrappedComponent: ComponentType<P & ConnectInjectedProps>,
) => (props: P & ConnectInjectedProps) => {
  const [data, dispatch] = useModel('useDataTree');
  const { path } = useNode();
  path.push('props');
  const setState = useCallback(
    (nextState: P) => {
      const next = data.setIn(path, nextState);
      dispatch(next);
    },
    [getPath(path), data],
  );
  const nextProps = data.getIn(path);
  return useMemo(
    () => <WrappedComponent {...nextProps} dispatch={setState} />,
    [nextProps],
  );
};
