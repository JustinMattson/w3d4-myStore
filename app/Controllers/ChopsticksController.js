import _chopsticksService from "../Services/ChopsticksService.js";
import _store from "../store.js";

function _draw() {
  let chopsticks = _store.State.chopsticks;
  let template = "";
  chopsticks.forEach((c) => (template += c.Template));
  document.getElementById("chopsticks").innerHTML = template;
}

//Public
export default class ChopsticksController {
  constructor() {
    _draw();
    console.log("hello from chopsticks controller");
  }

  addChopstick(event) {
    event.preventDefault();
    let formData = event.target;
    // console.log(formData);
    let rawChopstick = {
      title: formData.title.value,
      price: formData.price.value,
      description: formData.description.value,
      imgUrl: formData.imgUrl.value,
    };
    _chopsticksService.addChopstick(rawChopstick);
    // formData.reset()
    _draw();
  }

  removeChopstick(id) {
    _chopsticksService.removeChopstick(id);
    _draw();
  }
}
