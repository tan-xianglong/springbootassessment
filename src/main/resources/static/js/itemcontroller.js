const createHTMLList = (index, title, description, date) => {
  `
  <tr>
    <td class="col-1">${title}</td>
    <td class="col-2">${description}</td>
    <td class="col-3">${date}</td>
  </tr>
  `;
  //add event listener dynamically for delete button?
}

class ListController {

  constructor(){
    this._items = [];
  }

  addTask(title, description, date){
    const formData = new FormData();
    formData.append('title', title);
    formData.append("description", description);
    formData.append("date", date);

    fetch("http://localhost:8080/item/add", {
      method: "POST",
      body: formData,
    })
      .then(response => {
        console.log(response.status); // Will show you the status
        if (response.ok) {
          alert("Successfully Added Product!");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Error adding item to Product");
      });

  }

  displayTask(){
    const listController = this;
    listController._items = [];

    fetch("http://127.0.0.1:8080/item/all")
      .then(response => response,json())
      .then(data => {
        console.log('2. receive data');
        console.log(data);
        data.forEach(item=> {

          const itemObj = {
            id: item.id,
            title: item.title,
            description: item.description,
            date: item.date
          };
          console.log(itemObj);
          listController._items.push.apply(itemObj);

        });
        listController.renderList();
      }).catch(error => {
        console.log(error);
      });

  }

  renderList(){
    const taskHTMLList = [];

    for (let i = 0; i<this._items.length; i++){
      const item = this._items[i];
      const taskHTML = createHTMLList(item.id, item.title, item.description, item.date);
      taskHTMLList.push(taskHTML);
    }

    const pHTML = taskHTMLList.join();
    document.querySelector('tbody').innerHTML = pHTML;
  }


}