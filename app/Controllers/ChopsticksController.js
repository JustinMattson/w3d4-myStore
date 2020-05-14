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
}
