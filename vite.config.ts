import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({ 
      svgrOptions: {
        // svgr options
      },
    })
  ],
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      components: "/src/components",
      functions: "/src/functions",
      models: "/src/models",
      layouts: "/src/layouts",
      pages: "/src/pages",
      types: "/src/types",
      hooks: "/src/hooks",
    }
  }
})
