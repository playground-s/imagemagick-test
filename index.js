const spawn = require('child-process-promise').spawn;
const os = require('os');
const fs = require('fs');
const imageMagick = require('imagemagick');
// const imageminWebp = require('imagemin-webp');

async function main() {
    try {

        await imageMagick.resize({
            srcPath: './sample.jpg',
            dstPath: './out.webp',
            width: 200,
            height: 200,
            quality: 0.8
        });
    } catch (erro) {
        console.error(error)
    }

}

main();
