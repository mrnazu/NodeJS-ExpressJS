# Lesson 07 - Node.js Design Fundamental
- ## The Node.js philosophy
    - ### Small Core, Small Module:
        - Build small and single purpose modules not in term of code size only, but also in term of scope that serves a single purpose.
            - a - "Small is beautiful"
            - b - "Make each program do one thing well."
    - ### Simplicity
        - `Keep It Simple, Stupid (KISS)` principle? Or the famous quote:
            - > "Simplicity is the ultimate sophistication." – Leonardo da Vinci

**Note:** You can find an extensive list of software development philosophies in Wikipedia at http://en.wikipedia.org/wiki/List_of_software_development_philosophies.

- ## Good coding style
    - Example: Basic program for signup
        - Through this example, it will be explained to divide the node.js code into different modules/folders for better undertandibility. Following this technique makes it easier for other developers to understand the code, as they can directly refer to the concerned file instead of going through the whole code. The major use is when you are working in a team and a new developer joins at a later stage, it will get easier for him to gel up with the code itself.
        - **Remember,** you don't need to understand every line of code. except good coding style :)
            - `index.js`: This file will manage server connection.
            - `config.js`: This file will manage all the configuration related params which will remain same throughout.
            - `user.js`: Model file where schema is defined
            - `userController.js`: This file contains the function for user signUp
            - `userRoutes.js`: This the route for userController
        - The above example may appear too big but if a beginner at node.js with a little blend of express knowledge tries to go through this will find it easy and really helpful.
- ## Project Structure
    - The structure of nodejs project is influenced by the personal preferences, project's architecture and module injection strategy being used.Also on event based arc' which uses dynamic module instantiation mechanism. To have a MVC structure it is imperative to separate out the server side and client side source code as the client side code will probably be minimized and sent to browser and is public in its basic nature. And the server side or back- end will provide API to perform CRUD operations
- ## The model-view-controller pattern - MVC
    - The first major distinction is between the dynamically generated directories which will be used for hosting and source directories.
    - he source directories will have a config file or folder depending on the amount of configuration you may have . This includes the environment configuration and business logic configuration which you may choose to put inside config directory.
    - Config Folder Contains:
``config.json, appConfig: pets.config, payment.config``

- Now the most vital directories where we distinguish between the server side/backend and the frontend modules . The 2 directories server and webapp represent the backend and frontend respectively which we can choose to put inside a source directory viz. src.
- > You can go with different names as per personal choice for server or webapp depending on what makes sense for you. Make sure you don't want to make it too long or to complex as it is in the end internal project structure.
    - Inside the server directory you can have the controller ,the App.js/index.js which will be you main nodejs file and start point .The server dir. can also have the dto dir which holds all the data transfer objects which will be usd by API controllers.
    - The webapp directory can be divided into two major parts public and mvc , this is again influenced by what build strategy you want to use. We are using browserfiy the build the MVC part of webapp and minimize the contents from mvc directory simply put.
    - Now the public directory can contain all the static resources,images,css(you can have saas files as well) and most importantly the HTML files .
    - The mvc directory will contain the front-end logic including the models,the view controllers and any other utils modules you may need as part of UI. Also the index.js or shell.js whichever may suite you is part of this directory as well.


    - Imagine you're building a web application that allows users to search for and book flights. Here's an example of how some of these folders might be used in this scenario:
        1. **config** folder: You might have a configuration file that specifies the details of the database, such as the table names and the connection string. You might also have a configuration file that specifies the email settings for the application, such as the email addresses of the development, staging, and production environments.
        2. **routes** folder: You might have a Route file that defines all the routes for the application. This might include routes for searching for flights, booking flights, booking hotels, and other aspects of the user experience.
        3. **controller** folder: You might have a Controller for the flight search page that handles the user input and sends the request to the appropriate Model methods. You might also have a Controller for the booking page that handles the user input and sends the request to the appropriate Model methods.
        4. **utils** folder: You might have utility classes that handle common tasks, such as formatting dates and times, validating input data, and generating random numbers.
        5. **middleware** folder: You might have Middleware classes that authenticate users before they can access certain parts of the application, such as the booking page. You might also have Middleware classes that authorize users to access certain parts of the application, such as allowing users to see their own booking information but not other users' booking information.
        6. **model** folder: You might have a Model for the Flight class that represents the data of a flight, such as the flight number, the departure and arrival airports, and the departure and arrival times. You might also have a Model for the Booking class that represents a user's booking information, such as the flight number, the number of passengers, and the cost of the booking.

    - Let's consider an e-commerce website as an example. Here's how these folders might be used for this scenario:
        1. **config** folder: This folder might contain configuration files that specify the website settings, such as the database connection string, email settings, and other global settings. These configuration files would be used to set up the website for different environments, such as development, staging, and production.
        2. **routes** folder: This folder might contain Route files that define the paths to the different sections of the website. This might include paths to the homepage, product pages, cart page, and checkout page.
        3. **controller** folder: This folder might contain Controller classes that handle the user input and send requests to the appropriate Model methods. For example, the CartController might handle adding and removing products from the cart, and the CheckoutController might handle the checkout process, such as gathering user information and processing payments.
        4. **utils** folder: This folder might contain Utility classes that handle common tasks, such as data validation, data formatting, and error handling.
        5. **middleware** folder: This folder might contain Middleware classes that add security features to the website, such as authentication and authorization. For example, the AuthMiddleware class might add a middleware to all routes that require authentication.
        6. **model** folder: This folder might contain Model classes that represent the data for the different components of the website, such as the product and user data. These Model classes might be responsible for data fetching, processing, and insertion into the database.
        7. **app** folder: This folder might contain the main entry point for the website and the application's core files, such as the config, routes, controller, model, and middleware folders.
