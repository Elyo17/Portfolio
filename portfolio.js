function toggleDescription(element) {
    let description = element.querySelector('.description');
    description.style.display = description.style.display === "none" ? "block" : "none";
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Si c'est une ancre interne (commence par #), on gère le scroll
        if (href.startsWith("#")) {
            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }

            // Changement de couleur des liens
            document.querySelectorAll('nav a').forEach(a => a.style.color = "white");
            this.style.color = "#00FF00";
        }
        // Sinon (ex: lien vers un PDF), on laisse le comportement par défaut
    });
});

function projet(id){
    let proj =  document.getElementById("Projet_"+ id);
    if(proj.style.opacity === "1"){
        proj.style.zIndex = -5; 
        proj.style.opacity = 0;
        
    }
    else{
        proj.style.zIndex = 5;
        proj.style.opacity = 1;
    }
    
}