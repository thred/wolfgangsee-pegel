/// <reference path="../typings/main.d.ts"/>
"use strict";
var http = require("http");
http.get("http://www.bogner-lehner.com/strobl.php", function (res) {
    console.log("Status: " + res.statusCode + " - " + res.statusMessage);
    res.setEncoding('utf8');
    res.on("data", function (chunk) {
        console.log(chunk);
    });
    res.resume();
}).on("error", function (error) {
    console.log("Error: " + error.message);
});
