const fs = require('fs');
// console.log(fs);

const folderName = process.argv[2] || 'Project'

// fs.mkdir('Folder!', { recursive: true }, (err) => {
//     console.log('IN THE CALLBACK!!')
//     if (err) throw err;
//   });

// fs.mkdirSync('Folder2');
// console.log('I COME AFTER MKDIR IN THE FILE!');

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/new.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/style.css`, '');
}
catch (e) {
    console.log('SOMETHING WENT WRONG');
    console.log(e);
}

