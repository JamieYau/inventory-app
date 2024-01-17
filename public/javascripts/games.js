const newGameButton = document.getElementById("new-game-button");
const overlay = document.querySelector(".overlay");
const modal = document.getElementById("new-game");

const openModal = () => {
  overlay.style.display = "block";
};

const closeModal = () => {
  overlay.style.display = "none";
};

newGameButton.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  event.stopPropagation();
});
