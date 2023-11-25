# Lesson 04 - Building a HTTP Server with NodeJS using HTTP APIs
- ## The HTTP protocol
    - The Hypertext Transfer Protocol (HTTP) is a stateless application-level protocol for distributed, collaborative, hypertext information systems.
    - Each Hypertext Transfer Protocol (HTTP) message is either a `request` or a `response`. A server listens on a connection for a request, parses each message received, interprets the message semantics in relation to the identified request target, and responds to that request with one or more response messages.
- ## Building an HTTP server `1. server.js`
    - For more information please check `Lesson 02`
- ## Rendering dynamic response `2. response.js`
    - But! this is not rendering a response! to render a something we need to learn basic routing. for just making a response Please check `Lesson 02`
- ## HTTP Server using HTTP APIs & Basic Routing `4. route.js`
    - Once you understand how to create an HTTP Server with node, it's important to understand how to make it "do" things based on the path that a user has navigated to. This phenomenon is called, "routing".

    - The most basic example of this would be to check if (request.url === 'some/path/here'), and then call a function that responds with a new file. `3. basicRouting.js` else show not found!
    - But remember, If you continue to define your "routes" like this, though, you'll end up with one massive callback function, and we don't want a giant mess like that, so let's see if we can clean this up.

    - First, let's store all of our routes in an object{}: `4. route.js`
    - Now every time you try to navigate your website, it will check for the existence of that path in your routes, and it will call the respective function. If no route is found, the server will respond with a 404 (Not Found).

    - And there you have it--routing with the HTTP Server API is very simple.

