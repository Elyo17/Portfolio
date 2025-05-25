function toggleDescription(element) {
    let description = element.querySelector('.description');
    description.style.display = description.style.display === "none" ? "block" : "none";
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });

        document.querySelectorAll('nav a').forEach(a => a.style.color = "white");
        this.style.color = "#f39c12"; 
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