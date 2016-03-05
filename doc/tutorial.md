# How to start a Node project with TypeScript

## Prequisits

Install [Node.js](https://nodejs.org/) for your OS.

## Start a Node Project

Create a project folder. Execute `npm init`.

    {
      "name": "...",
      "version": "1.0.0",
      "description": "...",
      "main": "index.js",
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

    "start": "node index.js",

Create the `ndex.js` file with some sample content:

    console.log("Sample Content!");

**Test it:** Execute `npm start`.

**Document it:** Add basic documentation by creating a `README.md` file.

    # ...

    ...

    ## Execute

    ### Prequisits

    * [Node.js](https://nodejs.org/) for your OS.
    * Install necessary dependencies with: `npm install`.

    ## Develoment

    ### Source

    Clone from https://github.com/...

    ### Prequisits

    * [Node.js](https://nodejs.org/) for your OS.
    * Install necessary dependencies with: `npm install`.

    ## License

    Copyright (c) 20.., ...

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

## Initialize Git

Execute `git init` in the root directory of you project.

Add all files using `git add --all` and commit them with `git commit -m "Initial commit"`.

Create a new project on [Github's new project page](https://github.com/new) (no license, no readme) and copy the URL in the Quick setup section.

Add the homepage and the repository to the `package.json` file by adding:

    "homepage": "https://github.com/...",
    "repository": "https://github.com/...",

Execute `git remote add origin <repository-URL>` with the repository URL and push your changes with `git push --set-upstream origin master`.

## Prepare TypeScript

Install typescript by executing `npm install --global typescript` as root/admin.

Create a `src` directory and the `src/index.js` file with some sample content:

    console.log("Sample Content!");

**Test it:** Compile the typescript code with `tsc --outDir . src/*.ts` in the root directory of your project.

**Document it:** Add TypeScript to the prequisits of the development section in the readme:

    * Install [TypeScript](http://www.typescriptlang.org/) using `npm install --global typescript` (as root/admin).

Execute `tsc --outFile index.js --rootDir src --module AMD --moduleResolution node --sourceMap --init` to create a TypeScript porject file. It will create the `tsconfig.json` file with the following content:

    {
        "compilerOptions": {
            "outFile": "index.js",
            "rootDir": "src",
            "module": "amd",
            "moduleResolution": "node",
            "sourceMap": true,
            "target": "es5",
            "noImplicitAny": false
        },
        "exclude": [
            "node_modules"
        ]
    }

**Test it:** Compile your code with `tsc` and execute it with `npm start`.
