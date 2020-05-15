//import ChopsticksModel from "../Models/ChopsticksModel.js";
import _store from "../store.js";

//Public
class PurchaseService {
  addToCart(id) {
    _store.addToCart(id);
  }
  constructor() {}
}

console.log("hello from purchased service");

const SERVICE = new PurchaseService();
export default SERVICE;
