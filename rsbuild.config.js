
// @ts-check
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],

  html: {
    title: 'Larisa | Real Estate, Capital & Transactions',
    favicon: './public/favicon.ico',
  },

  output: {
    distPath: {
      root: 'dist',
      js: 'static/js',
      css: 'static/css',
      svg: 'static/svg',
      image: 'static/image',
      font: 'static/font',
    },
    cleanDistPath: true,
  },
});
