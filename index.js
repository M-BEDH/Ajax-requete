
            // function chargerTexte() {
            //     fetch('./texte.txt') 
            //         .then(response => {
            //             if (!response.ok) {
            //                 throw new Error('Erreur de chargement du fichier texte');
            //             }
            //             return response.text();
            //         })
            //         .then(data => {
            //             console.log(data); 
            //             document.getElementById('contenu').textContent = data; 
            //         })
            //         .catch(error => {
            //              console.error('Erreur AJAX :', error);
            //         });
            // }


            function chargerUtilisateurs() {

                fetch('https://jsonplaceholder.typicode.com/users') 

                    .then(response => {
                        // if (!response.ok) {
                        //     throw new Error('Erreur de chargement des utilisateurs');
                        // }
                        return response.json(); 
                    })

                    .then(data => {
                        console.log(data); 

                        const liste = document.getElementById('listeUtilisateurs');
                        
                        data.forEach(user => {
                            const li = document.createElement('li');
                            li.textContent = `${user.name} (${user.email})`; 
                            liste.appendChild(li); 
                        });
                    })
                    .catch(error => {
                        console.error('Erreur AJAX :', error); 
                    });
            }


            function afficherPost() {
                fetch('https://jsonplaceholder.typicode.com/posts/1')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Erreur de chargement des posts');
                        }
                        return response.json(); 
                    } )
                    .then(data => { 
                        console.log(data); 

                        const post = document.getElementById('afficherPost'); 
                        // post.innerHTML = ''; // Vide le contenu précédent
                       
                                const title = document.createElement('h1');
                                title.textContent = data.title; 
                                post.appendChild(title); 

                                const p = document.createElement('p'); 
                                p.textContent = data.body;
                                post.appendChild(p); 
                      
                            })
                    .catch(error => {
                        console.error('Erreur AJAX :', error); 
                    });
            }

            // 2.Quand tu cliques, utilise l’api https://wttr.in/ avec  https://wttr.in/Bordeaux?format=3



           async function afficherMeteo() {
               const response = await fetch('https://wttr.in/Bordeaux?format=3');
            //    if (!response.ok) {
            //        throw new Error('Erreur de chargement de la météo');
            //    }
               const data = await response.text();
               console.log(data);

               const meteo = document.getElementById('meteo');
               meteo.textContent = data;
           }
        

//             1.Ajoute un bouton ‘Charger tous les titres’ et une ul avec l’id titres
// 2.Quand tu cliques, récupère la liste des posts : https://jsonplaceholder.typicode.com/posts   
// 3.Affiche chaque title dans un li de la liste


            function afficherLesTitres() {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => {
                        // if (!response.ok) {
                        //     throw new Error('Erreur de chargement des titres');
                        // }
                        return response.json(); 
                    })
                    .then(data => {
                        console.log(data); 

                        const titres = document .getElementById('titres');

                            data.forEach(post => {
                            const li = document.createElement('li');
                            li.textContent = `${post.title})`; 
                            titres.appendChild(li); 
                        });
                })

                    .catch(error => {
                        console.error('Erreur AJAX :', error); 
                    });
            }
               