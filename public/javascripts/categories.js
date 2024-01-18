const newCategoryButton = document.getElementById("new-category-button");
const deleteCategoryButtons = document.querySelectorAll(".delete-button");
const editCategoryButtons = document.querySelectorAll(".edit-button");
const overlay = document.querySelector(".overlay");
const modals = document.querySelectorAll(".modal");
const createCategoryModal = document.getElementById("new-category-modal");
const deleteCategoryModal = document.getElementById("delete-category-modal");
const editCategoryModal = document.getElementById("edit-category-modal");
const editForm = document.getElementById("edit-form");
const deleteForm = document.getElementById("delete-form");

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
// prevent the modal from closing when clicking inside it
modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

newCategoryButton.addEventListener("click", () =>
  openModal(createCategoryModal)
);
overlay.addEventListener("click", closeModals);

deleteCategoryButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const categoryId = this.closest(".category").dataset.categoryId;
    deleteForm.dataset.categoryId = categoryId;
    deleteForm.action = `/categories/delete/${categoryId}`;
    openModal(deleteCategoryModal);
  });
});

editCategoryButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const categoryId = this.closest(".category").dataset.categoryId;
    editForm.dataset.categoryId = categoryId;
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

editForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const categoryId = this.dataset.categoryId;
  const name = this.querySelector("#edit-name").value;
  const description = this.querySelector("#edit-description").value;
  const url = `/categories/${categoryId}`;
  const data = { name, description };
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.ok) {
      location.reload();
    }
  });
});

deleteForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const categoryId = this.dataset.categoryId;
  const url = `/categories/${categoryId}`;
  fetch(url, {
    method: "DELETE",
  }).then((response) => {
    if (response.ok) {
      location.reload();
    }
  });
});
