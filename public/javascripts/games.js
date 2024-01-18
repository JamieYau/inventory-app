const createGameButton = document.getElementById("new-game-button");
const editGameButtons = document.querySelectorAll(".edit-button");
const deleteGameButtons = document.querySelectorAll(".delete-button");
const overlay = document.querySelector(".overlay");
const modals = document.querySelectorAll(".modal");
const createModal = document.getElementById("new-game");
const editModal = document.getElementById("edit-game");
const deleteModal = document.getElementById("delete-game");
const editForm = document.getElementById("edit-form");
const deleteForm = document.querySelector("#delete-form");

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
    editForm.dataset.gameId = gameId; // Store the game ID in the form's dataset
    const game = this.closest(".game");
    const gameName = game.querySelector(".game-name").textContent;
    const gameDescription = game.querySelector(".game-description").textContent;
    const gamePrice = game
      .querySelector(".game-price")
      .textContent.replace("£", "");
    const gameQty = game
      .querySelector(".game-qty")
      .textContent.replace("Qty: ", "");
    const gameCategory = game.querySelector(".game-category").textContent;
    editForm.querySelector("#edit-name").value = gameName;
    editForm.querySelector("#edit-description").value = gameDescription;
    editForm.querySelector("#edit-price").value = gamePrice;
    editForm.querySelector("#edit-qty").value = gameQty;
    const categorySelect = editForm.querySelector("#edit-category");
    Array.from(categorySelect.options).forEach((option) => {
      if (option.text === gameCategory) {
        option.selected = true;
      }
    });
    openModal(editModal);
  });
});

editForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting normally
  const gameId = this.dataset.gameId; // Get the game ID from the form's dataset

  // Get the form data
  const formData = new FormData(this);
  const gameData = Object.fromEntries(formData.entries());

  fetch(`/games/${gameId}`, { 
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(gameData)
  })
  .then((response) => {
    if (response.ok) { // Check if the response status is 200
      location.reload(); // Reload the page if the update was successful
    }
  });
});

deleteGameButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const gameId = this.closest(".game").dataset.gameId;
    deleteForm.dataset.gameId = gameId; // Store the game ID in the form's dataset
    openModal(deleteModal);
  });
});

deleteForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting normally
  const gameId = this.dataset.gameId; // Get the game ID from the form's dataset
  fetch(`/games/${gameId}`, { method: "DELETE" })
    .then((response) => {
      if (response.ok) { // Check if the response status is 200
        location.reload(); // Reload the page if the deletion was successful
      }
    });
});
