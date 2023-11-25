# Lesson 03 - Working with asynchronous programming
- ## Callback functions
    - A callback is a function passed as an argument to another function. This technique allows a function to call another function, and A callback function can run after another function has finished.
    - JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined. `1. callBack.html`
    - #### Sequence Control
        - Sometimes you would like to have better control over when to execute a function. Suppose you want to do a calculation, and then display the result. `2. callBackControl.html`
    - The problem with the both examples above, is that you have to call two functions to display the result. or is that you cannot prevent the calculator function from displaying the result.

    - Now it is time to bring in a callback.
        - Using a callback, you could call the calculator function (myCalculator) with a callback, and let the calculator function run the callback after the calculation is finished: `3. myCalculator.html`
            - In the example above(`3. myCalculator.html`), `myDisplayer` is the name of a function.
            - It is passed to `myCalculator()` function  as an argument.
    - ### When to Use a Callback?
        - Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).
- ## Asynchronous basics
    - Functions running in parallel with other functions are called asynchronous. A good example is JavaScript `setTimeout()`
    - In `4. setTimeout.html`, `myFunction` is used as a callback. The function (the function name) is passed to setTimeout() as an argument.
    - #### Waiting for Intervals
        - When using the JavaScript function `setInterval()`, you can specify a callback function to be executed for each interval: `5. setInterval.html`, `6. async.js`
    - #### Waiting for Files
        - If you create a function to load an external resource (like a script or a file), you cannot use the content before it is fully loaded. huh, i think `This is the perfect time to use a callback.` :)
- ## Working with Promises `7. PromiseSyntax.js`
    - "Producing code" is code that can take some time
    - "Consuming code" is code that must wait for the result
    - A JavaScript Promise object contains both the producing code and calls to the consuming code: `7. PromiseSyntax.js`

    - ### Promise Object Properties
        - The Promise object supports two properties: `state` and `result`.
        - `state`
            - Pending: While a Promise object is "pending" or working, the result is `undefined`.
            - Fulfilled: When a Promise object is "fulfilled", the result is a `value`.
            - Rejected: When a Promise object is "rejected", the result is an `error` object.
        - `result`
            - undefined
            - a result value
            - an error object
        - **Note:** You cannot access the Promise properties state and result. You must use a Promise method to handle promises.
- ## Async/Await `8. AsyncSyntax.js`, `10. AwaitSyntax.js`
    - "async and await make promises easier to write"
    - async makes a function return a Promise
    - await makes a function wait for a Promise

    - The keyword `async` before a function makes the function return a promise: `8. AsyncSyntax.js`

    - The await keyword can only be used inside an async function. `10. AwaitSyntax.js`
- ## Bonus 
    - ### JavaScript Arrow Function
        - Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax:
        - Before
            - `hello = function() {
            return "Hello World!";
            }`
        - With Arrow Function:
            - `
            hello = () => {
            return "Hello World!";
            } `
            - It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
                - ` hello = () => "Hello World!"; `
                - **Note:** This works only if the function has only one statement.
                - If you have parameters, you pass them inside the parentheses:
                    - ` hello = (val) => "Hello " + val; `
    - ### What About `this`?
        - The handling of this is also different in arrow functions compared to regular functions.
        - In short, with arrow functions there are no binding of this.
        - In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
        - With arrow functions the this keyword always represents the object that defined the arrow function.