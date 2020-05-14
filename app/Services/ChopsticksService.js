import ChopsticksModel from "../Models/ChopsticksModel.js";
import store from "../store.js";

//Public
class ChopsticksService {
  removeChopstick(id) {
    store.removeChopstick(id);
  }
  addChopstick(rawChopstick) {
    store.addChopstick(rawChopstick);
  }
  constructor() {
    //this.model = new ChopsticksModel({});
  }
}

console.log("hello from ChopstickService");

const SERVICE = new ChopsticksService();
export default SERVICE;
