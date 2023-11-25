# Lesson 01 - Introduction and Foundation
- ## Introduction
    - Node is a platform for developing network applications. It’s built on V8, Google’s JavaScript runtime engine. Node isn’t just V8, though. An important part of the Node platform is its core library. This encompasses everything from TCP servers to asynchronous and synchronous file management. This course will teach you how to use these modules properly.
    - Node.js also can be use as a server-side proxy, where it can handle a large amount of connection. Think of a server-side application communication with third-party resources, pulling in data from different sources, or storing assets (like images and videos) to third party cloud services.
- ## The Advantage of Node.js framework
    - Using Node.js for backend, you automatically get all the pros of full stack JavaScript development, such as:
        - better efficiency and overall developer productivity
        - code sharing and reuse
        - speed and performance
        - a huge number of free tools
- ## Installing Node.js
    - Go to (NodeJS)[https://nodejs.org/] and download.
    - To check if it's installed: `node --version` 
- ## Using Node.js to execute scripts
    - app.js
    ```
    $ node app.js
    nazu
    ```
- ## Why Node.js? (Node.js uses asynchronous programming!)
    - A common task for a web server can be to open a file on the server and return the content to the client.
    - Here is how `PHP` or `ASP` handles a file request:
        - Sends the task to the computer's file system.
        - Waits while the file system opens and reads the file.
        - Returns the content to the client.
        - Ready to handle the next request.
    - Here is how `Node.js` handles a file request:
        - Sends the task to the computer's file system.
        - Ready to handle the next request.
        - When the file system has opened and read the file, the server returns the content to the client.

         1. Node.js eliminates the waiting, and simply continues with the next request. 
         2. Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.
- ## What Can Node.js Do?
    - Node.js can generate dynamic page content
    - Node.js can create, open, read, write, delete, and close files on the server
    - Node.js can collect form data
    - Node.js can add, read, delete, modify or update data in your database

