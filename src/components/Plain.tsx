import React, { FC } from 'react';
import { connect } from '@/core/Node/connect';

interface PlainProp {
  content: string;
}
export const Plain = connect<PlainProp>(({ content }) => {
  console.log('Plain.tsx:6', 'render');
  return <>{content}</>;
});
