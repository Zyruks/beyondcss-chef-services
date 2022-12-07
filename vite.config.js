import { qrcode } from "vite-plugin-qrcode";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [qrcode()],
});
