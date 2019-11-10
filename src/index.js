const { EventEmitter } = require("events");

const sayHello = () => {
  console.log("Hello!");
};

const sayGoodBye = () => {
  console.log("Goodbye!");
};

/**
 * Creating an event emitter
 */
const customEventEmitter = new EventEmitter();

/**
 * Subscribing to events
 */
customEventEmitter.on("hello", sayHello);
customEventEmitter.on("goodbye", sayGoodBye);

/**
 * Emitting events
 */
customEventEmitter.emit("hello");
customEventEmitter.emit("goodbye");

/**
 * Event emitter object with two events
 */
console.log(customEventEmitter);

/**
 * Adding more events of the same name
 */
customEventEmitter.on("hello", sayHello);
customEventEmitter.on("hello", sayHello);

console.log(customEventEmitter);

/**
 * Removing event listeners
 */
customEventEmitter.removeListener("hello", sayHello);

console.log(customEventEmitter); // will only remove one event callback of hello

customEventEmitter.removeAllListeners("hello");

console.log(customEventEmitter); // will remove all event listeners