import { defineConfig } from 'vite'
import { resolve } from 'path'
import pugPlugin from 'vite-plugin-pug'

export default defineConfig({
    root: './src',
    base: './',
    server: {
        host: true,
    },
    build: {
        target: 'es2015',
        outDir: '../build',
        emptyOutDir: './',
        rollupOptions: {
            input: {
                'index': resolve(__dirname, './src/index.html'),
            },
            output: {
                entryFileNames: `src/main.js`,
                chunkFileNames: `src/main.js`,
                assetFileNames: `src/[name].[ext]`
            }
        },
    },
    resolve: {
        alias: [
            { 
                find: '@', 
                replacement: `${resolve(__dirname, './src')}` 
            }
        ],
    },
    plugins: [
        pugPlugin(
            { 
                localImports: true 
            }, 
            { 
                baseUrl: resolve(__dirname, './src')
            }
        ),
    ],
})
