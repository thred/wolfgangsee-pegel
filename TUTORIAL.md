# How to start a Node project with TypeScript

_This tutorial covers the first steps for a Node.js project using TypeScript._

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
      "main": "index.js",
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

    "start": "node index.js",

Create the `index.js` file with some sample content, e.g.:

    console.log("Hello Node.js!");

**Test it:** Execute `npm start`.

**Document it:** Add basic documentation by creating a `README.md` file.

    # ...

    ...

    ## Execute

    ### Prerequisits

    * [Node.js](https://nodejs.org/) for your OS.

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

Create a `src` directory and the `src/index.js` file with some sample content:

    console.log("Hello TypeScript!");

**Test it:** Compile the typescript code with `tsc --outDir . src/*.ts` in the root directory of your project. It should create the `index.js` file in the root directory of your project.

**Document it:** Add TypeScript to the prerequisits of the development section in the readme:

    * Install [TypeScript](http://www.typescriptlang.org/) using `npm install --global typescript` (as root/admin).

_Just like the `package.json` file defines a root directory of a Node.js project, a `tsconfig.json` file defines the rood directory of a TypeScript project. You can use the TypeScript compiler to create such a file._

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

Open your `index.ts` file and add the following as first line:

    /// <reference path="../typings/main.d.ts"/>

This should work fluently, but when executing `tsc` it will throw a lot of errors. This is because of the file references in the `tsconfig.json` file: it just excludes the `node_modules` directory, this it will compile the `typings` directory, too. Simple exclude the `typings` directory, too by adding:

    "exclude": [
        "node_modules",
        "typings"
    ]

_You have completed this chapter, time to commit your changes. We will commit the `typings` directory, too, even though this is a generated directory and we don't need the files for execution. But currently, we don't have a build tool and thus no automatic process to generate the directory._

Execute `git add --all` and `git commit -m "Added Node.js type definitions"`.
