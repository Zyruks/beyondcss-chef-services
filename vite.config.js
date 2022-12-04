import postCSS from "postcss";
import { qrcode } from "vite-plugin-qrcode";
import { ViteTips } from "vite-plugin-tips";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [postCSS(), qrcode(), ViteTips()],
});
