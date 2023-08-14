import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const plugins = [
  react({
    babel: {
      plugins: ['babel-plugin-macros', ['babel-plugin-styled-components', { "displayName": false }]],
    },
  },),
  ViteMinifyPlugin({}),
  viteStaticCopy({
    targets: [
      {
        src: 'extra/CNAME',
        dest: ''
      },
      {
        src: 'index.html',
        dest: '',
        rename: "404.html"
      }
    ]
  })
];
// https://vitejs.dev/config/
export default defineConfig({
  plugins: plugins,
  publicDir: 'public',
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
})