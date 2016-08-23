Meteor.methods({
    pdfJson: function(file){
        if(Meteor.isServer){
            console.log('yo', file);
            // var fs = require('fs');
            // var PDFParser = require("./pdf2json/PDFParser");

            // var pdfParser = new PDFParser();

            // pdfParser.on("pdfParser_dataError", errData, function(){console.error(errData.parserError); });
            // pdfParser.on("pdfParser_dataReady", pdfData, function(){
            //     fs.writeFile("./pdf2json/test/F1040EZ.content.txt", pdfParser.getRawTextContent());});


            // pdfParser.loadPDF("./pdf2json/test/pdf/fd/form/F1040EZ.pdf");


        }
    }
});