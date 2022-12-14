module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true
	},
	extends: [ 'eslint:recommended', 'next/core-web-vitals', 'plugin:@typescript-eslint/recommended' ],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	plugins: [ '@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import' ],
	rules: {
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-extra-parens': [
			'error',
			'all',
			{
				enforceForArrowConditionals: false,
				nestedBinaryExpressions: false
			}
		 ],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				ignoreRestSiblings: true
			}
		 ],
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/semi': [ 'error', 'always' ],
		'accessor-pairs': [
			'error',
			{
				enforceForClassMembers: false,
				getWithoutSet: true,
				setWithoutGet: true
			}
		 ],
		'array-bracket-newline': [ 'error', 'consistent' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'array-callback-return': [
			'error',
			{
				allowImplicit: false,
				checkForEach: true
			}
		 ],
		'array-element-newline': [ 'error', 'consistent' ],
		'arrow-body-style': [ 'error', 'as-needed' ],
		'arrow-parens': [ 'error', 'always' ],
		'arrow-spacing': 'error',
		'block-scoped-var': 'error',
		'block-spacing': [ 'error', 'always' ],
		'brace-style': 'error',
		camelcase: [
			'error',
			{
				ignoreDestructuring: true,
				ignoreImports: true
			}
		 ],
		'comma-dangle': [ 'error', 'never' ],
		'comma-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		 ],
		'comma-style': [ 'error', 'last' ],
		'computed-property-spacing': [ 'error', 'always' ],
		curly: [ 'error' ],
		'default-case': 'error',
		'default-case-last': 'error',
		'dot-location': [ 'error', 'property' ],
		'dot-notation': [ 'error', { allowKeywords: true } ],
		'eol-last': [ 'error', 'always' ],
		eqeqeq: [ 'error', 'always' ],
		'func-call-spacing': [ 'error', 'never' ],
		'func-name-matching': [ 'error' ],
		'function-call-argument-newline': [ 'error', 'consistent' ],
		'function-paren-newline': [ 'error', 'consistent' ],
		'generator-star-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		 ],
		'grouped-accessor-pairs': 'error',
		'guard-for-in': 'off',
		'implicit-arrow-linebreak': 'off',
		indent: [ 'error', 'tab' ],
		'jsx-quotes': [ 'error', 'prefer-single' ],
		'key-spacing': [ 'error', { beforeColon: false } ],
		'keyword-spacing': [ 'error', { before: true } ],
		'line-comment-position': [ 'error', { position: 'above' } ],
		'linebreak-style': 'off',
		'lines-between-class-members': [ 'error', 'always' ],
		'max-classes-per-file': [ 'error', 1 ],
		'max-len': [ 'error', { code: 120 } ],
		'new-cap': [ 'error', { capIsNewExceptionPattern: '[  A-Z_  ]+' } ],
		'new-parens': 'error',
		'newline-before-return': 'error',
		'newline-per-chained-call': 'error',
		'no-alert': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'off',
		'no-confusing-arrow': [ 'error', { allowParens: true } ],
		'no-console': 'warn',
		'no-constructor-return': 'error',
		'no-debugger': 'warn',
		'no-delete-var': 'error',
		'no-div-regex': 'error',
		'no-duplicate-imports': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'off',
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': [ 'error', { enforceForLogicalOperands: true } ],
		'no-extra-label': 'error',
		'no-extra-parens': 'off',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-inline-comments': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-loss-of-precision': 'error',
		'no-mixed-operators': 'error',
		'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ],
		'no-multi-assign': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-promise-executor-return': 'error',
		'no-proto': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow': 'off',
		'no-shadow-restricted-names': 'error',
		'no-template-curly-in-string': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undefined': 'off',
		'no-underscore-dangle': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unreachable-loop': 'error',
		'no-unused-expressions': 'error',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'off',
		'no-useless-escape': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-spacing': [ 'error', 'always' ],
		'object-property-newline': 'error',
		'operator-assignment': [ 'error', 'always' ],
		'operator-linebreak': [ 'error', 'after' ],
		'prefer-const': 'error',
		'prefer-destructuring': [
			'error',
			{
				array: true,
				object: true
			}
		 ],
		'prefer-exponentiation-operator': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-object-spread': 'error',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': [ 'error', 'as-needed' ],
		quotes: [ 'error', 'single' ],
		radix: 'error',
		'require-await': 'error',
		'require-unicode-regexp': 'error',
		'rest-spread-spacing': [ 'error', 'never' ],
		semi: 'off',
		'semi-spacing': 'error',
		'semi-style': [ 'error', 'last' ],
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				memberSyntaxSortOrder: [ 'all', 'none', 'single', 'multiple' ]
			}
		 ],
		'sort-keys': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': [ 'error', 'never' ],
		'space-in-parens': [ 'error', 'never' ],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [ 'error', 'always' ],
		'switch-colon-spacing': 'error',
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'template-tag-spacing': [ 'error', 'never' ],
		'wrap-iife': 'error',
		'wrap-regex': 'error',
		'yield-star-spacing': [ 'error', 'after' ],
		yoda: 'error'
	}
};
