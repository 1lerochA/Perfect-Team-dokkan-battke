// ============================================================
// DOKKAN PRO — Composant de carte partagé
// ============================================================

/**
 * Génère le HTML d'une carte Dokkan authentique.
 * La carte est TOUJOURS un élément autonome 90×90 avec position:relative.
 * Aucun wrapper externe n'est nécessaire pour le bon affichage des badges.
 *
 * @param {Object} char  - Objet personnage depuis dokkanCharacters
 * @param {Object} opts  - { isInBox: bool, size: 'sm'|'md'|'lg' }
 */
function createDokkanCard(char, opts = {}) {
    if (!char) return '';

    const { isInBox = false, size = 'md' } = opts;

    const typeClass = (char.type || 'agi').toLowerCase();
    const rarity    = char.rarity || 'SSR';
    const isLR      = rarity === 'LR';
    const isUR      = rarity === 'UR';

    // Alignement : 'S' pour Super, 'E' pour Extrême, '' sinon
    const alignLetter = char.alignment === 'SUPER'   ? 'S'
                      : char.alignment === 'EXTRÊME' ? 'E'
                      : '';

    // Dimensions selon la taille demandée
    const sizeMap = { sm: 50, md: 90, lg: 110 };
    const px = sizeMap[size] || 90;

    // Classes CSS sur la carte racine
    const inBoxClass = isInBox ? ' in-box' : '';
    const lrClass    = isLR   ? ' lr-frame' : '';

    // Badge rareté : texte multicolore pour UR, gold animé pour LR
    const rarityInner = isUR
        ? `<span class="rarity-ur-text">${rarity}</span>`
        : rarity;

    // Badge de possession (box)
    const boxBadge = isInBox 
        ? `<div class="box-badge">BOX</div>` 
        : '';
    
    // 🎯 LE FALLBACK ULTIME AVEC PROXY ANTI-BLOCAGE
    const targetId = char.thumbId || char.id; 
    
    // 1. Dokkan.fyi (La base officielle, rapide et fiable)
    const f1 = `https://cdn.dokkan.fyi/assets/en/character/thumb/card_${targetId}_thumb.png`;
    
    // 2. Le Proxy vers DokkanInfo (Global) - Contourne la sécurité !
    const f2 = `https://wsrv.nl/?url=dokkaninfo.com/assets/global/character/thumb/card_${targetId}_thumb.png`;
    
    // 3. Le Proxy vers DokkanInfo (Japonais) - Pour les persos tout récents !
    const f3 = `https://wsrv.nl/?url=dokkaninfo.com/assets/japan/character/thumb/card_${targetId}_thumb.png`;
    
    // 4. La croix par défaut
    const f4 = `https://placehold.co/${px}x${px}/1e1e24/FFF?text=X`; 
    
    const errorChain = `this.onerror=null; this.src='${f1}'; this.onerror=function(){this.src='${f2}'; this.onerror=function(){this.src='${f3}'; this.onerror=function(){this.src='${f4}'};};};`;
    
    return `<div
    class="unit-card${lrClass}${inBoxClass} rarity-${rarity.toLowerCase()}"
    id="unit-${char.id}"
    onclick="handleUnitClick(${char.id})"
    title="${char.name.replace(/"/g, '&quot;')}"
    style="width:${px}px;height:${px}px;position:relative;display:inline-block;vertical-align:top;flex-shrink:0;">

    <img class="unit-img"
         src="${char.img}"
         alt=""
         loading="lazy"
         onerror="${errorChain}"
         style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;border-radius:5px;display:block;background:#111;">

    <div class="card-frame frame-${typeClass}${isUR ? ' frame-ur' : ''}"
         style="position:absolute;inset:0;border-radius:6px;pointer-events:none;z-index:2;"></div>

    <div class="rarity-badge rarity-${rarity.toLowerCase()} badge-${typeClass}"
         style="position:absolute;bottom:-5px;left:-5px;z-index:5;">
        ${rarityInner}
    </div>

    ${boxBadge}

    <div class="type-badge bg-${typeClass}"
         style="position:absolute;top:-8px;right:-8px;z-index:6;pointer-events:none;">
        <span class="class-text">${alignLetter}</span>
        <span class="type-text">${char.type || ''}</span>
    </div>

</div>`;
}