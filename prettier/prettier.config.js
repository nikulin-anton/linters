module.exports = {
	printWidth: 90,
	tabWidth: 4,
	useTabs: false,
	semi: true,
	singleQuote: true,
	trailingComma: 'none',
	bracketSpacing: false,
	arrowParens: 'avoid',
	overrides: [
		{
			files: '*.js',
			options: {
				parser: 'babylon'
			}
		},
		{
			files: '*.ts',
			options: {
				parser: 'typescript'
			}
		},
		{
			files: '*.md',
			options: {
				parser: 'markdown'
			}
		},
		{
			files: '*.json',
			options: {
				parser: 'json'
			}
		},
		{
			files: '.prettierrc',
			options: {
				parser: 'json'
			}
		},
		{
			files: '.stylelintrc',
			options: {
				parser: 'json'
			}
		}
	]
};
