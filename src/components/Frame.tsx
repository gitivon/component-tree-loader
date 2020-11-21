import React, { FC } from 'react';
import IFrame from 'react-frame-component';

export const Frame: FC<any> = ({ children, styles }) => {
  console.log('Frame.tsx:6', styles);
  return (
    <IFrame
      style={{ width: '100%' }}
      initialContent={`<!DOCTYPE html><html><head>${styles}</head><body><div class="frame-root"></div></body></html>`}
    >
      {children}
    </IFrame>
  );
};
