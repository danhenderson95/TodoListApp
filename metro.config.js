const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/helpers': path.resolve(__dirname, 'src/helpers'),
      '@/interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@/theme': path.resolve(__dirname, 'src/theme'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
      '@/screens': path.resolve(__dirname, 'src/screens'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
