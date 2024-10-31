import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        //backend server. for simpliciity
        target: 'http://localhost:5000', // Your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
