import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Import the new Tailwind CSS Vite plugin

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: process.env.VITE_BASE_PATH
    || (command === 'serve' ? '/' : '/Nordic-Product-Management-Dashboard/'),
  plugins: [
    react(),
    tailwindcss(), // Add the Tailwind CSS Vite plugin
  ],
  ssr: {
    noExternal: ['@tailwindcss/vite']
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
}))
