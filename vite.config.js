import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      react(),
      tailwindcss(),
      dts({
        tsconfigPath: 'tsconfig.build.json',
        insertTypesEntry: true,
        skipDiagnostics: false,
        outDir: 'dist/types'
      })
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'InfoView',
        formats: ['es', 'umd'],
        fileName: (format) => `index.${format}.js`
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'axios'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            axios: "axios"
          }
        }
      },
      cssCodeSplit: false
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      port: parseInt(env.VITE_LOGIKS_FORM_PORT) || 5173,
      host: env.VITE_LOGIKS_FORM_HOST || 'localhost'
    }

  }
})
