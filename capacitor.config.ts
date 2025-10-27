import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.restore614.scopemgr',
  appName: 'ScopeMgr - Contractor CRM',
  webDir: 'build',
  server: {
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: [
      'api.rainviewer.com',
      'tile.openstreetmap.org', 
      'tilecache.rainviewer.com',
      '*.openweathermap.org',
      'nominatim.openstreetmap.org'
    ]
  },
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#FFFFFF',
    allowsLinkPreview: false,
    scrollEnabled: true,
    overrideUserAgent: 'ScopeMgr iOS App',
    minAppVersion: '1.0.0',
    preferredContentMode: 'mobile'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
      launchFadeOutDuration: 300,
      backgroundColor: "#FFFFFF",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: "#1E40AF"
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: "#FFFFFF",
      overlay: false
    },
    Camera: {
      permissions: ['camera', 'photos']
    },
    Geolocation: {
      permissions: ['location']
    }
  }
};

export default config;