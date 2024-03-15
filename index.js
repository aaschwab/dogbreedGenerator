function generateForm(event) {
  event.preventDefault();

  new Typewriter("#dog-breed", {
    strings: ["Norwegain Elkhound is your breed"],
    autoStart: true,
    delay: 3,
    cursor: "",
    deleteSpeed: false,
  });
}

//
let dogFormElement = document.querySelector("#input-form");
dogFormElement.addEventListener("submit", generateForm);
