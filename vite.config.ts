/// <reference types="vite/client" />
/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactPlugin from '@vitejs/plugin-react'
import postcssPresetEnv from 'postcss-preset-env'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: '[name]',
    },
    // Let the library user control minification in their own bundler
    minify: false,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        dir: 'dist',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        inlineDynamicImports: false,
        preserveModules: true,
      },
    },
    sourcemap: false,
    target: 'esnext',
  },
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          /* use stage 3 features + css nesting rules */
          stage: 3,
          features: {
            'nesting-rules': true,
          },
        }),
      ],
    },
  },
  plugins: [
    reactPlugin({
      // Exclude storybook stories
      exclude: /\.stories\.(ts|js|md)x?$/,
      include: '**/*.tsx',
      jsxRuntime: 'classic',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    coverage: {
      all: true,
      reporter: ['text', 'json', 'html'],
      include: ['src/**'],
      exclude: ['src/index.ts', '**/constants.ts'],
    },
    globals: true,
    environment: 'happy-dom',
    setupFiles: './setupTests.ts',
  },
})
