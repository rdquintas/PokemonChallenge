const App = require('./src/app');


var sInputString = process.argv[2] ? process.argv[2] : "";
//var sInputString = "NNNEESSEEENNOOO";

let oMyApp = new App();

oMyApp.init(sInputString);
