import { useImmer } from 'use-immer';
import { dataTree } from '@/data/dataTree';

const initial = {
  type: 'root',
  props: {},
  children: [
    {
      type: 'child',
      props: {
        value: '123',
      },
    },
    // {
    //   type: 'child',
    //   props: {
    //     value: '222',
    //   },
    // },
    {
      type: 'child',
      props: {
        value: '456',
      },
      // children: [
      //   {
      //     type: 'header',
      //     props: {
      //       title: '撒子?',
      //     },
      //   },
      // ],
    },
  ],
};
export default function useDataTree() {
  return useImmer(dataTree);
}
