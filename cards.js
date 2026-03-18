function createDokkanCard(char, opts = {}) {
    if (!char) return '';

    const { isInBox = false, size = 'md' } = opts;

    const typeClass = (char.type || 'AGI').toUpperCase();
    const rarity    = (char.rarity || 'SSR').toUpperCase();
    const alignment = (char.alignment || '').toUpperCase();

    const isLR      = rarity === 'LR';
    const isUR      = rarity === 'UR';

    const sizeMap = { sm: 50, md: 90, lg: 110 };
    const px = sizeMap[size] || 90;
    const inBoxClass = isInBox ? ' in-box' : '';
    const lrClass    = isLR   ? ' lr-frame' : '';

    let typeNum = 0;
    if (typeClass === "AGI") typeNum = 0;
    if (typeClass === "TEC") typeNum = 1;
    if (typeClass === "INT") typeNum = 2;
    if (typeClass === "PUI") typeNum = 3;
    if (typeClass === "END") typeNum = 4;

    const bgType = String(typeNum).padStart(2, '0');

    let alignOffset = 0; 
    if (alignment === "SUPER") alignOffset = 10;
    if (alignment === "EXTRÊME") alignOffset = 20;

    const typeIconId = String(alignOffset + typeNum).padStart(2, '0');


    let rarityNum = 3;
    if (rarity === "N") rarityNum = 0;
    if (rarity === "R") rarityNum = 1;
    if (rarity === "SR") rarityNum = 2;
    if (rarity === "SSR") rarityNum = 3;
    if (rarity === "UR") rarityNum = 4;
    if (rarity === "LR") rarityNum = 5;

    const bgRarity = String(rarityNum).padStart(2, '0');

    const baseUrl = "https://dokkan.wiki/assets/global/en/layout/en/image/character";
    
    const bgUrl = `${baseUrl}/character_thumb_bg/cha_base_${bgType}_${bgRarity}.png`;
    
    const rarityUrl = `${baseUrl}/cha_rare_sm_${rarity.toLowerCase()}.png`;
    const typeUrl = `${baseUrl}/cha_type_icon_${typeIconId}.png`;

    const targetId = char.thumbId || (char.id.toString().slice(0, -1) + '0'); 
    const fileName = `card_${targetId}_thumb`;

    const charUrls = [
        `https://cdn.dokkan.fyi/assets/en/character/thumb/${fileName}.png`,
        `https://dokkan.wiki/assets/global/en/character/thumb/${fileName}/${fileName}.png`,
        `https://dokkan.wiki/assets/japan/character/thumb/${fileName}/${fileName}.png`,
        `https://placehold.co/${px}x${px}/111/FFF?text=X`
    ];
    
    const errorChain = `this.onerror=null; this.src='${charUrls[1]}'; this.onerror=function(){this.src='${charUrls[2]}'; this.onerror=function(){this.src='${charUrls[3]}'};};`;

    const boxBadge = isInBox ? `
        <div style="position:absolute; top:-6px; left:-6px; background:linear-gradient(135deg, #2ecc71, #27ae60); color:white; font-size:12px; font-family:'Bangers', cursive; letter-spacing:1px; padding:4px 10px; border-radius:8px; z-index:15; border:2px solid #145c33; box-shadow:0 4px 10px rgba(0,0,0,0.6); transform:rotate(-10deg);">
            ✅ ACQUIS
        </div>
        <div style="position:absolute; inset:0; border:3px solid #2ecc71; border-radius:6px; z-index:9; pointer-events:none; box-shadow:inset 0 0 20px rgba(46,204,113,0.6);"></div>
    ` : '';

    return `<div
    class="unit-card${lrClass}${inBoxClass}"
    id="unit-${char.id}"
    onclick="handleUnitClick(${char.id})"
    title="${char.name.replace(/"/g, '&quot;')}"
    style="width:${px}px;height:${px}px;position:relative;display:inline-block;vertical-align:top;flex-shrink:0;border-radius:6px;">

    <img src="${bgUrl}" loading="lazy" referrerpolicy="no-referrer" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:6px;z-index:1;">

    <img src="${charUrls[0]}" onerror="${errorChain}" referrerpolicy="no-referrer" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:6px;z-index:2;transform:scale(1.05);">

    <img src="${typeUrl}" loading="lazy" referrerpolicy="no-referrer" style="position:absolute;top:-10px;right:-10px;width:38%;height:auto;z-index:4;filter:drop-shadow(1px 1px 2px rgba(0,0,0,0.8));">

    <img src="${rarityUrl}" loading="lazy" referrerpolicy="no-referrer" style="position:absolute;bottom:-8px;left:-8px;width:55%;height:auto;z-index:4;filter:drop-shadow(1px 1px 2px rgba(0,0,0,0.8));">

    ${boxBadge}
</div>`;
}

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

const pokedexHTML = `
<div id="pokedex-modal" class="pokedex-overlay">
    <div class="pokedex-box">
        <button class="pokedex-close" onclick="closePokedex()">✕</button>
        <div id="pokedex-content"></div>
    </div>
</div>
<style>
    .pokedex-overlay {
        display: none; position: fixed; inset: 0;
        background: rgba(0,0,0,0.9); z-index: 9999;
        backdrop-filter: blur(10px); justify-content: center;
        align-items: center; padding: 20px;
    }
    .pokedex-overlay.open { display: flex; }
    
    .pokedex-box {
        background: #111820; border: 2px solid var(--accent-gold);
        border-radius: 20px; width: 100%; max-width: 1200px;
        max-height: 90vh; overflow-y: auto; position: relative;
        box-shadow: 0 20px 60px rgba(0,0,0,0.9);
    }
    
    .pokedex-close {
        position: absolute; top: 20px; right: 25px;
        background: rgba(255,255,255,0.1); border: none; color: #fff; font-size: 1.5rem;
        cursor: pointer; transition: 0.2s; z-index: 10;
        width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center;
    }
    .pokedex-close:hover { background: #e74c3c; transform: rotate(90deg); }
    
    .pokedex-grid {
        display: grid;
        grid-template-columns: 350px 1fr;
        gap: 0;
    }
    
    .pokedex-left {
        background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%);
        padding: 40px 30px;
        display: flex; flex-direction: column; align-items: center; text-align: center;
        border-right: 1px solid rgba(255,255,255,0.1);
    }
    .pokedex-name { font-family: 'Bangers', cursive; font-size: 3rem; color: var(--accent-gold); margin: 20px 0 5px 0; line-height: 1.1; text-shadow: 2px 2px 0 #000; }
    .pokedex-title { color: #aaa; font-style: italic; font-size: 1.2rem; margin: 0 0 20px 0; }
    .pokedex-meta { background: rgba(0,0,0,0.4); padding: 15px; border-radius: 12px; width: 100%; border: 1px solid rgba(255,255,255,0.05); color: #ccc; }
    
    .pokedex-right { padding: 40px 40px; }
    
    .skill-block { margin-bottom: 25px; background: rgba(0,0,0,0.3); padding: 25px; border-radius: 16px; border-left: 5px solid var(--accent-blue); }
    .skill-block h3 { margin-top: 0; color: var(--accent-blue); font-family: 'Bangers', cursive; font-size: 1.8rem; letter-spacing: 1px; margin-bottom: 12px; text-transform: uppercase; }
    .skill-block p { margin: 0; color: #ddd; line-height: 1.7; font-size: 1.05rem; }
    
    .tags-container { display: flex; flex-wrap: wrap; gap: 10px; }
    .tag-pill { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; font-size: 0.95rem; color: #fff; font-weight: bold; transition: 0.2s; }
    .tag-pill:hover { background: rgba(255,255,255,0.1); }
    .tag-pill.category { border-color: var(--accent-gold); color: var(--accent-gold); background: rgba(243,156,18,0.05); }
    
    @media (max-width: 900px) {
        .pokedex-grid { grid-template-columns: 1fr; }
        .pokedex-left { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .pokedex-right { padding: 20px; }
    }
</style>
`;

document.body.insertAdjacentHTML('beforeend', pokedexHTML);

// 3. L'action magique
window.handleUnitClick = function(id) {
    const char = dokkanCharacters.find(c => c.id === id);
    if(!char) return;
    
    const content = document.getElementById('pokedex-content');
    
    const formatText = text => text ? text.replace(/\n/g, '<br>') : '<span style="color:#666;font-style:italic;">Data not available.</span>';
    
    // Catégories
    let categories = char.categories || [];
    if (categories.length === 0 && char.leaderSkill) {
        const catRegex = /"([^"]+)"/g;
        let match;
        while ((match = catRegex.exec(char.leaderSkill)) !== null) {
            if (!categories.includes(match[1])) categories.push(match[1]);
        }
    }
    const categoriesHTML = categories.length > 0 
        ? categories.map(cat => `<span class="tag-pill category">${cat}</span>`).join('') 
        : '<span style="color:#888;font-style:italic;">No Categories</span>';

    // Liens (Anglais)
    const linksHTML = (char.links && char.links.length > 0)
        ? char.links.map(linkId => {
            const linkName = linkDictionary[linkId] || ("Link ID: " + linkId);
            return `<span class="tag-pill" title="ID: ${linkId}">🔗 ${linkName}</span>`;
        }).join('')
        : '<span style="color:#888;font-style:italic;">No Links</span>';

    // Remplissage en Anglais
    content.innerHTML = `
        <div class="pokedex-grid">
            <div class="pokedex-left">
                ${createDokkanCard(char, { size: 'lg' })}
                <h2 class="pokedex-name">${char.name}</h2>
                <p class="pokedex-title">${char.title || 'Dokkan Battle Unit'}</p>
                
                <div class="pokedex-meta">
                    <div style="margin-bottom: 10px;"><strong>Unit ID:</strong> <span style="color:var(--accent-gold);">${char.id}</span></div>
                    <div style="margin-bottom: 10px;"><strong>Type:</strong> ${char.alignment || ''} ${char.type || ''}</div>
                    <div><strong>Rarity:</strong> ${char.rarity || 'Unknown'}</div>
                </div>
            </div>
            
            <div class="pokedex-right">
                <div class="skill-block">
                    <h3>👑 LEADER SKILL</h3>
                    <p>${formatText(char.leaderSkill)}</p>
                </div>
                
                <div class="skill-block" style="border-left-color: #e74c3c;">
                    <h3 style="color: #e74c3c;">💥 SUPER ATTACK</h3>
                    <p>${formatText(char.superAttack)}</p>
                </div>
                
                <div class="skill-block" style="border-left-color: #2ecc71;">
                    <h3 style="color: #2ecc71;">🛡️ PASSIVE SKILL</h3>
                    <p>${formatText(char.passive)}</p>
                </div>
                
                <div class="skill-block" style="border-left-color: #9b59b6;">
                    <h3 style="color: #9b59b6;">🔗 LINKS</h3>
                    <div class="tags-container">
                        ${linksHTML}
                    </div>
                </div>
                
                <div class="skill-block" style="border-left-color: var(--accent-gold);">
                    <h3 style="color: var(--accent-gold);">🏷️ CATEGORIES</h3>
                    <div class="tags-container">
                        ${categoriesHTML}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('pokedex-modal').classList.add('open');
};

window.closePokedex = function() {
    document.getElementById('pokedex-modal').classList.remove('open');
};

document.addEventListener('click', e => {
    if (e.target.id === 'pokedex-modal') window.closePokedex();
});