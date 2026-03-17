# 🐉 Dokkan Pro - Smart Team Builder

![Dokkan Battle](https://img.shields.io/badge/DBZ-Dokkan_Battle-orange?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Open Source](https://img.shields.io/badge/Open_Source-Success?style=for-the-badge)

**Dokkan Pro** is an advanced, web-based Team Builder for Dragon Ball Z: Dokkan Battle. Unlike standard tier lists or generic team templates, this application generates the **optimal teams based entirely on the characters you actually own in your personal Box**.

## ✨ Key Features

* 🎒 **Personalized Box Management:** Select and save the characters you have pulled in the game. The generator will only suggest units you actually own.
* 🧠 **Smart Synergy Algorithm:** The app doesn't just pick random characters. It calculates a "Synergy Score" by deeply analyzing:
    * **Leader Skills:** Automatically extracts and matches Categories.
    * **Link Skills:** Prioritizes units that share the most links with your Leader.
    * **Type & Alignment:** Grants bonuses for matching Super/Extreme alignments.
* 🎲 **Dynamic Team Variations:** Generates up to 5 different team setups per search (Pure Category teams, Hybrid setups, and Link-focused alternatives).
* 🎨 **100% Game-Accurate UI:** Uses genuine Dokkan Battle layout assets (dynamic rarity frames, type icons, and backgrounds) for an immersive, native feel.
* ⭐ **Save Your Teams:** Found the perfect setup? Save it to your personal team list for quick reference during ultimate Red Zone runs.

## 🚀 How It Works

1.  **Update the Database:** The app uses a Node.js script (`updateData.js`) to fetch the latest global and Japanese units from community APIs (Dokkan.fyi / Dokkan.wiki).
2.  **Fill your Box:** Go to the "My Box" tab and click on the units you own.
3.  **Choose a Leader:** Search for your desired Leader.
4.  **Generate:** The algorithm scans your Box and outputs the top 5 most optimal teams to conquer the hardest content.

## 🛠️ Installation & Setup

1. Clone this repository:
   ```bash
   git clone [https://github.com/your-username/dokkan-pro-builder.git](https://github.com/your-username/dokkan-pro-builder.git)
    ```

2. Navigate to the project directory:
   ```bash 
   node updateData.js
    ```

3. Open index.html in your favorite web browser. No local server required!


📝 Disclaimer

This project is fan-made, open-source, and is not affiliated with, endorsed, sponsored, or specifically approved by Bandai Namco Entertainment Inc. or Akatsuki Inc. All character images and game assets are the property of their respective owners.