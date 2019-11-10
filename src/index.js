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
console.log(customEventEmitter); // currently all events have only one callback

/**
 * Adding more events of the same name
 */
customEventEmitter.on("hello", sayHello);
customEventEmitter.on("hello", sayHello);

customEventEmitter.emit("hello");

console.log(customEventEmitter); // hello event now has three callback functions

/**
 * Removing event listeners
 */
customEventEmitter.removeListener("hello", sayHello);

console.log(customEventEmitter); // will only remove one event callback of hello

customEventEmitter.removeAllListeners("hello");

console.log(customEventEmitter); // will remove all event listeners

/**
 * Event callbacks created with anonymous functions
 * can only removed using removeAllListeners
 */
customEventEmitter.on("hello", function() {
  console.log("callback from an anonymous function");
})