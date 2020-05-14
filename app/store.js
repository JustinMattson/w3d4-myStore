import ChopsticksModel from "./Models/ChopsticksModel.js";

let _state = {
  /** @type {ChopsticksModel[]} */
  chopsticksModels: [],
};

console.log("Hello from Store");

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
