import { mapNodeTypes } from '@/core/mappings';
import { Node } from '@/core/Node/Node';
import { dataTree } from '@/data/dataTree';
import { GlobalStyled } from '@/styled/Global';
import React, { FC } from 'react';
import { RootNode } from '@/core/Node/RootCtx';

const App: FC = () => (
  <RootNode mapNodeTypes={mapNodeTypes}>
    <GlobalStyled />
    <Node data={dataTree} />
  </RootNode>
);

export default App;
