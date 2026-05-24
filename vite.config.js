import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  // Обов'язково замініть 'назва_вашого_репозиторію' на реальне ім'я вашого репозиторію на GitHub
  base: '/counter-redux/', 
})
