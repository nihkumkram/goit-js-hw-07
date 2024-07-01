function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.border = "1px solid #000";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    fragment.appendChild(box);
    boxSize += 10;
  }

  boxesContainer.innerHTML = "";
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100");
  }
  input.value = "";
});

destroyButton.addEventListener("click", destroyBoxes);
