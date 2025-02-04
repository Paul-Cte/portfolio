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
        btn_close.forEach((btn, index) => {
            div_details[index].classList.remove('details-projets-active');
            div_details[index].classList.add('details-not-active');
            divoverlay.classList.remove('overlay2');
            body.classList.remove('bodyactive2');

    });
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


// carousel

const btn_carousel = document.querySelectorAll('.btn-carousel');
const slide = document.getElementsByClassName('slide');
let slide_active = document.getElementsByClassName('slide-active')[0];


let index = 0;
btn_carousel.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        slide_active.classList.remove('slide-active');
        if(e.currentTarget.classList.contains('next')){
            if(index === slide.length -1){
                index = 0;
            } else{
                index += 1;
            }  
        }else{
            if(index === 0){
                index = slide.length -1;
            } else {
                index -= 1;
            }
        }
        slide_active = slide[index];
        slide_active.classList.add('slide-active');
    });
});


function changeSlide(){
    slide_active.classList.remove('slide-active');

    if(index === slide.length -1){
        index = 0;
    } else{
        index += 1;
    }
    slide_active = slide[index];
    slide_active.classList.add('slide-active');  
}

let interval = setInterval(() => changeSlide(), 3000);

// 🖱️ Réinitialisation du timer quand l'utilisateur clique
btn_carousel.forEach((btn) => {
    btn.addEventListener("click", () => {
        clearInterval(interval); // Stoppe l'auto-défilement
        interval = setInterval(() => changeSlide(true), 3000); // Relance le timer
    });
});


const btn_carousel2 = document.querySelectorAll('.btn-carousel2');
const slide2 = document.getElementsByClassName('slide2');
let slide_active2 = document.getElementsByClassName('slide2-active')[0];


let index2 = 0;
btn_carousel2.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        slide_active2.classList.remove('slide2-active');
        if(e.currentTarget.classList.contains('next')){
            if(index2 === slide2.length -1){
                index2 = 0;
            } else{
                index2 += 1;
            }  
        }else{
            if(index2 === 0){
                index2 = slide2.length -1;
            } else {
                index2 -= 1;
            }
        }
        slide_active2 = slide2[index2];
        slide_active2.classList.add('slide2-active');
    });
});


function changeSlide2(){
    slide_active2.classList.remove('slide2-active');

    if(index2 === slide2.length -1){
        index2 = 0;
    } else{
        index2 += 1;
    }
    slide_active2 = slide2[index2];
    slide_active2.classList.add('slide2-active');  
}

let interval2 = setInterval(() => changeSlide2(), 3000);

// 🖱️ Réinitialisation du timer quand l'utilisateur clique
btn_carousel2.forEach((btn) => {
    btn.addEventListener("click", () => {
        clearInterval(interval2); // Stoppe l'auto-défilement
        interval2 = setInterval(() => changeSlide2(), 3000); // Relance le timer
    });
});


//pour la page projet



// Utilisation de forEach pour itérer sur div_img_projets
div_img_projets.forEach((img, index) => {
    img.addEventListener('click', () => {
        // On utilise l'index pour lier chaque div-img-projets à un div-details
        div_details[index].classList.remove('details-not-active');
        div_details[index].classList.add('details-projets-active');
        divoverlay.classList.add('overlay2');
        body.classList.add('bodyactive2');

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







