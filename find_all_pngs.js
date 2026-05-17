const { execSync } = require('child_process');
try {
  console.log(execSync('find /app/applet -name "*.png*"').toString());
} catch (e) {
  console.log(e.toString());
}
