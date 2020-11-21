import { GlobalStyled } from '@/styled/Global';
import React, { FC } from 'react';
import styled from 'styled-components';
import { IGetInitialProps } from 'umi';
import { Button } from 'antd';
import { Node, RootNode } from '@/core/Node';
import { dataTree } from '@/data/dataTree';
import { mapNodeTypes } from '@/core/mappings';

type UmiSsrPageFC<P = {}> = FC<P> & {
  getInitialProps?: IGetInitialProps<Partial<P>>;
};

const App: UmiSsrPageFC<{
  title: string;
  styles?: string;
}> = ({ title, styles }) => {
  return (
    <RootNode mapNodeTypes={mapNodeTypes}>
      <GlobalStyled />
      <Button type="primary">123</Button>
      <Node data={dataTree} />
    </RootNode>
  );
};

export default App;
