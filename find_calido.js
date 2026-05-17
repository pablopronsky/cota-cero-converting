const fs = require('fs');
const path = require('path');
function walk(dir) {
  try {
    const list = fs.readdirSync(dir);
    for (let file of list) {
      if (file === 'proc' || file === 'sys' || file === 'dev' || file === 'node_modules') continue;
      let full = path.join(dir, file);
      if (file.toLowerCase().includes('calido') || file.toLowerCase().includes('hero.png')) {
        console.log('FOUND:', full);
      }
      try {
        if (fs.statSync(full).isDirectory()) {
          walk(full);
        }
      } catch(e) {}
    }
  } catch(e) {}
}
walk('/');
