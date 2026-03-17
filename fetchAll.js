const fs = require('fs');

const fetchAllCharacters = async () => {
    let allCharacters = [];
    let currentPage = 1;
    let lastPage = 1; 

    console.log("🚀 Lancement de l'extraction globale de Dokkan.fyi...");

    do {
        console.log(`⏳ Aspiration de la page ${currentPage} sur ${lastPage}...`);
        
        const url = `https://dokkan.fyi/characters?fully_awakened=true&page=${currentPage}`;

        try {
            const options = {
                headers: {
                    "accept": "text/html, application/xhtml+xml",
                    "x-inertia": "true",
                    "x-inertia-version": "b4355057d96901a7644f99790b1eeb2a"
                }
            };

            const response = await fetch(url, options);
            const data = await response.json();

            const characters = data.props.characters.data;
            
            allCharacters = allCharacters.concat(characters);

            lastPage = data.props.characters.meta.last_page;

            currentPage++;

            await new Promise(resolve => setTimeout(resolve, 1000));

        } catch (err) {
            console.error(`❌ Erreur sur la page ${currentPage} :`, err);
            break;
        }

    } while (currentPage <= lastPage);

    console.log(`\n✅ Extraction terminée ! ${allCharacters.length} personnages récupérés.`);

    fs.writeFileSync('fyi_data_full.json', JSON.stringify(allCharacters, null, 2));
    console.log("💾 Fichier géant 'fyi_data_full.json' sauvegardé avec succès !");
};

fetchAllCharacters();