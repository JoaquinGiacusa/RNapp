module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 0,

    'react/no-unstable-nested-components': [
      'off' | 'warn' | 'error',
      {allowAsProps: true | false},
    ],
  },
};
