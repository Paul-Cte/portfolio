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
              console.log("Lien copié !");
          })
          .catch(err => {
              console.error("Erreur lors de la copie : ", err);
          });
  });








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









