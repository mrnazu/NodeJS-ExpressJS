# Lesson 05 - File System | Please check `Lesson 02`
- ## Synchronous vs. asynchronous I/O `3. DirectoryListing.js`
    - A synchronous variant is available as readdirSync which blocks the main thread and therefore prevents execution of asynchronous code at the same time. Most developers avoid synchronous IO functions in order to improve performance `4. DirectoryListing-sync.js`
- ## Path and directory operations (__dirname and __filename) `2. path.js`
    - Keep in mind that, in general case, your script could be run with an arbitrary current working directory. To address a file relative to the current script, use __dirname or __filename:
- ## Asynchronous file reads and writes