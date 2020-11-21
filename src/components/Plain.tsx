import React, { FC } from 'react';

interface PlainProp {
  content: string;
}
export const Plain: FC<PlainProp> = ({
  content
}) => {
  console.log('Plain.tsx:8', 'render');
  return <>{content}</>;
}