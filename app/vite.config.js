import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: "/testpages/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, '/index.html'),
        all: resolve(__dirname, '/all/index.html'),
        single: resolve(__dirname, '/single/index.html'),
      }
    }
  } 
})

