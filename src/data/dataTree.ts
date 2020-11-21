
export const dataTree = {
  type: 'root',
  props: {},
  children: [
    {
      type: 'header',
      props: {
        title: '我是header',
      },
      context: {
        debug: true
      }
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
            span: 6,
          },
          children: [
            {
              type: 'button',
              props: {
                type: 'primary'
              },
              children: [
                {
                  type: 'plain',
                  props: {
                    content: '我是文本'
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}