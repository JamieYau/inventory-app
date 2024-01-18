const newCategoryButton = document.getElementById("new-category-button");
const deleteCategoryButtons = document.querySelectorAll(".delete-button");
const overlay = document.querySelector(".overlay");
const modals = document.querySelectorAll(".modal");
const createCategoryModal = document.getElementById("new-category-modal");
const deleteCategoryModal = document.getElementById("delete-category-modal");

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
newCategoryButton.addEventListener("click", () => openModal(createCategoryModal));
overlay.addEventListener("click", closeModals);

deleteCategoryButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const categoryId = this.dataset.categoryId;
    const deleteForm = document.getElementById("delete-form");
    deleteForm.action = `/categories/delete/${categoryId}`;
    openModal(deleteCategoryModal);
  });
});
