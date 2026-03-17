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

    <img src="${bgUrl}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:6px;z-index:1;">

    <img src="${charUrls[0]}" onerror="${errorChain}" referrerpolicy="no-referrer" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:6px;z-index:2;transform:scale(1.05);">

    <img src="${typeUrl}" loading="lazy" style="position:absolute;top:-10px;right:-10px;width:38%;height:auto;z-index:4;filter:drop-shadow(1px 1px 2px rgba(0,0,0,0.8));">

    <img src="${rarityUrl}" loading="lazy" style="position:absolute;bottom:-8px;left:-8px;width:55%;height:auto;z-index:4;filter:drop-shadow(1px 1px 2px rgba(0,0,0,0.8));">

    ${boxBadge}

</div>`;
}