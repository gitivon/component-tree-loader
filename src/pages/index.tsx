import { mapNodeTypes } from '@/core/mappings';
import { Node } from '@/core/Node/Node';
import { GlobalStyled } from '@/styled/Global';
import React, { FC, useEffect } from 'react';
import { RootNode } from '@/core/Node/RootCtx';
import { useModel } from 'umi';

const App: FC = () => {
  const [dataTree, dispatch] = useModel('useDataTree');
  useEffect(() => {
    console.log('index.tsx:10', 'root change');
  }, [dataTree]);
  return (
    <>
      <GlobalStyled />
      <RootNode mapNodeTypes={mapNodeTypes} data={dataTree} />
    </>
  );
};

export default App;
