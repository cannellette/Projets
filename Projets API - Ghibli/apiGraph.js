// Récupérer des données dans l'API
/*fetch(`https://ghibliapi.vercel.app/films`)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);
    data.forEach((film) => {
      const characterDiv = document.createElement("div");
      characterDiv.classList.add("character");
      characterDiv.innerHTML = `
            <img src="${film.image}" />
            <h2>${film.title}</h2>
            <h3>${film.original_title} </h3>
            <p> ${film.description}</p>
            <p> ${film.rt_score}</p>
            
        `;
      document.getElementById("film-details").appendChild(characterDiv);
    });
  });*/
//const barCanvas = document.getElementById("barCanvas");

//const barChart = new Chart(barCanvas, {
//type: "bar",
//data: {
    let ctx = document.getElementById("myChart").getContext("2d");
    let data = {
      labels: [
        "Château dans le ciel",
        "Le Tombeau des Lucioles",
        "Mon voisin Totoro",
        "Le service de livraison de Kiki",
        "Hier seulement ",
        " Porco Rosso",
        "Pom Poko ",
        "Murmure du coeur",
        "Princesse Mononoké",
        "Mes voisins les Yamadas ",
        "Le Voyage de Chihiro",
        "Le retour du chat",
        "Le château ambulant ",
        "Contes de Terremer ",
        "Ponyo ",
        "Arrietty ",
        " De là - haut sur Poppy Hill",
        "Le vent se lève",
        "Le Conte de la princesse Kaguya",
        "Quand Marnie était là",
        " La Tortue Rouge",
        "Perce-oreille et la sorcière",
      ],
      datasets: [
        {
          label: "Rotten Tomatoes Rating",
          data: [
            95, 97, 93, 96, 100, 94, 78, 91, 92, 75, 97, 89, 87, 41, 92, 95, 83, 89,
            100, 92, 93, 30,
          ],
          backgroundColor: ["turquoise", "menthe", "lightgreen", "violet"],
          borderColor: "rgba(0,125,225,1)",
          borderWidth: 1,
        },
        {
          /*labels: [
            "Château dans le ciel",
            "Le Tombeau des Lucioles",
            "Mon voisin Totoro",
            "Le service de livraison de Kiki",
            "Hier seulement ",
            " Porco Rosso",
            "Pom Poko ",
            "Murmure du coeur",
            "Princesse Mononoké",
            "Mes voisins les Yamadas ",
            "Le Voyage de Chihiro",
            "Le retour du chat",
            "Le château ambulant ",
            "Contes de Terremer ",
            "Ponyo ",
            "Arrietty ",
            " De là - haut sur Poppy Hill",
            "Le vent se lève",
            "Le Conte de la princesse Kaguya",
            "Quand Marnie était là",
            " La Tortue Rouge",
            "Perce-oreille et la sorcière",
          ];*/
          //datasets:  [
    
          label: "Running Time",
          data: [
            124, 89, 86, 102, 118, 93, 119, 111, 134, 104, 124, 75, 119, 116, 100,
            94, 91, 126, 137, 103, 80, 82,
          ],
          backgroundColor: ["turquoise", "menthe", "lightgreen", "violet"],
          borderColor: "rgba(0,125,225,1)",
          borderWidth: 1,
        },
      ],
    };
    
    let myChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        plagins: {
          title: {
            display: true,
            texte: "Audience Ghibli",
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        },
      },
    });
    console.log(data);
    /* options: {
        scales: {
          y: {
            suggestedMax: 500,
            ticks: {
              font: {
                size: 50,
              },
            },
          },
        },
      };
    x: {
      ticks: {
        font: {
          size: 50;
        }
      }
    }*/


    fetch('https://ghibliapi.vercel.app/people')
  .then(response => response.json())
  .then(data => {
    // Tableau pour stocker les genres
    const genders = [];

    // Remplir le tableau avec les genres
    data.forEach(location => {
      genders.push(location.gender);
    });

    // Compter le nombre d'occurrences de chaque genre
    const genderCounts = genders.reduce((acc, gender) => {
      acc[gender] = (acc[gender] || 0) + 1;
      return acc;
    }, {});

    // Afficher les données stockées
    console.log(genderCounts);


    const ctx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(genderCounts), // Les labels sont les genres
        datasets: [{
          data: Object.values(genderCounts), // Les données sont le nombre d'occurrences de chaque genre
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Distribution des genres'
        },
        aspectRatio: 3, // Aspect ratio de 1 pour un camembert carré, à ajuster selon vos besoins
      }
    });
  })
  .catch(error => console.error('Erreur lors de la récupération des données :', error));
    


  fetch('https://ghibliapi.vercel.app/locations')
  .then(response => response.json())
  .then(graph => {

//tableau pour stocker les terrains
    const terrains = [];
    //remplir tab avec terrains
    graph.forEach(location => {
    terrains.push(location.terrain);
    });

    //cmpt le nbre d'occureence de chaque terrain
    const terrainCounts = terrains.reduce((acc, terrain) => {
      acc[terrain] = (acc[terrain] || 0) + 1;
      return acc;
    }, {});
  

    

 const cmb = document.getElementById('locPie').getContext('2d');
 
 const colors = [
  'rgba(234, 166, 131, 0.8)',//beige
  'rgba(255, 206, 86, 0.7)', // Jaune
  'rgba(255, 99, 132, 0.7)', // Rouge
  'rgba(75, 192, 192, 0.7)', // Vert
  'rgba(153, 102, 255, 0.7)', // Violet
  'rgba(59, 196, 78, 0.6)', //vert diff 
  'rgba(255, 159, 64, 0.7)', // Orange
  'rgba(230, 0, 215, 0.6)',//rose 
  'rgba(54, 162, 235, 0.7)', // Bleu
];
    const locPie = new Chart(cmb, {
      type: 'bar',
      data: {
        labels: Object.keys(terrainCounts) , // Les labels sont les genres
        datasets : [{
          label: "Terrain",
          data: Object.values(terrainCounts), // Les données sont le nombre d'occurrences de chaque genre
          backgroundColor: colors
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Distribution des terrains'
        },
        aspectRatio: 3, // Aspect ratio de 1 pour un camembert carré, à ajuster selon vos besoins
        
      }
    });
  })
  .catch(error => console.error('Erreur lors de la récupération des données :', error));
    


