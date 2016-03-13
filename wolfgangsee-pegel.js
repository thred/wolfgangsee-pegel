/// <reference path="../typings/main.d.ts"/>
"use strict";
var http = require("http");
var fs = require("fs");
function extract(body, regExp) {
    var match = regExp.exec(body);
    return ((match) && (match.length)) ? match[match.length - 1] : "";
}
function writeJSON(data) {
    fs.writeFile("wolfgangsee-pegel.json", JSON.stringify(data), function (err) {
        if (err) {
            console.error("Failed to write file", err);
            return;
        }
        console.log("JSON written successfully");
    });
}
function writeCSV(data) {
    fs.appendFile("wolfgangsee-pegel.csv", data.date + ", " + data.level + ", " + data.temperature + "\n", function (err) {
        if (err) {
            console.error("Failed to write file", err);
            return;
        }
        console.log("CSV written successfully");
    });
}
http.get("http://www.bogner-lehner.com/strobl.php", function (response) {
    console.log("Status: " + response.statusCode + " - " + response.statusMessage);
    var body = "";
    response.setEncoding('utf8');
    response.on("data", function (chunk) {
        body += chunk;
    });
    response.on("end", function () {
        var data = {
            date: extract(body, /<div id="Rahmen16">(.*) Uhr/g),
            level: extract(body, /<div id="Rahmen9"><B>(.*) cm/g),
            temperature: extract(body, /<div id="Rahmen7"><B>([^\s]*)/g)
        };
        console.log("Date = " + data.date + ", Level (in cm) = " + data.level + ", Temperature (in celsius) = " + data.temperature);
        writeJSON(data);
        writeCSV(data);
    });
    response.resume();
}).on("error", function (err) {
    console.error("Failed to request data", err);
});
