/// <reference path="../typings/main.d.ts"/>

import * as http from "http";

http.get("http://www.bogner-lehner.com/strobl.php", (res) => {
    console.log(`Status: ${res.statusCode} - ${res.statusMessage}`);

    res.setEncoding('utf8');
    res.on("data", (chunk) => {
        console.log(chunk);
    });

    res.resume();
}).on("error", (error) => {
    console.log(`Error: ${error.message}`);
});
