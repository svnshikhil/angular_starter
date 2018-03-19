const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist'));
const path = require('path');
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.listen(7021);
console.log("App is Running on 7021")