const navHTML = `
    <nav>
        <a href="index.html" id="link-index">🔮 Générateur</a>
        <a href="box.html" id="link-box">🎒 Ma Box</a>
        <a href="teams.html" id="link-teams">⭐ Mes Équipes</a>
        <a href="characters.html" id="link-characters">📖 Personnages</a>
    </nav>
`;

document.body.insertAdjacentHTML('afterbegin', navHTML);

const currentPage = window.location.pathname.split("/").pop() || "index.html";

if (currentPage.includes("box.html")) {
    document.getElementById('link-box').classList.add('active');
} else if (currentPage.includes("teams.html")) {
    document.getElementById('link-teams').classList.add('active');
} else if (currentPage.includes("characters.html")) {
    document.getElementById('link-characters').classList.add('active');
} else {
    document.getElementById('link-index').classList.add('active');
}