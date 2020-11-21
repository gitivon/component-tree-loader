import { useCallback, useState } from 'react';
import { set, get } from 'lodash';

const initial = {
  type: 'root',
  props: {},
  children: [
    {
      type: 'parent',
      props: {},
      children: [
        {
          type: 'child',
          props: {
            value: '123',
          },
        },
        {
          type: 'child',
          props: {
            value: '456',
          },
          children: [
            {
              type: 'header',
              props: {
                title: '撒子?',
              },
            },
          ],
        },
      ],
    },
  ],
};
export default function useDataTree() {
  const [data, setData] = useState(initial);
  const dispatch = useCallback((target: any, path: string, value: any) => {
    const item = get(data, target);
    set(item, path, value);
    console.log('useDataTree.ts:40', item, value);
    set(data, target, { ...item });
    setData({ ...data });
  }, []);
  return {
    dataTree: data,
    dispatch,
  };
}

// TODO: 优化策略：记录下 dispatch 时候的 path，对比context中的 path 记录，如果 match 得上就更更新，否则不更新