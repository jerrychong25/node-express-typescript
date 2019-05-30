"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express = require("express");
// Create a new express application instance
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World! Welcome To My Page!');
});
app.listen(3000, function () {
    console.log('node-express-typescript app listening on port 3000!');
});
