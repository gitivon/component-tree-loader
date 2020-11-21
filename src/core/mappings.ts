import { Header } from '@/components/Header';
import { Row, Col, Button } from 'antd';
import { ComponentType } from 'react';
import { Root } from '@/components/Root';
import { Plain } from '@/components/Plain';
import { MapNodeTypeProps } from './Node';

export const mapNodeTypes: MapNodeTypeProps = {
  root: Root,
  header: Header,
  row: Row,
  col: Col,
  button: Button,
  plain: Plain,
}
