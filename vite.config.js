// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        contacts: resolve(__dirname, 'src/contacts.html'),
        ai_code_assitant_compare: resolve(__dirname, 'src/ai_code_assistants_compare.html'),
      }
    }
  }
})
