const fs = require('fs');
const archiver = require('archiver');

function createZip(browser) {
    if (!fs.existsSync('./build')){
      fs.mkdirSync('./build');
    }
    
    const output = fs.createWriteStream(`${__dirname}/build/${browser}.zip`);
    const archive = archiver('zip', {
      zlib: { level: 9 },
    });

  archive.pipe(output);

  archive.directory(`src/${browser}/`, false);

  archive.directory('src/common/', 'common');

  archive.finalize();
}

createZip('chrome');
createZip('firefox');