/// <reference path="../typings/main.d.ts"/>
"use strict";
var http = require("http");
function extract(body, regExp) {
    var match = regExp.exec(body);
    return ((match) && (match.length)) ? match[match.length - 1] : "";
}
http.get("http://www.bogner-lehner.com/strobl.php", function (response) {
    console.log("Status: " + response.statusCode + " - " + response.statusMessage);
    var body = "";
    response.setEncoding('utf8');
    response.on("data", function (chunk) {
        body += chunk;
    });
    response.on("end", function () {
        var date = extract(body, /<div id="Rahmen16">(.*) Uhr/g);
        var level = extract(body, /<div id="Rahmen9"><B>(.*) cm/g);
        var temperature = extract(body, /<div id="Rahmen7"><B>([^\s]*)/g);
        console.log("Date = " + date + ", Level (in cm) = " + level + ", Temperature (in celsius) = " + temperature);
    });
    response.resume();
}).on("error", function (error) {
    console.log("Error: " + error.message);
});
