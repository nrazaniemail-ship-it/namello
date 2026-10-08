import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.namello.app",
  appName: "Namello",
  webDir: "dist",
  bundledWebRuntime: false,
  android: {
    backgroundColor: "#0B0E11"
  }
};

export default config;
