const app = require('./src/app');
const App = require('./src/app');


var sInputString = process.argv[2] ? process.argv[2] : "";
//var sInputString = "NNNEESSEEENNOOO";

app.init(sInputString);
