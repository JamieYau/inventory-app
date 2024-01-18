const newCategoryButton = document.getElementById("new-category-button");
const deleteCategoryButtons = document.querySelectorAll(".delete-button");
const editCategoryButtons = document.querySelectorAll(".edit-button");
const overlay = document.querySelector(".overlay");
const modals = document.querySelectorAll(".modal");
const createCategoryModal = document.getElementById("new-category-modal");
const deleteCategoryModal = document.getElementById("delete-category-modal");
const editCategoryModal = document.getElementById("edit-category-modal");

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
newCategoryButton.addEventListener("click", () =>
  openModal(createCategoryModal)
);
overlay.addEventListener("click", closeModals);

deleteCategoryButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const categoryId = this.dataset.categoryId;
    const deleteForm = document.getElementById("delete-form");
    deleteForm.action = `/categories/delete/${categoryId}`;
    openModal(deleteCategoryModal);
  });
});

editCategoryButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const categoryId = this.dataset.categoryId;
    const editForm = document.getElementById("edit-form");
    editForm.action = `/categories/edit/${categoryId}`;
    // get the category name and description from the closest category element
    const category = this.closest(".category");
    const categoryName = category.querySelector(".category-name").textContent;
    const categoryDescription = category.querySelector(
      ".category-description"
    ).textContent;
    // set the value of the input fields to the category name and description
    editForm.querySelector("#edit-name").value = categoryName;
    editForm.querySelector("#edit-description").value = categoryDescription;
    openModal(editCategoryModal);
  });
});
