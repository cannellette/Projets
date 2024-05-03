// fetch('https://ghibliapi.vercel.app/films')
//             .then(response => response.json())
            
//             .then(data => {
                
//                 data.forEach(movie => {// forEach ft une boucle 

//                     const characterDiv = document.createElement("div");
//                     characterDiv.classList.add('character'); //list classe les characteres 
//                     characterDiv.innerHTML = `
                       
                    
//                     <a href="/moviePage.html?id=${movie.id}"  target="_blank class="button">${movie.title}</a>
    
                    
//                      <p>${movie.description}</p>
//                      <d>${movie.release_date}</d>
                     
//                     `;
                    

//                     document.getElementById("drago").appendChild(characterDiv) //utiliser l'id et la variable qu'on a ccrée 
//                     // Ajouter un gestionnaire d'événements de clic à l'élément div
//         //   div.addEventListener("click", () => {
//         //     // Rediriger vers la page de détails du Pokémon
//         //     window.location.href = `moviePage.html?id=${movie.id}`;    

//         //     })
//         })
//     })

    fetch('https://ghibliapi.vercel.app/films')
            .then(response => response.json())
            
            .then(data => {
                
                data.forEach(movie => {// forEach ft une boucle 
                    const characterDiv = document.createElement("div");
                    characterDiv.classList.add('character'); //list classe les characteres 
                    characterDiv.innerHTML = `
                       
                    <a href="/moviePage.html?id=${movie.id}" target="_blank" class="button">${movie.title}</a>
    
                    
                     <p><strong>Story&nbsp:&nbsp</strong>${movie.description}</p>
                     <d><strong>Date of release&nbsp:&nbsp</strong>${movie.release_date}</d>
                     
                    `;
                    
                    document.getElementById("drago").appendChild(characterDiv)   
        //     })
        })
    })