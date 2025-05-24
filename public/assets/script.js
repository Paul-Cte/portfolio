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








// document.querySelectorAll(".shareButton").forEach(button => {
//   button.addEventListener("click", () => {
//       const discordUrl = "https://discordapp.com/users/776852409704120361";

//       // Copier le lien dans le presse-papiers
//       navigator.clipboard.writeText(discordUrl)
//           .then(() => {
//               console.log("Lien copié !");
//           })
//           .catch(err => {
//               console.error("Erreur lors de la copie : ", err);
//           });
//   });
// });

document.getElementById('shareDiscord').addEventListener("click", () => {
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

  
document.getElementById('shareGithub').addEventListener("click", () => {
      const discordUrl = "https://github.com/Paul-Cte";

      // Copier le lien dans le presse-papiers
      navigator.clipboard.writeText(discordUrl)
          .then(() => {
              console.log("Lien copié !");
          })
          .catch(err => {
              console.error("Erreur lors de la copie : ", err);
          });
  });

  document.getElementById('shareInstagram').addEventListener("click", () => {
      const discordUrl = "https://www.instagram.com/paul_.ct_/";

      // Copier le lien dans le presse-papiers
      navigator.clipboard.writeText(discordUrl)
          .then(() => {
              console.log("Lien copié !");
          })
          .catch(err => {
              console.error("Erreur lors de la copie : ", err);
          });
  });

    document.getElementById('shareX').addEventListener("click", () => {
      const discordUrl = "https://x.com/Pauloff_";

      // Copier le lien dans le presse-papiers
      navigator.clipboard.writeText(discordUrl)
          .then(() => {
            alert('Le lien vers X a bien été copié');
              console.log("Lien copié !");
          })
          .catch(err => {
              console.error("Erreur lors de la copie : ", err);
          });
  });






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

  setTimeout(() => {
    scale = 1;
    rond.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }, 200);
});

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function animate() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;

  const maxX = scrollX + window.innerWidth - 25;
  const clampedX = clamp(currentX, 0, maxX);

  rond.style.left = `${clampedX}px`;
  rond.style.top = `${currentY}px`;

  // Disparaitre si la souris est dans la zone des 10px à droite
  if (mouseX > maxX) {
    rond.style.opacity = '0';
  } else {
    rond.style.opacity = '1';
  }

  if (scale === 1) {
    rond.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  requestAnimationFrame(animate);
}

animate();

// Uniquement si on est sur index.html
if (window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname === "/index.html") {
    const sectionProjets = document.getElementById("projets");
    const linkAccueil = document.querySelector('a[href="index.html"]');
    const linkProjets = document.querySelector('a[href="index.html#projets"]');

    const updateActiveLink = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (sectionProjets && scrollPosition >= sectionProjets.offsetTop) {
            // Ajouter active-link à "Mes projets"
            linkProjets?.classList.add("active-link");
            // Enlever active-link de "Accueil"
            linkAccueil?.classList.remove("active-link");
        } else {
            // Revenir à Accueil
            linkAccueil?.classList.add("active-link");
            linkProjets?.classList.remove("active-link");
        }
    };

    window.addEventListener("scroll", updateActiveLink);
    window.addEventListener("load", updateActiveLink); // Pour état initial
}









