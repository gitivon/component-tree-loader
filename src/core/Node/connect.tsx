import useDataTree from '@/models/useDataTree';
import React, {
  ComponentType,
  useCallback,
  useMemo,
  createElement,
  PropsWithChildren,
} from 'react';
import { useModel } from 'umi';
import { useNode } from './RootCtx';

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
) => ({ children, ...props }: PropsWithChildren<P & ConnectInjectedProps>) => {
  const [data, updateData] = useModel('useDataTree');
  const { path } = useNode();
  const dispatch = useCallback(
    (nextState: any) => {
      updateData(draft => {
        path.forEach(name => {
          // @ts-ignore
          draft = draft[name];
        });
        draft.props = nextState;
      });
    },
    [getPath(path)],
  );
  let nextProps = data as any;
  path.concat(['props']).forEach(name => {
    // @ts-ignore
    nextProps = nextProps[name];
  });
  return useMemo(
    () =>
      createElement(
        WrappedComponent,
        {
          ...nextProps,
          dispatch,
        },
        children,
      ),
    [nextProps],
  );
};
