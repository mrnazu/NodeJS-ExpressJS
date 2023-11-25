var userInput = process.argv[2];

if (!userInput){
    console.error("error");

    process.exit();
}

console.log(`Hello, ${userInput}!`);