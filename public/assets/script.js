const btn_menu = document.getElementsByClassName('btn-burger')[0];
const menu = document.getElementsByClassName('liste-menu')[0];
const divoverlay = document.getElementsByClassName('divoverlay')[0];
const body = document.getElementsByTagName('body')[0];
const close_by_clic = document.getElementsByClassName('close-by-clic');



btn_menu.addEventListener('click', () => {
    const isOpen = menu.classList.contains('active'); // Vérifie si le menu est ouvert

    menu.classList.toggle('active');
    divoverlay.classList.toggle('overlay');

    if (isOpen) {
        body.classList.remove('bodyactive');
        
    } else {
        body.classList.add('bodyactive');
    }
});

const closeMenu = () => {
    menu.classList.remove('active');
    divoverlay.classList.remove('overlay');
    body.classList.remove('bodyactive');
};


if(close_by_clic.length>0){
    for(let i=0; i<close_by_clic.length; i++){
        close_by_clic[i].addEventListener('click',closeMenu);
    }
}







document.addEventListener("DOMContentLoaded", () => {
  const details = document.getElementsByTagName('details')[0];
  const summary = document.getElementsByTagName('summary')[0];

  if (details && summary) {
      summary.addEventListener('click', () => {
          setTimeout(() => { // Timeout pour attendre la mise à jour de `details.open`
              summary.textContent = details.open ? "Fermer" : "Plus de détails";
          }, 0);
      });
  } else {
      console.error("Les éléments <details> ou <summary> sont introuvables.");
  }
});



document.querySelectorAll(".shareButton").forEach(button => {
  button.addEventListener("click", () => {
      const discordUrl = "https://discordapp.com/users/776852409704120361";

      // Copier le lien dans le presse-papiers
      navigator.clipboard.writeText(discordUrl)
          .then(() => {
              console.log("Lien copié !");
              alert("Le lien a été copié avec succès dans le presse-papiers !");
          })
          .catch(err => {
              console.error("Erreur lors de la copie : ", err);
          });
  });
});










