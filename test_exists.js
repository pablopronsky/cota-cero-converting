const fs = require('fs');
console.log('Exists 1?', fs.existsSync('\\\\public\\\\deck wpc calido.png\\\\'));
console.log('Exists 2?', fs.existsSync('\\public\\deck wpc calido.png\\'));
console.log('Exists 3?', fs.existsSync('/public/deck wpc calido.png/'));
console.log('Exists 4?', fs.existsSync('/workspace/public/deck wpc calido.png'));
console.log('Exists 5?', fs.existsSync('/deck wpc calido.png'));
