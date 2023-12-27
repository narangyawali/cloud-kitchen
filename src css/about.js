// i cannot run the other files so i create the about us using css and html 

const htmlContent = `

`;

fs.writeFileSync('index.html', htmlContent, 'utf8');
const { exec } = require('child_process');
exec('start index.html');
