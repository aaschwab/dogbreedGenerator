function displayBreed(response) {
  new Typewriter("#dog-breed", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateForm(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "44ebfbe3f90e8afo31a00943c4996bft";
  let prompt =
    "you are given the lifestyle from the user, please select 1 dog breed that matches the lifestyle that the user gives, and give 3 short facts about the dog breed that you chose.";
  let context =
    "Please be polite, give an answer that would be most compatible with the lifestyle that is given by the user. Use the words that are given to you in your prompt in your answer please.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let dogElement = document.querySelector("#dog-breed");
  dogElement.classList.remove("hidden");
  dogElement.innerHTML = `<div class="generating">⏳ Generating a dog breed matching ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayBreed);
  dogElement.classList.add("dog-breed");
}

//
let dogFormElement = document.querySelector("#input-form");

dogFormElement.addEventListener("submit", generateForm);
