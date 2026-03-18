const fs = require('fs');


const categoriesToFetch = [
    {id: 1, name: "Fusion"}, {id: 2, name: "Shadow Dragon Saga"}, {id: 3, name: "World Tournament"},
    {id: 4, name: "Peppy Gals"}, {id: 5, name: "Hybrid Saiyans"}, {id: 6, name: "Universe Survival Saga"},
    {id: 7, name: "Resurrected Warriors"}, {id: 8, name: "Realm of Gods"}, {id: 9, name: "Majin Buu Saga"},
    {id: 10, name: "Potara"}, {id: 11, name: "Low-Class Warrior"}, {id: 12, name: "Super Saiyan 3"},
    {id: 13, name: "Giant Form"}, {id: 14, name: "Planet Namek Saga"}, {id: 15, name: "Ginyu Force"},
    {id: 16, name: "Movie Bosses"}, {id: 17, name: "Pure Saiyans"}, {id: 18, name: "Namekians"},
    {id: 19, name: "Future Saga"}, {id: 20, name: "Full Power"}, {id: 21, name: "Androids"},
    {id: 22, name: "Representatives of Universe 7"}, {id: 23, name: "Transformation Boost"}, {id: 24, name: "Wicked Bloodline"},
    {id: 25, name: "Dragon Ball Seekers"}, {id: 26, name: "Time Travelers"}, {id: 27, name: "Universe 6"},
    {id: 28, name: "Joined Forces"}, {id: 29, name: "Movie Heroes"}, {id: 30, name: "Goku's Family"},
    {id: 31, name: "Vegeta's Family"}, {id: 32, name: "Artificial Life Forms"}, {id: 33, name: "Youth"},
    {id: 34, name: "DB Saga"}, {id: 35, name: "Siblings' Bond"}, {id: 36, name: "Super Saiyans"},
    {id: 37, name: "Worthy Rivals"}, {id: 38, name: "Androids/Cell Saga"}, {id: 39, name: "Kamehameha"},
    {id: 40, name: "Bond of Master and Disciple"}, {id: 41, name: "Terrifying Conquerors"}, {id: 42, name: "Dragon Ball Heroes"},
    {id: 43, name: "Target: Goku"}, {id: 44, name: "Otherworld Warriors"}, {id: 45, name: "Super Saiyan 2"},
    {id: 46, name: "Final Trump Card"}, {id: 47, name: "Exploding Rage"}, {id: 48, name: "Revenge"},
    {id: 49, name: "Team Bardock"}, {id: 50, name: "Inhuman Deeds"}, {id: 51, name: "Earthlings"},
    {id: 52, name: "Special Pose"}, {id: 53, name: "Majin Power"}, {id: 54, name: "Rapid Growth"},
    {id: 55, name: "All-Out Struggle"}, {id: 56, name: "Universe 11"}, {id: 57, name: "Saviors"},
    {id: 58, name: "Battle of Wits"}, {id: 59, name: "Power Absorption"}, {id: 60, name: "Giant Ape Power"},
    {id: 61, name: "Crossover"}, {id: 62, name: "Space-Traveling Warriors"}, {id: 63, name: "Connected Hope"},
    {id: 64, name: "Corroded Body and Mind"}, {id: 65, name: "Turtle School"}, {id: 66, name: "Miraculous Awakening"},
    {id: 67, name: "Powerful Comeback"}, {id: 68, name: "Gifted Warriors"}, {id: 69, name: "Planetary Destruction"},
    {id: 70, name: "Defenders of Justice"}, {id: 71, name: "Storied Figures"}, {id: 72, name: "GT Heroes"},
    {id: 73, name: "GT Bosses"}, {id: 74, name: "Heavenly Events"}, {id: 75, name: "Time Limit"},
    {id: 76, name: "Mastered Evolution"}, {id: 77, name: "Legendary Existence"}, {id: 78, name: "Sworn Enemies"},
    {id: 79, name: "Bond of Friendship"}, {id: 80, name: "Accelerated Battle"}, {id: 81, name: "Entrusted Will"},
    {id: 82, name: "Worldwide Chaos"}, {id: 83, name: "Battle of Fate"}, {id: 84, name: "Power Beyond Super Saiyan"},
    {id: 85, name: "Fused Fighters"}, {id: 86, name: "Saiyan Saga"}, {id: 87, name: "Bond of Parent and Child"},
    {id: 88, name: "Super Heroes"}, {id: 89, name: "Earth-Bred Fighters"}, {id: 90, name: "Power of Wishes"},
    {id: 91, name: "Tournament Participants"}, {id: 92, name: "Super Bosses"}, {id: 93, name: "Demonic Power"},
    {id: 94, name: "Uncontrollable Power"}, {id: 95, name: "Earth-Protecting Heroes"}, {id: 96, name: "Successors"},
    {id: 97, name: "Mission Execution"}, {id: 98, name: "DAIMA"}
];

async function startMassScraping() {
    console.log("🚀 Lancement du Scraper de Masse...");
    
    let charToCatMap = {};

    if (fs.existsSync('wiki_categories_dict.json')) {
        charToCatMap = JSON.parse(fs.readFileSync('wiki_categories_dict.json', 'utf8'));
    }

    for (const cat of categoriesToFetch) {
        console.log(`📥 Récupération de la catégorie : ${cat.name}...`);
        
        try {
            const response = await fetch(`https://dokkan.wiki/api/categories/${cat.id}`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122.0.0.0 Safari/537.36',
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                console.log(`❌ Erreur ${response.status} sur ${cat.name}`);
                continue;
            }

            const data = await response.json();
            
            if (data.cards && Array.isArray(data.cards)) {
                data.cards.forEach(card => {
                    if (!charToCatMap[card.id]) charToCatMap[card.id] = [];
                    if (!charToCatMap[card.id].includes(cat.name)) {
                        charToCatMap[card.id].push(cat.name);
                    }
                });
                console.log(`✅ ${data.cards.length} personnages trouvés pour ${cat.name}`);
            }

            await new Promise(r => setTimeout(r, 2000));

        } catch (error) {
            console.log(`🔥 Erreur sur ${cat.name}:`, error.message);
        }
    }

    fs.writeFileSync('wiki_categories_dict.json', JSON.stringify(charToCatMap, null, 2));
    console.log("🏆 TERMINE ! Dictionnaire sauvegardé.");
}

startMassScraping();