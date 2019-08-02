
module.exports = {
  extends: [
    require.resolve('eslint-config-standard'),
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/standard'),
    require.resolve('eslint-config-standard-react'),
    require.resolve('eslint-config-prettier/react')
  ],
  parser: 'babel-eslint',
  plugins: ['react-hooks'],
  rules: {
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', ['internal', 'parent', 'sibling', 'index']]
      }
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'react/prop-types': false,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  globals: {
    FileReader: 'readonly'
  }
};
