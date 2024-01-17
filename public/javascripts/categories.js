const newCategoryButton = document.getElementById("new-category-button");
const overlay = document.querySelector(".overlay");
const modal = document.getElementById("new-category");
const openModal = () => {
  overlay.style.display = "block";
};
const closeModal = () => {
  overlay.style.display = "none";
};
newCategoryButton.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  event.stopPropagation();
});
