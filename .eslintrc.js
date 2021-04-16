module.exports = {
	env: {
		es6: true,
		node: true,
	},
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"prettier",
		"prettier/@typescript-eslint",
		"prettier/standard",
	],
	parserOptions: {
		project: ["tsconfig.eslint.json"],
		sourceType: "module",
	},
	rules: {
		"@typescript-eslint/indent": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"import/order": "off",
		indent: "off",
		"simple-import-sort/sort": "warn",
		"sort-imports": "off",
	},
	plugins: ["@typescript-eslint", "prefer-arrow", "simple-import-sort"],
};
