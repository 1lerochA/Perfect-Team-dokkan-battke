const fs = require('fs');

console.log("⏳ Ajout des classes Super/Extrême...");

try {
    const rawData = fs.readFileSync('./fyi_data_full.json', 'utf8');
    const personnagesBruts = JSON.parse(rawData);

    const formattedCharacters = personnagesBruts.map(char => {
        const imageUrl = `https://cdn.dokkan.fyi/assets/en/character/thumb/card_${char.thumbnail_id}_thumb.png`;
        const typeTraduction = { 0: "AGI", 1: "TEC", 2: "INT", 3: "PUI", 4: "END" };
        const rarityTraduction = { 0: "N", 1: "R", 2: "SR", 3: "SSR", 4: "UR", 5: "LR" };
        
        let alignement = "";
        if (char.awakening_type_text === "Super") alignement = "SUPER";
        if (char.awakening_type_text === "Extreme") alignement = "EXTRÊME";

        return {
            id: char.id,
            thumbId: char.thumbnail_id, // 🎯 NOUVEAU : On sauvegarde l'ID exact de l'image !
            name: char.name,
            img: imageUrl,
            type: typeTraduction[char.type] || "INCONNU",
            rarity: rarityTraduction[char.rarity] || "SSR", 
            alignment: alignement,
            leaderSkill: char.leader_skill ? char.leader_skill.description : "Aucun Leader Skill",
            links: char.link_skill_ids || [], 
            categories: [] 
        };
    });

    const fileContent = `// Base de données Dokkan Pro\nconst dokkanCharacters = ${JSON.stringify(formattedCharacters, null, 4)};`;
    fs.writeFileSync('./data.js', fileContent, 'utf8');
    console.log("🎉 data.js mis à jour avec le Super/Extrême !");

} catch (error) {
    console.error("❌ Erreur :", error);
}