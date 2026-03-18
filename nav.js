// 1. Le code HTML de ton menu unique
const navHTML = `
    <nav>
        <a href="index.html" id="link-index">🔮 Générateur</a>
        <a href="box.html" id="link-box">🎒 Ma Box</a>
        <a href="teams.html" id="link-teams">⭐ Mes Équipes</a>
        <a href="characters.html" id="link-characters">📖 Personnages</a>
    </nav>
`;

// 2. On injecte le menu tout en haut de la page (juste après l'ouverture de <body>)
document.body.insertAdjacentHTML('afterbegin', navHTML);

// 3. Le détecteur automatique pour savoir sur quelle page on est
const currentPage = window.location.pathname.split("/").pop() || "index.html";

if (currentPage.includes("box.html")) {
    document.getElementById('link-box').classList.add('active');
} else if (currentPage.includes("teams.html")) {
    document.getElementById('link-teams').classList.add('active');
} else if (currentPage.includes("characters.html")) {
    document.getElementById('link-characters').classList.add('active');
} else {
    // Par défaut, c'est le générateur
    document.getElementById('link-index').classList.add('active');
}