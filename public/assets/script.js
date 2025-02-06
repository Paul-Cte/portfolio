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







