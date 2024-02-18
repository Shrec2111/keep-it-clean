//test scenarios
//you can replace the code from testFile1/2.js to check the results.

const fs = require('fs');
const codeQualityChecker = require('code-prettier');

// File to test
const filePath = './file1.js'; // this is a dummy file which contains unformatted data.

// Read code from file
const code = fs.readFileSync(filePath, 'utf8');

// 1. Linting Test
(async () => {
  try {
    const lintResults = await codeQualityChecker.lint([filePath]);
    console.log('Linting Results:', lintResults);
  } catch (error) {
    console.error('Error occurred during linting:', error);
  }
})();

// 2. Static Analysis Test
(async () => {
  try {
    const staticAnalysisResults = await codeQualityChecker.staticAnalysis([filePath]);
    console.log('Static Analysis Results:', staticAnalysisResults);
  } catch (error) {
    console.error('Error occurred during static analysis:', error);
  }
})();

// 3. Formatting Test
(async () => {
  try {
    const formattedCode = await codeQualityChecker.format(code);
    console.log('Code formatted successfully:', formattedCode);
  } catch (error) {
    console.error('Error occurred during formatting:', error);
  }
})();
