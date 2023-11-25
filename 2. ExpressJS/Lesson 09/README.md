# Lesson 09 - Static & Dynamic Content with Templates Engine
- ## Task1: Sending HTML Files as a Response `2. HTML_FileResponse.js`
    - For this task we need a module called `path` to locate HTML file! `filePath = path.join(__dirname, "./views", "index.html");` then once we locate the file we going to send it `res.sendFile(filePath);`

- ## Task2: Serving statics files
    - When building a webserver with Express it's often required to serve a combination of dynamic content and static files. For example, you may have `index.html` and `style.css` which are static files kept in the file system.
    - This is how to configure Express to serve static files:
        - `app.use(express.static(path.join(__dirname, "public")));`
    - **Note:** once the folder is configured, index.html, style.css and all the files in the "public" folder will be available in at the root path (you must not specify /public/ in the url). This is because, express looks up for the files relative to the static folder configured.

- ## Task3: Working with Dynamic Templates
    - First: we Create a folder called `views` and inside it we will create static html files. `/views/index.html`
    - Second: `1. DynamicHTML.js`
    - Similarly, other Template Engines could be used too such as Handlebars(hbs) or ejs. Remember to npm install the Template Engine too. For Handlebars we use hbs package, for Jade we have a jade package and for EJS, we have an ejs package.