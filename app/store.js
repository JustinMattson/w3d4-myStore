import ChopsticksModel from "./Models/ChopsticksModel.js";

let _state = {
  /** @type {ChopsticksModel[]} */
  chopsticks: [
    /** @type {ChopsticksModel[] */
    new ChopsticksModel({
      id: "",
      title: "Uni Japanese Chopstick Set - White",
      description:
        "Enjoy your favourite Asian delicacies with this Uni Japanese chopstick set from Christofle. Crafted from wood with silver plated bases.",
      price: 81.05,
      imgUrl:
        "https://www.amara.com/static/uploads/images-2/products/huge/149550/uni-japanese-chopstick-set-white-480758.jpg",
    }),
  ],
  purchases: [],
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
