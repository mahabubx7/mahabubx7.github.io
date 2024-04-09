import vituum from 'vituum'
import liquid from '@vituum/vite-plugin-liquid'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'

export default {
  plugins: [
    vituum(),
    tailwindcss(),
    liquid({
      root: './src',
    }),
  ],
}
