const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
  fs.readdirSync(logsDir).forEach(file => {
    const filePath = path.join(logsDir, file);
    fs.unlinkSync(filePath);
    console.log(`delete files... ${file}`);
  });
  fs.rmdirSync(logsDir);
  console.log('Logs directory removed.');
} else {
  console.log('Logs directory does not exist.');
}
