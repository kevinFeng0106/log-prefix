import { defineConfig } from "tsup";

export default defineConfig({
  outDir: "dist",
  format: ["esm", "cjs"],
  target: "es2020",
  watch: true,
  dts: true,
  clean: true,
});
