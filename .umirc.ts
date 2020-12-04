import { defineConfig } from 'umi';

export default defineConfig({
  // ssr: {},
  dva: {},
  antd: {},
  nodeModulesTransform: {
    type: 'none',
  },
});
