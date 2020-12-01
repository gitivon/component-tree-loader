import { NodeDataProps } from '@/core/Node';
import { Input, Button } from 'antd';
import { mapNodeTypes } from '@/core/mappings';

export const dataTree: NodeDataProps = {
  type: 'root',
  props: {},
  context: {},
  children: [
    {
      type: 'header',
      props: {
        title: '我是header',
      },
      context: {
        strict: false,
        mapNodeTypes: {
          ...mapNodeTypes,
          // button: Input,
        },
      },
      children: [
        {
          type: 'button',
          props: {
            type: 'primary',
          },
          children: [
            {
              type: 'plain',
              context: {},
              props: {
                content: '我是文本222',
              },
            },
          ],
        },
        {
          type: 'input',
          props: {
            type: 'primary',
          },
          children: [
            {
              type: 'header',
              context: {},
              props: {
                title: 'input的纯文本',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'row',
      props: {
        gutter: 20,
      },
      children: [
        {
          type: 'col',
          props: {
            span: 12,
          },
          children: [
            {
              type: 'button',
              props: {
                type: 'primary',
              },
              children: [
                {
                  type: 'plain',
                  context: {},
                  props: {
                    content: '我是文本',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'col',
          props: {
            span: 12,
          },
          children: [
            {
              type: 'parent',
              props: {},
              context: {
                // debug: true,
              },
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
                      type: 'plain',
                      props: {
                        content: '111',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
