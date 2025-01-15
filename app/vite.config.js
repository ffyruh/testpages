import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: "/testpages/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, '/index.html'),
        all: resolve(__dirname, '/pages/all.html'),
        single: resolve(__dirname, '/pages/single.html'),
      }
    }
  } 
})

