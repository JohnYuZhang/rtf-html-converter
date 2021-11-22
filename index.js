const fs = require('fs');
const rtfToHTML = require('@iarna/rtf-to-html');

/*
This function should accept an input and output file or default.
It should loop through all rtf files in the directory and convert them to html
It should maintain bolding, italics and superscript
*/
const convert = module.exports.convert = async () => {

    let output = fs.createWriteStream('./out.html');
    fs.createReadStream('e1.rtf').pipe(
        rtfToHTML((err, html) => {
            console.log(err)
            output.write(html);
        })
        
    )
    const convertToHtml = console.log('finished')

    return Promise.all([convertToHtml]);
}


convert();