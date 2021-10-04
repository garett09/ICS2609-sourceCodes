// import events module
const EventEmitter = require('events');
//create an emitter object
const emitter = new EventEmitter();
// register a listener to the object
emitter.on("messageLogged", () => console.log("messaged logged listener was called"));
//emit the event
emitter.emit("messageLogged")