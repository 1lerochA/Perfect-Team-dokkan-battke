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

window.handleUnitClick = function(id) {
    const char = dokkanCharacters.find(c => c.id === id);
    if(!char) return;
    
    const content = document.getElementById('pokedex-content');
    
    const formatText = text => text ? text.replace(/\n/g, '<br>') : '<span style="color:#666;font-style:italic;">Data not available.</span>';
    
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

    const linksHTML = (char.links && char.links.length > 0)
        ? char.links.map(linkName => `<span class="tag-pill">🔗 ${linkName}</span>`).join('')
        : '<span style="color:#888;font-style:italic;">No Links</span>';

    content.innerHTML = `
        <div class="pokedex-grid">
            
            <div class="pokedex-left">
                ${createDokkanCard(char, { size: 'lg' })}
                <h2 class="pokedex-name">${char.name}</h2>
                <p class="pokedex-title">${char.title || 'Dokkan Battle Unit'}</p>
                
                <div class="pokedex-meta">
                    <div style="margin-bottom: 10px;"><strong>Unit ID:</strong> <span style="color:var(--accent-gold);">${char.id}</span></div>
                    <div style="margin-bottom: 10px;"><strong>Type:</strong> ${char.alignment || ''} ${char.type || ''}</div>
                    <div style="margin-bottom: 15px;"><strong>Rarity:</strong> ${char.rarity || 'Unknown'}</div>
                    
                    <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px; margin-top: 10px;">
                        <strong style="color:var(--accent-blue); display:block; margin-bottom:8px;">ROLES :</strong>
                        ${(char.roles && char.roles.length > 0) 
                            ? char.roles.map(r => `<span style="background:rgba(52, 152, 219, 0.2); border:1px solid #3498db; color:#3498db; padding:4px 10px; border-radius:12px; font-size:0.8rem; font-weight:bold; margin-right:5px; display:inline-block; margin-bottom:5px;">${r}</span>`).join('')
                            : '<span style="color:#888; font-style:italic;">Aucun rôle spécifique</span>'
                        }
                    </div>
                </div>
            </div> <div class="pokedex-right">
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
                
                ${(char.activeSkill && char.activeSkill !== "Aucun Active Skill") ? `
                <div class="skill-block" style="border-left-color: #f39c12;">
                    <h3 style="color: #f39c12;">🔥 ACTIVE SKILL</h3>
                    <p>${formatText(char.activeSkill)}</p>
                </div>` : ''}

                <div class="skill-block" style="border-left-color: var(--accent-gold);">
                    <h3 style="color: var(--accent-gold);">🏷️ CATEGORIES</h3>
                    <div class="tags-container">
                        ${categoriesHTML}
                    </div>

                </div>
                    <div class="skill-block" style="border-left-color: #9b59b6;">
                    <h3 style="color: #9b59b6;">🔗 LINKS</h3>
                    <div class="tags-container">
                        ${linksHTML}
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

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (typeof window.closePokedex === 'function') {
            window.closePokedex();
        }
        if (typeof window.closeModal === 'function') {
            window.closeModal();
        }
    }
});