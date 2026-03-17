const fs = require('fs');

const fetchAllCharacters = async () => {
    let allCharacters = [];
    let currentPage = 1;
    let lastPage = 1; // Sera mis à jour automatiquement à la première requête

    console.log("🚀 Lancement de l'extraction globale de Dokkan.fyi...");

    do {
        console.log(`⏳ Aspiration de la page ${currentPage} sur ${lastPage}...`);
        
        // On enlève "&search=Goku" pour avoir TOUT LE MONDE
        const url = `https://dokkan.fyi/characters?fully_awakened=true&page=${currentPage}`;

        try {
            // Le déguisement magique pour faire croire qu'on est le navigateur
            const options = {
                headers: {
                    "accept": "text/html, application/xhtml+xml",
                    "x-inertia": "true", // Ultra important pour recevoir du JSON
                    "x-inertia-version": "b4355057d96901a7644f99790b1eeb2a"
                }
            };

            const response = await fetch(url, options);
            const data = await response.json();

            // On récupère les personnages de la page actuelle
            const characters = data.props.characters.data;
            
            // On les fusionne avec notre grand tableau global
            allCharacters = allCharacters.concat(characters);

            // On lit le nombre total de pages pour savoir quand s'arrêter
            lastPage = data.props.characters.meta.last_page;

            currentPage++;

            // 🛑 PAUSE DE SÉCURITÉ : On attend 1 seconde entre chaque page 
            // pour ne pas saturer leur serveur et se faire bannir !
            await new Promise(resolve => setTimeout(resolve, 1000));

        } catch (err) {
            console.error(`❌ Erreur sur la page ${currentPage} :`, err);
            break; // On arrête la boucle en cas de gros plantage
        }

    } while (currentPage <= lastPage);

    console.log(`\n✅ Extraction terminée ! ${allCharacters.length} personnages récupérés.`);

    // On sauvegarde notre butin
    fs.writeFileSync('fyi_data_full.json', JSON.stringify(allCharacters, null, 2));
    console.log("💾 Fichier géant 'fyi_data_full.json' sauvegardé avec succès !");
};

// On lance la machine
fetchAllCharacters();