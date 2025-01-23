import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/e-commerceFurniture",
  server: {
    allowedHosts: [
      "82e7-2405-201-303a-c988-80ae-94c4-4f73-ea2c.ngrok-free.app",
    ],
  },
});
