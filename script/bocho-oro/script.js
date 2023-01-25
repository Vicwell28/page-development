let menu = document.getElementsByClassName("card-title");

for (let i = 0; i < menu.length; i++) {
  menu[i].querySelector(".card-body").style.display = "none";
}

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    if (this.querySelector(".card-body").style.display == "block") {
      this.querySelector(".card-body").style.display = "none";
    } else {
      this.querySelector(".card-body").style.display = "block";
    }
  });
}


document.getElementById("close-form").addEventListener("click", function() {
  document.getElementsByClassName("dialog-add")[0].style.display = "none"; 
})


document.getElementById("agregar").addEventListener("click", function() {
  document.getElementsByClassName("dialog-add")[0].style.display = "block"; 
})