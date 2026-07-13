import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jsblends.app',
  appName: 'JsBlends',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  bundledWebRuntime: false
};

export default config;