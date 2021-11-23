const App = require('./src/app');
const path = require('path');
var express = require("express");
var appExpress = express();

appExpress.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});

appExpress.get('/gridapi/:sCoordenadas', (req, res) => {
    var oApp = new App();
    oApp.init(req.params.sCoordenadas);
    var obj = {
        aGrid: oApp.aGrid,
        iPokemonsAcumulados: oApp.iPokemonsAcumulados
    }
    res.json(obj);
});


appExpress.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
