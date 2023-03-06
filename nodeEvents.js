const EventEmitter = require("events");

class myEmitter extends EventEmitter{}

const Emitted = new myEmitter();

Emitted.on('Reset', () => {
    console.log('The PC needs to be Reset.');
    setTimeout( () => {
        console.log('Alert: Kindly Reset your PC.');
    },3000);
});

console.log("The File is Executing")
Emitted.emit('Reset')
console.log("The Program is running...")