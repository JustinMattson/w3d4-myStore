import { generateId } from "../Utils.js";

console.log("hello from Chopsticks Model");
export default class ChopsticksModel {
  constructor(data) {
    this.id = generateId();
    this.title = data.title;
    this.description = data.description;
    this.price = data.price;
    this.imgUrl = data.imgUrl;
  }

  get TemplateAddToStore() {
    return /*html*/ `
    <!-- ITEM TEMPATE BEGIN -->
    <div class="col-3 d-flex justify-content-center mt-3">
    <div class="card shadow">
      <img
        id="itemImageUrl"
        src="${this.imgUrl}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 id="itemTitle" class="card-title">
          ${this.title}
        </h5>
        <p id="itemDescription" class="card-text">
          ${this.description}
        </p>
        <h5 id="itemPrice" class="card-title">
        $${this.price}
        </h5>
        <button
          class="btn btn-outline-primary"
          onclick="apps.chopsticksController.toCart(${this.id})"
        >
          Add
        </button>
        <button class="btn btn-outline-danger"
  onclick="app.chopsticksController.removeChopstick('${this.id}')">Remove</button>
      </div>
    </div>
  </div>
  <!-- ITEM TEMPLATE END -->`;
  }
}
