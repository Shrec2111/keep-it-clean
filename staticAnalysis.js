const { ESLint } = require('eslint');

async function staticAnalysis(files, eslintConfig) {
  const eslint = new ESLint({
    overrideConfig: eslintConfig,
  });

  const results = await eslint.lintFiles(files);

  // Perform additional static analysis checks here

  return results;
}

module.exports = staticAnalysis;