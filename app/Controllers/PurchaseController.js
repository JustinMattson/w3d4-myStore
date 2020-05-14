import PurchaseService from "../Services/PurchaseService.js";
import _store from "../store.js";

function _draw() {
  let purchases = _store.State.purchase;
  let template = "";
  purchases.forEach((c) => (template += c.Template));
  document.getElementById("purchases").innerHTML = template;
}

//Public
export default class PurchaseController {
  constructor() {
    console.log("hello from purchase controller");
  }

  addToCart(id) {
    PurchaseService.addToCart();
  }
}
