import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Target modern browsers for smaller bundle
    target: 'es2020',

    // Inline assets smaller than 10kb as base64
    assetsInlineLimit: 10240,

    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'icons': ['react-icons/si', 'lucide-react'],
        },
        // Name chunks for better debugging
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
      // Tree-shaking optimization
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
      },
    },

    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Remove specific console methods
        passes: 2, // Multiple passes for better compression
      },
      mangle: {
        safari10: true, // Support Safari 10+
      },
    },

    // Chunk size warnings
    chunkSizeWarningLimit: 1000,

    // Enable CSS code splitting
    cssCodeSplit: true,

    // Optimize CSS
    cssMinify: true,

    // Enable source maps for production debugging (disable for smaller builds)
    sourcemap: false,

    // Report compressed size
    reportCompressedSize: true,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: [], // Add any deps that cause issues
  },
})
