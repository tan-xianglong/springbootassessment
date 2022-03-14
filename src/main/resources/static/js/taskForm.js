const listControl = new ListController();

newItemForm.addEventListener('submit', (event) => {

  event.preventDefault();
  const newItemTitle = document.querySelector("#title");
  const newItemDescription = document.querySelector("#description");
  const newItemDate = document.querySelector("#targetdate");

  const title = newItemTitle.value;
  const description = newItemDescription.value;
  const targetDate = newItemDate.value;

  newItemTitle = '';
  newItemDate = '';
  newItemDescription = '';

  listControl.addItem(title, description, targetDate);


});


let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;
document.getElementById("targetdate").setAttribute("min", today);


