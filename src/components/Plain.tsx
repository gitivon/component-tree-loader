import React, { FC } from 'react';

interface PlainProp {
  content: string;
}
export const Plain: FC<PlainProp> = ({ content }) => <>{content}</>;
