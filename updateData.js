const fs = require('fs');

const dictionary = {
    "Frieza": "Freezer",
    "Tien": "Tenshinhan",
    "Master Roshi": "Tortue Géniale",
    "Hercule": "Mr. Satan",
    "Buu": "Boo",
    "Vegito": "Vegetto",
    "Coora": "Cooler",
    "Pikkon": "Paikuhan",
    "Krillin": "Krilin",
    "Chiaotzu": "Chaozu",
    "Mercenary Tao": "Tao Pai Pai",
    "Captain Ginyu": "Capitaine Ginyu",
    "Burter": "Barta",
    "Jeice": "Jiece",
    "Guldo": "Ghourd",
    "Recoome": "Reacum",
    "Dabura": "Dabra",
    "Syn Shenron": "Li Shenron",
    "Demon King Piccolo": "Démon Piccolo",
    "Grandpa Gohan": "Grand-père Gohan"
};

function translateName(name) {
    if (!name) return "";
    let translated = name;
    for (const [english, french] of Object.entries(dictionary)) {
        const regex = new RegExp("\\b" + english + "\\b", "gi");
        translated = translated.replace(regex, french);
    }
    return translated;
}

function detectRoles(passiveText, activeText) {
    const roles = [];
    const fullText = (passiveText + " " + activeText).toLowerCase();

    if (fullText.includes("guard") || fullText.includes("damage reduction") || fullText.includes("reduces damage")) {
        roles.push("TANK");
    }
    if (fullText.includes("recovers") && fullText.includes("hp")) {
        roles.push("HEALER");
    }
    if (fullText.includes("allies' ki") || fullText.includes("allies' atk") || fullText.includes("allies' def")) {
        roles.push("SUPPORT");
    }
    if (fullText.includes("critical hit") || fullText.includes("changes ki spheres")) {
        roles.push("DPS / NUKER");
    }

    return roles;
}

function cleanApiText(text) {
    if (!text) return "";
    return text
        .replace(/\{passiveImg:up_g\}/g, " ⬆️")      
        .replace(/\{passiveImg:down_r\}/g, " ⬇️")    
        .replace(/\{passiveImg:[^}]+\}/g, "")       
        .trim();
}

console.log("⏳ Ajout des Attaques Spéciales et Passifs (Version Propre)...");

try {
    const rawData = fs.readFileSync('./fyi_data_full.json', 'utf8');
    const personnagesBruts = JSON.parse(rawData);

    const catDict = JSON.parse(fs.readFileSync('./wiki_categories_dict.json', 'utf8'));

    const formattedCharacters = personnagesBruts.map(char => {
        const imageUrl = `https://cdn.dokkan.fyi/assets/en/character/thumb/card_${char.thumbnail_id}_thumb.png`;
        const typeTraduction = { 0: "AGI", 1: "TEC", 2: "INT", 3: "PUI", 4: "END" };
        const rarityTraduction = { 0: "N", 1: "R", 2: "SR", 3: "SSR", 4: "UR", 5: "LR" };
        
        let alignement = "";
        if (char.awakening_type_text === "Super") alignement = "SUPER";
        if (char.awakening_type_text === "Extreme") alignement = "EXTRÊME";

        let superAttackText = "Aucune attaque spéciale";
        if (char.super_attack_skill_set && char.super_attack_skill_set.length > 0) {
            superAttackText = char.super_attack_skill_set.map(sa => `[${sa.name}] ${sa.description}`).join('\n\n');
        } else if (char.super_attacks && char.super_attacks.length > 0) {
            superAttackText = char.super_attacks.map(sa => `[${sa.name}] ${sa.description}`).join('\n\n');
        } else if (char.super_attack) {
            superAttackText = `[${char.super_attack.name}] ${char.super_attack.description}`;
        }

        let passiveText = "Aucune aptitude passive";
        if (char.passive_skill) {
            passiveText = char.passive_skill.description;
        } else if (char.passive_skill_set && char.passive_skill_set[0]) {
            passiveText = char.passive_skill_set[0].description;
        }

        let activeText = "Aucun Active Skill";
        if (char.active_skills && char.active_skills.length > 0) {
            activeText = char.active_skills.map(act => 
                `✨ ${act.name.toUpperCase()} ✨\nCondition: ${act.condition}\nEffet: ${act.description}`
            ).join('\n\n');
        }

        return {
            id: char.id,
            thumbId: char.thumbnail_id, 
            name: translateName(char.name),
            img: imageUrl,
            type: typeTraduction[char.type] || "INCONNU",
            rarity: rarityTraduction[char.rarity] || "SSR", 
            alignment: alignement,
            
            leaderSkill: char.leader_skill ? cleanApiText(char.leader_skill.description) : "Aucun Leader Skill",
            superAttack: cleanApiText(superAttackText),
            passive: cleanApiText(passiveText),
            activeSkill: activeText,
            
            links: char.link_skill_ids || [], 
            categories: catDict[char.id] || [],
            roles: detectRoles(passiveText, activeText) 
        };
    });

    const fileContent = `// Base de données Dokkan Pro\nconst dokkanCharacters = ${JSON.stringify(formattedCharacters, null, 4)};`;
    fs.writeFileSync('./data.js', fileContent, 'utf8');
    console.log("🎉 data.js mis à jour et nettoyé !");

} catch (error) {
    console.error("❌ Erreur :", error);
}