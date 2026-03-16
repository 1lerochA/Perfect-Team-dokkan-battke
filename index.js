// index.js

// 1. Simulation d'une API de données Dokkan (tu remplaceras ça par un fetch vers un vrai fichier JSON)
const fetchDokkanData = async () => {
    // Dans le futur : const response = await fetch('URL_DU_JSON_DOKKAN_DATA'); return await response.json();
    return [
        { id: 1, name: "Goku & Vegeta SSJ4 INT (11 ans)", categories: ["Héros de GT", "Famille de Goku"], links: ["Combat acharné", "Paré au combat", "Rugissement Saiyan", "GT"] },
        { id: 2, name: "Goku SSJ4 FP INT LR", categories: ["Héros de GT", "Famille de Goku"], links: ["Combat acharné", "Paré au combat", "Rugissement Saiyan", "GT", "Super Saiyan"] },
        { id: 3, name: "Pan (GT) END", categories: ["Héros de GT"], links: ["GT", "Lignée royale", "Innocence"] },
        { id: 4, name: "Gogeta Blue AGI", categories: ["Héros de film", "Kamehameha"], links: ["Combat acharné", "Guerrier fusionné", "Paré au combat"] },
        { id: 5, name: "Vegeta SSJ4 PUI", categories: ["Héros de GT", "Famille de Vegeta"], links: ["Combat acharné", "Paré au combat", "Rugissement Saiyan", "GT"] }
    ];
};

// 2. L'algorithme de calcul d'équipe
const generateBestTeam = (leaderId, userBoxIds, allCharacters) => {
    // Trouver le leader complet
    const leader = allCharacters.find(c => c.id === leaderId);
    if (!leader) return console.log("Leader introuvable.");

    console.log(`\n👑 Création d'équipe autour de : ${leader.name}`);
    console.log(`Catégories du Leader : ${leader.categories.join(', ')}\n`);

    // Récupérer les persos que l'utilisateur possède (sa Box)
    const userCharacters = allCharacters.filter(c => userBoxIds.includes(c.id));

    // A. Filtrer ceux qui rentrent dans au moins UNE catégorie du Leader
    const eligibleCharacters = userCharacters.filter(char => {
        // Exclure le leader lui-même pour ne pas le mettre en double (sauf ami leader plus tard)
        if (char.id === leader.id) return false; 
        
        // Vérifier l'intersection des catégories
        return char.categories.some(cat => leader.categories.includes(cat));
    });

    // B. Calculer le score de synergie (basé sur les liens partagés avec le Leader)
    const scoredCharacters = eligibleCharacters.map(char => {
        // Trouver les liens en commun
        const sharedLinks = char.links.filter(link => leader.links.includes(link));
        const score = sharedLinks.length * 10; // 10 points par lien commun
        
        return {
            ...char,
            sharedLinks,
            score
        };
    });

    // C. Trier par le meilleur score
    scoredCharacters.sort((a, b) => b.score - a.score);

    // Afficher les résultats (Les 4 meilleurs partenaires par exemple)
    console.log("🔥 Meilleurs partenaires trouvés :");
    scoredCharacters.slice(0, 4).forEach(char => {
        console.log(`-> ${char.name} | Score: ${char.score} | Liens communs: ${char.sharedLinks.join(', ')}`);
    });
};

// 3. Exécution du programme
const runApp = async () => {
    const allCharacters = await fetchDokkanData();
    
    // Imaginons que ce soit la box de l'utilisateur (il a ces ID)
    const maBox = [1, 2, 3, 4, 5]; 
    
    // Il choisit le Goku/Vegeta SSJ4 (ID: 1) comme leader
    generateBestTeam(1, maBox, allCharacters);
};

runApp();