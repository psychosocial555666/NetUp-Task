import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    checker({ typescript: true }),
    VitePluginFonts({
      google: {
        families: ['Source Sans Pro', 'Ubuntu'],
      },
    }),
  ],
});
