const sharp = require('sharp');

const intro = "data:image/png;base64,";
const base64 = "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII";

let test = Buffer.from(base64, 'base64');
sharp(test)
    .toFile('output.webp')
    .then(info => { 
        console.log(info);
     })
    .catch(err => { 
        console.log(err);
     });