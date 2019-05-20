import list from "./actions/list";
import add from "./actions/add";
import remove from "./actions/remove"
import update from "./actions/update"

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

const addPictureHandler = () => {
  const url = getInputContents();

  // FIXME: use your actions functions to add a new picture
  add(url);
  refreshGrid();
  // FIXME: bonus, trim eventual whitespaces and validate content

  clearInputContents();
};

const refreshGrid = () => {
  // FIXME: use your functions to get all the elements
  const items = list();

  const fragment = document.createDocumentFragment();

  items.forEach((i, index) => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    // FIXME: set the URL from your Picture model.
    //imgElement.src = "https://picsum.photos/458/354";
    imgElement.src = i;

    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );

    // FIXME: use your functions to delete the selected element
    deleteButtonElement.addEventListener("click", () => {
      remove(index);
      refreshGrid();
    });

    const updateButtonElement = clone.querySelector(
        ".picture-item-update-button"
    );

    updateButtonElement.addEventListener("click", () => {
      update(index);
      refreshGrid();
    });

    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());
