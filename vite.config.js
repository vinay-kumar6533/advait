import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/advait/',
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'hamer.html', dest: '' } // copy hamer.html to dist root
      ]
    })
  ]
})
