
document.addEventListener("DOMContentLoaded", function () {
    // Récupérer l'ID du film à partir de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const filmId = urlParams.get('id');

    // Utiliser <id> pour récupérer les détails du film depuis votre API
    fetch(`https://ghibliapi.vercel.app/films/${filmId}`)
        .then(response => response.json())
        .then(film => {
            // Afficher les détails du film
            console.log("hey",film)
            
            displayFilmDetails(film);
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des détails du film :', error);
        });
});

function displayFilmDetails(film) {
   
    // Créer un élément div pour afficher les détails du film
    const filmDetailsDiv = document.createElement("div");
    filmDetailsDiv.classList.add('content'); // Ajouter la classe CSS
    filmDetailsDiv.innerHTML = `
       
                   
                    <div class="background"></div>
                   <img class="image" src="${film.image}" />
                   
                    <p>${film.original_title}</p>
                    <a href="http://127.0.0.1:5501/apiGraph.html" target= "_blank"> <d>Rotten Tomatoes Rating : ${film.rt_score} </d> </a>
                  
                    
                    
    `;

    // Ajouter le div à l'élément avec l'ID "filmDetails"
    document.getElementById("filmDetails").appendChild(filmDetailsDiv);
}
