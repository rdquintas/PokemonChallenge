const App = require('./src/app');


var sInputString = process.argv[2] ? process.argv[2] : "";
// var sInputString = "NNNEESSEEENNOOO";
// var oDadosDeTeste = require('./tests/dadosDeTeste.json');
// sInputString = oDadosDeTeste.data;

let oMyApp = new App();
oMyApp.init(sInputString);
oMyApp.escreveResultadoConsola();
//oMyApp.escreveGridConsola();
