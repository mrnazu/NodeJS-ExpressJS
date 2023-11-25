# Lesson 02 - Node Projects & Basic Built-in Modules
- ## The Node Package Manager
    - ### Node Package Manager (npm) provides following two main functionalities: 
        - Online repositories for node.js packages/modules which are searchable on `search.nodejs.org`.
        - Command line utility to install Node.js packages, do version management and dependency management of Node.js packages.
    - ### Installing packages
        - Package is a term used by npm to denote tools that developers can use for their projects. This includes everything from `libraries` and `frameworks` such as jQuery and AngularJS to task runners such as Gulp.js. The packages will come in a folder typically called `node_modules`
- ## The package.json configuration file
    - This file contains information regarding all the packages including any dependencies, which are additional modules needed to use a particular package. You can setup a brand new configuration file by calling: `npm init`
        - If you'd like to create a package.json with default values use: `npm init --yes` or `npm init -y`
        - To install a package and automatically save it to your package.json, use: `npm install --save <package>`

        - You may define scripts in your `package.json`, for example:
            - ```{
                "name": "crash-course",
                "version": "1.0.0",
                "description": "NodeJS and ExpressJS Crash Course",
                "main": "index.js",
                "author": "Nazu",
                "license": "ISC",
                "dependencies": {},
                "devDependencies": {},
                "scripts": {
                    "echo": "echo hello nazu!"
                }
            }```
        - npm scripts are used most often for things like starting a server, building the project, and running tests.
            - ```"scripts": {
                "echo": "echo hello nazu!",
                "start": "nodemon start index.js"
                }```


**Note:** That in order to install packages, you must have NPM installed. The recommended way to install NPM is to use one of the installers from the Node.js download page.

`npm install <package-name>`
or
`npm i <package-name>...`
e.g. to install lodash and express
`npm install lodash express`
If you want to install a specific version of a package use:
`npm install <name>@<version>`
e.g. to install version 4.11.1 of the package lodash
`npm install lodash@4.11.1`
If you want to install the latest version use:
`npm install <lodash>@latest`

**Note:** This will install the package in the directory that the command line is currently in, thus it is important to check whether the appropriate directory has been chosen :)

- ## Global vs. local package installation
    - npm modules can be installed globally by adding a `-g` flag to the installation command. Not all modules are designed to be installed globally, so be sure to refer to the module documentation to learn how it’s supposed to be used.

    - `npm install -g nodemon`

    - A globally installed module is not added as a dependency to your project(local package installation). That means you `won’t` see it listed in `package.json` or `package-lock.json`. You also `won’t` find its code in `node_modules`. Globally installed modules are located in a special directory in your machine which is created and managed by npm. When you install nodemon globally, you get access a new nodemon command from the terminal.

    - If you already have a `package.json` file in your current working directory and dependencies are defined in it, then `npm install` will automatically resolve and install all dependencies listed in the file. You can also use the shorthand version of the npm install command which is: `npm i`


- ## Creating a small project
    - ### Creating server `1. server.js`
        - In this example we'll create an HTTP server listening on port 2023, which sends `Hello, World!` to the browser.
        - For this task we use `core node.js module`. The `http` module is a Node.js core module (a module included in Node.js's source, that does not require installing additional resources). The http module provides the functionality to create an HTTP server using the `http.createServer()` method.
        - command: `node "1. server.js"`
        - The created server can then be accessed with the URL `http://localhost:2023` or `http://127.0.0.1:2023` in the browser. then A simple web page will appear with a “Hello, World!” text at the top.

    - write again and again to master the concept! at least twice!
    
    - ### Command Line `2. hello CLI.js`
    - I can’t think of a single useful application that doesn’t get input from the users. Whether it’s their email, location, or age, getting input is essential for creating real-world apps.

        - Node.js can also be used to create command line utilities. `2. hello CLI.js`
            - The command line arguments are stored in the `process.argv` array which  has the following structure:
                - [0] The path of the executable that started the Node.js process
                - [1] The path to this application
                - [2-n] the command line arguments
                - Example: [ '/bin/node', '/path/to/yourScript', 'arg1' 'arg2', ... ]

    - ### Read the Query String `3. http url.js`
        - The function passed into the `http.createServer()` has a `req` argument that represents the `request` from the `client`, as an object (http.IncomingMessage object).
        - This object has a property called `url` which holds the part of the url that comes after the domain name: `/url_here`
    - ### Built-IN Modules    
        - #### FS Module
            - The Node.js file system module allows you to work with the file system on your computer.
            - Read files `fs.readFile()`
            - Create files
            - Update files
            - Delete files
            - Rename files
        - Task:
            - Create a Node.js file that reads the HTML file, and return the content: `readfile.js`
        - ##### Create Files:
            - The File System module has methods for creating new files:
                - `fs.appendFile()`: this method appends specified content to a file. If the file does not exist, the file will be created.
                - `fs.open()`: method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
                - `fs.writeFile()`: method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
        - ##### Update Files
            - The File System module has methods for updating files:
                - `fs.appendFile()`: method appends the specified content at the end of the specified file
                - `fs.writeFile()`: method replaces the specified file and content
        - ##### Delete Files
            - To delete a file with the File System module,  use the `fs.unlink()` method.
            - The fs.unlink() method deletes the specified file:
        - ##### Rename Files
            - To rename a file with the File System module,  use the `fs.rename()` method.
            - The `fs.rename()` method renames the specified file:
