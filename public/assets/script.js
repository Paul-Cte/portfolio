const btn_menu = document.getElementsByClassName('btn-burger')[0];
const menu = document.getElementsByClassName('liste-menu')[0];
const body = document.getElementsByTagName('body')[0];
const close_by_clic = document.getElementsByClassName('close-by-clic');
img_btn_burger = document.getElementsByClassName('img-hamburger')[0];
const btn_fermture_menu = document.getElementById('btn_fermeture');



img_btn_burger.addEventListener('click', () => {
    const isOpen = menu.classList.contains('active'); // Vérifie si le menu est ouvert
    
    menu.classList.toggle('active');

    if (isOpen) {
        body.classList.remove('bodyactive');
        
    } else {
        body.classList.add('bodyactive');
        
    }
});

const closeMenu = () => {
    menu.classList.remove('active');
    body.classList.remove('bodyactive');
    img_btn_burger.src = "../image/menu-burger.png"
};

btn_fermture_menu.addEventListener('click',closeMenu)



if(close_by_clic.length>0){
    for(let i=0; i<close_by_clic.length; i++){
        close_by_clic[i].addEventListener('click',closeMenu);
    }
}








document.querySelectorAll(".shareButton").forEach(button => {
  button.addEventListener("click", () => {
      const discordUrl = "https://discordapp.com/users/776852409704120361";

      // Copier le lien dans le presse-papiers
      navigator.clipboard.writeText(discordUrl)
          .then(() => {
              console.log("Lien copié !");
          })
          .catch(err => {
              console.error("Erreur lors de la copie : ", err);
          });
  });
});


if (window.innerWidth >= 750) {
    const clickAbleDiv = document.getElementById("clickAbleDiv");

    clickAbleDiv.addEventListener("click", function() {
      window.location.href = "https://paulcteportfolio.netlify.app/";
    });
  }


const rond = document.getElementById('rond');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
let scale = 1;

document.addEventListener('mousemove', (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

document.addEventListener('click', () => {
  scale = 1.5;
  rond.style.transition = 'transform 0.2s ease';
  rond.style.transform = `translate(-50%, -50%) scale(${scale})`;

  // Revenir à la taille normale après 200ms
  setTimeout(() => {
    scale = 1;
    rond.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }, 200);
});

function animate() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  if (scale === 1) {
    rond.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  rond.style.left = `${currentX}px`;
  rond.style.top = `${currentY}px`;

  requestAnimationFrame(animate);
}

animate();










