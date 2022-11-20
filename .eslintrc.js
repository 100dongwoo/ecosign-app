// module.exports = {
//     root: true,
//     extends: '@react-native-community',
//     parser: '@typescript-eslint/parser',
//     plugins: ['@typescript-eslint'],
//     overrides: [
//         {
//             files: ['*.ts', '*.tsx'],
//             rules: {
//                 '@typescript-eslint/no-shadow': ['error'],
//                 'no-shadow': 'off',
//                 'no-undef': 'off',
//             },
//         },
//     ],
// };
module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb-base'],
  rules: {
    'arrow-body-style': 'warn',
  },
  root: true,
};
