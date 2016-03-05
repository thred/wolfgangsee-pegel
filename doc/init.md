# How to start a Node project with Typescript

## Prequisits

Install node: [Node.js](https://nodejs.org/en/)

## Start a Node Project

Create a project folder. Execute `npm init`.

    {
      "name": "...",
      "version": "1.0.0",
      "description": "...",
      "main": "js/index.js",
      "directories": {
        "doc": "doc"
      },
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "Manfred Hantschel",
      "license": "ISC"
    }

This will create a `package.json` file. Add an entry to the `scripts` section, containing:

    "start": "node js/index.js",

Create a `js` directory and the `js/index.js` file with some sample content:

    console.log("Sample Content!");

Try it by executing `npm start`.

## Add basic documentation

Create a `README.md` file.

    # ...

    ...

    ## Execute

    ### Prequisits

    * [Node.js](https://nodejs.org/en/) for your OS.

    ## Develoment

    ### Prequisits

    * [Node.js](https://nodejs.org/en/) for your OS.

    ### Source

    Clone from: `https://github.com/...`

    Install the dependencies with: `npm install`

    ## License

    Copyright (c) 20.., ...

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

## Initialize Git

Execute `git init` in the root directory of you project.

Add all files using `git add --all` and commit them with `git commit`.



## Prepare Typescript

Install typescript by executing `npm install -g typescript` as root/admin.

Create a `ts` directory and the `ts/index.js` file with some sample content:

    console.log("Sample Content!");

Compile the typescript code with `tsc --outDir js ts/*.ts` in the root directory of your project.

Add Typescript to the prequisits of the development section in the readme:

    * Install [Typescript](http://www.typescriptlang.org/) using `npm install -g typescript` (as root/admin).
