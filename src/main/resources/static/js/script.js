// function to toggle mobile navbar
const navToggle = () => {
  const x = document.querySelector('#link-container-mobile');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;
document.getElementById("targetdate").setAttribute("min", today);

