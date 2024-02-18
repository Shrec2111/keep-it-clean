const prettier = require('prettier');

function formatCode(code, prettierConfig) {
  return prettier.format(code, {
    ...prettierConfig,
    parser: 'babel', // Specify the parser option
  });
}

module.exports = formatCode;