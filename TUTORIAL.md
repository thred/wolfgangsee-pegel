# How to start a Node project with TypeScript

_This tutorial covers the first steps for a Node.js project using TypeScript. You can use it as jump start for any small project using these tools. But it assumes that you have a computer with a real keyboard, an internet connection and a basic knowledge of programming._

## Prerequisits

_For this tutorial you will need Node.js and GIT._

Install [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) for your OS.

For Windows users: You should consider using the Git Bash as console. Make sure, the option is checked when installing Git.

_Futhermore you need a cool editor with TypeScript support, e.g.: [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com/)_

If you are using [Atom](https://atom.io/), I would recommend the following packages:

* [atom-typescript](https://atom.io/packages/atom-typescript)
* [atom-beautify](https://atom.io/packages/atom-beautify)

And optional (you won't need them for this tutorial):

* [linter](https://atom.io/packages/linter)
* [linter-csslint](https://atom.io/packages/linter-csslint)
* [linter-jshint](https://atom.io/packages/linter-jshint)
* [linter-jsonlint](https://atom.io/packages/linter-jsonlint)
* [linter-tidy](https://atom.io/packages/linter-tidy)

But while writing this tutorial, I will give [Visual Studio Code](https://code.visualstudio.com/) a chance. I heard that Microsoft is cool again.

_The tutorial will cover creating a free repository on [GitHub](https://github.com/), too. This is an optional step._

If you want to, you need to create a free account on [GitHub](https://github.com/) to host this repository.

## Start a Node Project

_First you need a directory for the project._

Create a directory by using a shell (for Windows user: the Git Bash). Open the shell and execute `mkdir wolfgangsee-pegel` and then `cd wolfgangsee-pegel`.

_Next you start a Node.js project. A Node.js project is defined by it's `package.json` file in the root directory._

Simply execute `npm init` to create the `package.json` file. Enter the necessary values and it will create a file with the following content:

    {
      "name": "...",
      "version": "1.0.0",
      "description": "...",
      "main": "wolfgangsee-pegel.js",
      "directories": {
        "doc": "doc"
      },
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "...",
      "license": "ISC"
    }

Now, add an entry to the `scripts` section, containing:

    "start": "node wolfgangsee-pegel.js",

Create the `wolfgangsee-pegel.js` file with some sample content, e.g.:

    console.log("Hello Node.js!");

**Test it:** Execute `npm start`.

**Document it:** Add basic documentation by creating a `README.md` file (the format it uses is called [Markdown](https://daringfireball.net/projects/markdown/), if you need to look up the syntax).

    # ...

    ...

    ## Execute

    ### Prerequisits

    * [Node.js](https://nodejs.org/) for your OS.

    ### Run It

    Execute `npm start`.

    ## Develoment

    ### Prerequisits

    * [Node.js](https://nodejs.org/) for your OS.

    ## License

    Copyright (c) 20.., ...

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

## Initialize Git

_A cool open source project uses Git as version control system._

Execute `git init` in the root directory of you project.

Add the `node_modules/` directory to the `.gitignore` file by executing `echo node_modules/ >> .gitignore`.

Add all files using `git add --all` and commit them with `git commit -m "Initial commit"`.

_You have a Git repository now. Since this is an open source project you can host it publicly. Let's use [GitHub](https://github.com/) for this. This step is optional._

Create a new project on [Github's new project page](https://github.com/new) (no license, no readme) and copy the URL in the Quick setup section.

Add the homepage and the repository to the `package.json` file by adding:

    "homepage": "https://github.com/...",
    "repository": "https://github.com/...",

**Document it:** Add the information to the development section of the `README.md` file:

    ### Source

    Clone from https://github.com/...

Execute `git remote add origin <repository-URL>` with the repository URL and push your changes with `git push --set-upstream origin master`.

_Contratulations, you have a GitHub project with source, now._

## Prepare TypeScript

_You will need TypeScript now. You can install it using `npm`, the package manager of Node.js._

Install typescript by executing `npm install --global typescript` as root/admin.

Create a `src` directory and the `src/wolfgangsee-pegel.js` file with some sample content:

    console.log("Hello TypeScript!");

**Test it:** Compile the typescript code with `tsc --outDir . src/*.ts` in the root directory of your project. It should create the `wolfgangsee-pegel.js` file in the root directory of your project.

**Document it:** Add TypeScript to the prerequisits of the development section in the readme:

    * Install [TypeScript](http://www.typescriptlang.org/) using `npm install --global typescript` (as root/admin).

_Just like the `package.json` file defines a root directory of a Node.js project, a `tsconfig.json` file defines the root directory of a TypeScript project. You can use the TypeScript compiler to create such a file._

Execute `tsc --init --outDir . src/*.ts` to create a TypeScript porject file. It will create the `tsconfig.json` file with the following content:

    {
        "compilerOptions": {
            "outDir": ".",
            "module": "commonjs",
            "target": "es5",
            "noImplicitAny": false,
            "sourceMap": false
        },
        "exclude": [
            "node_modules"
        ],
        "files": [
            "src/wolfgangsee-pegel.ts"
        ]
    }

**Test it:** Compile your code by executing `tsc` (it uses the `tsconfig.json` file for it's options) and execute it with `npm start`.

## Node - Definetly Typed

_We need to install the [Manager for TypeScript Definitions](https://github.com/typings/typings) in order to be able to install type definition files from the [DefinetlyTyped Repository](https://github.com/DefinitelyTyped/DefinitelyTyped)._

Install the `typings` tool globally with `npm install --global typings` (as root/admin).

**Document it:** Add this to the developent section in the `README.md`, too:

    * Install [Typings](https://github.com/typings/typings) using `npm install --global typings` (as root/admin).

_Now add the `node.js.d.ts` file to the project._

First, search for the available type definitions by executing `typings search node --ambient` (--ambient will look into the [DefinetlyTyped Repository](https://github.com/DefinitelyTyped/DefinitelyTyped)).

There is a module, that's called `node` - install it with `typings install node --ambient`.

_This will create a `typings` directory with the necessary dependencies and a `typings/main/main.d.ts` file with the reference to the dependencies. You will need to reference this `main.d.ts` file in your source files._

Open your `wolfgangsee-pegel.ts` file and add the following as first line:

    /// <reference path="../typings/main.d.ts"/>

Execute 'tsc' and it should work fluently.

_You have completed this short chapter, time to commit your changes. In this tutorial, we will commit the `typings` directory, too, even though this is a generated directory and we don't need the files for execution. But currently, we don't have a build tool and thus no automatic process to generate the directory._

Execute `git add --all` and `git commit -m "Added Node.js type definitions"`.

## Accessing the Server

_Have a look at the page http://www.bogner-lehner.com/strobl.php. It's the webpage of a monitoring station in the Wolfgangsee lake near [Strobl, Austria](https://www.openstreetmap.org/#map=14/47.7199/13.4852). It's a service provided by the [government of Upper Austria](https://www.land-oberoesterreich.gv.at/was_internethydro_Online.htm), so I think it's ok to access it._

First, start by imporing the [http module](https://nodejs.org/api/http.html) of Node.js.

    /// <reference path="../typings/main.d.ts"/>
    
    import * as http from "http";

Now you can use the http module as `http`. Next, use the get function to call the page.

    http.get("http://www.bogner-lehner.com/strobl.php", (response) => {
        console.log(`Status: ${response.statusCode} - ${response.statusMessage}`);

        let body = "";
        
        response.setEncoding('utf8');
        
        response.on("data", (chunk) => {
            body += chunk;
        });
        
        response.on("end", () => {
            console.log(body);  
        });

        response.resume();
    }).on("error", (err) => {
        console.error("Failed to request data", err);
    });

It's a common practice to access web pages in this way. Don't just copy the code, try to understand it! 

**Test it:** Compile the code with `tsc` and execute it with `npm start`.

If everything works fine, it should print the HTML code of the webpage to the console. Add a namespace around your code (after the import statement) to exercise a good code style:

    namespace WolfgangseePegel {
        ...
    }
    
Have a look at the `wolfgangsee-pegel.js` file and see what the TypeScript compiler did to your code. 

Commit you code.

## Extracting the Information

_The page contains the level "Wasserstand" and the temperature "Wassertemperatur". And it contains the date called "Letzte gültige Datenübertragung"._

When looking at the HTML code of the page we can see, that the values are placed in div elements with an id. Let's use [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) to extract the values, the page is so very static, there is no need to parse the whole HTML.

_If you are not familiar with regular expressions, [learn em](http://www.regular-expressions.info/tutorial.html)._

We need three expressions: 

* `/<div id="Rahmen16">(.*) Uhr/g` - the date
* `/<div id="Rahmen9"><B>(.*) cm/g` - the level
* `/<div id="Rahmen7"><B>([^\s]*)/g` - the temperature

The important parts are expressions within the parenthesis: the caputure groups. These are the values we will need. With this expressions we will cut the units, too.

First, create a utility function for extracting a value:

    function extract(body: string, regExp: RegExp): string {
        let match = regExp.exec(body);

        return ((match) && (match.length)) ? match[match.length - 1] : "";
    }

Then call it with the "end" event of the response:

    response.on("end", () => {
        let data = {
            date: extract(body, /<div id="Rahmen16">(.*) Uhr/g),
            level: extract(body, /<div id="Rahmen9"><B>(.*) cm/g),
            temperature: extract(body, /<div id="Rahmen7"><B>([^\s]*)/g)
        };

        console.log(`Date = ${data.date}, Level (in cm) = ${data.level}, Temperature (in celsius) = ${data.temperature}`);
    });

**Test it:** Compile the code with `tsc` and execute it with `npm start`.

If everything works fine, it should print the values to the console. Commit you code.

## Storing the Information

_Let's write the information to a file; it should be easily accessible for other programs, so we will use the [JSON format](https://en.wikipedia.org/wiki/JSON)._

First, you need the [fs module](https://nodejs.org/api/fs.html) of node. Add the import.

    import * as fs from "fs";

Then implement a method to write the JSON file:

    function writeJSON(data: any): void {
        fs.writeFile("wolfgangsee-pegel.json", JSON.stringify(data), (err) => {
            if (err) {
                console.error("Failed to write file", err);
                return;
            }
            
            console.log("JSON written successfully");
        });
    }

Finally call the method in your response event handler, right after the console log.

    writeJSON(data);

**Test it:** Compile the code with `tsc` and execute it with `npm start`.

If it works, it will write a file called "wolfgangsee-pegel.json". Look at it using `cat wolfgangsee-pegel.json`. Cool.

_But we want to store historic values, and JSON is no good choice for this. We cannot append values to the file without destroying the format. Let's write another file using a [CSV format](https://en.wikipedia.org/wiki/Comma-separated_values)._

**Try it:** Try this on your own. You can use the `fs.appendFile` method to append to a file.

Before you commit your work, make sure, that JSON and CSV files won't be committed, too. Add them to the `.gitignore` file using `echo wolfgangsee-pegel.json >> .gitignore` and `echo wolfgangsee-pegel.json >> .gitignore`.

## Utilize the Raspi

_And hey! Now it's time to utilize our Raspi._

Let's add a [crontab](http://crontab.org/) entry for our application. It should execute it once per hour to log the values.

First we create a `wolfgangsee-pegel.sh` script we could easily refernce in the crontab:

    #!/bin/bash
    npm start
    
And we make it executable for all with `chmod a+x wolfgangsee-pegel.sh`.

**Try it:** Execute it with `./wolfgangsee-pegel.sh`.

For adding this to the crontab, we need the full path. Execute `pwd` and copy it. Now, edit the crontab table by executing `crontab -e`. Add a new line and store it:

    PATH=/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin
    5 * * * * cd <PWD-PATH> && ./wolfgangsee-pegel.sh
   
This will execute five minutes after each full hour, every day. 

**Try it:** Make a break and check the result.

**Document it:** Document, that you can execute the application with `./wolfgangsee-pegel.sh`.

Commit your work.

## Add weather information

_That was easy. Let's add some more, weather information for example. We will use [Yahoo Weather](https://developer.yahoo.com/weather/) for this. Prepare an account, you will need an API key for this._

Get an API key from [Yahoo Weather](https://developer.yahoo.com/weather/).

Install the [Yahoo Query Language module](https://www.npmjs.com/package/yql) with `npm install yql --save`. This will add the dependency to the `package.json`, too. Look into the `node_modules` directory: it now contains a lot of modules. Open the `yql` module. It contains the `yql.js` file with the library code and it's `package.json` file that defines the name of module.

_Next, we should install the definition file, but unfortunately Definetely Typed does not contain one (at the time of writing this tutorial). The reason for this is most likely, that the API is so very simple, you can use it untyped. But we should take this as opportunity to exercise the creation of a `.d.ts` file._ 

Create a `yql.d.ts` file in your `src` folder. Open it. Split your editor and open the `yql.js` file of the node module. What you need to do, it to create typed definition of the YQL class and each public method. 

_Have a look at the [documentation for creating `.d.ts` files](http://www.typescriptlang.org/Handbook#writing-dts-files). It says we should use the modules documentation instead of the `.js` file. Let's ignore this for now._  

First define the module and the class:

    declare module "yql" {

        export class YQL {

            ...
            
        } 

    }

Next, the constructor within the class:

    contructor(query: string, config: {});
    
Leave the config variable untyped for now. We will come back to it later. 

Continue with the public methods:

    setParam(key: string, value: string): YQL;
    
    setParams(params: {[key: string]: string}): YQL;
    
    setConfig(key: string, value: string): YQL;
    
    setConfigs(params: {[key: string]: string}): YQL;
    
    getURL(): string;
    
    exec(callback: (error?: any, response?: any) => void): void;

Finally you will find the default config starting around line 280. We can use this to guess the interface for the config. Add the interface after the YQL class:

    export interface Config {
        baseURL: {
            http: string;
            https: string;
        }
        env: string;
        headers: {
            [key: string]: string
        }
        ssl: boolean;
        timeout: number;
    }

And update the constructor of the YQL class:

    contructor(query: string, config?: Config);

That's all. Wasn't that hard. Usually you don't need to do this by hand, but sometimes it is necessary. 

_Now we will use it._

Put the reference into your `wolfgangsee-pegel.ts` file:

    /// <reference path="yql.d.ts"/>

And import the library:

    import * as yql from "yql";





