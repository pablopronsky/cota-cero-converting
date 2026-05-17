const { execSync } = require('child_process');
try {
  console.log(execSync('find /workspace -iname "*deck*"').toString());
} catch (e) {
  console.log(e.toString());
}
