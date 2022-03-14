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


