if (
  window.location.pathname === "/" ||
  window.location.pathname.endsWith("/index.html")
) {
    const sectionProjets = document.getElementById("projets");

    const linkAccueil = document.getElementById('link_accueil')
    // const linkAccueil = document.querySelector('a[href="/"], a[href="index.html"]');
    const linkProjets = document.querySelector('a[href="#projets"], a[href="index.html#projets"]');

    const updateActiveLink = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (sectionProjets && scrollPosition >= sectionProjets.offsetTop) {
            linkProjets?.classList.add("active-link");
            linkAccueil?.classList.remove("active-link");
        } else {
            linkAccueil?.classList.add("active-link");
            linkProjets?.classList.remove("active-link");
        }
    };

    window.addEventListener("scroll", updateActiveLink);
    window.addEventListener("load", updateActiveLink);
}
