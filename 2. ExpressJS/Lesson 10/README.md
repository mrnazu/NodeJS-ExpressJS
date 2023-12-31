# Lesson 10 - Handling Dynamic Routes (URLs), Errors & Managing Bigger Express Projects
- ## Dynamic Route `1. DynamicRoute.js`
    - Like before we will create `public` and `views` folder. For more please check `Lesson 09`
- ## Custom Middle ware `2. CustomMiddleware.js`
    - Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
    - In Express, you can define middlewares that can be used for checking requests or setting some headers in response.
    - Middleware functions can execute any code, make changes to res and req objects, end response cycle and call next middleware.
    - Very common example of middleware is cors module. To add CORS support, simply install it, require it and put this line: `app.use(cors());` before any routers or routing functions.
- ## Error Handling
    - ### Basic Error Handling `3. basicError.js`
        - Define your error-handling middleware functions at the very end of the middleware function stack. These have four arguments instead of three `(err, req, res, next)`
    - ### Showing a 404 Page For 'Not Found' Cases `4. 404Page.js`
    - ### Showing a 500 Page For  ‘Server-Side Error’ Cases `5. 500Page.js`
- ## Working with Status Code
    - set a status function on your response. `res.status(404).render('404.ejs');`