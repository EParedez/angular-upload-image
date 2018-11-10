const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/upload', (req, res) =>{
    const file = req.body.file;
    const name = req.body.name;

    const binaryData = new Buffer(file.replace(/^data:image\/png;base64,/,""), 'base64').toString('binary');
    fs.writeFile(name, binaryData, "binary", (err) => {
        console.log(err);
    })

    res.json({result:'ok'});
});

app.listen(3000, () => console.log('server ready'));