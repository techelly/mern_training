const prompt = require("prompt-sync")({ sigint: true });
const age = prompt("How old are you? ");
console.log(`You are ${age} years old.`);

//Another way to read console input in NodeJS using prompt module
const prompts = require('prompt'); //we are importing or including prompt module using require and assigning it to const prompts variable

prompts.start();
//const result = prompts.get("Input something: ");//It returns promise
prompts.get(['username', 'email'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
});

function onErr(err) {
    console.log(err);
    return 1;
}
