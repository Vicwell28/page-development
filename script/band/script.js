let myIndex = 0;
var elemens = document.getElementsByClassName("img-coll");

carousel();

function carousel() {
  for (var i = 0; i < elemens.length; i++) {
    elemens[i].style.display = "none";
  }

  elemens[myIndex].style.display = "block";

  myIndex = myIndex >= elemens.length - 1 ? 0 : myIndex + 1;

  setTimeout(carousel, 3000);
}
