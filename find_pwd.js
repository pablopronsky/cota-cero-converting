const { execSync } = require('child_process');
try {
  console.log('PWD', process.cwd());
  console.log(execSync('find ' + process.cwd() + ' -iname "*deck*"').toString());
} catch (e) {
  console.log(e.toString());
}
