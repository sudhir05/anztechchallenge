const express = require('express');
const fs = require('fs');
const app = express();

//get the latest commit
const revision  = require('child_process').execSync('git rev-parse HEAD').toString().trim();
//Json builder
var json =  {
    "myapplication": [{
    "apiVersion":process.env.npm_package_version,
    "lastcommitsha":revision,
    "description":"pre-interview technical test",
    }]
}
//version endpoint
app.get('/version', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(json));
});

//starting server
const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

module.exports = server;