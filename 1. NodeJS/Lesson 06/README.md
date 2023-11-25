# Lesson 06 - Exporting and Consuming Modules
- ## Creating a `1. hello-world.js` module
    - Node provides the `module.exports` interface to expose functions and variables to other files. The most simple way to do so is to export only one object (function or variable) 
        - `1. hello-world.js`
    - If we don't want the entire export to be a single object, we can export functions and variables as properties of the exports object. The three following examples all demonstrate this in slightly different ways :
        - `2. hello-venus.js`: the function definition is done separately then added as a property of `module.exports`
        - `3. hello-jupiter.js`: the functions definitions are directly put as the value of properties of `module.exports`
        - `4. hello-mars.js`: the function definition is directly declared as a property of exports which is a short version of `module.exports`

        - `1. index.js` => "hello/1. index.js"
    - ### Loading module with directory name
        - A module can be "imported", or otherwise "required" by the `require()` function. For example, to load the http module that ships with Node.js, the following can be used: `const http= require('http);`
        - You can also include modules that you have written yourself as part of your application. In this case, to include a file named `1. index.js` in the same directory as current file: `const index = require('./1. index');`
            - We have a directory named `hello` which includes the following file:
            - `2. main.js` => "hello/2. main.js"
- ## Loading and using a module `5. main.js`
    - When we refer the module in the code, node first looks up the node_module folder inside the referenced folder in required statement If the module name is not relative and is not a core module, Node will try to find it inside the `node_modules` folder in the current directory. For instance, if you do the following, Node will try to look for the file `./node_modules/myModule.js`: `var myModule = require('myModule.js');` If Node fails to find the file, it will look inside the parent folder called ../node_modules/myModule.js. If it fails again, it will try the parent folder and keep descending until it reaches the root or finds the required module.
    - You can also omit the `.js` extension if you like to, in which case node will append the .js extension and will search for the file.

    - But to solve this, You can use the path for a folder to load a module like this: `var myModule = require('./myModuleDir');` If you do so, Node will search inside that folder. Node will presume this folder is a package and will try to look for a package definition. That package definition should be a file named `package.json`. If that folder does not contain a package definition file named package.json, the package entry point will assume the default value of `index.js`, and Node will look, in this case, for a file under the path `./myModuleDir/index.js`
- ## Folder as a module
    - Modules can be split across many `.js` files in the same folder. An example in a `my_module` folder. A module like this one is used by referring to it by the folder name: `var split_module = require('./my_module');` Please note that if you required it by omitting `./` or any indication of a path to a folder from the require function argument, Node will try to load a module from the node_modules folder.