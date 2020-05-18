import ChopsticksModel from "./Models/ChopsticksModel.js";

let _state = {
  /** @type {ChopsticksModel[]} */
  chopsticks: [
    /** @type {ChopsticksModel[]} */
    new ChopsticksModel({
      id: "insert",
      title: "Uni Japanese Chopstick Set - White",
      description:
        "Enjoy your favourite Asian delicacies with this Uni Japanese chopstick set from Christofle. Crafted from wood with silver plated bases.",
      price: 81.05,
      imgUrl:
        "https://www.amara.com/static/uploads/images-2/products/huge/149550/uni-japanese-chopstick-set-white-480758.jpg",
    }),
    new ChopsticksModel({
      id: "insert",
      title: "Uni Japanese Chopstick Set - GREEEN",
      description:
        "Enjoy your favourite Asian delicac set from Christofle. Crafted from wood with silver plated bases.",
      price: 81.05,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcEDObzP_azsEPEmbs3haHYdUGMtH6h_s96STSaLU6Z8qqH2zg&usqp=CAU",
    }),
  ],
  purchases: [],
};

console.log("Hello from Store");

class Store {
  addToCart(id) {
    let chopstickIndex = _state.chopsticks.findIndex((c) => c.id == id);
    if (chopstickIndex == -1) {
      console.error("invalid id");
      return;
    }
    _state.purchases.push(_state.chopsticks[chopstickIndex]);
    this.saveState();
  }
  removeChopstick(id) {
    let chopstickIndex = _state.chopsticks.findIndex((c) => c.id == id);
    if (chopstickIndex == -1) {
      console.error("invalid id");
      return;
    }
    _state.chopsticks.splice(chopstickIndex, 1);
    this.saveState();
  }
  addChopstick(rawChopstick) {
    let chopstick = new ChopsticksModel(rawChopstick);
    _state.chopsticks.push(chopstick);
    this.saveState();
  }
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  // NOTE any change to the state should be followed by saveState
  saveState() {
    localStorage.setItem("chopsticks-r-us", JSON.stringify(_state));
  }
}

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("chopsticks-r-us"));
  if (data) {
    // NOTE when data comes out of local storage all the data is POJOS
    // this step converts the objects back to "Chopsticks" type objects
    data.chopsticks = data.chopsticks.map(
      (pojoChopstick) => new ChopsticksModel(pojoChopstick)
    );
    _state = data;
  }
}

_loadState();

const STORE = new Store();
export default STORE;
