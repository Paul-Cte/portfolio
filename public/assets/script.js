const btn_menu = document.getElementsByClassName('btn-burger')[0];
const menu = document.getElementsByClassName('liste-menu')[0];
const divoverlay = document.getElementsByClassName('divoverlay')[0];
const body = document.getElementsByTagName('body')[0];
const close_by_clic = document.getElementsByClassName('close-by-clic');

// pour la page projet mais j'en ai besoin ici pour l'enlever quand le menu apparait
const div_img_projets = document.querySelectorAll('.div-projets-img');
const div_details = document.querySelectorAll('.details-projets');
const btn_close = document.querySelectorAll('.fi-br-cross');

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



//pour la page projet



// Utilisation de forEach pour itérer sur div_img_projets
div_img_projets.forEach((img, index) => {
    img.addEventListener('click', () => {
        const isOpen = menu.classList.contains('active'); // Vérifie si le menu est ouvert
        // On utilise l'index pour lier chaque div-img-projets à un div-details
        div_details[index].classList.remove('details-not-active');
        div_details[index].classList.add('details-projets-active');
        divoverlay.classList.add('overlay2');
        body.classList.add('bodyactive2');

        if (isOpen) {
            div_details[index].classList.add('details-not-active');
            div_details[index].classList.remove('details-projets-active');
            divoverlay.classList.remove('overlay2');
            body.classList.remove('bodyactive2');
        }   

    });
});

btn_close.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Lorsque le bouton de fermeture est cliqué, on cache le div-details correspondant
        div_details[index].classList.remove('details-projets-active');
        div_details[index].classList.add('details-not-active');
        divoverlay.classList.remove('overlay2');
        body.classList.remove('bodyactive2');

    });
});



const details = document.getElementsByTagName('details')[0];
const summary = document.getElementsByTagName('summary')[0];

summary.addEventListener('click', () => {
    setTimeout(() => { // Timeout pour attendre la mise à jour de `details.open`
      if (details.open) {
        summary.textContent = "Fermer";
      } else {
        summary.textContent = "Plus de détails";
      }
    }, 0);
  });







