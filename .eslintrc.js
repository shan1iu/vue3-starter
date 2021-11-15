module.exports = {
	env: {
		node: true,
		'vue/setup-compiler-macros': true
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'prettier',
		'plugin:tailwindcss/recommended'
	],
	rules: {
		'vue/multi-word-component-names': 'off',
		'vue/script-setup-uses-vars': 'error'
	},
	plugins: ['tailwindcss']
}
