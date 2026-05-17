const fs = require('fs');
const files = fs.readdirSync('.');
const weirdFiles = files.filter(f => !f.match(/^[a-zA-Z0-9.\-_]+$/));
console.log("Weird files:", weirdFiles);
