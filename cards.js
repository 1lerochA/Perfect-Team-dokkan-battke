// ============================================================
// DOKKAN PRO — Composant de carte avec VRAIS ASSETS DOKKAN
// ============================================================

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

    // --- DÉCODAGE CORRIGÉ DES ASSETS ---
    
    // 1. Types (AGI=00, TEC=01, INT=02, PUI=03, END=04)
    let typeNum = 0;
    if (typeClass === "AGI") typeNum = 0;
    if (typeClass === "TEC") typeNum = 1;
    if (typeClass === "INT") typeNum = 2;
    if (typeClass === "PUI") typeNum = 3;
    if (typeClass === "END") typeNum = 4;

    const bgType = String(typeNum).padStart(2, '0'); // Ex: "02" pour INT

    // 2. Alignement pour le Macaron (Super = +10, Extrême = +20)
    let alignOffset = 0; 
    if (alignment === "SUPER") alignOffset = 10;
    if (alignment === "EXTRÊME") alignOffset = 20;

    const typeIconId = String(alignOffset + typeNum).padStart(2, '0');

    // 3. Rareté pour le fond (N=00, R=01, SR=02, SSR=03, UR=04, LR=05)
    let rarityNum = 3; // SSR par défaut
    if (rarity === "N") rarityNum = 0;
    if (rarity === "R") rarityNum = 1;
    if (rarity === "SR") rarityNum = 2;
    if (rarity === "SSR") rarityNum = 3;
    if (rarity === "UR") rarityNum = 4;
    if (rarity === "LR") rarityNum = 5;

    const bgRarity = String(rarityNum).padStart(2, '0'); // Ex: "05" pour LR

    // --- CRÉATION DES URLS ---
    const baseUrl = "https://dokkan.wiki/assets/global/en/layout/en/image/character";
    
    // 🎯 LA CORRECTION EST ICI : L'ordre exact est TYPE puis RARETÉ !
    const bgUrl = `${baseUrl}/character_thumb_bg/cha_base_${bgType}_${bgRarity}.png`;
    
    const rarityUrl = `${baseUrl}/cha_rare_sm_${rarity.toLowerCase()}.png`;
    const typeUrl = `${baseUrl}/cha_type_icon_${typeIconId}.png`;

    // 4. L'image du perso (avec le sous-dossier)
    const targetId = char.thumbId || (char.id.toString().slice(0, -1) + '0'); 
    const fileName = `card_${targetId}_thumb`;

    const charUrls = [
        `https://cdn.dokkan.fyi/assets/en/character/thumb/${fileName}.png`,
        `https://dokkan.wiki/assets/global/en/character/thumb/${fileName}/${fileName}.png`,
        `https://dokkan.wiki/assets/japan/character/thumb/${fileName}/${fileName}.png`,
        `https://placehold.co/${px}x${px}/111/FFF?text=X`
    ];
    
    const errorChain = `this.onerror=null; this.src='${charUrls[1]}'; this.onerror=function(){this.src='${charUrls[2]}'; this.onerror=function(){this.src='${charUrls[3]}'};};`;

    const boxBadge = isInBox ? `<div class="box-badge" style="position:absolute;bottom:0;right:0;background:rgba(0,0,0,0.8);color:white;font-size:10px;padding:2px 4px;border-radius:4px;z-index:10;font-weight:bold;">BOX</div>` : '';

    return `<div
    class="unit-card${lrClass}${inBoxClass}"
    id="unit-${char.id}"
    onclick="handleUnitClick(${char.id})"
    title="${char.name.replace(/"/g, '&quot;')}"
    style="width:${px}px;height:${px}px;position:relative;display:inline-block;vertical-align:top;flex-shrink:0;border-radius:6px;">

    <img src="${bgUrl}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:6px;z-index:1;">

    <img src="${charUrls[0]}" onerror="${errorChain}" referrerpolicy="no-referrer" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:6px;z-index:2;transform:scale(1.05);">

    <img src="${typeUrl}" loading="lazy" style="position:absolute;top:-10px;right:-10px;width:38%;height:auto;z-index:4;filter:drop-shadow(1px 1px 2px rgba(0,0,0,0.8));">

    <img src="${rarityUrl}" loading="lazy" style="position:absolute;bottom:-8px;left:-8px;width:55%;height:auto;z-index:4;filter:drop-shadow(1px 1px 2px rgba(0,0,0,0.8));">

    ${boxBadge}

</div>`;
}