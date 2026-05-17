const { execSync } = require('child_process');
try {
  console.log(execSync('find /workspace -iname "*hero*"').toString());
} catch (e) {
  console.log(e.toString());
}
