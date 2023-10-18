module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js',"@shopify/react-native-skia/jestSetup.js"],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
};
