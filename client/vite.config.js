import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: '../',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },

    host: true, 
    cors: true,
    strictPort: true,
    allowedHosts: ['.trycloudflare.com'],

    hmr: {
        clientPort: 443,
      },
    },
});
