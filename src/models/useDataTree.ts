import { get, set } from 'lodash';
import { useCallback, useState } from 'react';

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
            value: '222',
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
    set(data, target, { ...item });
    setData({ ...data });
  }, []);
  return {
    dataTree: data,
    dispatch,
  };
}
