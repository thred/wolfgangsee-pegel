/// <reference path="../typings/main.d.ts"/>

import * as http from "http";

function extract(body: string, regExp: RegExp): string {
    let match = regExp.exec(body);

    return ((match) && (match.length)) ? match[match.length - 1] : "";
}

http.get("http://www.bogner-lehner.com/strobl.php", (response) => {
    console.log(`Status: ${response.statusCode} - ${response.statusMessage}`);

    let body = "";

    response.setEncoding('utf8');

    response.on("data", (chunk) => {
        body += chunk;
    });

    response.on("end", () => {
        let date = extract(body, /<div id="Rahmen16">(.*) Uhr/g);
        let level = extract(body, /<div id="Rahmen9"><B>(.*) cm/g);
        let temperature = extract(body, /<div id="Rahmen7"><B>([^\s]*)/g);

        console.log(`Date = ${date}, Level (in cm) = ${level}, Temperature (in celsius) = ${temperature}`);
    });

    response.resume();
}).on("error", (error) => {
    console.log(`Error: ${error.message}`);
});
