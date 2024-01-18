const createGameButton = document.getElementById("new-game-button");
const editGameButtons = document.querySelectorAll(".edit-button");
const deleteGameButtons = document.querySelectorAll(".delete-button");
const overlay = document.querySelector(".overlay");
const modals = document.querySelectorAll(".modal");
const createModal = document.getElementById("new-game");
const editModal = document.getElementById("edit-game");
const deleteModal = document.getElementById("delete-game");

modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
const openModal = (modal) => {
  overlay.style.display = "block";
  modal.style.display = "block";
};
const closeModals = () => {
  overlay.style.display = "none";
  modals.forEach((modal) => {
    modal.style.display = "none";
  });
};
overlay.addEventListener("click", closeModals);

createGameButton.addEventListener("click", () => openModal(createModal));

editGameButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const gameId = this.closest(".game").dataset.gameId;
    const editForm = document.getElementById("edit-form");
    editForm.action = `/games/edit/${gameId}`;
    const game = this.closest(".game");
    const gameName = game.querySelector(".game-name").textContent;
    const gameDescription = game.querySelector(".game-description")
      .textContent;
    editForm.querySelector("#edit-name").value = gameName;
    editForm.querySelector("#edit-description").value = gameDescription;
    openModal(editModal);
  });
});

deleteGameButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const gameId = this.closest(".game").dataset.gameId;
    const deleteForm = document.getElementById("delete-form");
    deleteForm.action = `/games/delete/${gameId}`;
    openModal(deleteModal);
  });
});
