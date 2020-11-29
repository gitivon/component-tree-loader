import { get, set } from 'lodash';
import { useCallback, useState } from 'react';
import Immutable from 'seamless-immutable';

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
  return useState(Immutable(initial));
}
