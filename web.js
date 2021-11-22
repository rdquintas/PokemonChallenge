const App = require('./src/app');

var express = require("express");
var appExpress = express();

appExpress.listen(3000, () => {
    console.log("Server running on port 3000");
});

appExpress.get('/gridapi/:sCoordenadas', (req, res) => {
    var oApp = new App();
    oApp.init(req.params.sCoordenadas);
    res.json(oApp.aGrid);
});
