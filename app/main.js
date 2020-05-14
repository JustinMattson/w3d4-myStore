import ChopsticksController from "./Controllers/ChopsticksController.js";

class App {
  chopsticksController = new ChopsticksController();
}

console.log("hello from main.js");

window["app"] = new App();
