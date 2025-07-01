
            function chargerTexte() {
                fetch('./texte.txt') 
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Erreur de chargement du fichier texte');
                        }
                        return response.text();
                    })
                    .then(data => {
                        console.log(data); 
                        document.getElementById('contenu').textContent = data; 
                    })
                    .catch(error => {
                         console.error('Erreur AJAX :', error);
                    });
            }



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
               