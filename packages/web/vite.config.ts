import { defineConfig } from 'vite'
import { rnw } from "vite-plugin-rnw";
import type { Options } from '@vitejs/plugin-react'

const options: Options = {
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { "version": "2023-11" }],
    ]
  }
}

// https://vite.dev/config/
export default defineConfig({
  // plugins: [rnw()],
  plugins: [rnw(options)],
})
