var Tesseract = require('tesseract-ocr')
var Jimp = require("jimp");
var file = __dirname + "/imagenGenerada.jpg";
Jimp.read(__dirname + '/imagenInicial.jpeg', function (err, image) {
    if (err) throw err;
    image.brightness(-.45).contrast(1).write(file, function(err,image){ //Type1
        if (err) throw err;
        Tesseract.recognize(file)
        .then(function(result){
            console.log(result.text.trim());
        })
    });

});
