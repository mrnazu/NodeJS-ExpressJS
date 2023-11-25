# Lesson 08 - ExpressJS Warm-up
- ## Why Express? And Installing ExpressJS
    - Express is a minimal and flexible Node.js web application framework, providing a robust set of features for building web applications.
    - Installation
        - `npm init` 
        - `npm install express`
- ## Creating a Server with Express(`1. server.js`) & Handling Requests + Responses(`3. response.js`)
    - `1. server.js`
    - ### Basic routing with express 
        -  `2. route.js`: That structure works for all HTTP methods, and expects a path as the first argument, and a handler for that path, which receives the request and response objects. So, for the basic HTTP methods.
        - If you want to define the same behavior for a route and all HTTP methods, you can use: 
            - `app.all('/path')` or `app.use('/path')`
            - or
            - `app.use('*')` `*` wildcard will route for all paths
- ## Parsing and Storing user input `4.userInput.js`
    - We are going to store user input into `.txt` file. => `5. userInputStore.js`
- ## Reading File Data & Returning Dynamic Responses (Dynamic HTML Code)
    - For this part please check `6. DynamicResponse.js`
    - I think for this example you need to learn "JSON"

- ## Bonus:
    - ### nodemon
        - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
        - nodemon does **not** require *any* additional changes to your code or method of development. nodemon is a replacement wrapper for `node`. To use `nodemon`, replace the word `node` on the command line when executing your script.
        - #### Installation
            - ```bash
              npm install -g nodemon # or using yarn: yarn global add nodemon
              ```
            - And nodemon will be installed globally to your system path.
