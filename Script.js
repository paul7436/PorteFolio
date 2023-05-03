let texte = document.getElementById("texte");
let bouton = document.getElementById("bouton");
let compteur = 0;

function changerTexte() {
  compteur++;
  if (compteur > 3) {
    compteur = 1;
  }
  switch (compteur) {
    case 1:
      texte.innerHTML = "<p>Mon Linkedin : https://www.linkedin.com/in/paul-boucheret-17181a257/</p>";
      break;
    case 2:
      texte.innerHTML = "<p>Email : paul.boucheret74@gmail.com</p>";
      break;
    case 3:
      texte.innerHTML = "<p>Mon github : https://github.com/paul7436</p>";
      break;
    default:
      break;
  }
}
