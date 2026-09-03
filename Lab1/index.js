import EventEmitter from "node:events";
const myEmitter = new EventEmitter();
myEmitter.on("greet", (gamer) => {
  console.log(`game started by ${gamer}`);
});

myEmitter.on("exit", (gamer) => {
  console.log(`game finished by ${gamer}`);
});

myEmitter.emit("greet", "Paul");
myEmitter.emit("exit", "Paul");