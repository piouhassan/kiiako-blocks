import { defineConfig } from 'tsup';

export default defineConfig([
  // Main entry point (individual exports)
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom', '@kiiako/render'],
    treeshake: true,
    minify: false,
    outDir: 'dist',
  },
  // Auto-register entry point
  {
    entry: ['src/auto-register.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    external: ['react', 'react-dom', '@kiiako/render'],
    treeshake: true,
    minify: false,
    outDir: 'dist',
  },
]);
