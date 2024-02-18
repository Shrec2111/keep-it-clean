const { ESLint } = require('eslint');

async function lint(files, eslintConfig) {
  const eslint = new ESLint({
    overrideConfig: eslintConfig,
  });

  const results = await eslint.lintFiles(files);

  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);

  return resultText;
}

module.exports = lint;