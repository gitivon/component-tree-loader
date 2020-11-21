import { Header } from '@/components/Header';
import { Plain } from '@/components/Plain';
import { Root } from '@/components/Root';
import { Child, Parent } from '@/components/test/Parent';
import { Button, Col, Row } from 'antd';
import { MapNodeTypeProps } from './Node/Node';

const testMappings: MapNodeTypeProps = {
  parent: Parent,
  child: Child,
}

export const mapNodeTypes: MapNodeTypeProps = {
  root: Root,
  header: Header,
  row: Row,
  col: Col,
  button: Button,
  plain: Plain,
  ...testMappings,
}
