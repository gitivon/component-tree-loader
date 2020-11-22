import { mapNodeTypes } from '@/core/mappings';
import { Node } from '@/core/Node/Node';
import { GlobalStyled } from '@/styled/Global';
import React, { FC } from 'react';
import { RootNode } from '@/core/Node/RootCtx';
import { useModel } from 'umi';

const App: FC = () => {
  const { dataTree, dispatch } = useModel('useDataTree');
  return (
    <RootNode mapNodeTypes={mapNodeTypes}>
      <GlobalStyled />
      <Node data={dataTree} path={[]} />
    </RootNode>
  );
};

export default App;
