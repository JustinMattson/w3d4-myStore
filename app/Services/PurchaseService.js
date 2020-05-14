//import ChopsticksModel from "../Models/ChopsticksModel.js";
import store from "../store.js";

//Public
class PurchaseService {
  addToCart(id) {
    store.addToCart();
  }
  constructor() {}
}

console.log("hello from purchased service");

const SERVICE = new PurchaseService();
export default SERVICE;
