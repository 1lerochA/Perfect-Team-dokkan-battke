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

const linkDictionary = {
    1: "Royal Lineage",
    2: "The Saiyan Lineage",
    3: "Ginyu Force",
    4: "Brainiacs",
    5: "Crane School",
    6: "Demonic Ways",
    7: "Master of Magic",
    8: "Cold Judgment",
    9: "Super Saiyan",
    10: "Money Money Money",
    11: "The Innocents",
    12: "Flee",
    13: "Telekinesis",
    14: "More Than Meets the Eye",
    15: "Hero of Justice",
    16: "Infighter",
    17: "Signature Pose",
    18: "Brutal Beatdown",
    19: "Messenger from the Future",
    20: "Twin Terrors",
    22: "Saiyan Warrior Race",
    23: "All in the Family",
    24: "Telepathy",
    25: "Respect",
    26: "Prodigies",
    27: "World Tournament Champion",
    28: "Metamorphosis",
    29: "Fierce Battle",
    30: "Experienced Fighters",
    31: "Twin Terrors", 
    32: "Coward",
    33: "Attack of the Clones",
    34: "Golden Z-Fighter",
    35: "Android Assault",
    36: "Turtle School",
    37: "Solid Support",
    38: "Mechanical Menaces",
    39: "Shocking Speed",
    40: "Royal Lineage", 
    41: "Ginyu Force",
    42: "Thirst for Conquest",
    43: "Speedy Retribution",
    44: "GT",
    45: "Z Fighters", // Historiquement Z Fighters
    46: "Dodon Ray",
    47: "Kamehameha",
    48: "Namekians",
    49: "Berserker",
    50: "Big Bad Bosses",
    51: "Special Pose",
    52: "Tough as Nails",
    53: "Fear and Faith",
    54: "Nightmare",
    55: "RR Army",
    56: "Gaze of Respect",
    57: "Kamehameha",
    58: "Over 9000",
    59: "Universe's Most Malevolent",
    60: "Shocking Speed",
    61: "The First Awakened",
    62: "Team Bardock",
    63: "Saiyan Pride",
    64: "Battlefield Diva",
    65: "Revival",
    66: "Dismal Future",
    67: "Organic Upgrade",
    68: "Godly Power",
    69: "Power Bestowed by God",
    70: "Warrior Gods",
    71: "Limit-Breaking Form",
    72: "Loyalty",
    73: "Fused Fighter",
    76: "Majin", 
    77: "Master of Magic",
    79: "Connoisseur",
    80: "Godly Power", // Parfois lié à Godly Power ou Realm of Gods
    81: "Energy Absorption",
    82: "Kamehameha",
    83: "Godly Power",
    84: "Transform",
    85: "Strongest Clan in Space",
    86: "Thirst for Conquest",
    87: "Galactic Warriors",
    88: "Boujack Brigade",
    89: "Over in a Flash",
    90: "Guidance of the Dragon Balls",
    93: "Hero of Justice",
    94: "Signature Pose",
    95: "Shadow Dragons",
    96: "Wall Standing Tall",
    97: "Prepared for Battle",
    98: "Destroyer of the Universe",
    101: "The Incredible Adventure",
    102: "The Incredible Adventure",
    103: "Power Bestowed by God",
    104: "Hardened Grudge",
    105: "Auto Regenerate",
    108: "Ultimate Lifeform",
    109: "Over in a Flash", 
    110: "Twin Terrors",
    112: "Shattering the Limit",
    114: "Demonic Ways",
    115: "Flee",
    116: "Limit-Breaking Form",
    117: "The First Awakened",
    118: "Shattering the Limit", // Autre ID fréquent pour Shattering the Limit (Rebirth)
    119: "Fear and Faith",
    120: "Nightmare",
    122: "Strongest Clan in Space",
    123: "Giant Form",
    124: "Tournament of Power",
    125: "Legendary Power",
    126: "Warriors of Universe 6",
    127: "Shadow Dragons",
    129: "Otherworld Warriors",
    130: "Tournament of Power", 
    1000: "Supreme Power",
    1001: "Blazing Battle",
    1003: "Supreme Power",
    1004: "Fierce Battle" // Variable (Parfois utilisé pour d'autres événements Dokkan)
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

    // Utilisation des \b pour s'assurer qu'on match le mot exact et non une partie d'un autre mot
    if (/\b(guard|damage reduction|reduces damage)\b/i.test(fullText)) {
        roles.push("TANK");
    }
    if (/\b(recovers|recovery)\b/i.test(fullText) && /\b(hp)\b/i.test(fullText)) {
        roles.push("HEALER");
    }
    if (/\b(allies' ki|allies' atk|allies' def|allies ki)\b/i.test(fullText)) {
        roles.push("SUPPORT");
    }
    if (/\b(critical hit|changes ki spheres|effective against all types)\b/i.test(fullText)) {
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
            
            links: (char.link_skill_ids || []).map(id => linkDictionary[id] || `Lien Inconnu (${id})`),
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