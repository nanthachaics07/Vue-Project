import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})

// module.exports = {
// 	services: [
// 		require('volar-service-vetur').create(),
// 	],
// };