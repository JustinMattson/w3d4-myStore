import _purchaseService from "../Services/PurchaseService.js";
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
    let _chopstick = _store.State.chopsticks.find((c) => (c.id = id));
    _purchaseService.addToCart(_chopstick);
    _draw();
  }
}
