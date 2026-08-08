// @ts-check
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],

  html: {
    title: 'Larisa | Real Estate, Capital & Transactions',
    favicon: './public/favicon.ico',
  },
});
