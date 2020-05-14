import ChopsticksController from "./Controllers/ChopsticksController.js";
import PurchaseController from "./Controllers/PurchaseController.js";

class App {
  constructor() {
    console.log("hello from main.js");
    this.chopsticksController = new ChopsticksController();
    this.purchaseController = new PurchaseController();
  }
}

window["app"] = new App();
