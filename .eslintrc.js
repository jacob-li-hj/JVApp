const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.eslint,
  root: true,
  extends: ['@react-native-community', require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
		...fabric.eslint.rules,
		"import/export": 0,
		"@typescript-eslint/no-use-before-define": 0
	},
  parserOptions: {
		project: './tsconfig.json'
	},
  settings: {
		'import/resolver': {
			typescript: {},
		},
	},
};
