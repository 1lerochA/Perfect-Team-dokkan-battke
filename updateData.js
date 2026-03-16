// updateData.js
const fs = require('fs');

// L'URL d'une API communautaire ou d'un fichier JSON brut sur GitHub
// (Ici, on utilise une URL fictive pour l'exemple, tu devras trouver un dump JSON réel comme ceux de DokkanInfo ou GitHub)
const DOKKAN_DATA_URL = 'https://raw.githubusercontent.com/ton-depot/dokkan-data-dump/main/characters.json';

console.log("⏳ Début de la récupération des données Dokkan...");

const fetchAndFormatData = async () => {
    try {
        // 1. Récupération des données brutes
        // Pour le test sans vraie URL, on va simuler la réponse de l'API avec des données complexes
        /* const response = await fetch(DOKKAN_DATA_URL);
        const rawData = await response.json(); 
        */

        // --- SIMULATION DES DONNÉES BRUTES (Ce que tu recevrais du serveur) ---
        const rawData = [
            { card_id: 10245, name: "Goku & Vegeta SSJ4 INT", type: "Super INT", rarity: "LR", categories: [12, 45], links: [4, 5, 8], thumb: "url_image_1.png" },
            { card_id: 10100, name: "Gogeta Blue AGI", type: "Super AGI", rarity: "UR", categories: [12, 18], links: [4, 9, 10], thumb: "url_image_2.png" },
            // ... imagine 2000 personnages ici ...
        ];

        // Fausse base de données de correspondance pour traduire les ID en texte
        const categoryMap = { 12: "Héros de film", 18: "Kamehameha", 45: "Héros de GT" };
        const linkMap = { 4: "Combat acharné", 5: "Rugissement Saiyan", 8: "GT", 9: "Guerrier fusionné", 10: "Paré au combat" };
        // ----------------------------------------------------------------------

        console.log(`✅ ${rawData.length} personnages bruts récupérés !`);
        console.log("⚙️ Formatage des données pour l'application...");

        // 2. On transforme les données brutes dans NOTRE format
        const formattedCharacters = rawData.map(char => {
            return {
                id: char.card_id,
                name: char.name,
                // On ajoute une image par défaut si elle n'existe pas
                img: `https://placehold.co/80x80/34495e/FFF?text=${char.name.substring(0,4)}`, 
                // On traduit les IDs en vrai texte
                categories: char.categories.map(catId => categoryMap[catId] || "Inconnue"),
                links: char.links.map(linkId => linkMap[linkId] || "Inconnu")
            };
        });

        // 3. On crée le contenu texte de notre futur fichier data.js
        const fileContent = `// Fichier généré automatiquement le ${new Date().toLocaleDateString()}\n\nconst dokkanCharacters = ${JSON.stringify(formattedCharacters, null, 4)};`;

        // 4. On écrit (ou écrase) le fichier data.js physiquement sur ton ordinateur
        fs.writeFileSync('data.js', fileContent, 'utf8');

        console.log("🎉 Succès ! Le fichier data.js a été généré avec les vraies données.");

    } catch (error) {
        console.error("❌ Erreur lors de la mise à jour :", error);
    }
};

fetchAndFormatData();