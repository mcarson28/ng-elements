//npm install concat fs-extra --save-dev
const fs = require('fs-extra');
const concat = require('concat');

(async function () {
  const files = [
    './dist/ng-elements/runtime.js',
    './dist/ng-elements/polyfills.js',
    './dist/ng-elements/main.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/elements.js');
  await fs.copyFile('./dist/ng-elements/styles.css', 'elements/styles.css')
})()
