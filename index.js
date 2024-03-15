function generateForm(event) {
  event.preventDefault();
  let dogBreedElement = document.querySelector("#dog-breed");
  dogBreedElement.innerHTML = "Norwegain Elkhound is your breed";
}

//
let dogFormElement = document.querySelector("#input-form");
dogFormElement.addEventListener("submit", generateForm);
