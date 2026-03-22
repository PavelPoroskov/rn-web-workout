import { defineConfig } from 'vite'
import { rnw } from "vite-plugin-rnw";
// import type { Options } from '@vitejs/plugin-react'

// const options: Options = {
//   babel: {
//     parserOpts: {
//       plugins: [
//         'decorators',
//       ]
//     }
//   }
// }

// https://vite.dev/config/
export default defineConfig({
  plugins: [rnw()],
  // plugins: [rnw(options)],
})
