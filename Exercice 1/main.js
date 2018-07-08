//Selection et ajout mainTitle
document.getElementById("mainTitle").innerHTML = "Hello World!";

//Selection et ajout subTitle
document.getElementById("subTitle").innerHTML = "Have a nice day !";

//Selection content et ajout background bleu
var content = document.getElementsByClassName("content");
for (var i = 0; i < content.length; i++) {
  content[i].style.background = "blue";
}

//Suppression texte bouton
function deleteContent() {
  var article = document.getElementsByTagName("article");
  article[0].style.display = "none";
}
