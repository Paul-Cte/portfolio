

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


