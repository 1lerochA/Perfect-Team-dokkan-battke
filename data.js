// Base de données Dokkan Pro
const dokkanCharacters = [
    {
        "id": 1012361,
        "thumbId": 1012360,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012360_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +100%",
        "links": [
            45,
            23,
            30,
            97,
            34,
            1003,
            125
        ],
        "categories": []
    },
    {
        "id": 1026391,
        "thumbId": 1026390,
        "name": "Babidi",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026390_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Inhuman Deeds\" Category \nKi +3 and HP, ATK & DEF +80%",
        "links": [
            18,
            76,
            77,
            86,
            119,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1032981,
        "thumbId": 1032980,
        "name": "Yakon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032980_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Majin Buu Saga\" or \n\"Terrifying Conquerors\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            18,
            11,
            73,
            60,
            77,
            7,
            109
        ],
        "categories": []
    },
    {
        "id": 1033011,
        "thumbId": 1033010,
        "name": "Dabra",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1033010_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Majin Buu Saga\", \"Mission Execution\" or \n\"Terrifying Conquerors\" Category \nKi +3, HP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Corroded Body and Mind\" or \n\"Successors\" Category",
        "links": [
            18,
            73,
            76,
            77,
            119,
            7,
            109
        ],
        "categories": []
    },
    {
        "id": 1013541,
        "thumbId": 1013540,
        "name": "Goku (Ultra Instinct -Sign-)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013540_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Realm of Gods\" Category Ki +3 \nand HP, ATK & DEF +150%; \nor INT Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            47,
            97,
            80,
            89,
            130,
            117,
            109
        ],
        "categories": []
    },
    {
        "id": 1025731,
        "thumbId": 1025730,
        "name": "Super Saiyan 3 Goku & Super Saiyan 2 Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025730_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Power of Wishes\" or \"Final Trump Card\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Connected Hope\" or \"Majin Buu Saga\" Category",
        "links": [
            22,
            9,
            29,
            30,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1025771,
        "thumbId": 1025770,
        "name": "Goku (GT) & Super Saiyan 4 Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025770_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Power of Wishes\" or \"Battle of Fate\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Final Trump Card\" or \"Shadow Dragon Saga\" Category",
        "links": [
            22,
            34,
            30,
            95,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1024441,
        "thumbId": 1024440,
        "name": "Super Saiyan God SS Goku/\nSuper Saiyan God SS Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024440_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Realm of Gods\" or \"Mastered Evolution\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to \nthe \"Pure Saiyans\" Category",
        "links": [
            22,
            29,
            70,
            71,
            68,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1032881,
        "thumbId": 1032880,
        "name": "Super Saiyan 4 Vegeta + Super Saiyan 4 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032880_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"GT Heroes\", \"Power of Wishes\" or \n\"Power Beyond Super Saiyan\" Category \nKi +3, HP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"All-Out Struggle\", \"Earth-Bred Fighters\" \nor \"Giant Ape Power\" Category",
        "links": [
            29,
            40,
            124,
            60,
            95,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1032921,
        "thumbId": 1032920,
        "name": "Goku (Ultra Instinct -Sign-) + \nSuper Saiyan God SS Evolved Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032920_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Realm of Gods\" Category \nKi +4 and HP, ATK & DEF +220%",
        "links": [
            89,
            97,
            80,
            47,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1009591,
        "thumbId": 1009590,
        "name": "Super Saiyan God SS Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009590_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type HP, ATK & DEF +100%",
        "links": [
            29,
            22,
            70,
            26,
            40,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1024991,
        "thumbId": 1024990,
        "name": "Pan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024990_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Friendship\" or \"Dragon Ball Seekers\" \nCategory Ki +3 and HP, ATK & DEF +170%, plus \nan additional HP, ATK & DEF +30% for characters \nwho also belong to the \"GT Heroes\" Category",
        "links": [
            47,
            4,
            23,
            34,
            64,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1032961,
        "thumbId": 1032960,
        "name": "Ledgic",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032960_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"GT Bosses\" or \n\"Mission Execution\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            16,
            39,
            42,
            53,
            60,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1032741,
        "thumbId": 1032740,
        "name": "Tamagami Number Three",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032740_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Storied Figures\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            42,
            52,
            17,
            60,
            73,
            39,
            118
        ],
        "categories": []
    },
    {
        "id": 1032811,
        "thumbId": 1032810,
        "name": "Tamagami Number One",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032810_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"DAIMA\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            42,
            52,
            17,
            60,
            73,
            39,
            118
        ],
        "categories": []
    },
    {
        "id": 1032731,
        "thumbId": 1032730,
        "name": "Tamagami Number Two",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032730_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Mission Execution\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            42,
            52,
            17,
            60,
            73,
            39,
            118
        ],
        "categories": []
    },
    {
        "id": 1026161,
        "thumbId": 1026160,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026160_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Turtle School\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            22,
            23,
            30,
            42,
            45,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1026131,
        "thumbId": 1026130,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026130_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Master and Disciple\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            4,
            22,
            23,
            45,
            56,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1011721,
        "thumbId": 1011720,
        "name": "Super Saiyan Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011720_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            40,
            39,
            29,
            60,
            97,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1032851,
        "thumbId": 1032850,
        "name": "Majin Kuu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032850_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Majin Power\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            83,
            37,
            39,
            14,
            42,
            73,
            118
        ],
        "categories": []
    },
    {
        "id": 1032551,
        "thumbId": 1032550,
        "name": "Super Saiyan 4 Goku (DAIMA)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032550_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"DAIMA\", \"Battle of Fate\" or \n\"Goku's Family\" Category Ki +3, \nHP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Dragon Ball Seekers\", \"Full Power\" or \n\"Kamehameha\" Category",
        "links": [
            29,
            97,
            124,
            60,
            47,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1032581,
        "thumbId": 1032580,
        "name": "Super Saiyan 3 Vegeta (DAIMA)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032580_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"DAIMA\" Category \nKi +4 and HP, ATK & DEF +220%; \nor \"Vegeta's Family\" Category \nKi +3 and HP, ATK & DEF +220%",
        "links": [
            29,
            40,
            26,
            60,
            116,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1032791,
        "thumbId": 1032790,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032790_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            23,
            22,
            34,
            47,
            97,
            30,
            118
        ],
        "categories": []
    },
    {
        "id": 1032691,
        "thumbId": 1032690,
        "name": "Majin Duu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032690_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"DAIMA\" or \"Majin Power\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            60,
            83,
            73,
            4,
            14,
            42,
            109
        ],
        "categories": []
    },
    {
        "id": 1025871,
        "thumbId": 1025870,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025870_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Battle of Wits\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            9,
            29,
            22,
            47,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1025561,
        "thumbId": 1025560,
        "name": "Ultimate Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025560_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Heroes\" or \"Hybrid Saiyans\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Bond of Parent and Child\" or \n\"Movie Heroes\" Category",
        "links": [
            23,
            22,
            42,
            60,
            109,
            47,
            125
        ],
        "categories": []
    },
    {
        "id": 1025591,
        "thumbId": 1025590,
        "name": "Piccolo (Power Awakening)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025590_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Heroes\" or \"Battle of Wits\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Bond of Master and Disciple\" or \n\"Movie Heroes\" Category",
        "links": [
            8,
            37,
            48,
            103,
            109,
            123,
            125
        ],
        "categories": []
    },
    {
        "id": 1025511,
        "thumbId": 1025510,
        "name": "Gamma 1",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025510_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\" or \"Artificial Life Forms\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Accelerated Battle\" or \"Worthy Rivals\" Category",
        "links": [
            35,
            39,
            55,
            60,
            93,
            94,
            109
        ],
        "categories": []
    },
    {
        "id": 1025531,
        "thumbId": 1025530,
        "name": "Gamma 2",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025530_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\", \"Androids\" or \"Special Pose\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Accelerated Battle\" or \"Worthy Rivals\" Category",
        "links": [
            4,
            35,
            55,
            60,
            93,
            94,
            109
        ],
        "categories": []
    },
    {
        "id": 1032361,
        "thumbId": 1032360,
        "name": "Ultimate Gohan + Gamma 1",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032360_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\", \"Hybrid Saiyans\" or \n\"Mission Execution\" Category Ki +3, \nHP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Super Heroes\", \"Bond of Parent and Child\" \nor \"Androids\" Category",
        "links": [
            23,
            22,
            34,
            42,
            60,
            39,
            109
        ],
        "categories": []
    },
    {
        "id": 1032331,
        "thumbId": 1032330,
        "name": "Gamma 2 + Piccolo (Power Awakening)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032330_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Heroes\", \"Special Pose\" or \n\"Battle of Wits\" Category Ki +3, \nHP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Movie Heroes\", \"Accelerated Battle\" or \n\"Bond of Master and Disciple\" Category",
        "links": [
            4,
            35,
            55,
            93,
            94,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1023421,
        "thumbId": 1023420,
        "name": "Super Saiyan Gohan (Future) & Trunks (Youth) (Future)/\nSuper Saiyan Gohan (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023420_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Connected Hope\" or \n\"Bond of Master and Disciple\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            22,
            34,
            42,
            97,
            66,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1032121,
        "thumbId": 1032120,
        "name": "Super Saiyan Gohan (Future)/\nSuper Saiyan Trunks (Youth) (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032120_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Master and Disciple\" Category \nKi +4 and HP, ATK & DEF +220%",
        "links": [
            9,
            23,
            29,
            30,
            66,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1025631,
        "thumbId": 1025630,
        "name": "Jackie Chun",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025630_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"World Tournament\" Category \nKi +4 and HP, ATK & DEF +130%",
        "links": [
            8,
            27,
            47,
            90,
            102,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1032451,
        "thumbId": 1032450,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032450_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super INT Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            19,
            34,
            39,
            40,
            45,
            66,
            118
        ],
        "categories": []
    },
    {
        "id": 1027191,
        "thumbId": 1027190,
        "name": "Piccolo Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027190_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            50,
            52,
            6,
            84,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1023111,
        "thumbId": 1023110,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023110_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Entrusted Will\" or \n\"Androids/Cell Saga\" Category \nKi +3, HP +130% and ATK & DEF +170%",
        "links": [
            19,
            39,
            40,
            34,
            22,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1023361,
        "thumbId": 1023360,
        "name": "Androids #17 (Future) & #18 (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023360_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Worldwide Chaos\" or \n\"Future Saga\" Category \nKi +3 and HP, ATK & DEF +170%",
        "links": [
            35,
            67,
            31,
            119,
            18,
            66,
            109
        ],
        "categories": []
    },
    {
        "id": 1023381,
        "thumbId": 1023380,
        "name": "Dr. Gero & Android #19",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023380_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Androids\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            35,
            81,
            55,
            119,
            18,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1032461,
        "thumbId": 1032460,
        "name": "Super Garlic Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032460_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Movie Bosses\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            6,
            14,
            28,
            50,
            86,
            120,
            125
        ],
        "categories": []
    },
    {
        "id": 1032091,
        "thumbId": 1032090,
        "name": "Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032090_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Worthy Rivals\" or \n\"Defenders of Justice\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            35,
            31,
            110,
            69,
            37,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1032071,
        "thumbId": 1032070,
        "name": "Android #16",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032070_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Androids\" or \"Uncontrollable Power\" Category \nKi +3, HP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Androids/Cell Saga\", \"Mission Execution\" \nor \"Artificial Life Forms\" Category",
        "links": [
            35,
            38,
            17,
            52,
            110,
            37,
            109
        ],
        "categories": []
    },
    {
        "id": 1032311,
        "thumbId": 1032310,
        "name": "Third Eye Gomah",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032310_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Demonic Power\" or \n\"Terrifying Conquerors\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            14,
            120,
            86,
            50,
            76,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1032621,
        "thumbId": 1032620,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032620_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All allies' Ki +2, HP +150% and ATK & DEF +100% \nwhen team includes Super & Extreme Classes, \nplus an additional Ki +1 and HP, ATK & DEF +70% \nwhen team includes all five Types",
        "links": [
            22,
            26,
            40,
            58,
            63,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1022221,
        "thumbId": 1022220,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022220_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Heavenly Events\" Category \nKi +3 and HP, ATK & DEF +170%; \nor \"Bond of Master and Disciple\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            4,
            6,
            22,
            23,
            34,
            56,
            109
        ],
        "categories": []
    },
    {
        "id": 1032641,
        "thumbId": 1032640,
        "name": "Freezer (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032640_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All allies' Ki +2, HP +150% and ATK & DEF +100% \nwhen team includes Super & Extreme Classes, \nplus an additional Ki +1 and HP, ATK & DEF +70% \nwhen team includes all five Types",
        "links": [
            26,
            50,
            59,
            60,
            85,
            119,
            118
        ],
        "categories": []
    },
    {
        "id": 1032651,
        "thumbId": 1032650,
        "name": "Super Saiyan 2 Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032650_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All allies' Ki +2, HP +150% and ATK & DEF +100% \nwhen team includes Super & Extreme Classes, \nplus an additional Ki +1 and HP, ATK & DEF +70% \nwhen team includes all five Types",
        "links": [
            9,
            22,
            29,
            47,
            60,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1032661,
        "thumbId": 1032660,
        "name": "Majin Boo (Good)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032660_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All allies' Ki +2, HP +150% and ATK & DEF +100% \nwhen team includes Super & Extreme Classes, \nplus an additional Ki +1 and HP, ATK & DEF +70% \nwhen team includes all five Types",
        "links": [
            4,
            65,
            76,
            83,
            96,
            1004,
            118
        ],
        "categories": []
    },
    {
        "id": 1032631,
        "thumbId": 1032630,
        "name": "Piccolo Jr. (Giant Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032630_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All allies' Ki +2, HP +150% and ATK & DEF +100% \nwhen team includes Super & Extreme Classes, \nplus an additional Ki +1 and HP, ATK & DEF +70% \nwhen team includes all five Types",
        "links": [
            6,
            50,
            52,
            86,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1032611,
        "thumbId": 1032610,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032610_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            22,
            23,
            34,
            47,
            60,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1030671,
        "thumbId": 1030670,
        "name": "Goku (Mini) (DAIMA)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030670_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            22,
            23,
            30,
            34,
            60,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1030681,
        "thumbId": 1030680,
        "name": "Vegeta (Mini) (DAIMA)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030680_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            22,
            26,
            30,
            34,
            40,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1032431,
        "thumbId": 1032430,
        "name": "Glorio",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032430_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Demonic Power\" Category \nKi +2 and HP, ATK & DEF +50%; or \nSTR Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            8,
            37,
            39,
            53,
            60,
            76,
            118
        ],
        "categories": []
    },
    {
        "id": 1032391,
        "thumbId": 1032390,
        "name": "Masked Majin (Panzy)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032390_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Dragon Ball Seekers\" Category \nKi +2 and HP, ATK & DEF +50%; or \nINT Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            2,
            4,
            8,
            14,
            64,
            76,
            118
        ],
        "categories": []
    },
    {
        "id": 1032261,
        "thumbId": 1032260,
        "name": "Super Saiyan 4 Goku (Mini) (DAIMA)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032260_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Demonic Power\" or \"Pure Saiyans\" Category \nKi +3, HP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Dragon Ball Seekers\", \"Time Travelers\" or \n\"Bond of Parent and Child\" Category",
        "links": [
            29,
            97,
            124,
            60,
            22,
            47,
            109
        ],
        "categories": []
    },
    {
        "id": 1032281,
        "thumbId": 1032280,
        "name": "Piccolo (Mini) (DAIMA)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032280_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Dragon Ball Seekers\" or \n\"Demonic Power\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            8,
            37,
            39,
            48,
            26,
            30,
            109
        ],
        "categories": []
    },
    {
        "id": 1030211,
        "thumbId": 1030210,
        "name": "Goten (Kid) & Icarus Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030210_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Friendship\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            47,
            4,
            97,
            34,
            22,
            23,
            118
        ],
        "categories": []
    },
    {
        "id": 1032241,
        "thumbId": 1032240,
        "name": "Yamcha (Angel) & Princess Snake",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032240_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Joined Forces\" Category \nKi +2 and HP, ATK & DEF +50%; \nor AGL Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            36,
            42,
            37,
            60,
            2,
            129,
            118
        ],
        "categories": []
    },
    {
        "id": 1032221,
        "thumbId": 1032220,
        "name": "Chi-Chi",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032220_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Goku's Family\" Category \nKi +4 and HP, ATK & DEF +130%",
        "links": [
            64,
            42,
            90,
            102,
            2,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1022271,
        "thumbId": 1022270,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022270_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            23,
            36,
            42,
            60,
            34,
            90,
            118
        ],
        "categories": []
    },
    {
        "id": 1029871,
        "thumbId": 1029870,
        "name": "Hell Fighter #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029870_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            18,
            35,
            60,
            95,
            119,
            120,
            118
        ],
        "categories": []
    },
    {
        "id": 1010161,
        "thumbId": 1010160,
        "name": "Majin Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010160_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            29,
            22,
            63,
            40,
            89,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1032011,
        "thumbId": 1032010,
        "name": "SS Gohan Possessed (GT) & SS Goten Possessed (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032010_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Corroded Body and Mind\" or \n\"Joined Forces\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            86,
            95,
            115,
            29,
            47,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1032481,
        "thumbId": 1032480,
        "name": "SS Goten Possessed (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032480_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +3 and HP, ATK & DEF +50%; \nINT Type enemies' ATK & DEF -30%",
        "links": [
            86,
            32,
            95,
            115,
            29,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1032471,
        "thumbId": 1032470,
        "name": "SS Gohan Possessed (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032470_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +50%; \nAGL Type enemies' ATK & DEF -30%",
        "links": [
            86,
            32,
            95,
            115,
            29,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1032491,
        "thumbId": 1032490,
        "name": "SS Trunks Possessed (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032490_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +3 and HP, ATK & DEF +50%; \nTEQ Type enemies' ATK & DEF -30%",
        "links": [
            86,
            32,
            95,
            115,
            40,
            29,
            118
        ],
        "categories": []
    },
    {
        "id": 1022091,
        "thumbId": 1022090,
        "name": "Super #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022090_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"GT Bosses\" or \"Androids\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            35,
            120,
            112,
            119,
            95,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1031961,
        "thumbId": 1031960,
        "name": "Super Baby 1",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031960_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Corroded Body and Mind\" or \n\"Battle of Fate\" Category Ki +3, \nHP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Terrifying Conquerors\", \"Final Trump Card\" \nor \"GT Bosses\" Category",
        "links": [
            86,
            28,
            50,
            95,
            115,
            119,
            109
        ],
        "categories": []
    },
    {
        "id": 1032051,
        "thumbId": 1032050,
        "name": "Trunks Possessed (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032050_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Corroded Body and Mind\" or \n\"Terrifying Conquerors\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            86,
            32,
            95,
            73,
            40,
            115,
            109
        ],
        "categories": []
    },
    {
        "id": 1010441,
        "thumbId": 1010440,
        "name": "Legendary Super Saiyan Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010440_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            22,
            34,
            49,
            97,
            29,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1023571,
        "thumbId": 1023570,
        "name": "Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023570_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Movie Bosses\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            22,
            26,
            34,
            49,
            60,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1031921,
        "thumbId": 1031920,
        "name": "Broly (Wrathful)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031920_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Exploding Rage\" Category \nKi +4 and HP, ATK & DEF +220%",
        "links": [
            22,
            26,
            49,
            60,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1032031,
        "thumbId": 1032030,
        "name": "Vegeta (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032030_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Successors\" Category \nKi +3 and HP, ATK & DEF +50%; \nor AGL, INT & PHY Types \nKi +2 and HP, ATK & DEF +30%",
        "links": [
            22,
            26,
            34,
            40,
            86,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1024511,
        "thumbId": 1024510,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024510_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Resurrected Warriors\" or \n\"Planetary Destruction\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            26,
            59,
            71,
            68,
            85,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1031721,
        "thumbId": 1031720,
        "name": "Golden Freezer + Gogeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031720_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Movie Bosses\" or \"Movie Heroes\" Category \nKi +3, HP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Transformation Boost\", \"Gifted Warriors\" \nor \"Inhuman Deeds\" Category",
        "links": [
            26,
            59,
            60,
            85,
            86,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1031751,
        "thumbId": 1031750,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031750_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\" or \n\"Gifted Warriors\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            22,
            40,
            26,
            63,
            60,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1028201,
        "thumbId": 1028200,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028200_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super TEQ Type \nKi +3 and HP, ATK & DEF +90%",
        "links": [
            36,
            42,
            47,
            60,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1028081,
        "thumbId": 1028080,
        "name": "Caulifla",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028080_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super INT Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            34,
            22,
            64,
            26,
            126,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1028091,
        "thumbId": 1028090,
        "name": "Kale",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028090_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super TEQ Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            34,
            22,
            64,
            37,
            126,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1024171,
        "thumbId": 1024170,
        "name": "Annin (Giant Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024170_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            4,
            123,
            42,
            64,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1031691,
        "thumbId": 1031690,
        "name": "Videl",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031690_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" Category or Super AGL Type \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            2,
            10,
            39,
            42,
            44,
            64,
            118
        ],
        "categories": []
    },
    {
        "id": 1024801,
        "thumbId": 1024800,
        "name": "Fasha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024800_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Low-Class Warrior\" or \n\"Peppy Gals\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            62,
            22,
            63,
            34,
            64,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1031641,
        "thumbId": 1031640,
        "name": "Ranfan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031640_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" Category or Super TEQ Type \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            64,
            8,
            32,
            102,
            90,
            42,
            118
        ],
        "categories": []
    },
    {
        "id": 1024751,
        "thumbId": 1024750,
        "name": "Cheelai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024750_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Bond of Friendship\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            12,
            39,
            64,
            72,
            37,
            8,
            118
        ],
        "categories": []
    },
    {
        "id": 1021141,
        "thumbId": 1021140,
        "name": "Super Saiyan 2 Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021140_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\" Category \nKi +4 and HP, ATK & DEF +130%; or \nSuper TEQ Type Ki +4 and HP, ATK & DEF +100%",
        "links": [
            29,
            22,
            56,
            23,
            97,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1011641,
        "thumbId": 1011640,
        "name": "Trunks (Kid) & Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011640_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "Super AGL Type Ki +4 \nand HP, ATK & DEF +100%; \nExtreme AGL Type Ki +2 \nand HP, ATK & DEF +70%",
        "links": [
            45,
            4,
            26,
            82,
            60,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1031591,
        "thumbId": 1031590,
        "name": "Super Saiyan Gohan (Teen) + \nSuper Saiyan Trunks (Kid) & Super Saiyan Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031590_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Hybrid Saiyans\", \"Youth\" or \n\"Defenders of Justice\" Category \nKi +3, HP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Siblings' Bond\", \"Bond of Parent and Child\" \nor \"Bond of Friendship\" Category",
        "links": [
            29,
            47,
            22,
            23,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1031621,
        "thumbId": 1031620,
        "name": "Spopovich",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031620_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Corroded Body and Mind\" or \n\"Majin Buu Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            18,
            11,
            7,
            49,
            52,
            42,
            109
        ],
        "categories": []
    },
    {
        "id": 1024551,
        "thumbId": 1024550,
        "name": "Super Saiyan God SS Vegeta & \nSuper Saiyan Trunks (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024550_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Parent and Child\" or \"Future Saga\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to \nthe \"Battle of Fate\" Category",
        "links": [
            22,
            29,
            40,
            66,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1020991,
        "thumbId": 1020990,
        "name": "Super Saiyan 4 Gogeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020990_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Giant Ape Power\" Category \nKi +3 and HP, ATK & DEF +170%; or \n\"Shadow Dragon Saga\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            29,
            47,
            60,
            89,
            95,
            112,
            109
        ],
        "categories": []
    },
    {
        "id": 1021881,
        "thumbId": 1021880,
        "name": "Legion of Shadow Dragons",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021880_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"GT Bosses\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            18,
            119,
            120,
            95,
            127,
            50,
            125
        ],
        "categories": []
    },
    {
        "id": 1010001,
        "thumbId": 1010000,
        "name": "Pan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010000_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & PHY Type Ki +2, HP, ATK & \nDEF +30%",
        "links": [
            23,
            34,
            64,
            95,
            4,
            47,
            109
        ],
        "categories": []
    },
    {
        "id": 1010021,
        "thumbId": 1010020,
        "name": "Super Saiyan Trunks (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010020_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & STR Type Ki +2, HP, ATK & \nDEF +30%",
        "links": [
            29,
            40,
            9,
            39,
            95,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1012771,
        "thumbId": 1012770,
        "name": "Super Saiyan 3 Goku (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012770_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP, ATK & DEF +60%",
        "links": [
            9,
            29,
            47,
            116,
            89,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1008711,
        "thumbId": 1008710,
        "name": "Omega Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008710_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +3, HP, ATK & DEF +70%",
        "links": [
            18,
            120,
            50,
            60,
            95,
            127,
            109
        ],
        "categories": []
    },
    {
        "id": 1023591,
        "thumbId": 1023590,
        "name": "Li Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023590_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"GT Bosses\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            18,
            50,
            95,
            120,
            127,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1009431,
        "thumbId": 1009430,
        "name": "Super Saiyan 4 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009430_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super STR Type \nKi +3 and HP, ATK & DEF +120%; \nExtreme STR Type \nKi +1 and HP, ATK & DEF +50%",
        "links": [
            29,
            124,
            97,
            60,
            47,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1009831,
        "thumbId": 1009830,
        "name": "Super Saiyan 4 Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009830_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super AGL Type \nKi +3 and HP, ATK & DEF +120%; \nExtreme AGL Type \nKi +1 and HP, ATK & DEF +50%",
        "links": [
            29,
            124,
            97,
            60,
            63,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1008291,
        "thumbId": 1008290,
        "name": "Super Saiyan 3 Goku (GT) (Golden Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008290_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK +33% per STR Ki Sphere \nobtained",
        "links": [
            29,
            47,
            116,
            89,
            95,
            124,
            109
        ],
        "categories": []
    },
    {
        "id": 1006521,
        "thumbId": 1006520,
        "name": "Super Baby 2 (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006520_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK +33% per INT Ki Sphere \nobtained",
        "links": [
            86,
            28,
            124,
            95,
            115,
            50,
            109
        ],
        "categories": []
    },
    {
        "id": 1031501,
        "thumbId": 1031500,
        "name": "Omega Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031500_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Inhuman Deeds\", \"Power Absorption\" or \n\"GT Bosses\" Category Ki +3, HP +200% \nand ATK & DEF +170%, plus an additional \nHP, ATK & DEF +50% for characters who \nalso belong to the \"Shadow Dragon Saga\", \n\"Worldwide Chaos\" or \"Battle of Fate\" Category",
        "links": [
            18,
            50,
            95,
            120,
            127,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1031821,
        "thumbId": 1031820,
        "name": "Nuova Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031820_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Shadow Dragon Saga\" Category \nKi +3 and HP, ATK & DEF +80%",
        "links": [
            60,
            17,
            39,
            53,
            95,
            127,
            125
        ],
        "categories": []
    },
    {
        "id": 1031471,
        "thumbId": 1031470,
        "name": "Super Saiyan 4 Gogeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031470_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"GT Heroes\" Category \nKi +4 and HP, ATK & DEF +220%",
        "links": [
            29,
            47,
            124,
            60,
            95,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1031541,
        "thumbId": 1031540,
        "name": "Pan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031540_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"GT Heroes\" or \"Hybrid Saiyans\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            22,
            23,
            34,
            64,
            95,
            4,
            109
        ],
        "categories": []
    },
    {
        "id": 1024661,
        "thumbId": 1024660,
        "name": "Fusion Zamasu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024660_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Worldwide Chaos\" or \"Potara\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            50,
            66,
            80,
            112,
            119,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1009331,
        "thumbId": 1009330,
        "name": "Super Saiyan God SS Vegetto",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009330_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class Ki +3 and HP, ATK & DEF +50%",
        "links": [
            29,
            47,
            97,
            103,
            112,
            89,
            109
        ],
        "categories": []
    },
    {
        "id": 1009351,
        "thumbId": 1009350,
        "name": "Goku Black (Super Saiyan Rosé)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009350_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme Class Ki +3 and HP, ATK & DEF +50%",
        "links": [
            29,
            120,
            119,
            97,
            66,
            50,
            109
        ],
        "categories": []
    },
    {
        "id": 1019071,
        "thumbId": 1019070,
        "name": "Zamasu (Goku)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019070_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Time Travelers\" Category \nKi +3 and HP, ATK & DEF +77%",
        "links": [
            80,
            39,
            119,
            66,
            120,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1031391,
        "thumbId": 1031390,
        "name": "Super Saiyan God SS Goku + \nSuper Saiyan God SS Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031390_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Future Saga\" or \"Fused Fighters\" Category \nKi +3, HP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to \nthe \"Bond of Parent and Child\" or \n\"Final Trump Card\" Category",
        "links": [
            29,
            22,
            70,
            47,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1031431,
        "thumbId": 1031430,
        "name": "Goku Black (Super Saiyan Rosé) + Zamasu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031430_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Super Bosses\" Category \nKi +4 and HP, ATK & DEF +220%",
        "links": [
            66,
            120,
            119,
            47,
            50,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1031521,
        "thumbId": 1031520,
        "name": "Champa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031520_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Realm of Gods\" or \n\"Universe 6\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            80,
            79,
            4,
            14,
            58,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1031771,
        "thumbId": 1031770,
        "name": "Goku Black (Super Saiyan Rosé) (Clone) [AGL]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031770_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            66,
            120,
            119,
            29,
            50,
            33,
            118
        ],
        "categories": []
    },
    {
        "id": 1031761,
        "thumbId": 1031760,
        "name": "Goku Black (Super Saiyan Rosé) (Clone) [AGL]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031760_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            66,
            120,
            119,
            29,
            50,
            33,
            118
        ],
        "categories": []
    },
    {
        "id": 1032161,
        "thumbId": 1032160,
        "name": "Goku Black (Super Saiyan Rosé) (Clone) [TEQ]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032160_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            66,
            120,
            119,
            29,
            50,
            33,
            118
        ],
        "categories": []
    },
    {
        "id": 1031781,
        "thumbId": 1031780,
        "name": "Goku Black (Super Saiyan Rosé) (Clone) [TEQ]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031780_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            66,
            120,
            119,
            29,
            50,
            33,
            118
        ],
        "categories": []
    },
    {
        "id": 1032171,
        "thumbId": 1032170,
        "name": "Goku Black (Super Saiyan Rosé) (Clone) [INT]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032170_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            66,
            120,
            119,
            29,
            50,
            33,
            118
        ],
        "categories": []
    },
    {
        "id": 1031791,
        "thumbId": 1031790,
        "name": "Goku Black (Super Saiyan Rosé) (Clone) [INT]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031790_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            66,
            120,
            119,
            29,
            50,
            33,
            118
        ],
        "categories": []
    },
    {
        "id": 1032181,
        "thumbId": 1032180,
        "name": "Goku Black (Super Saiyan Rosé) (Clone) [STR]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032180_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            66,
            120,
            119,
            29,
            50,
            33,
            118
        ],
        "categories": []
    },
    {
        "id": 1031801,
        "thumbId": 1031800,
        "name": "Goku Black (Super Saiyan Rosé) (Clone) [STR]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031800_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            66,
            120,
            119,
            29,
            50,
            33,
            118
        ],
        "categories": []
    },
    {
        "id": 1032191,
        "thumbId": 1032190,
        "name": "Goku Black (Super Saiyan Rosé) (Clone) [PHY]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1032190_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            66,
            120,
            119,
            29,
            50,
            33,
            118
        ],
        "categories": []
    },
    {
        "id": 1031811,
        "thumbId": 1031810,
        "name": "Goku Black (Super Saiyan Rosé) (Clone) [PHY]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031810_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            66,
            120,
            119,
            29,
            50,
            33,
            118
        ],
        "categories": []
    },
    {
        "id": 1024731,
        "thumbId": 1024730,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024730_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Saiyan Saga\" Category \nKi +4 and HP, ATK & DEF +130%",
        "links": [
            5,
            24,
            37,
            60,
            45,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1031361,
        "thumbId": 1031360,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031360_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Earthlings\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            5,
            13,
            24,
            46,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1025801,
        "thumbId": 1025800,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025800_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Earth-Bred Fighters\" or \"Saiyan Saga\" Category \nKi +3 and HP, ATK & DEF +170%, plus an additional \nHP, ATK & DEF +30% for characters who also belong \nto the \"Earthlings\" or \"Turtle School\" Category",
        "links": [
            36,
            37,
            42,
            45,
            60,
            47,
            109
        ],
        "categories": []
    },
    {
        "id": 1031281,
        "thumbId": 1031280,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031280_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Final Trump Card\" or \n\"Earthlings\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            5,
            42,
            46,
            90,
            102,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1023771,
        "thumbId": 1023770,
        "name": "Capitaine Ginyu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023770_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Terrifying Conquerors\" or \"Planet Namek Saga\" \nCategory Ki +3 and HP, ATK & DEF +170%, plus \nan additional HP, ATK & DEF +30% for characters who \nalso belong to the \"Space-Traveling Warriors\" Category",
        "links": [
            51,
            17,
            25,
            41,
            73,
            94,
            109
        ],
        "categories": []
    },
    {
        "id": 1023731,
        "thumbId": 1023730,
        "name": "Jiece & Barta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023730_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Space-Traveling Warriors\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            51,
            43,
            41,
            54,
            94,
            73,
            109
        ],
        "categories": []
    },
    {
        "id": 1023751,
        "thumbId": 1023750,
        "name": "Reacum & Ghourd",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023750_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Planet Namek Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            51,
            43,
            41,
            18,
            94,
            73,
            109
        ],
        "categories": []
    },
    {
        "id": 1031301,
        "thumbId": 1031300,
        "name": "Tao Pai Pai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031300_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Mission Execution\" or \n\"Earth-Bred Fighters\" Category \nKi +3, HP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Dragon Ball Seekers\" or \"Earthlings\" Category",
        "links": [
            5,
            16,
            32,
            90,
            46,
            18,
            109
        ],
        "categories": []
    },
    {
        "id": 1031341,
        "thumbId": 1031340,
        "name": "General Blue",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031340_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Mission Execution\" or \n\"DB Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            55,
            13,
            18,
            90,
            102,
            73,
            109
        ],
        "categories": []
    },
    {
        "id": 1022831,
        "thumbId": 1022830,
        "name": "Caulifla & Kale",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022830_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Friendship\" or \"Rapid Growth\" Category \nKi +3, HP +130% and ATK & DEF +170%",
        "links": [
            34,
            22,
            64,
            126,
            130,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1031221,
        "thumbId": 1031220,
        "name": "Super Saiyan 2 Caulifla + Super Saiyan 2 Kale",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031220_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe 6\" Category \nKi +4 and HP, ATK & DEF +220%",
        "links": [
            29,
            64,
            126,
            97,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1022341,
        "thumbId": 1022340,
        "name": "Tao Pai Pai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022340_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"DB Saga\" Category \nKi +4 and HP, ATK & DEF +130%",
        "links": [
            5,
            16,
            32,
            18,
            46,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1021111,
        "thumbId": 1021110,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021110_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            5,
            24,
            42,
            90,
            102,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1030991,
        "thumbId": 1030990,
        "name": "Mecha Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030990_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme TEQ Type \nKi +3 and HP, ATK & DEF +90%",
        "links": [
            26,
            59,
            65,
            38,
            85,
            120,
            118
        ],
        "categories": []
    },
    {
        "id": 1027691,
        "thumbId": 1027690,
        "name": "Boujack",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027690_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme PHY Type \nKi +3 and HP, ATK & DEF +90%",
        "links": [
            87,
            88,
            50,
            86,
            65,
            1004,
            118
        ],
        "categories": []
    },
    {
        "id": 1026841,
        "thumbId": 1026840,
        "name": "Super Saiyan Gohan (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026840_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super INT Type \nKi +3 and HP, ATK & DEF +90%",
        "links": [
            23,
            9,
            29,
            97,
            30,
            66,
            118
        ],
        "categories": []
    },
    {
        "id": 1023091,
        "thumbId": 1023090,
        "name": "Hit & Super Saiyan God Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023090_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Accelerated Battle\" or \n\"Universe Survival Saga\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            130,
            30,
            39,
            42,
            60,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1008631,
        "thumbId": 1008630,
        "name": "Super Saiyan God SS Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008630_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type HP, ATK & DEF +100%",
        "links": [
            29,
            70,
            47,
            97,
            89,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1031021,
        "thumbId": 1031020,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031020_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Battle of Wits\" or \n\"Gifted Warriors\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            8,
            26,
            30,
            39,
            48,
            56,
            109
        ],
        "categories": []
    },
    {
        "id": 1031121,
        "thumbId": 1031120,
        "name": "Hit",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031120_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Universe 6\", \"Rapid Growth\" or \n\"Accelerated Battle\" Category Ki +3, \nHP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to \nthe \"Tournament Participants\" or \n\"Super Bosses\" Category",
        "links": [
            16,
            30,
            39,
            42,
            60,
            126,
            109
        ],
        "categories": []
    },
    {
        "id": 1031041,
        "thumbId": 1031040,
        "name": "Magetta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031040_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe 6\" or \n\"Tournament Participants\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            14,
            42,
            49,
            52,
            126,
            109
        ],
        "categories": []
    },
    {
        "id": 1031181,
        "thumbId": 1031180,
        "name": "Super Saiyan God SS Goku (Kaioken)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031180_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Representatives of Universe 7\" or \n\"Full Power\" Category Ki +3, \nHP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to \nthe \"Tournament Participants\" or \n\"Super Heroes\" Category",
        "links": [
            29,
            70,
            47,
            97,
            89,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1030971,
        "thumbId": 1030970,
        "name": "Paikuhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030970_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Otherworld Warriors\" or \"Saviors\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            16,
            30,
            60,
            39,
            129,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1021331,
        "thumbId": 1021330,
        "name": "Paikuhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021330_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Connected Hope\" Category \nKi +3 and HP, ATK & DEF +170%; or \nSuper Class Ki +3 and HP, ATK & DEF +130%",
        "links": [
            16,
            17,
            30,
            60,
            39,
            129,
            109
        ],
        "categories": []
    },
    {
        "id": 1011041,
        "thumbId": 1011040,
        "name": "Paikuhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011040_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            17,
            30,
            39,
            60,
            97,
            129,
            109
        ],
        "categories": []
    },
    {
        "id": 1021291,
        "thumbId": 1021290,
        "name": "Janemba",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021290_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Corroded Body and Mind\" Category \nKi +3 and HP, ATK & DEF +170%; or \nExtreme Class Ki +3 and HP, ATK & DEF +130%",
        "links": [
            4,
            14,
            28,
            76,
            119,
            50,
            109
        ],
        "categories": []
    },
    {
        "id": 1010661,
        "thumbId": 1010660,
        "name": "Super Saiyan Goku (Angel) (Super Kaioken)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010660_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            97,
            60,
            29,
            47,
            89,
            129,
            109
        ],
        "categories": []
    },
    {
        "id": 1024381,
        "thumbId": 1024380,
        "name": "Cell (1st Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024380_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Androids/Cell Saga\" or \"Power Absorption\" \nCategory Ki +3 and HP, ATK & DEF +170%, plus \nan additional HP, ATK & DEF +30% for characters \nwho also belong to the \"Androids\" Category",
        "links": [
            12,
            19,
            50,
            60,
            119,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1024291,
        "thumbId": 1024290,
        "name": "Super Saiyan Goku/Super Saiyan Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024290_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyans\" or \"Goku's Family\" Category \nKi +3 and HP, ATK & DEF +170%, plus an \nadditional HP, ATK & DEF +30% for characters \nwho also belong to the \"Androids/Cell Saga\" Category",
        "links": [
            9,
            22,
            23,
            29,
            47,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1024111,
        "thumbId": 1024110,
        "name": "Para Para Brothers",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024110_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Special Pose\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            14,
            37,
            12,
            32,
            13,
            95,
            118
        ],
        "categories": []
    },
    {
        "id": 1030921,
        "thumbId": 1030920,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030920_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"World Tournament\" or \n\"Peppy Gals\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            35,
            64,
            8,
            31,
            60,
            110,
            109
        ],
        "categories": []
    },
    {
        "id": 1030941,
        "thumbId": 1030940,
        "name": "Cell (Perfect Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030940_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Tournament Participants\" or \n\"Worldwide Chaos\" Category \nKi +3, HP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Androids\" or \"Accelerated Battle\" Category",
        "links": [
            17,
            19,
            47,
            50,
            60,
            108,
            109
        ],
        "categories": []
    },
    {
        "id": 1030301,
        "thumbId": 1030300,
        "name": "Krilin (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030300_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super TEQ Type \nKi +2 and HP, ATK & DEF +70%",
        "links": [
            8,
            36,
            42,
            47,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1025641,
        "thumbId": 1025640,
        "name": "Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025640_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super TEQ Type \nKi +3 and HP, ATK & DEF +90%",
        "links": [
            22,
            34,
            4,
            60,
            112,
            89,
            118
        ],
        "categories": []
    },
    {
        "id": 1024631,
        "thumbId": 1024630,
        "name": "Goku Black",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024630_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme STR Type \nKi +3 and HP, ATK & DEF +90%",
        "links": [
            39,
            120,
            119,
            97,
            66,
            50,
            118
        ],
        "categories": []
    },
    {
        "id": 1020041,
        "thumbId": 1020040,
        "name": "Jackie Chun (Max Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020040_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            16,
            27,
            102,
            90,
            8,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1030300,
        "thumbId": 1030300,
        "name": "Krilin (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030300_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Super TEQ Type \nKi +2 and HP, ATK & DEF +70%",
        "links": [
            8,
            36,
            42,
            47,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1029831,
        "thumbId": 1029830,
        "name": "Super Saiyan Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029830_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Time Travelers\" Category \nKi +3 and HP, ATK & DEF +80%",
        "links": [
            29,
            34,
            62,
            97,
            63,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1025071,
        "thumbId": 1025070,
        "name": "Goku (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025070_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"DB Saga\", \"Youth\" or \"Exploding Rage\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Dragon Ball Seekers\" or \"Bond of Friendship\" Category",
        "links": [
            4,
            23,
            42,
            47,
            90,
            102,
            109
        ],
        "categories": []
    },
    {
        "id": 1031081,
        "thumbId": 1031080,
        "name": "Goku (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031080_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"DB Saga\" or \"Earth-Bred Fighters\" Category \nKi +3, HP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Youth\" or \"Dragon Ball Seekers\" Category",
        "links": [
            4,
            23,
            34,
            42,
            90,
            102,
            109
        ],
        "categories": []
    },
    {
        "id": 1031101,
        "thumbId": 1031100,
        "name": "Chi-Chi (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031100_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Youth\" or \"DB Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            64,
            4,
            14,
            90,
            102,
            42,
            109
        ],
        "categories": []
    },
    {
        "id": 1021921,
        "thumbId": 1021920,
        "name": "Super Saiyan Goku (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021920_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"GT Heroes\" Category \nKi +3 and HP, ATK & DEF +170%; \nor \"Goku's Family\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            9,
            29,
            34,
            47,
            95,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1005731,
        "thumbId": 1005730,
        "name": "Super Saiyan 3 Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005730_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK +80%",
        "links": [
            9,
            22,
            29,
            89,
            116,
            109
        ],
        "categories": []
    },
    {
        "id": 1021941,
        "thumbId": 1021940,
        "name": "Super Saiyan Vegeta (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021940_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"GT Heroes\" Category \nKi +3 and HP, ATK & DEF +170%; \nor \"Vegeta's Family\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            9,
            26,
            29,
            40,
            95,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1031061,
        "thumbId": 1031060,
        "name": "Super Saiyan 3 Vegeta (Mini) (DAIMA)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1031060_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Transformation Boost\" or \n\"Gifted Warriors\" Category Ki +3, \nHP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Power Beyond Super Saiyan\" Category",
        "links": [
            29,
            22,
            9,
            40,
            26,
            116,
            109
        ],
        "categories": []
    },
    {
        "id": 1022381,
        "thumbId": 1022380,
        "name": "Super Saiyan God Goku & \nSuper Saiyan God Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022380_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Power Beyond Super Saiyan\" or \n\"Movie Heroes\" Category Ki +3 and \nHP, ATK & DEF +170%, plus an additional \nHP, ATK & DEF +30% for characters who \nalso belong to the \"Kamehameha\" Category",
        "links": [
            47,
            29,
            70,
            80,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1022421,
        "thumbId": 1022420,
        "name": "Super Saiyan 4 Goku & Super Saiyan 4 Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022420_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Fused Fighters\" or \"GT Heroes\" Category \nKi +3 and HP, ATK & DEF +170%, plus an \nadditional HP, ATK & DEF +30% for characters \nwho also belong to the \"Kamehameha\" Category",
        "links": [
            29,
            47,
            124,
            60,
            95,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1023621,
        "thumbId": 1023620,
        "name": "Goku (Kaioken)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023620_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"All-Out Struggle\" or \n\"Final Trump Card\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            47,
            34,
            89,
            45,
            60,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1030791,
        "thumbId": 1030790,
        "name": "Démon Piccolo (Elder)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030790_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Demonic Power\" Category \nKi +3 and HP, ATK & DEF +80%",
        "links": [
            6,
            65,
            90,
            102,
            119,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1023521,
        "thumbId": 1023520,
        "name": "Vegeta (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023520_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Inhuman Deeds\" or \n\"Giant Ape Power\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            22,
            40,
            58,
            123,
            124,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1030611,
        "thumbId": 1030610,
        "name": "Trunks (Kid) + Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030610_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Hybrid Saiyans\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            26,
            4,
            97,
            22,
            82,
            40,
            118
        ],
        "categories": []
    },
    {
        "id": 1010071,
        "thumbId": 1010070,
        "name": "Super Saiyan 2 Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010070_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            29,
            56,
            47,
            97,
            60,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1004651,
        "thumbId": 1004650,
        "name": "Perfect Cell",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004650_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +3 and ATK +3000",
        "links": [
            65,
            19,
            50,
            47,
            33,
            108,
            109
        ],
        "categories": []
    },
    {
        "id": 1030391,
        "thumbId": 1030390,
        "name": "Super Saiyan 2 Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030390_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Full Power\" Category \nKi +4 and HP, ATK & DEF +220%",
        "links": [
            29,
            22,
            47,
            97,
            60,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1030531,
        "thumbId": 1030530,
        "name": "Freezer (Final Form) (Angel) + Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030530_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Battle of Fate\" Category \nKi +4 and HP, ATK & DEF +220%",
        "links": [
            26,
            59,
            60,
            89,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1030481,
        "thumbId": 1030480,
        "name": "Super Saiyan Vegeta (Angel) + Super Saiyan Goku (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030480_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Successors\", \"Fused Fighters\" or \n\"Pure Saiyans\" Category Ki +3, \nHP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Gifted Warriors\" or \"Fusion\" Category",
        "links": [
            26,
            29,
            30,
            22,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1030831,
        "thumbId": 1030830,
        "name": "Beerus",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030830_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Successors\" or \n\"Legendary Existence\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            4,
            26,
            49,
            60,
            79,
            80,
            109
        ],
        "categories": []
    },
    {
        "id": 1022631,
        "thumbId": 1022630,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022630_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Legendary Existence\" or \n\"Super Saiyans\" Category Ki +3, \nHP & ATK +170% and DEF +150%",
        "links": [
            29,
            22,
            9,
            47,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1022751,
        "thumbId": 1022750,
        "name": "Freezer (Full Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022750_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Sworn Enemies\" or \n\"Planet Namek Saga\" Category Ki +3, \nHP & ATK +170% and DEF +150%",
        "links": [
            26,
            59,
            119,
            85,
            50,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1005051,
        "thumbId": 1005050,
        "name": "Super Janemba",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005050_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK +80%",
        "links": [
            50,
            60,
            28,
            18,
            119,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1005281,
        "thumbId": 1005280,
        "name": "Super Gogeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005280_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and ATK +3000",
        "links": [
            9,
            29,
            97,
            89,
            112,
            109
        ],
        "categories": []
    },
    {
        "id": 1006791,
        "thumbId": 1006790,
        "name": "Super Vegetto",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006790_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            9,
            29,
            97,
            103,
            112,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1008091,
        "thumbId": 1008090,
        "name": "Majin Boo (Ultimate Gohan)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008090_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            83,
            50,
            28,
            60,
            47,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1030341,
        "thumbId": 1030340,
        "name": "Super Saiyan 3 Goku (GT) (Golden Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030340_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Giant Ape Power\" Category \nKi +4 and HP, ATK & DEF +220%",
        "links": [
            29,
            124,
            97,
            47,
            95,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1030571,
        "thumbId": 1030570,
        "name": "Super Saiyan God SS Evolved Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030570_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe Survival Saga\" Category \nKi +4 and HP, ATK & DEF +220%",
        "links": [
            26,
            40,
            80,
            97,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1030431,
        "thumbId": 1030430,
        "name": "Super Saiyan Goku + Super Saiyan Vegeta (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030430_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Earth-Protecting Heroes\", \"Fused Fighters\" \nor \"Pure Saiyans\" Category Ki +3, \nHP +200% and ATK & DEF +170%, \nplus an additional HP, ATK & DEF +50% \nfor characters who also belong to the \n\"Earth-Bred Fighters\" or \"Potara\" Category",
        "links": [
            23,
            29,
            30,
            47,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1030731,
        "thumbId": 1030730,
        "name": "Mr. Satan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030730_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Earth-Protecting Heroes\" or \n\"Saviors\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            10,
            15,
            103,
            27,
            42,
            44,
            109
        ],
        "categories": []
    },
    {
        "id": 1023461,
        "thumbId": 1023460,
        "name": "Super Saiyan 2 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023460_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Battle of Fate\" or \n\"Accelerated Battle\" Category \nKi +3, HP +130% and ATK & DEF +170%",
        "links": [
            22,
            29,
            34,
            9,
            30,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1023491,
        "thumbId": 1023490,
        "name": "Boo (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023490_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Battle of Fate\" or \n\"Majin Buu Saga\" Category \nKi +3, HP & ATK +170% and DEF +130%",
        "links": [
            14,
            18,
            50,
            83,
            96,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1030360,
        "thumbId": 1030360,
        "name": "Princess Snake (Goddess of Snake Way)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030360_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Guarantees Super Attack to level up by 1 \nin Training",
        "links": [],
        "categories": []
    },
    {
        "id": 1030641,
        "thumbId": 1030640,
        "name": "Glorio",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030640_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Demonic Power\" Category \nKi +3 and HP, ATK & DEF +200%; \n\"Battle of Wits\" or \"Accelerated Battle\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to \nthe \"Dragon Ball Seekers\" Category \n(\"Demonic Power\" Category characters excluded)",
        "links": [
            8,
            37,
            39,
            53,
            60,
            76,
            109
        ],
        "categories": []
    },
    {
        "id": 1030661,
        "thumbId": 1030660,
        "name": "Super Saiyan Goku (Mini) (DAIMA)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030660_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Transformation Boost\" or \n\"Dragon Ball Seekers\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Pure Saiyans\" or \"Accelerated Battle\" Category",
        "links": [
            9,
            22,
            29,
            47,
            23,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1020221,
        "thumbId": 1020220,
        "name": "Super Saiyan 2 Vegeta (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020220_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Worthy Rivals\" Category \nKi +4 and HP, ATK & DEF +150%; or \nSuper PHY Type Ki +4 and HP, ATK & DEF +100%",
        "links": [
            22,
            26,
            29,
            40,
            9,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1021781,
        "thumbId": 1021780,
        "name": "Super Saiyan Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021780_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Gifted Warriors\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            4,
            22,
            29,
            34,
            47,
            82,
            109
        ],
        "categories": []
    },
    {
        "id": 1023811,
        "thumbId": 1023810,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023810_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super INT Type Ki +2 and HP, ATK & DEF +80%",
        "links": [
            35,
            64,
            8,
            31,
            60,
            110,
            118
        ],
        "categories": []
    },
    {
        "id": 1019921,
        "thumbId": 1019920,
        "name": "Grand-père Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019920_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            36,
            47,
            23,
            16,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1024161,
        "thumbId": 1024160,
        "name": "Pan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024160_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super AGL Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            23,
            42,
            34,
            64,
            1003,
            20,
            118
        ],
        "categories": []
    },
    {
        "id": 1029870,
        "thumbId": 1029870,
        "name": "Hell Fighter #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029870_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            18,
            35,
            60,
            95,
            119,
            120,
            118
        ],
        "categories": []
    },
    {
        "id": 1030021,
        "thumbId": 1030020,
        "name": "Super Saiyan 3 Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030020_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Majin Buu Saga\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            29,
            112,
            89,
            47,
            4,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1029091,
        "thumbId": 1029090,
        "name": "Jiren",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029090_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe 11\" Category \nKi +4 and HP, ATK & DEF +200%; \nor \"Universe Survival Saga\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            16,
            60,
            42,
            80,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1017421,
        "thumbId": 1017420,
        "name": "Super Saiyan 2 Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017420_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyan 2\" Category \nKi +3 and HP, ATK & DEF +170%; \nor \"Resurrected Warriors\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            22,
            29,
            63,
            40,
            97,
            1003,
            109
        ],
        "categories": []
    },
    {
        "id": 1017411,
        "thumbId": 1017410,
        "name": "Super Saiyan 2 Goku (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017410_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Otherworld Warriors\" Category \nKi +3 and HP, ATK & DEF +170%; \nor \"Super Saiyan 3\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            22,
            29,
            9,
            47,
            97,
            1003,
            109
        ],
        "categories": []
    },
    {
        "id": 1006701,
        "thumbId": 1006700,
        "name": "Ultimate Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006700_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +3 and ATK +3000",
        "links": [
            22,
            34,
            42,
            60,
            103,
            109
        ],
        "categories": []
    },
    {
        "id": 1029551,
        "thumbId": 1029550,
        "name": "Anilaza",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029550_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Super Bosses\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            38,
            42,
            50,
            52,
            112,
            125,
            130
        ],
        "categories": []
    },
    {
        "id": 1030181,
        "thumbId": 1030180,
        "name": "Grand Supreme Kai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030180_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Majin Buu Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            76,
            39,
            14,
            13,
            80,
            1003,
            109
        ],
        "categories": []
    },
    {
        "id": 1029981,
        "thumbId": 1029980,
        "name": "Majin Boo (Ultimate Gohan)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029980_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Power Absorption\" or \n\"Transformation Boost\" Category \nKi +3 and HP, ATK & DEF +170%, plus an \nadditional HP, ATK & DEF +30% for characters \nwho also belong to the \"Artificial Life Forms\" \nor \"Uncontrollable Power\" Category",
        "links": [
            83,
            50,
            28,
            60,
            120,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1011901,
        "thumbId": 1011900,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011900_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +2 and HP & DEF +70%",
        "links": [
            26,
            30,
            48,
            56,
            8,
            117,
            118
        ],
        "categories": []
    },
    {
        "id": 1013811,
        "thumbId": 1013810,
        "name": "Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013810_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +2 and HP, ATK & DEF +90%",
        "links": [
            35,
            31,
            110,
            69,
            60,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1013871,
        "thumbId": 1013870,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013870_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            35,
            31,
            4,
            64,
            110,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1019371,
        "thumbId": 1019370,
        "name": "Majin Boo (Shape-Up)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019370_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            4,
            65,
            8,
            83,
            96,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1029121,
        "thumbId": 1029120,
        "name": "Hit",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029120_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            42,
            30,
            39,
            130,
            126,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1029291,
        "thumbId": 1029290,
        "name": "Champa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029290_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Universe 6\" Category \nKi +3 and HP, ATK & DEF +66%",
        "links": [
            80,
            79,
            4,
            14,
            58,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1029281,
        "thumbId": 1029280,
        "name": "Saonel & Pirina",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029280_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Namekians\" Category \nKi +4 and HP, ATK & DEF +66%",
        "links": [
            52,
            39,
            130,
            48,
            126,
            15,
            118
        ],
        "categories": []
    },
    {
        "id": 1029851,
        "thumbId": 1029850,
        "name": "Freezer (Final Form)/Cooler (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029850_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Wicked Bloodline\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            50,
            59,
            85,
            119,
            86,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1005301,
        "thumbId": 1005300,
        "name": "Beerus",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005300_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK +80%",
        "links": [
            80,
            26,
            79,
            4,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1029951,
        "thumbId": 1029950,
        "name": "Super Saiyan God SS Goku (Universe Tree Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029950_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Dragon Ball Heroes\", \"Kamehameha\" or \n\"Power Beyond Super Saiyan\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to \nthe \"Crossover\" Category",
        "links": [
            29,
            47,
            60,
            70,
            80,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1029891,
        "thumbId": 1029890,
        "name": "Fu (Youth) (Dogidogi Fully Absorbed)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029890_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Time Travelers\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            7,
            8,
            39,
            50,
            80,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1029911,
        "thumbId": 1029910,
        "name": "Aeos",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029910_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Realm of Gods\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            13,
            14,
            37,
            39,
            76,
            80,
            109
        ],
        "categories": []
    },
    {
        "id": 1029931,
        "thumbId": 1029930,
        "name": "Dark King Demigra (Power of Time Unleashed)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029930_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Demonic Power\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            8,
            50,
            65,
            76,
            80,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1030141,
        "thumbId": 1030140,
        "name": "Warrior in Black (Super Saiyan) (Dark Dragon Ball Boost)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030140_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyans\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            22,
            29,
            30,
            34,
            63,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1021051,
        "thumbId": 1021050,
        "name": "Boujack",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021050_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Space-Traveling Warriors\" Category \nKi +3 and HP, ATK & DEF +170%; \nor \"Time Travelers\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            87,
            88,
            50,
            86,
            32,
            65,
            109
        ],
        "categories": []
    },
    {
        "id": 1027801,
        "thumbId": 1027800,
        "name": "Towa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027800_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Dragon Ball Heroes\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            7,
            37,
            64,
            76,
            86,
            114,
            118
        ],
        "categories": []
    },
    {
        "id": 1023191,
        "thumbId": 1023190,
        "name": "Dark King Mechikabura (Power of Time Unleashed)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023190_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Crossover\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            120,
            8,
            65,
            76,
            80,
            50,
            118
        ],
        "categories": []
    },
    {
        "id": 1023241,
        "thumbId": 1023240,
        "name": "Super Saiyan God Trunks (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023240_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Dragon Ball Heroes\" Category \nKi +4 and HP, ATK & DEF +170%",
        "links": [
            70,
            29,
            39,
            69,
            97,
            80,
            109
        ],
        "categories": []
    },
    {
        "id": 1023261,
        "thumbId": 1023260,
        "name": "Pan (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023260_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Crossover\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            4,
            23,
            34,
            64,
            69,
            14,
            109
        ],
        "categories": []
    },
    {
        "id": 1023301,
        "thumbId": 1023300,
        "name": "Super Saiyan Goku (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023300_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Goku's Family\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            29,
            34,
            47,
            69,
            30,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1023311,
        "thumbId": 1023310,
        "name": "Super Saiyan Vegeta (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023310_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Vegeta's Family\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            29,
            40,
            26,
            69,
            30,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1023271,
        "thumbId": 1023270,
        "name": "Super Saiyan Vegeks (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023270_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +80%",
        "links": [
            29,
            34,
            40,
            60,
            112,
            103,
            118
        ],
        "categories": []
    },
    {
        "id": 1023291,
        "thumbId": 1023290,
        "name": "Super Saiyan 3 Gohanks (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023290_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super INT Type \nKi +3 and HP, ATK & DEF +100%",
        "links": [
            29,
            89,
            8,
            60,
            112,
            39,
            118
        ],
        "categories": []
    },
    {
        "id": 1023281,
        "thumbId": 1023280,
        "name": "Super Saiyan 3 Gotenks (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023280_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super AGL Type \nKi +3 and HP, ATK & DEF +100%",
        "links": [
            29,
            89,
            4,
            60,
            112,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1030161,
        "thumbId": 1030160,
        "name": "Female Warrior in Black",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030160_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Crossover\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            4,
            64,
            37,
            60,
            73,
            118
        ],
        "categories": []
    },
    {
        "id": 1030221,
        "thumbId": 1030220,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030220_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Hybrid Saiyans\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            4,
            22,
            23,
            34,
            45,
            118
        ],
        "categories": []
    },
    {
        "id": 1029731,
        "thumbId": 1029730,
        "name": "Lord Slug",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029730_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Demonic Power\", \"Inhuman Deeds\" or \n\"Movie Bosses\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to \nthe \"Terrifying Conquerors\" or \n\"Space-Traveling Warriors\" Category",
        "links": [
            6,
            28,
            48,
            50,
            86,
            119,
            109
        ],
        "categories": []
    },
    {
        "id": 1029751,
        "thumbId": 1029750,
        "name": "Angila & Medamatcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029750_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Demonic Power\" or \n\"Joined Forces\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            86,
            6,
            119,
            33,
            73,
            54,
            109
        ],
        "categories": []
    },
    {
        "id": 1027941,
        "thumbId": 1027940,
        "name": "Oolong & Launch",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027940_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +40%",
        "links": [
            12,
            14,
            28,
            49,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1022721,
        "thumbId": 1022720,
        "name": "Kyawei",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022720_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            4,
            12,
            32,
            42,
            64,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1022681,
        "thumbId": 1022680,
        "name": "Marcarita",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022680_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe 11\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            4,
            8,
            37,
            39,
            60,
            80,
            118
        ],
        "categories": []
    },
    {
        "id": 1022941,
        "thumbId": 1022940,
        "name": "Krilin & Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022940_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Rapid Growth\" Category \nKi +4 and HP, ATK & DEF +130%; \nor AGL Type Ki +4 and HP, ATK & DEF +100%",
        "links": [
            47,
            37,
            39,
            42,
            60,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1023041,
        "thumbId": 1023040,
        "name": "Vegeta/Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023040_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Planet Namek Saga\" Category \nKi +4 and HP, ATK & DEF +130%; \nor INT Type Ki +4 and HP, ATK & DEF +100%",
        "links": [
            18,
            26,
            63,
            22,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1029141,
        "thumbId": 1029140,
        "name": "Tortue Géniale",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029140_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" Category \nKi +3 and HP, ATK & DEF +200%; \n\"Turtle School\" or \"DB Saga\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Bond of Master and Disciple\" \nor \"Kamehameha\" Category \n(\"Peppy Gals\" Category characters excluded)",
        "links": [
            36,
            42,
            16,
            47,
            27,
            90,
            109
        ],
        "categories": []
    },
    {
        "id": 1021811,
        "thumbId": 1021810,
        "name": "Videl",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021810_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Defenders of Justice\" or \n\"Peppy Gals\" Category \nKi +4 and HP, ATK & DEF +170%",
        "links": [
            2,
            10,
            39,
            42,
            44,
            64,
            109
        ],
        "categories": []
    },
    {
        "id": 1029161,
        "thumbId": 1029160,
        "name": "Bulma (Bunny)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029160_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"DB Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            8,
            10,
            37,
            64,
            90,
            102,
            109
        ],
        "categories": []
    },
    {
        "id": 1029181,
        "thumbId": 1029180,
        "name": "Cocotte",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029180_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" Category or Super INT Type \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            16,
            94,
            64,
            93,
            60,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1029201,
        "thumbId": 1029200,
        "name": "Mai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029200_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Peppy Gals\" Category or Extreme TEQ Type \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            8,
            18,
            86,
            90,
            102,
            37,
            118
        ],
        "categories": []
    },
    {
        "id": 1022781,
        "thumbId": 1022780,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022780_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +59%",
        "links": [
            45,
            23,
            34,
            47,
            30,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1030061,
        "thumbId": 1030060,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030060_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            45,
            37,
            2,
            39,
            36,
            8,
            118
        ],
        "categories": []
    },
    {
        "id": 1030101,
        "thumbId": 1030100,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030100_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            45,
            37,
            2,
            42,
            5,
            24,
            118
        ],
        "categories": []
    },
    {
        "id": 1030121,
        "thumbId": 1030120,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030120_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            45,
            37,
            2,
            13,
            5,
            24,
            118
        ],
        "categories": []
    },
    {
        "id": 1030081,
        "thumbId": 1030080,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030080_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            45,
            37,
            2,
            42,
            36,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1030041,
        "thumbId": 1030040,
        "name": "Piccolo & Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1030040_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            45,
            37,
            2,
            42,
            23,
            8,
            118
        ],
        "categories": []
    },
    {
        "id": 1029511,
        "thumbId": 1029510,
        "name": "Grand-père Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029510_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Turtle School\" Category \nKi +4 and HP, ATK & DEF +130%",
        "links": [
            36,
            47,
            23,
            90,
            102,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1017781,
        "thumbId": 1017780,
        "name": "Démon Piccolo (Elder)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017780_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Terrifying Conquerors\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            65,
            6,
            90,
            102,
            119,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1020071,
        "thumbId": 1020070,
        "name": "Mighty Mask",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020070_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            29,
            20,
            14,
            4,
            60,
            12,
            118
        ],
        "categories": []
    },
    {
        "id": 1023171,
        "thumbId": 1023170,
        "name": "Hit",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023170_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            16,
            30,
            39,
            42,
            60,
            126,
            118
        ],
        "categories": []
    },
    {
        "id": 1019681,
        "thumbId": 1019680,
        "name": "Hacchan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019680_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            42,
            52,
            102,
            90,
            35,
            17,
            118
        ],
        "categories": []
    },
    {
        "id": 1029701,
        "thumbId": 1029700,
        "name": "Gohan (Kid)/Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029700_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Planet Namek Saga\" or \n\"Bond of Master and Disciple\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            22,
            23,
            56,
            60,
            6,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1007471,
        "thumbId": 1007470,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007470_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and ATK +3000",
        "links": [
            9,
            29,
            47,
            117,
            61,
            125
        ],
        "categories": []
    },
    {
        "id": 1011381,
        "thumbId": 1011380,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011380_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, TEQ, & STR Types \nKi +2 and HP, ATK & DEF +40%",
        "links": [
            9,
            22,
            29,
            47,
            45,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1017471,
        "thumbId": 1017470,
        "name": "Nail",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017470_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Namekians\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            48,
            39,
            15,
            16,
            30,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1004251,
        "thumbId": 1004250,
        "name": "Freezer (Full Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004250_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +3 and ATK +3000",
        "links": [
            26,
            59,
            119,
            85,
            50,
            89,
            109
        ],
        "categories": []
    },
    {
        "id": 1029571,
        "thumbId": 1029570,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029570_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Planet Namek Saga\", \"Gifted Warriors\" or \n\"Inhuman Deeds\" Category Ki +3 and \nHP, ATK & DEF +170%, plus an additional \nHP, ATK & DEF +30% for characters who also \nbelong to the \"Dragon Ball Seekers\" or \n\"Pure Saiyans\" Category",
        "links": [
            22,
            40,
            26,
            18,
            34,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1029591,
        "thumbId": 1029590,
        "name": "Cui",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029590_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Planet Namek Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            18,
            32,
            43,
            51,
            73,
            86,
            109
        ],
        "categories": []
    },
    {
        "id": 1022591,
        "thumbId": 1022590,
        "name": "Super Janemba",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022590_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Corroded Body and Mind\" or \n\"Movie Bosses\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            50,
            60,
            28,
            18,
            120,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1022191,
        "thumbId": 1022190,
        "name": "Goku (Angel) & Vegeta (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022190_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Time Limit\" or \"Connected Hope\" Category \nKi +3, HP +130% and ATK & DEF +170%",
        "links": [
            22,
            30,
            34,
            60,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1003801,
        "thumbId": 1003800,
        "name": "Legendary Super Saiyan Broly ",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003800_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +3 and ATK +3000",
        "links": [
            104,
            22,
            29,
            34,
            49,
            109
        ],
        "categories": []
    },
    {
        "id": 1021691,
        "thumbId": 1021690,
        "name": "Super Saiyan Trunks (Kid) & \nSuper Saiyan Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021690_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Gifted Warriors\" or \n\"Kamehameha\" Category Ki +3, \nHP & ATK +170% and DEF +130%",
        "links": [
            4,
            29,
            47,
            26,
            82,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1029271,
        "thumbId": 1029270,
        "name": "Bio-Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029270_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Uncontrollable Power\" Category \nKi +4 and HP, ATK & DEF +130%",
        "links": [
            50,
            34,
            49,
            97,
            120,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1005441,
        "thumbId": 1005440,
        "name": "Bio-Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005440_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +1 and ATK & DEF +50% \nwhen HP is 30% or more",
        "links": [
            29,
            34,
            49,
            65,
            119,
            118
        ],
        "categories": []
    },
    {
        "id": 1029471,
        "thumbId": 1029470,
        "name": "Super Saiyan Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029470_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Kamehameha\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            29,
            9,
            22,
            23,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1029441,
        "thumbId": 1029440,
        "name": "Legendary Super Saiyan Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029440_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Uncontrollable Power\", \"Revenge\" or \n\"Planetary Destruction\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Movie Bosses\", \"Transformation Boost\" \nor \"Pure Saiyans\" Category",
        "links": [
            22,
            97,
            60,
            29,
            49,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1029621,
        "thumbId": 1029620,
        "name": "Videl",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029620_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Dragon Ball Seekers\" or \n\"Earth-Bred Fighters\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            42,
            39,
            2,
            64,
            44,
            10,
            109
        ],
        "categories": []
    },
    {
        "id": 1016871,
        "thumbId": 1016870,
        "name": "Super Saiyan Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016870_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Resurrected Warriors\" Category \nKi +4 and HP, ATK & DEF +130%; or \nExtreme TEQ Type Ki +4 and HP, ATK & DEF +100%",
        "links": [
            22,
            34,
            49,
            97,
            29,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1017551,
        "thumbId": 1017550,
        "name": "Videl",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017550_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +2 and HP, ATK & DEF +50%",
        "links": [
            42,
            39,
            2,
            64,
            1000,
            10,
            118
        ],
        "categories": []
    },
    {
        "id": 1029671,
        "thumbId": 1029670,
        "name": "Super Saiyan Trunks (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029670_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Hybrid Saiyans\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            4,
            9,
            29,
            82,
            97,
            45,
            118
        ],
        "categories": []
    },
    {
        "id": 1021671,
        "thumbId": 1021670,
        "name": "Legendary Super Saiyan Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021670_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Planetary Destruction\" or \n\"Movie Bosses\" Category Ki +3, \nHP +130% and ATK & DEF +170%",
        "links": [
            22,
            29,
            34,
            49,
            97,
            104,
            109
        ],
        "categories": []
    },
    {
        "id": 1029401,
        "thumbId": 1029400,
        "name": "Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029400_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Movie Bosses\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            22,
            97,
            49,
            34,
            104,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1029361,
        "thumbId": 1029360,
        "name": "Super Saiyan Goku & Super Saiyan Gohan (Youth) & \nSuper Saiyan Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029360_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"All-Out Struggle\", \"Super Saiyans\" or \n\"Power of Wishes\" Category Ki +3 and \nHP, ATK & DEF +170%, plus an additional \nHP, ATK & DEF +30% for characters \nwho also belong to the \"Movie Heroes\" \nor \"Connected Hope\" Category",
        "links": [
            29,
            9,
            22,
            45,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1029641,
        "thumbId": 1029640,
        "name": "Paragus",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029640_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Pure Saiyans\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            104,
            22,
            86,
            32,
            34,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1029771,
        "thumbId": 1029770,
        "name": "Piccolo/Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029770_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Worthy Rivals\" or \n\"Bond of Master and Disciple\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            8,
            26,
            30,
            37,
            48,
            56,
            109
        ],
        "categories": []
    },
    {
        "id": 1020751,
        "thumbId": 1020750,
        "name": "Team Turles",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020750_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Terrifying Conquerors\" Category \nKi +4 and HP, ATK & DEF +130%; \nor Extreme STR Type \nKi +4 and HP, ATK & DEF +100%",
        "links": [
            18,
            97,
            50,
            86,
            98,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1028961,
        "thumbId": 1028960,
        "name": "Cell Max",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028960_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Artificial Life Forms\" or \n\"Super Bosses\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            35,
            42,
            49,
            50,
            119,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1029331,
        "thumbId": 1029330,
        "name": "Devilman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029330_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Tournament Participants\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            7,
            27,
            101,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1017801,
        "thumbId": 1017800,
        "name": "Cyborg Tao",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017800_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            5,
            16,
            32,
            65,
            46,
            18,
            118
        ],
        "categories": []
    },
    {
        "id": 1019951,
        "thumbId": 1019950,
        "name": "Cell (Perfect Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019950_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            17,
            19,
            50,
            60,
            119,
            108,
            118
        ],
        "categories": []
    },
    {
        "id": 1022161,
        "thumbId": 1022160,
        "name": "Super Saiyan Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022160_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Time Limit\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            4,
            9,
            29,
            34,
            97,
            112,
            109
        ],
        "categories": []
    },
    {
        "id": 1020051,
        "thumbId": 1020050,
        "name": "Great Saiyaman (SS2)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020050_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            9,
            29,
            60,
            93,
            97,
            34,
            118
        ],
        "categories": []
    },
    {
        "id": 1009481,
        "thumbId": 1009480,
        "name": "Great Saiyaman (SS2)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009480_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & PHY Types \nKi +2 and ATK & DEF +50%",
        "links": [
            9,
            29,
            60,
            93,
            97,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1013951,
        "thumbId": 1013950,
        "name": "Ribrianne (Giant Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013950_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" Category and PHY Type \nKi +2 and HP, ATK & DEF +70%",
        "links": [
            64,
            28,
            4,
            94,
            14,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1020011,
        "thumbId": 1020010,
        "name": "Toppo (Pride Troopers)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020010_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe 11\" or \"Special Pose\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            16,
            94,
            52,
            93,
            60,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1028681,
        "thumbId": 1028680,
        "name": "Toppo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028680_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Special Pose\" or \"Tournament Participants\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% for characters \nwho also belong to the \"Defenders of Justice\", \n\"Space-Traveling Warriors\" or \n\"Final Trump Card\" Category",
        "links": [
            16,
            52,
            60,
            93,
            94,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1028761,
        "thumbId": 1028760,
        "name": "Catopesra",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028760_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Defenders of Justice\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            53,
            60,
            93,
            94,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1019911,
        "thumbId": 1019910,
        "name": "Jiren (Full Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019910_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe 11\" Category \nKi +3 and HP, ATK & DEF +170%; or \n\"Universe Survival Saga\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            16,
            60,
            42,
            80,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1021431,
        "thumbId": 1021430,
        "name": "Golden Freezer (Angel) & Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021430_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Universe Survival Saga\" or \n\"Joined Forces\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            52,
            8,
            37,
            60,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1021481,
        "thumbId": 1021480,
        "name": "Android #17 (Team Universe 7)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021480_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Representatives of Universe 7\" Category \nKi +4 and HP, ATK & DEF +150%; \nor Super INT Type Ki +4 and HP, ATK & DEF +100%",
        "links": [
            35,
            110,
            37,
            60,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1029051,
        "thumbId": 1029050,
        "name": "Goku (Ultra Instinct -Sign-)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029050_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe Survival Saga\", \"Realm of Gods\" or \n\"Entrusted Will\" Category Ki +3 and \nHP, ATK & DEF +170%, plus an additional \nHP, ATK & DEF +30% for characters who \nalso belong to the \"Representatives of Universe 7\", \n\"Accelerated Battle\" or \"Powerful Comeback\" Category",
        "links": [
            89,
            97,
            80,
            47,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1029021,
        "thumbId": 1029020,
        "name": "Dyspo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029020_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Accelerated Battle\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            94,
            93,
            53,
            60,
            42,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1020311,
        "thumbId": 1020310,
        "name": "Goku (Ultra Instinct)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020310_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Miraculous Awakening\" or \n\"Representatives of Universe 7\" Category \nKi +3 and HP, ATK & DEF +170%",
        "links": [
            60,
            97,
            80,
            47,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1020341,
        "thumbId": 1020340,
        "name": "Super Saiyan God SS Evolved Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020340_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Powerful Comeback\" or \n\"Representatives of Universe 7\" Category \nKi +3 and HP, ATK & DEF +170%",
        "links": [
            26,
            40,
            80,
            97,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1028551,
        "thumbId": 1028550,
        "name": "Beerus (Pajamas)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028550_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Planetary Destruction\" Category \nKi +3 and HP, ATK & DEF +80%",
        "links": [
            80,
            26,
            79,
            4,
            60,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1028601,
        "thumbId": 1028600,
        "name": "Freezer (1st Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028600_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Super Bosses\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            26,
            51,
            59,
            85,
            86,
            120,
            118
        ],
        "categories": []
    },
    {
        "id": 1028321,
        "thumbId": 1028320,
        "name": "Gohan (Beast)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028320_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Heroes\", \"Bond of Master and Disciple\" \nor \"Miraculous Awakening\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Entrusted Will\" or \"Movie Heroes\" Category",
        "links": [
            23,
            22,
            42,
            60,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1028371,
        "thumbId": 1028370,
        "name": "Gamma 1 & Gamma 2/Gamma 1",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028370_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Heroes\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            35,
            55,
            60,
            93,
            94,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1028471,
        "thumbId": 1028470,
        "name": "Krilin & Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028470_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Joined Forces\" or \n\"Battle of Wits\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            30,
            2,
            39,
            36,
            37,
            8,
            109
        ],
        "categories": []
    },
    {
        "id": 1019991,
        "thumbId": 1019990,
        "name": "Super Saiyan God SS Goku (Kaioken) & \nSuper Saiyan God SS Evolved Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019990_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"All-Out Struggle\" or \"Joined Forces\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            29,
            80,
            70,
            47,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1017441,
        "thumbId": 1017440,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017440_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +2 and HP, ATK & DEF +60%",
        "links": [
            5,
            24,
            42,
            90,
            102,
            39,
            118
        ],
        "categories": []
    },
    {
        "id": 1019931,
        "thumbId": 1019930,
        "name": "Chi-Chi",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019930_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            4,
            64,
            42,
            90,
            102,
            2,
            118
        ],
        "categories": []
    },
    {
        "id": 1019791,
        "thumbId": 1019790,
        "name": "Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019790_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            22,
            23,
            34,
            45,
            56,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1019691,
        "thumbId": 1019690,
        "name": "Vegetto",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019690_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            22,
            34,
            97,
            103,
            112,
            8,
            118
        ],
        "categories": []
    },
    {
        "id": 1019001,
        "thumbId": 1019000,
        "name": "Broly & Cheelai & Lemo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019000_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Movie Bosses\" Category \nKi +4 and HP, ATK & DEF +130%; or \nExtreme PHY Type Ki +4 and HP, ATK & DEF +100%",
        "links": [
            8,
            37,
            39,
            50,
            60,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1016081,
        "thumbId": 1016080,
        "name": "Paragus & Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016080_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme INT Type Ki +3 and \nHP, ATK & DEF +100%",
        "links": [
            22,
            34,
            104,
            39,
            18,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1019041,
        "thumbId": 1019040,
        "name": "Bardock & Gine",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019040_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\" Category \nKi +3 and HP, ATK & DEF +120%; or \nSTR Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            22,
            34,
            63,
            39,
            97,
            30,
            109
        ],
        "categories": []
    },
    {
        "id": 1028331,
        "thumbId": 1028330,
        "name": "Gogeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028330_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "ATK & DEF +19% per Ki Sphere obtained",
        "links": [
            22,
            112,
            89,
            47,
            34,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1028021,
        "thumbId": 1028020,
        "name": "Super Saiyan Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028020_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Super Bosses\", \n\"Transformation Boost\" or \"Full Power\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Exploding Rage\" or \"Movie Bosses\" Category",
        "links": [
            26,
            29,
            49,
            60,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1027981,
        "thumbId": 1027980,
        "name": "Super Saiyan Gogeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027980_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            9,
            29,
            97,
            89,
            112,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1028231,
        "thumbId": 1028230,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028230_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Super Bosses\" or \n\"Gifted Warriors\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            18,
            26,
            59,
            60,
            85,
            86,
            109
        ],
        "categories": []
    },
    {
        "id": 1019821,
        "thumbId": 1019820,
        "name": "Goku (Ultra Instinct -Sign-)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019820_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Realm of Gods\" Category \nKi +4 and HP, ATK & DEF +130%; or \nSuper STR Type Ki +4 and HP, ATK & DEF +100%",
        "links": [
            47,
            97,
            80,
            89,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1015181,
        "thumbId": 1015180,
        "name": "Yamcha & Puar",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015180_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Joined Forces\" Category \nKi +3 and HP, ATK & DEF +100%",
        "links": [
            42,
            37,
            53,
            90,
            102,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1017961,
        "thumbId": 1017960,
        "name": "Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017960_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +40%",
        "links": [
            29,
            22,
            9,
            40,
            97,
            34,
            118
        ],
        "categories": []
    },
    {
        "id": 1024691,
        "thumbId": 1024690,
        "name": "Shen",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024690_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            42,
            17,
            14,
            84,
            39,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1011211,
        "thumbId": 1011210,
        "name": "Jackie Chun",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011210_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"World Tournament\" Category Ki +3 \nand HP, ATK & DEF +70%",
        "links": [
            16,
            27,
            102,
            90,
            8,
            17,
            118
        ],
        "categories": []
    },
    {
        "id": 1018841,
        "thumbId": 1018840,
        "name": "Super Saiyan Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018840_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class \nKi +2 and HP, ATK & DEF +60%",
        "links": [
            9,
            29,
            34,
            22,
            45,
            93,
            118
        ],
        "categories": []
    },
    {
        "id": 1018661,
        "thumbId": 1018660,
        "name": "Mr. Boo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018660_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +50%",
        "links": [
            4,
            65,
            76,
            83,
            96,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1029001,
        "thumbId": 1029000,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1029000_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Earth-Bred Fighters\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            1,
            2,
            36,
            37,
            69,
            68,
            118
        ],
        "categories": []
    },
    {
        "id": 1006211,
        "thumbId": 1006210,
        "name": "Super Saiyan 3 Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006210_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            29,
            112,
            89,
            116,
            4,
            109
        ],
        "categories": []
    },
    {
        "id": 1028721,
        "thumbId": 1028720,
        "name": "Capitaine Ginyu (Ginyu Force)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028720_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Ginyu Force\" or \"Special Pose\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            17,
            25,
            41,
            73,
            94,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1008851,
        "thumbId": 1008850,
        "name": "Goku Black",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008850_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type HP, ATK & DEF +100%",
        "links": [
            120,
            119,
            47,
            97,
            66,
            50,
            109
        ],
        "categories": []
    },
    {
        "id": 1019141,
        "thumbId": 1019140,
        "name": "Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019140_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Revenge\" or \"Low-Class Warrior\" Category \nKi +4, HP +130% and ATK & DEF +170%",
        "links": [
            22,
            34,
            63,
            61,
            30,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1028771,
        "thumbId": 1028770,
        "name": "Chilled",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028770_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT & PHY Types \nKi +3 and HP, ATK & DEF +30%",
        "links": [
            18,
            32,
            85,
            86,
            57,
            122,
            118
        ],
        "categories": []
    },
    {
        "id": 1018591,
        "thumbId": 1018590,
        "name": "Babidi & Dabra",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018590_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Majin Buu Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            76,
            77,
            86,
            18,
            119,
            120,
            125
        ],
        "categories": []
    },
    {
        "id": 1019101,
        "thumbId": 1019100,
        "name": "Team Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019100_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Team Bardock\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            62,
            22,
            63,
            34,
            124,
            97,
            125
        ],
        "categories": []
    },
    {
        "id": 1028921,
        "thumbId": 1028920,
        "name": "Goku (Youth) & Krilin (Youth) & Bulma (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028920_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"DB Saga\" Category \nKi +3 and HP, ATK & DEF +80%",
        "links": [
            2,
            4,
            42,
            102,
            90,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1028571,
        "thumbId": 1028570,
        "name": "Freezer (1st Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028570_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Planetary Destruction\" or \n\"Space-Traveling Warriors\" Category \nKi +3 and HP, ATK & DEF +170%, plus an \nadditional HP, ATK & DEF +30% for characters \nwho also belong to the \"Inhuman Deeds\" or \n\"Terrifying Conquerors\" Category",
        "links": [
            50,
            51,
            59,
            85,
            86,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1028591,
        "thumbId": 1028590,
        "name": "Dodoria",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028590_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Inhuman Deeds\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            18,
            32,
            43,
            51,
            73,
            119,
            109
        ],
        "categories": []
    },
    {
        "id": 1028981,
        "thumbId": 1028980,
        "name": "Super Saiyan 2 Trunks (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028980_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Time Travelers\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            29,
            9,
            40,
            19,
            66,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1003311,
        "thumbId": 1003310,
        "name": "Boo (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003310_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Raises allies' ATK by up to 50% \n(the more HP remaining, \nthe greater the ATK boost)",
        "links": [
            83,
            18,
            14,
            50,
            96,
            109,
            1004
        ],
        "categories": []
    },
    {
        "id": 1028891,
        "thumbId": 1028890,
        "name": "Ultimate Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028890_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Majin Buu Saga\" or \"Saviors\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            42,
            23,
            39,
            60,
            103,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1015101,
        "thumbId": 1015100,
        "name": "Mr. Satan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015100_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super INT Type Ki +2 and HP, ATK & DEF +90%",
        "links": [
            27,
            44,
            15,
            1001,
            20,
            1003,
            109
        ],
        "categories": []
    },
    {
        "id": 1015111,
        "thumbId": 1015110,
        "name": "Majin Boo (Good)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015110_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            4,
            65,
            76,
            83,
            96,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1019471,
        "thumbId": 1019470,
        "name": "Super Saiyan Trunks (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019470_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Kamehameha\" Category \nKi +3 and HP, ATK & DEF +100%; or \nTEQ & PHY Types Ki +3 and HP, ATK & DEF +70%",
        "links": [
            9,
            29,
            47,
            82,
            4,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1019461,
        "thumbId": 1019460,
        "name": "Super Saiyan Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019460_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Kamehameha\" Category \nKi +3 and HP, ATK & DEF +100%; or \nINT & PHY Types Ki +3 and HP, ATK & DEF +70%",
        "links": [
            9,
            29,
            47,
            82,
            4,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1012001,
        "thumbId": 1012000,
        "name": "Majin Boo (Gotenks)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012000_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +3 and HP & ATK +70%",
        "links": [
            83,
            89,
            28,
            47,
            119,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1028631,
        "thumbId": 1028630,
        "name": "Buyon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028630_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Terrifying Conquerors\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            14,
            52,
            55,
            86,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1021011,
        "thumbId": 1021010,
        "name": "Babidi & Majin Boo (Good)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021010_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Majin Buu Saga\" Category \nKi +4 and HP, ATK & DEF +130%",
        "links": [
            76,
            86,
            18,
            119,
            120,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1020091,
        "thumbId": 1020090,
        "name": "Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020090_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Saviors\" or \"Hybrid Saiyans\" Category \nKi +3, HP +130% and ATK & DEF +170%",
        "links": [
            8,
            23,
            34,
            39,
            65,
            103,
            109
        ],
        "categories": []
    },
    {
        "id": 1019591,
        "thumbId": 1019590,
        "name": "Majin Boo (Good)/Majin Boo (Pure Evil)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019590_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Majin Power\" Category \nKi +4 and HP, ATK & DEF +170%; \nor \"Artificial Life Forms\" Category \nKi +3, HP & ATK +170% and DEF +130%",
        "links": [
            83,
            4,
            47,
            96,
            65,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1027471,
        "thumbId": 1027470,
        "name": "Cell (Perfect Form) (GT) & \nFreezer (Final Form) (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027470_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Sworn Enemies\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            18,
            60,
            95,
            119,
            120,
            129,
            125
        ],
        "categories": []
    },
    {
        "id": 1008891,
        "thumbId": 1008890,
        "name": "Super Saiyan 3 Goku (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008890_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +30%",
        "links": [
            9,
            29,
            47,
            89,
            116,
            1000,
            109
        ],
        "categories": []
    },
    {
        "id": 1020371,
        "thumbId": 1020370,
        "name": "Majin Boo (Gotenks)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020370_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Power Absorption\" or \"Majin Power\" Category \nKi +4, HP +130% and ATK & DEF +170%",
        "links": [
            28,
            60,
            1004,
            120,
            83,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1020461,
        "thumbId": 1020460,
        "name": "Goku & Vegeta (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020460_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Battle of Wits\" or \"Majin Buu Saga\" Category \nKi +3, HP +130% and ATK & DEF +170%",
        "links": [
            22,
            30,
            34,
            60,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1028811,
        "thumbId": 1028810,
        "name": "Majin Boo (Good)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028810_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Majin Buu Saga\", \"Sworn Enemies\" or \n\"Storied Figures\" Category Ki +3 and \nHP, ATK & DEF +170%, plus an additional \nHP, ATK & DEF +30% for characters who \nalso belong to the \"Worldwide Chaos\" or \n\"Resurrected Warriors\" Category",
        "links": [
            83,
            4,
            47,
            96,
            65,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1028851,
        "thumbId": 1028850,
        "name": "Majin Boo (Pure Evil)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028850_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Majin Power\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            83,
            18,
            47,
            96,
            119,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1028831,
        "thumbId": 1028830,
        "name": "Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028830_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Hybrid Saiyans\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            22,
            34,
            4,
            60,
            112,
            89,
            109
        ],
        "categories": []
    },
    {
        "id": 1028791,
        "thumbId": 1028790,
        "name": "Super Saiyan 3 Goku (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028790_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Majin Buu Saga\", \"Otherworld Warriors\" \nor \"Accelerated Battle\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Kamehameha\" or \"Time Limit\" Category",
        "links": [
            9,
            29,
            34,
            89,
            116,
            47,
            109
        ],
        "categories": []
    },
    {
        "id": 1012721,
        "thumbId": 1012720,
        "name": "Super Saiyan 3 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012720_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "Super TEQ Type Ki +4 \nand HP, ATK & DEF +100%; \nExtreme TEQ Type Ki +2 \nand HP, ATK & DEF +70%",
        "links": [
            29,
            30,
            47,
            116,
            89,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1015651,
        "thumbId": 1015650,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015650_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super STR Type Ki +2 and HP, ATK & DEF +80%",
        "links": [
            9,
            22,
            29,
            97,
            23,
            117,
            118
        ],
        "categories": []
    },
    {
        "id": 1013111,
        "thumbId": 1013110,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013110_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and ATK & DEF +60%",
        "links": [
            23,
            42,
            47,
            60,
            27,
            36,
            118
        ],
        "categories": []
    },
    {
        "id": 1017431,
        "thumbId": 1017430,
        "name": "Super Saiyan Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017430_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +50%",
        "links": [
            29,
            22,
            9,
            56,
            97,
            23,
            118
        ],
        "categories": []
    },
    {
        "id": 1019631,
        "thumbId": 1019630,
        "name": "Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019630_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Special Pose\" Category \nKi +4 and HP, ATK & DEF +170%; \nor \"Youth\" Category \nKi +3, HP & ATK +170% and DEF +130%",
        "links": [
            94,
            22,
            34,
            4,
            112,
            1003,
            109
        ],
        "categories": []
    },
    {
        "id": 1013121,
        "thumbId": 1013120,
        "name": "Piccolo Jr. (Giant Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013120_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +2 and HP & ATK +60%",
        "links": [
            50,
            6,
            84,
            90,
            102,
            123,
            118
        ],
        "categories": []
    },
    {
        "id": 1014991,
        "thumbId": 1014990,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014990_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme INT Type Ki +4 and HP, ATK & DEF +120%",
        "links": [
            22,
            40,
            50,
            26,
            119,
            18,
            118
        ],
        "categories": []
    },
    {
        "id": 1015001,
        "thumbId": 1015000,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015000_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super INT Type \nKi +4 and HP, ATK & DEF +120%",
        "links": [
            34,
            49,
            22,
            4,
            56,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1015141,
        "thumbId": 1015140,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015140_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super TEQ Type \nKi +4 and HP, ATK & DEF +120%",
        "links": [
            45,
            5,
            39,
            37,
            30,
            89,
            118
        ],
        "categories": []
    },
    {
        "id": 1015131,
        "thumbId": 1015130,
        "name": "Cell (2nd Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015130_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme TEQ Type \nKi +4 and HP, ATK & DEF +120%",
        "links": [
            19,
            50,
            33,
            1004,
            119,
            18,
            118
        ],
        "categories": []
    },
    {
        "id": 1015261,
        "thumbId": 1015260,
        "name": "Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015260_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super PHY Type \nKi +4 and HP, ATK & DEF +120%",
        "links": [
            23,
            34,
            39,
            65,
            103,
            8,
            118
        ],
        "categories": []
    },
    {
        "id": 1015231,
        "thumbId": 1015230,
        "name": "Pan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015230_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super AGL Type \nKi +4 and HP, ATK & DEF +120%",
        "links": [
            23,
            34,
            64,
            95,
            4,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1015251,
        "thumbId": 1015250,
        "name": "Boo (Super)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015250_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme PHY Type \nKi +4 and HP, ATK & DEF +120%",
        "links": [
            83,
            18,
            28,
            96,
            120,
            1004,
            118
        ],
        "categories": []
    },
    {
        "id": 1015241,
        "thumbId": 1015240,
        "name": "Hyper Meta-Rilldo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015240_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme AGL Type \nKi +4 and HP, ATK & DEF +120%",
        "links": [
            73,
            86,
            105,
            95,
            38,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1015211,
        "thumbId": 1015210,
        "name": "Hit",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015210_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme STR Type \nKi +4 and HP, ATK & DEF +120%",
        "links": [
            30,
            39,
            42,
            126,
            60,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1015221,
        "thumbId": 1015220,
        "name": "Super Saiyan Cabba",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015220_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super STR Type \nKi +4 and HP, ATK & DEF +120%",
        "links": [
            34,
            63,
            29,
            2,
            126,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1022011,
        "thumbId": 1022010,
        "name": "Trunks (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022010_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +2 and HP, ATK & DEF +50%",
        "links": [
            45,
            4,
            40,
            27,
            10,
            37,
            118
        ],
        "categories": []
    },
    {
        "id": 1012461,
        "thumbId": 1012460,
        "name": "Tapion",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012460_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +3; \nSuper TEQ Type HP, ATK & DEF +70%",
        "links": [
            15,
            2,
            30,
            65,
            8,
            37,
            109
        ],
        "categories": []
    },
    {
        "id": 1028731,
        "thumbId": 1028730,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028730_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Goku's Family\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            9,
            22,
            23,
            29,
            45,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1027621,
        "thumbId": 1027620,
        "name": "Super Saiyan 3 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027620_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\" or \"Final Trump Card\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Super Saiyan 3\" or \"Kamehameha\" Category",
        "links": [
            9,
            22,
            29,
            47,
            89,
            116,
            109
        ],
        "categories": []
    },
    {
        "id": 1028161,
        "thumbId": 1028160,
        "name": "Hirudegarn",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028160_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Movie Bosses\" or \"Resurrected Warriors\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to \nthe \"Legendary Existence\" or \n\"Transformation Boost\" Category",
        "links": [
            18,
            49,
            50,
            65,
            119,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1017591,
        "thumbId": 1017590,
        "name": "Android #16",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017590_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Androids/Cell Saga\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            35,
            38,
            17,
            52,
            110,
            37,
            109
        ],
        "categories": []
    },
    {
        "id": 1017571,
        "thumbId": 1017570,
        "name": "Cell Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017570_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Artificial Life Forms\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            33,
            18,
            119,
            4,
            32,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1022651,
        "thumbId": 1022650,
        "name": "Super Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022650_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Mastered Evolution\" or \n\"Pure Saiyans\" Category \nKi +3, HP +130% and ATK & DEF +170%",
        "links": [
            29,
            40,
            26,
            63,
            9,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1010751,
        "thumbId": 1010750,
        "name": "Super Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010750_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, STR & PHY Types \nKi +2 and HP, ATK & DEF +40%",
        "links": [
            9,
            22,
            29,
            26,
            45,
            1001,
            118
        ],
        "categories": []
    },
    {
        "id": 1027581,
        "thumbId": 1027580,
        "name": "Pilaf & Shu & Mai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027580_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Dragon Ball Seekers\" Category \nKi +4 and HP, ATK & DEF +130%",
        "links": [
            8,
            18,
            86,
            90,
            102,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1014711,
        "thumbId": 1014710,
        "name": "Super Trunks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014710_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            9,
            19,
            29,
            40,
            45,
            1001,
            118
        ],
        "categories": []
    },
    {
        "id": 1013341,
        "thumbId": 1013340,
        "name": "Cooler (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013340_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type enemies' ATK & DEF -40%",
        "links": [
            85,
            86,
            39,
            119,
            50,
            28,
            118
        ],
        "categories": []
    },
    {
        "id": 1014721,
        "thumbId": 1014720,
        "name": "Ultimate Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014720_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +50%",
        "links": [
            22,
            34,
            42,
            60,
            103,
            45,
            118
        ],
        "categories": []
    },
    {
        "id": 1011111,
        "thumbId": 1011110,
        "name": "Goku (Youth) (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011110_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and ATK & DEF +40%",
        "links": [
            23,
            102,
            90,
            123,
            124,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1003211,
        "thumbId": 1003210,
        "name": "Super Saiyan 3 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003210_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +3 and ATK +3000",
        "links": [
            9,
            22,
            29,
            89,
            116,
            109
        ],
        "categories": []
    },
    {
        "id": 1021651,
        "thumbId": 1021650,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021650_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Vegeta's Family\" Category \nKi +4 and HP, ATK & DEF +120%",
        "links": [
            40,
            22,
            34,
            39,
            60,
            19,
            125
        ],
        "categories": []
    },
    {
        "id": 1028491,
        "thumbId": 1028490,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028490_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Vegeta's Family\" or \"Super Saiyans\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Pure Saiyans\", \"Battle of Wits\" or \n\"Mastered Evolution\" Category",
        "links": [
            22,
            40,
            97,
            34,
            26,
            63,
            109
        ],
        "categories": []
    },
    {
        "id": 1028521,
        "thumbId": 1028520,
        "name": "King Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028520_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Pure Saiyans\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            22,
            40,
            63,
            97,
            34,
            8,
            109
        ],
        "categories": []
    },
    {
        "id": 1022811,
        "thumbId": 1022810,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022810_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Exploding Rage\" Category \nKi +4 and HP, ATK & DEF +130%",
        "links": [
            4,
            23,
            22,
            34,
            42,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1019401,
        "thumbId": 1019400,
        "name": "Nappa/Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019400_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Inhuman Deeds\" Category \nKi +4 and HP, ATK & DEF +130%; or \nExtreme AGL Type Ki +4 and HP, ATK & DEF +100%",
        "links": [
            22,
            18,
            52,
            49,
            58,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1027601,
        "thumbId": 1027600,
        "name": "Super Saiyan Trunks (Teen) & Super Saiyan Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027600_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Time Travelers\" Category \nKi +3 and HP, ATK & DEF +80%",
        "links": [
            22,
            34,
            60,
            97,
            29,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1017321,
        "thumbId": 1017320,
        "name": "Mecha Freezer & King Cold",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017320_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Wicked Bloodline\" Category \nKi +3 and HP, ATK & DEF +100%",
        "links": [
            52,
            59,
            18,
            86,
            85,
            120,
            125
        ],
        "categories": []
    },
    {
        "id": 1028111,
        "thumbId": 1028110,
        "name": "Vegeta & Nappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028110_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Terrifying Conquerors\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            18,
            22,
            63,
            52,
            58,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1028131,
        "thumbId": 1028130,
        "name": "Piccolo & Gohan (Kid)/Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028130_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Master and Disciple\" or \"Saiyan Saga\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Earth-Bred Fighters\" Category",
        "links": [
            56,
            6,
            39,
            8,
            45,
            42,
            109
        ],
        "categories": []
    },
    {
        "id": 1007101,
        "thumbId": 1007100,
        "name": "Hit",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007100_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Enemies' ATK & DEF -30%",
        "links": [
            16,
            30,
            39,
            42,
            126,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1019711,
        "thumbId": 1019710,
        "name": "Caulifla",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019710_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe 6\" or \"Peppy Gals\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            34,
            22,
            64,
            26,
            126,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1019721,
        "thumbId": 1019720,
        "name": "Kale",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019720_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Pure Saiyans\" or \"Peppy Gals\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            34,
            22,
            64,
            37,
            126,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1019841,
        "thumbId": 1019840,
        "name": "Vados",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019840_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe 6\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            4,
            8,
            37,
            39,
            60,
            80,
            109
        ],
        "categories": []
    },
    {
        "id": 1019741,
        "thumbId": 1019740,
        "name": "Kefla",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019740_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe 6\" Category \nKi +3 and HP, ATK & DEF +170%; \nor \"Rapid Growth\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            22,
            64,
            112,
            103,
            126,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1028281,
        "thumbId": 1028280,
        "name": "Goku Black (Super Saiyan Rosé)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028280_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Super Bosses\" or \"Corroded Body and Mind\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Realm of Gods\", \"Accelerated Battle\" or \n\"Exploding Rage\" Category",
        "links": [
            29,
            50,
            66,
            97,
            119,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1012131,
        "thumbId": 1012130,
        "name": "Tenshinhan & Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012130_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK & DEF +100%",
        "links": [
            45,
            5,
            46,
            24,
            60,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1007141,
        "thumbId": 1007140,
        "name": "Super Saiyan Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007140_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Ki +3 and ATK & DEF +10% \nwhen HP is 99% or less",
        "links": [
            22,
            29,
            61,
            62,
            63,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1013301,
        "thumbId": 1013300,
        "name": "Boo (Super)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013300_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            83,
            18,
            4,
            28,
            96,
            1004,
            118
        ],
        "categories": []
    },
    {
        "id": 1009981,
        "thumbId": 1009980,
        "name": "Turles",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009980_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Ki +3 and ATK & DEF +30% \nwhen HP is 30% or more",
        "links": [
            98,
            22,
            97,
            86,
            50,
            118,
            119
        ],
        "categories": []
    },
    {
        "id": 1011101,
        "thumbId": 1011100,
        "name": "Kami",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011100_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP & DEF +40%",
        "links": [
            26,
            39,
            84,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1027461,
        "thumbId": 1027460,
        "name": "Ribrianne & Kakunsa & Rozie",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027460_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Special Pose\" or \n\"Power of Wishes\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            14,
            28,
            64,
            94,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1015841,
        "thumbId": 1015840,
        "name": "Champa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015840_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Universe 6\" Category Ki +3 and \nHP, ATK & DEF +120%; or PHY Type \nKi +3 and HP, ATK & DEF +70%",
        "links": [
            80,
            79,
            4,
            14,
            58,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1013941,
        "thumbId": 1013940,
        "name": "Jiren",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013940_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe Survival Saga\" Category \nKi +3 and HP, ATK & DEF +150%; \nor STR Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            39,
            60,
            42,
            93,
            80,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1015811,
        "thumbId": 1015810,
        "name": "Bota Magetta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015810_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +2 and HP, ATK & DEF +90%",
        "links": [
            52,
            42,
            14,
            37,
            130,
            126,
            109
        ],
        "categories": []
    },
    {
        "id": 1015791,
        "thumbId": 1015790,
        "name": "Frost (Full Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015790_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +2 and HP, ATK & DEF +90%",
        "links": [
            59,
            28,
            18,
            32,
            130,
            126,
            109
        ],
        "categories": []
    },
    {
        "id": 1027841,
        "thumbId": 1027840,
        "name": "Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027840_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe Survival Saga\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            35,
            31,
            110,
            60,
            130,
            37,
            118
        ],
        "categories": []
    },
    {
        "id": 1027851,
        "thumbId": 1027850,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027850_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe Survival Saga\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            35,
            31,
            110,
            64,
            130,
            37,
            118
        ],
        "categories": []
    },
    {
        "id": 1027541,
        "thumbId": 1027540,
        "name": "Krilin (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027540_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"World Tournament\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            2,
            8,
            36,
            42,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1027431,
        "thumbId": 1027430,
        "name": "Androids #17 & #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027430_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Tournament Participants\" or \"Siblings' Bond\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Representatives of Universe 7\" or \n\"Joined Forces\" Category",
        "links": [
            35,
            31,
            110,
            60,
            130,
            4,
            109
        ],
        "categories": []
    },
    {
        "id": 1027521,
        "thumbId": 1027520,
        "name": "Hell Fighter #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027520_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            35,
            120,
            18,
            119,
            60,
            95,
            118
        ],
        "categories": []
    },
    {
        "id": 1027511,
        "thumbId": 1027510,
        "name": "Android #18 (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027510_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            35,
            31,
            39,
            110,
            64,
            95,
            118
        ],
        "categories": []
    },
    {
        "id": 1027501,
        "thumbId": 1027500,
        "name": "Zirloin & Rabanra & Zarbuto",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027500_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Power of Wishes\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            94,
            130,
            28,
            14,
            37,
            42,
            109
        ],
        "categories": []
    },
    {
        "id": 1016401,
        "thumbId": 1016400,
        "name": "Super Baby 2 (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016400_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Artificial Life Forms\" Category \nKi +4 and HP, ATK & DEF +130%; or \nExtreme AGL Type Ki +4 and HP, ATK & DEF +100%",
        "links": [
            86,
            28,
            50,
            95,
            115,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1027041,
        "thumbId": 1027040,
        "name": "Omega Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027040_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"GT Bosses\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            18,
            50,
            95,
            120,
            127,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1014491,
        "thumbId": 1014490,
        "name": "Goku (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014490_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super STR Type Ki +2 \nand HP, ATK & DEF +90%",
        "links": [
            23,
            34,
            22,
            30,
            97,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1014331,
        "thumbId": 1014330,
        "name": "Freezer (Final Form) (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014330_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme PHY Type \nKi +2 and HP, ATK & DEF +90%",
        "links": [
            26,
            59,
            60,
            85,
            119,
            95,
            118
        ],
        "categories": []
    },
    {
        "id": 1014351,
        "thumbId": 1014350,
        "name": "Cell (Perfect Form) (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014350_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme INT Type Ki +2 \nand HP, ATK & DEF +90%",
        "links": [
            17,
            8,
            60,
            108,
            119,
            95,
            118
        ],
        "categories": []
    },
    {
        "id": 1016511,
        "thumbId": 1016510,
        "name": "Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016510_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Pure Saiyans\" Category \nKi +3 and HP, ATK & DEF +150%; or \nSuper Class Ki +3 and HP, ATK & DEF +100%",
        "links": [
            29,
            40,
            26,
            63,
            9,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1016611,
        "thumbId": 1016610,
        "name": "Super Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016610_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            29,
            40,
            26,
            63,
            9,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1024001,
        "thumbId": 1024000,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024000_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +2 and HP, ATK & DEF +50%",
        "links": [
            26,
            30,
            48,
            122,
            1001,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1027061,
        "thumbId": 1027060,
        "name": "Super Saiyan Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027060_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Heavenly Events\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            9,
            22,
            23,
            29,
            97,
            1001,
            109
        ],
        "categories": []
    },
    {
        "id": 1027001,
        "thumbId": 1027000,
        "name": "Super Saiyan Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027000_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Mastered Evolution\" or \"Androids/Cell Saga\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Rapid Growth\" or \"Earth-Bred Fighters\" Category",
        "links": [
            9,
            19,
            29,
            40,
            97,
            1001,
            109
        ],
        "categories": []
    },
    {
        "id": 1009971,
        "thumbId": 1009970,
        "name": "Beerus",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009970_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Recovers 1500 HP per Ki Sphere of \ncharacter's Type obtained",
        "links": [
            80,
            26,
            79,
            4,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1007971,
        "thumbId": 1007970,
        "name": "Démon Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007970_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ, INT & STR Types \nKi +2 and HP, ATK & DEF +30%",
        "links": [
            86,
            6,
            84,
            90,
            102,
            119,
            118
        ],
        "categories": []
    },
    {
        "id": 1009951,
        "thumbId": 1009950,
        "name": "Super Saiyan Goku (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009950_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR & TEQ Types \nKi +2 and ATK & DEF +50%",
        "links": [
            9,
            34,
            29,
            47,
            95,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1010031,
        "thumbId": 1010030,
        "name": "Super Saiyan Vegeta (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010030_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and ATK & DEF +40%",
        "links": [
            9,
            34,
            40,
            95,
            29,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1021391,
        "thumbId": 1021390,
        "name": "Vegeta (GT) (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021390_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Giant Ape Power\" Category \nKi +3 and HP, ATK & DEF +50%; or \nINT Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            22,
            26,
            124,
            40,
            95,
            123,
            118
        ],
        "categories": []
    },
    {
        "id": 1018101,
        "thumbId": 1018100,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018100_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type ATK +33% per \nPHY Ki Sphere obtained",
        "links": [
            40,
            22,
            34,
            39,
            19,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1011451,
        "thumbId": 1011450,
        "name": "Android #17 (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011450_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +60%",
        "links": [
            67,
            35,
            31,
            18,
            119,
            66,
            109
        ],
        "categories": []
    },
    {
        "id": 1011461,
        "thumbId": 1011460,
        "name": "Android #18 (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011460_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +2 and HP, ATK & DEF +60%",
        "links": [
            67,
            35,
            31,
            18,
            64,
            66,
            109
        ],
        "categories": []
    },
    {
        "id": 1018271,
        "thumbId": 1018270,
        "name": "Android #13",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018270_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Target: Goku\" or \"Androids\" Category \nKi +3, HP +130% and ATK & DEF +170%",
        "links": [
            55,
            35,
            28,
            50,
            119,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1028061,
        "thumbId": 1028060,
        "name": "Super Saiyan Goku & \nSuper Saiyan Vegeta & Super Saiyan Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028060_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyans\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            29,
            9,
            22,
            30,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1018031,
        "thumbId": 1018030,
        "name": "Androids #17 & #18/Android #16",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018030_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Androids\" Category Ki +4 and \nHP, ATK & DEF +150%; or Extreme PHY Type \nKi +4 and HP, ATK & DEF +100%",
        "links": [
            110,
            35,
            37,
            60,
            1001,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1027651,
        "thumbId": 1027650,
        "name": "Android #21 (Normal)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027650_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Androids\", \"Majin Power\" or \"Peppy Gals\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Power Absorption\", \"Transformation Boost\" \nor \"Crossover\" Category",
        "links": [
            8,
            28,
            35,
            60,
            64,
            114,
            109
        ],
        "categories": []
    },
    {
        "id": 1014641,
        "thumbId": 1014640,
        "name": "Android #21 (Transformed, Good)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014640_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Androids\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            35,
            28,
            64,
            8,
            60,
            50,
            118
        ],
        "categories": []
    },
    {
        "id": 1027681,
        "thumbId": 1027680,
        "name": "Android #21 (Transformed, Evil)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027680_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Power Absorption\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            28,
            35,
            50,
            60,
            64,
            109,
            120
        ],
        "categories": []
    },
    {
        "id": 1028421,
        "thumbId": 1028420,
        "name": "Android #18 (Linked State)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1028420_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Crossover\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            8,
            31,
            35,
            60,
            64,
            110,
            118
        ],
        "categories": []
    },
    {
        "id": 1027951,
        "thumbId": 1027950,
        "name": "Trunks (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027950_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +30%",
        "links": [
            39,
            37,
            69,
            57,
            121,
            122,
            118
        ],
        "categories": []
    },
    {
        "id": 1020851,
        "thumbId": 1020850,
        "name": "Super Mira",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020850_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme STR Type \nKi +3 and HP, ATK & DEF +100%",
        "links": [
            35,
            7,
            49,
            52,
            119,
            120,
            118
        ],
        "categories": []
    },
    {
        "id": 1020821,
        "thumbId": 1020820,
        "name": "Demigra (Makyouka Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020820_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme PHY Type \nKi +3 and HP, ATK & DEF +100%",
        "links": [
            76,
            7,
            8,
            65,
            120,
            80,
            118
        ],
        "categories": []
    },
    {
        "id": 1020841,
        "thumbId": 1020840,
        "name": "Dark Masked King",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020840_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme INT Type \nKi +3 and HP, ATK & DEF +100%",
        "links": [
            34,
            22,
            40,
            73,
            49,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1020831,
        "thumbId": 1020830,
        "name": "Black Masked Saiyan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020830_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme AGL Type \nKi +3 and HP, ATK & DEF +100%",
        "links": [
            34,
            22,
            40,
            26,
            49,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1020651,
        "thumbId": 1020650,
        "name": "Super Saiyan 4 Vegetto (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020650_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Crossover\" Category \nKi +3 and HP, ATK & DEF +170%",
        "links": [
            29,
            47,
            112,
            103,
            97,
            124,
            109
        ],
        "categories": []
    },
    {
        "id": 1020671,
        "thumbId": 1020670,
        "name": "Super Saiyan 4 Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020670_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Giant Ape Power\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            22,
            29,
            119,
            18,
            97,
            124,
            109
        ],
        "categories": []
    },
    {
        "id": 1020551,
        "thumbId": 1020550,
        "name": "Demon Goddess Towa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020550_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Dragon Ball Heroes\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            7,
            37,
            64,
            76,
            86,
            114,
            118
        ],
        "categories": []
    },
    {
        "id": 1020911,
        "thumbId": 1020910,
        "name": "Demon God Dabra (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020910_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Dragon Ball Heroes\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            73,
            60,
            18,
            76,
            119,
            120,
            118
        ],
        "categories": []
    },
    {
        "id": 1027911,
        "thumbId": 1027910,
        "name": "Golden Metal Cooler",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027910_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Crossover\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            85,
            105,
            106,
            107,
            60,
            39,
            118
        ],
        "categories": []
    },
    {
        "id": 1027921,
        "thumbId": 1027920,
        "name": "Janemba (Modified)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027920_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Crossover\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            18,
            28,
            50,
            60,
            119,
            120,
            118
        ],
        "categories": []
    },
    {
        "id": 1025461,
        "thumbId": 1025460,
        "name": "Lagss",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025460_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Dragon Ball Heroes\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            4,
            37,
            39,
            64,
            73,
            118
        ],
        "categories": []
    },
    {
        "id": 1027711,
        "thumbId": 1027710,
        "name": "Super Full Power Saiyan 4 Limit Breaker Vegetto (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027710_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Dragon Ball Heroes\", \"Giant Ape Power\" \nor \"Fused Fighters\" Category Ki +3 and \nHP, ATK & DEF +170%, plus an additional \nHP, ATK & DEF +30% for characters who \nalso belong to the \"Crossover\" Category",
        "links": [
            29,
            60,
            97,
            103,
            112,
            124,
            109
        ],
        "categories": []
    },
    {
        "id": 1027731,
        "thumbId": 1027730,
        "name": "Super Full Power Saiyan 4 Limit Breaker Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027730_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Time Travelers\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            18,
            22,
            29,
            97,
            119,
            124,
            109
        ],
        "categories": []
    },
    {
        "id": 1027751,
        "thumbId": 1027750,
        "name": "Crimson Masked Saiyan (Super Saiyan Rosé 3)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027750_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Dragon Ball Heroes\", \"Super Saiyan 3\" \nor \"Transformation Boost\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to \nthe \"Crossover\" Category",
        "links": [
            18,
            29,
            80,
            97,
            119,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1027781,
        "thumbId": 1027780,
        "name": "Super Saiyan God SS Vegeta (Berserk Controlled)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027780_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Crossover\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            22,
            26,
            29,
            40,
            63,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1027901,
        "thumbId": 1027900,
        "name": "Dark King Fu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027900_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Battle of Wits\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            7,
            8,
            39,
            50,
            80,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1019341,
        "thumbId": 1019340,
        "name": "Beerus",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019340_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Exploding Rage\" or \"Realm of Gods\" Category \nKi +3, HP +130% and ATK & DEF +170%",
        "links": [
            80,
            26,
            79,
            4,
            60,
            49,
            109
        ],
        "categories": []
    },
    {
        "id": 1026901,
        "thumbId": 1026900,
        "name": "Super Saiyan 4 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026900_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"GT Heroes\" or \"Full Power\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Pure Saiyans\" or \"Hybrid Saiyans\" Category",
        "links": [
            29,
            60,
            95,
            97,
            124,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1026871,
        "thumbId": 1026870,
        "name": "Baby",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026870_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Revenge\" or \"Inhuman Deeds\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            28,
            32,
            50,
            86,
            95,
            115,
            109
        ],
        "categories": []
    },
    {
        "id": 1025231,
        "thumbId": 1025230,
        "name": "Dabra (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025230_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Otherworld Warriors\" Category \nKi +2 and HP, ATK & DEF +50%; \nor PHY Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            14,
            17,
            76,
            129,
            37,
            4,
            118
        ],
        "categories": []
    },
    {
        "id": 1027161,
        "thumbId": 1027160,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027160_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Peppy Gals\" Category or Extreme STR Type \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            4,
            31,
            35,
            60,
            64,
            110,
            118
        ],
        "categories": []
    },
    {
        "id": 1016251,
        "thumbId": 1016250,
        "name": "Launch",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016250_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            64,
            12,
            28,
            49,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1027181,
        "thumbId": 1027180,
        "name": "Mamba",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027180_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Peppy Gals\" Category or Extreme AGL Type \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            12,
            32,
            64,
            95,
            28,
            14,
            118
        ],
        "categories": []
    },
    {
        "id": 1017701,
        "thumbId": 1017700,
        "name": "Oceanus Shenron (Princess Oto)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017700_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Shadow Dragon Saga\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            64,
            28,
            39,
            127,
            53,
            95,
            118
        ],
        "categories": []
    },
    {
        "id": 1026821,
        "thumbId": 1026820,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026820_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\" or \n\"Final Trump Card\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            22,
            23,
            34,
            45,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1026941,
        "thumbId": 1026940,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026940_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL & TEQ Types \nKi +3 and HP, ATK & DEF +30%",
        "links": [
            22,
            40,
            26,
            57,
            63,
            122,
            118
        ],
        "categories": []
    },
    {
        "id": 1016811,
        "thumbId": 1016810,
        "name": "Super Saiyan Gohan (Teen) & \nSuper Saiyan Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016810_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Siblings' Bond\" Category Ki +4, \nATK +170% and HP & DEF +150%; \nor \"Goku's Family\" Category Ki +3, \nATK +170% and HP & DEF +130%",
        "links": [
            23,
            29,
            9,
            47,
            1000,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1026731,
        "thumbId": 1026730,
        "name": "Dr. Wheelo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026730_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Revenge\" Category \nKi +4 and HP, ATK & DEF +130%",
        "links": [
            26,
            38,
            65,
            86,
            114,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1013791,
        "thumbId": 1013790,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013790_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type enemies' ATK & DEF -43%",
        "links": [
            45,
            23,
            42,
            22,
            97,
            30,
            109
        ],
        "categories": []
    },
    {
        "id": 1027081,
        "thumbId": 1027080,
        "name": "Turles",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027080_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type enemies' ATK & DEF -30%",
        "links": [
            18,
            22,
            97,
            98,
            86,
            50,
            118
        ],
        "categories": []
    },
    {
        "id": 1026751,
        "thumbId": 1026750,
        "name": "Turles",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026750_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Space-Traveling Warriors\" or \"Pure Saiyans\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to \nthe \"Planetary Destruction\" or \n\"Low-Class Warrior\" Category",
        "links": [
            22,
            50,
            86,
            18,
            97,
            98,
            109
        ],
        "categories": []
    },
    {
        "id": 1013681,
        "thumbId": 1013680,
        "name": "Turles (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013680_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +30%",
        "links": [
            98,
            97,
            86,
            50,
            123,
            124,
            109
        ],
        "categories": []
    },
    {
        "id": 1026771,
        "thumbId": 1026770,
        "name": "Amond & Rasin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026770_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Planetary Destruction\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            73,
            98,
            100,
            18,
            86,
            52,
            109
        ],
        "categories": []
    },
    {
        "id": 1026791,
        "thumbId": 1026790,
        "name": "Daiz & Cacao",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026790_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Space-Traveling Warriors\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            73,
            98,
            100,
            18,
            86,
            37,
            109
        ],
        "categories": []
    },
    {
        "id": 1018881,
        "thumbId": 1018880,
        "name": "Goku Black (Super Saiyan Rosé)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018880_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Future Saga\" Category \nKi +4 and HP, ATK & DEF +130%; or \nExtreme INT Type Ki +4 and HP, ATK & DEF +100%",
        "links": [
            29,
            120,
            47,
            66,
            50,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1015471,
        "thumbId": 1015470,
        "name": "Goku Black",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015470_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Time Travelers\" Category \nKi +3 and HP, ATK & DEF +150%; or \nExtreme INT Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            39,
            120,
            119,
            97,
            66,
            50,
            109
        ],
        "categories": []
    },
    {
        "id": 1027351,
        "thumbId": 1027350,
        "name": "Super Saiyan Trunks (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027350_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Entrusted Will\" Category \nKi +3 and HP, ATK & DEF +50%; \nor TEQ & STR Types Ki +2 and \nHP, ATK & DEF +30%",
        "links": [
            29,
            9,
            40,
            97,
            19,
            66,
            118
        ],
        "categories": []
    },
    {
        "id": 1027251,
        "thumbId": 1027250,
        "name": "Trunks (Teen) (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027250_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Future Saga\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            19,
            39,
            40,
            66,
            45,
            1001,
            118
        ],
        "categories": []
    },
    {
        "id": 1012961,
        "thumbId": 1012960,
        "name": "Super Saiyan Trunks (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012960_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class HP, ATK & DEF +80%",
        "links": [
            29,
            9,
            40,
            19,
            66,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1008531,
        "thumbId": 1008530,
        "name": "Super Saiyan Gohan (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008530_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK +70%",
        "links": [
            9,
            29,
            97,
            30,
            47,
            66,
            118
        ],
        "categories": []
    },
    {
        "id": 1012991,
        "thumbId": 1012990,
        "name": "Zamasu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012990_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme Class HP, ATK & DEF +80%",
        "links": [
            103,
            39,
            26,
            80,
            66,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1019281,
        "thumbId": 1019280,
        "name": "Super Saiyan Trunks (Future) & Mai (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019280_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Joined Forces\" Category \nKi +3 and HP, ATK & DEF +120%; or \nAGL Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            8,
            39,
            2,
            66,
            97,
            37,
            109
        ],
        "categories": []
    },
    {
        "id": 1027291,
        "thumbId": 1027290,
        "name": "Super Saiyan Trunks (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027290_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Time Travelers\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            9,
            40,
            29,
            66,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1027331,
        "thumbId": 1027330,
        "name": "Super Saiyan Gohan (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027330_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Future Saga\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            9,
            22,
            29,
            30,
            66,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1018151,
        "thumbId": 1018150,
        "name": "Super Saiyan Trunks (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018150_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Master and Disciple\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            40,
            29,
            9,
            39,
            19,
            66,
            109
        ],
        "categories": []
    },
    {
        "id": 1018121,
        "thumbId": 1018120,
        "name": "Gohan (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018120_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Master and Disciple\" \nor \"Hybrid Saiyans\" Category \nKi +3, HP & ATK +170% and DEF +130%",
        "links": [
            23,
            22,
            34,
            39,
            30,
            66,
            109
        ],
        "categories": []
    },
    {
        "id": 1017081,
        "thumbId": 1017080,
        "name": "Trunks (Teen) (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017080_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Future Saga\" Category Ki +3, \nHP & ATK +170% and DEF +130%; or \nSuper Class Ki +3 and HP, ATK & DEF +120%",
        "links": [
            22,
            34,
            40,
            19,
            66,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1017061,
        "thumbId": 1017060,
        "name": "Mai (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017060_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Time Travelers\" Category \nKi +3 and HP, ATK & DEF +120%; \nor INT Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            64,
            8,
            39,
            37,
            66,
            2,
            109
        ],
        "categories": []
    },
    {
        "id": 1017121,
        "thumbId": 1017120,
        "name": "Zamasu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017120_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Realm of Gods\" Category Ki +3, \nHP & ATK +170% and DEF +130%; or \nExtreme Class Ki +3 and HP, ATK & DEF +120%",
        "links": [
            103,
            39,
            26,
            80,
            66,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1017021,
        "thumbId": 1017020,
        "name": "Gowasu & Zamasu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017020_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Realm of Gods\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            80,
            39,
            37,
            17,
            14,
            8,
            109
        ],
        "categories": []
    },
    {
        "id": 1027221,
        "thumbId": 1027220,
        "name": "Fusion Zamasu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027220_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Realm of Gods\", \"Worldwide Chaos\" or \n\"Fused Fighters\" Category Ki +3 and \nHP, ATK & DEF +170%, plus an additional \nHP, ATK & DEF +30% for characters who \nalso belong to the \"Time Travelers\" or \n\"Final Trump Card\" Category; Extreme Class \nKi +3 and HP, ATK & DEF +150% \n(\"Realm of Gods\", \"Worldwide Chaos\" or \n\"Fused Fighters\" Category characters excluded)",
        "links": [
            50,
            66,
            80,
            112,
            119,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1027121,
        "thumbId": 1027120,
        "name": "Super Saiyan God SS Goku & \nSuper Saiyan God SS Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027120_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Battle of Fate\", \"Future Saga\" or \n\"Power Beyond Super Saiyan\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Realm of Gods\" or \"Time Travelers\" Category; \nSuper Class Ki +3 and HP, ATK & DEF +150% \n(\"Battle of Fate\", \"Future Saga\" or \"Power Beyond \nSuper Saiyan\" Category characters excluded)",
        "links": [
            29,
            70,
            80,
            97,
            109,
            47,
            125
        ],
        "categories": []
    },
    {
        "id": 1027371,
        "thumbId": 1027370,
        "name": "Mai (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027370_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Connected Hope\" or \n\"Future Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            2,
            8,
            37,
            39,
            64,
            66,
            109
        ],
        "categories": []
    },
    {
        "id": 1027391,
        "thumbId": 1027390,
        "name": "Zamasu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1027390_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Potara\" or \"Future Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            26,
            39,
            120,
            80,
            103,
            18,
            109
        ],
        "categories": []
    },
    {
        "id": 1019531,
        "thumbId": 1019530,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019530_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Earthlings\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            45,
            36,
            2,
            1,
            37,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1016841,
        "thumbId": 1016840,
        "name": "Super Saiyan 2 Caulifla & \nSuper Saiyan 2 Kale",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016840_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Joined Forces\" Category Ki +4 and \nHP, ATK & DEF +130%; or Super AGL Type \nKi +4 and HP, ATK & DEF +100%",
        "links": [
            29,
            64,
            126,
            130,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1025651,
        "thumbId": 1025650,
        "name": "Hatchiyack (Giant Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025650_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Giant Form\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            49,
            50,
            52,
            115,
            120,
            123,
            125
        ],
        "categories": []
    },
    {
        "id": 1026511,
        "thumbId": 1026510,
        "name": "Frost (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026510_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Transformation Boost\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            18,
            28,
            32,
            59,
            126,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1026481,
        "thumbId": 1026480,
        "name": "Kale (Berserk)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026480_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe 6\" or \"Transformation Boost\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Universe Survival Saga\" or \"Full Power\" Category",
        "links": [
            34,
            49,
            64,
            97,
            126,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1018651,
        "thumbId": 1018650,
        "name": "Vegetto",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018650_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Final Trump Card\" or \"Potara\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            22,
            8,
            103,
            89,
            112,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1018621,
        "thumbId": 1018620,
        "name": "Gogeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018620_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Final Trump Card\" or \"Fusion\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            22,
            112,
            97,
            89,
            47,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1026331,
        "thumbId": 1026330,
        "name": "Mr. Satan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026330_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Earth-Bred Fighters\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            10,
            15,
            20,
            27,
            42,
            44,
            118
        ],
        "categories": []
    },
    {
        "id": 1018491,
        "thumbId": 1018490,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018490_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyans\" Category \nKi +4 and HP, ATK & DEF +130%",
        "links": [
            29,
            9,
            22,
            30,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1018541,
        "thumbId": 1018540,
        "name": "Super Saiyan God SS Goku (Kaioken)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018540_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Representatives of Universe 7\" or \n\"Universe Survival Saga\" Category \nKi +3, HP +130% and ATK & DEF +170%",
        "links": [
            80,
            70,
            29,
            47,
            130,
            89,
            109
        ],
        "categories": []
    },
    {
        "id": 1015051,
        "thumbId": 1015050,
        "name": "Boo (Super)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015050_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Transformation Boost\" Category \nKi +3 and HP, ATK & DEF +150%; or \nExtreme STR Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            83,
            18,
            28,
            96,
            120,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1012381,
        "thumbId": 1012380,
        "name": "Super Vegetto",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012380_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Majin Buu Saga\" Category Ki +3, \nHP & DEF +170% and ATK +130%",
        "links": [
            9,
            29,
            97,
            42,
            103,
            112,
            109
        ],
        "categories": []
    },
    {
        "id": 1025821,
        "thumbId": 1025820,
        "name": "Super Saiyan 3 Gotenks & Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025820_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Gifted Warriors\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            4,
            26,
            29,
            37,
            89,
            112,
            109
        ],
        "categories": []
    },
    {
        "id": 1025841,
        "thumbId": 1025840,
        "name": "Eis Shenron & Nuova Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025840_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"GT Bosses\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            17,
            18,
            39,
            60,
            95,
            127,
            109
        ],
        "categories": []
    },
    {
        "id": 1025021,
        "thumbId": 1025020,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025020_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "ATK & DEF +18% per Ki Sphere obtained",
        "links": [
            22,
            23,
            30,
            34,
            45,
            97
        ],
        "categories": []
    },
    {
        "id": 1025020,
        "thumbId": 1025020,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025020_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK & DEF +18% per Ki Sphere obtained",
        "links": [
            22,
            23,
            30,
            34,
            45,
            97
        ],
        "categories": []
    },
    {
        "id": 1010711,
        "thumbId": 1010710,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010710_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, TEQ & INT Types \nKi +2 and HP, ATK & DEF +30%",
        "links": [
            45,
            9,
            22,
            29,
            97,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1009961,
        "thumbId": 1009960,
        "name": "Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009960_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT & STR Types \nKi +2 and HP, ATK & DEF +30%",
        "links": [
            23,
            34,
            39,
            65,
            103,
            118
        ],
        "categories": []
    },
    {
        "id": 1008081,
        "thumbId": 1008080,
        "name": "Goku (Kaioken)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008080_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, TEQ & PHY Types \nKi +2 and HP & ATK +30%",
        "links": [
            23,
            34,
            47,
            60,
            89,
            118
        ],
        "categories": []
    },
    {
        "id": 1007981,
        "thumbId": 1007980,
        "name": "Démon Piccolo (Elder)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007980_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +20%",
        "links": [
            65,
            6,
            84,
            90,
            102,
            119,
            118
        ],
        "categories": []
    },
    {
        "id": 1011081,
        "thumbId": 1011080,
        "name": "Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011080_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Ki +3 and ATK & DEF +30% \nwhen HP is 30% or more",
        "links": [
            22,
            34,
            4,
            60,
            112,
            47,
            109
        ],
        "categories": []
    },
    {
        "id": 1011071,
        "thumbId": 1011070,
        "name": "Super Saiyan Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011070_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and ATK & DEF +30%",
        "links": [
            9,
            29,
            97,
            4,
            112,
            1003,
            109
        ],
        "categories": []
    },
    {
        "id": 1026431,
        "thumbId": 1026430,
        "name": "Boo (Super)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026430_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Majin Buu Saga\" or \n\"Heavenly Events\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            18,
            28,
            83,
            96,
            120,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1017351,
        "thumbId": 1017350,
        "name": "Cell (1st Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017350_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Artificial Life Forms\" Category \nKi +3 and HP, ATK & DEF +100%",
        "links": [
            12,
            19,
            50,
            33,
            60,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1014911,
        "thumbId": 1014910,
        "name": "Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014910_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Androids\" Category Ki +3, \nHP & ATK +170% and DEF +130%; \nor Super PHY Type Ki +3 and \nHP, ATK & DEF +90%",
        "links": [
            35,
            31,
            110,
            37,
            60,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1014111,
        "thumbId": 1014110,
        "name": "Trunks (Kid) & Goten (Kid) & Marron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014110_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            4,
            14,
            82,
            69,
            26,
            93,
            118
        ],
        "categories": []
    },
    {
        "id": 1020171,
        "thumbId": 1020170,
        "name": "Kahseral (Pride Troopers)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020170_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class Ki +3 and HP, ATK & DEF +40%",
        "links": [
            93,
            94,
            8,
            16,
            39,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1026201,
        "thumbId": 1026200,
        "name": "Android #17 & Hell Fighter #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026200_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Joined Forces\" or \"Target: Goku\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to \nthe \"Androids\" Category",
        "links": [
            18,
            35,
            60,
            95,
            119,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1026231,
        "thumbId": 1026230,
        "name": "Dr. Myuu & Dr. Gero",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026230_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Target: Goku\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            26,
            86,
            95,
            114,
            119,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1025251,
        "thumbId": 1025250,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025250_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"DB Saga\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            12,
            37,
            42,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1011431,
        "thumbId": 1011430,
        "name": "Bulma (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011430_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            64,
            37,
            8,
            90,
            102,
            114,
            118
        ],
        "categories": []
    },
    {
        "id": 1026851,
        "thumbId": 1026850,
        "name": "Jackie Chun",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026850_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & INT Types \nKi +3 and HP, ATK & DEF +30%",
        "links": [
            16,
            27,
            102,
            57,
            90,
            122,
            118
        ],
        "categories": []
    },
    {
        "id": 1026611,
        "thumbId": 1026610,
        "name": "Bulma (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026610_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Dragon Ball Seekers\" or \"DB Saga\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            8,
            37,
            64,
            90,
            102,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1017491,
        "thumbId": 1017490,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017490_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Namekians\" Category \nKi +4 and HP, ATK & DEF +170%; \nor \"Worthy Rivals\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            45,
            30,
            48,
            8,
            60,
            39,
            109
        ],
        "categories": []
    },
    {
        "id": 1026631,
        "thumbId": 1026630,
        "name": "Cyborg Tao",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026630_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR & AGL Types \nKi +3 and HP, ATK & DEF +30%",
        "links": [
            5,
            16,
            32,
            57,
            65,
            122,
            118
        ],
        "categories": []
    },
    {
        "id": 1026531,
        "thumbId": 1026530,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026530_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Earth-Bred Fighters\" or \"Powerful Comeback\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Battle of Fate\" or \"World Tournament\" Category",
        "links": [
            23,
            27,
            34,
            42,
            90,
            102,
            109
        ],
        "categories": []
    },
    {
        "id": 1026581,
        "thumbId": 1026580,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026580_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Kamehameha\" or \n\"World Tournament\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            8,
            36,
            42,
            47,
            90,
            102,
            109
        ],
        "categories": []
    },
    {
        "id": 1021311,
        "thumbId": 1021310,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021310_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Worthy Rivals\" or \n\"World Tournament\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            5,
            39,
            42,
            60,
            90,
            102,
            109
        ],
        "categories": []
    },
    {
        "id": 1026561,
        "thumbId": 1026560,
        "name": "Piccolo Jr. (Giant Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026560_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Gifted Warriors\", \"Terrifying Conquerors\" or \"Giant Form\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Battle of Fate\" or \"World Tournament\" Category",
        "links": [
            50,
            52,
            86,
            90,
            102,
            123,
            109
        ],
        "categories": []
    },
    {
        "id": 1009231,
        "thumbId": 1009230,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009230_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "HP +150%",
        "links": [
            26,
            8,
            56,
            60,
            30,
            117,
            125
        ],
        "categories": []
    },
    {
        "id": 1009941,
        "thumbId": 1009940,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009940_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ, INT & STR Types \nKi +2 and HP & ATK +30%",
        "links": [
            29,
            22,
            9,
            47,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1011151,
        "thumbId": 1011150,
        "name": "Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011150_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & STR Types \nKi +3 and HP, ATK & DEF +30%",
        "links": [
            22,
            34,
            62,
            63,
            97,
            118,
            61
        ],
        "categories": []
    },
    {
        "id": 1011391,
        "thumbId": 1011390,
        "name": "Super Saiyan 2 Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011390_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, TEQ & PHY Types \nKi +2 and HP & ATK +50%",
        "links": [
            9,
            22,
            29,
            47,
            1001,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1013321,
        "thumbId": 1013320,
        "name": "Goku (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013320_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +50%",
        "links": [
            23,
            36,
            47,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1026341,
        "thumbId": 1026340,
        "name": "Gotenks (Failure) A",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026340_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            34,
            112,
            113,
            57,
            1003,
            122,
            118
        ],
        "categories": []
    },
    {
        "id": 1026351,
        "thumbId": 1026350,
        "name": "Gotenks (Failure) B",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026350_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            34,
            112,
            113,
            57,
            1003,
            122,
            118
        ],
        "categories": []
    },
    {
        "id": 1025901,
        "thumbId": 1025900,
        "name": "Super Saiyan Trunks (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025900_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type enemies' ATK & DEF -40%",
        "links": [
            4,
            9,
            10,
            29,
            82,
            1000,
            118
        ],
        "categories": []
    },
    {
        "id": 1026001,
        "thumbId": 1026000,
        "name": "Super Saiyan Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026000_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type enemies' ATK & DEF -40%",
        "links": [
            4,
            9,
            29,
            47,
            82,
            1000,
            118
        ],
        "categories": []
    },
    {
        "id": 1012161,
        "thumbId": 1012160,
        "name": "Full Power Boujack (Galactic Warrior)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012160_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme INT Type Ki +4 \nand HP, ATK & DEF +100%; \nSuper INT Type Ki +2 \nand HP, ATK & DEF +70%",
        "links": [
            87,
            88,
            50,
            86,
            65,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1016311,
        "thumbId": 1016310,
        "name": "Uub (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016310_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Resurrected Warriors\" Category \nKi +3 and HP, ATK & DEF +100%",
        "links": [
            42,
            65,
            52,
            39,
            47,
            95,
            125
        ],
        "categories": []
    },
    {
        "id": 1026031,
        "thumbId": 1026030,
        "name": "Yajirobe",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026030_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Earth-Bred Fighters\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            12,
            32,
            42,
            52,
            37,
            14,
            109
        ],
        "categories": []
    },
    {
        "id": 1026311,
        "thumbId": 1026310,
        "name": "Bulma (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026310_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Dragon Ball Seekers\" Category \nKi +4 and HP, ATK & DEF +50%",
        "links": [
            60,
            10,
            8,
            90,
            102,
            114,
            118
        ],
        "categories": []
    },
    {
        "id": 1021851,
        "thumbId": 1021850,
        "name": "Great Saiyaman & Videl",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021850_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Defenders of Justice\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            42,
            2,
            69,
            93,
            94,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1010251,
        "thumbId": 1010250,
        "name": "Super Saiyan 3 Goku (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010250_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR & PHY Type Ki +3 and HP, ATK & \nDEF +30%",
        "links": [
            9,
            29,
            34,
            89,
            116,
            65,
            109
        ],
        "categories": []
    },
    {
        "id": 1013771,
        "thumbId": 1013770,
        "name": "Beerus & Whis",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013770_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "Super STR Type Ki +4 and HP, ATK & DEF +100%; \nExtreme STR Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            80,
            26,
            4,
            79,
            60,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1012331,
        "thumbId": 1012330,
        "name": "Super Saiyan God SS Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012330_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and ATK & DEF +50%",
        "links": [
            29,
            22,
            70,
            47,
            97,
            34,
            109
        ],
        "categories": []
    },
    {
        "id": 1012681,
        "thumbId": 1012680,
        "name": "Beerus",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012680_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type ATK +33% \nper INT Ki Sphere obtained",
        "links": [
            80,
            26,
            79,
            4,
            60,
            49,
            118
        ],
        "categories": []
    },
    {
        "id": 1005321,
        "thumbId": 1005320,
        "name": "Whis",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005320_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, TEQ & STR Types \nKi +2 and HP, ATK & DEF +30%",
        "links": [
            80,
            39,
            79,
            17,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1005311,
        "thumbId": 1005310,
        "name": "Whis",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005310_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, INT & PHY Types \nKi +3 and HP, ATK & DEF +20%",
        "links": [
            80,
            39,
            79,
            17,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1013601,
        "thumbId": 1013600,
        "name": "Super Saiyan God Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013600_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +40%",
        "links": [
            80,
            60,
            29,
            89,
            70,
            117,
            109
        ],
        "categories": []
    },
    {
        "id": 1013591,
        "thumbId": 1013590,
        "name": "Super Saiyan God Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013590_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +40%",
        "links": [
            80,
            60,
            29,
            89,
            47,
            70,
            109
        ],
        "categories": []
    },
    {
        "id": 1010731,
        "thumbId": 1010730,
        "name": "Super Saiyan God Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010730_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT & STR Types \nKi +2 and ATK & DEF +50%",
        "links": [
            80,
            60,
            29,
            89,
            47,
            34,
            118
        ],
        "categories": []
    },
    {
        "id": 1012651,
        "thumbId": 1012650,
        "name": "Super Saiyan 2 Vegeta & Bulma",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012650_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class Ki +3 and HP, ATK & DEF +40%",
        "links": [
            29,
            40,
            26,
            9,
            49,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1026281,
        "thumbId": 1026280,
        "name": "Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026280_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Exploding Rage\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            9,
            22,
            26,
            29,
            40,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1026251,
        "thumbId": 1026250,
        "name": "Super Saiyan God Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026250_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Pure Saiyans\" or \"Hybrid Saiyans\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Power of Wishes\" or \"Exploding Rage\" Category",
        "links": [
            29,
            60,
            70,
            80,
            89,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1010311,
        "thumbId": 1010310,
        "name": "Super Saiyan Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010310_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +20%",
        "links": [
            29,
            61,
            62,
            63,
            97,
            117,
            109
        ],
        "categories": []
    },
    {
        "id": 1010301,
        "thumbId": 1010300,
        "name": "Super Saiyan Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010300_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & TEQ Types Ki +3 and HP & DEF +70%",
        "links": [
            9,
            29,
            61,
            117,
            63,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1010321,
        "thumbId": 1010320,
        "name": "Super Saiyan 2 Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010320_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +30%",
        "links": [
            9,
            29,
            61,
            62,
            63,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1011781,
        "thumbId": 1011780,
        "name": "Super Saiyan 3 Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011780_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyan 3\" Category Ki +3 \nand HP +130%, ATK & DEF +170%; \nor Super INT Type Ki +3 and \nHP, ATK & DEF +90%",
        "links": [
            29,
            97,
            30,
            117,
            89,
            116,
            109
        ],
        "categories": []
    },
    {
        "id": 1025671,
        "thumbId": 1025670,
        "name": "Tora",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025670_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Storied Figures\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            22,
            34,
            39,
            62,
            63,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1025091,
        "thumbId": 1025090,
        "name": "Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025090_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Goku's Family\" or \"Storied Figures\" Category \nKi +3 and HP, ATK & DEF +170%, plus an additional \nHP, ATK & DEF +30% for characters who also \nbelong to the \"Pure Saiyans\" Category",
        "links": [
            22,
            34,
            61,
            62,
            63,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1017631,
        "thumbId": 1017630,
        "name": "Super Saiyan Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017630_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Kamehameha\" Category Ki +3, \nHP +130% and ATK & DEF +170%; \nor Super AGL Type Ki +3 and \nHP, ATK & DEF +120%",
        "links": [
            29,
            22,
            9,
            47,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1017901,
        "thumbId": 1017900,
        "name": "Cell (Perfect Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017900_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Androids/Cell Saga\" Category \nKi +4, HP & ATK +150% and DEF +170%; or \nExtreme INT Type Ki +3 and HP, ATK & DEF +120%",
        "links": [
            17,
            19,
            50,
            47,
            108,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1026051,
        "thumbId": 1026050,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026050_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +2 and HP, ATK & DEF +50%",
        "links": [
            45,
            46,
            1001,
            1002,
            1003,
            122,
            118
        ],
        "categories": []
    },
    {
        "id": 1010271,
        "thumbId": 1010270,
        "name": "Super Saiyan 2 Goku (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010270_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & PHY Types Ki +3 and HP & DEF +70%",
        "links": [
            9,
            29,
            47,
            22,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1018251,
        "thumbId": 1018250,
        "name": "Super Saiyan God Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018250_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Pure Saiyans\" or \"Hybrid Saiyans\" Category \nKi +4 and HP, ATK & DEF +130%",
        "links": [
            80,
            70,
            29,
            47,
            89,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1016571,
        "thumbId": 1016570,
        "name": "Goku (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016570_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"DB Saga\" Category Ki +3 \nand HP, ATK & DEF +170%; \nor \"Youth\" Category Ki +3 \nand HP, ATK & DEF +150%",
        "links": [
            47,
            102,
            23,
            4,
            90,
            36,
            109
        ],
        "categories": []
    },
    {
        "id": 1010971,
        "thumbId": 1010970,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010970_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            30,
            45,
            36,
            2,
            1,
            37,
            118
        ],
        "categories": []
    },
    {
        "id": 1010961,
        "thumbId": 1010960,
        "name": "Nappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010960_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            22,
            18,
            52,
            49,
            58,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1010951,
        "thumbId": 1010950,
        "name": "Tortue Géniale (Max Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010950_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            27,
            36,
            47,
            16,
            89,
            42,
            118
        ],
        "categories": []
    },
    {
        "id": 1010981,
        "thumbId": 1010980,
        "name": "Dabra",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010980_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            18,
            73,
            76,
            77,
            119,
            120,
            118
        ],
        "categories": []
    },
    {
        "id": 1010991,
        "thumbId": 1010990,
        "name": "Great Saiyaman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010990_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            8,
            45,
            69,
            93,
            94,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1014471,
        "thumbId": 1014470,
        "name": "Metal Cooler Army",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014470_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme Class Ki +3 and \nHP, ATK & DEF +70%",
        "links": [
            105,
            60,
            119,
            85,
            50,
            120,
            125
        ],
        "categories": []
    },
    {
        "id": 1025041,
        "thumbId": 1025040,
        "name": "Hacchan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025040_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"DB Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            17,
            35,
            42,
            52,
            90,
            102,
            109
        ],
        "categories": []
    },
    {
        "id": 1006431,
        "thumbId": 1006430,
        "name": "Champa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006430_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            80,
            79,
            4,
            14,
            58,
            60
        ],
        "categories": []
    },
    {
        "id": 1006430,
        "thumbId": 1006430,
        "name": "Champa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006430_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            80,
            79,
            4,
            14,
            58,
            60
        ],
        "categories": []
    },
    {
        "id": 1024091,
        "thumbId": 1024090,
        "name": "Grand-père Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024090_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +30%",
        "links": [
            36,
            23,
            57,
            90,
            102,
            122,
            118
        ],
        "categories": []
    },
    {
        "id": 1021081,
        "thumbId": 1021080,
        "name": "Golden Freezer & Sorbet",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021080_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Joined Forces\" Category \nKi +2 and HP, ATK & DEF +50%; or \nTEQ Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            72,
            8,
            32,
            39,
            86,
            26,
            118
        ],
        "categories": []
    },
    {
        "id": 1025601,
        "thumbId": 1025600,
        "name": "Super Saiyan Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025600_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Master and Disciple\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            29,
            23,
            8,
            34,
            97,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1009741,
        "thumbId": 1009740,
        "name": "Super Saiyan God SS Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009740_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK & DEF +30%",
        "links": [
            29,
            70,
            26,
            71,
            68,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1009731,
        "thumbId": 1009730,
        "name": "Super Saiyan God SS Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009730_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type ATK +33% per PHY Ki Sphere obtained",
        "links": [
            29,
            70,
            26,
            71,
            68,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1009721,
        "thumbId": 1009720,
        "name": "Super Saiyan God SS Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009720_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK & DEF +30%",
        "links": [
            29,
            70,
            26,
            71,
            68,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1016001,
        "thumbId": 1016000,
        "name": "Super Saiyan Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016000_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Movie Bosses\" Category Ki +3, \nATK +170% and HP & DEF +150%; \nor \"Full Power\" Category Ki +3, \nATK +170% and HP & DEF +130%",
        "links": [
            22,
            29,
            26,
            49,
            60,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1015971,
        "thumbId": 1015970,
        "name": "Super Saiyan Gogeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015970_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\" Category Ki +3, \nATK +170% and HP & DEF +150%; \nor \"Fusion\" Category Ki +3, \nATK +170% and HP & DEF +130%",
        "links": [
            22,
            9,
            29,
            97,
            89,
            112,
            109
        ],
        "categories": []
    },
    {
        "id": 1026091,
        "thumbId": 1026090,
        "name": "Pan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026090_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Parent and Child\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            23,
            34,
            42,
            64,
            14,
            4,
            109
        ],
        "categories": []
    },
    {
        "id": 1026171,
        "thumbId": 1026170,
        "name": "Gamma 1",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026170_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Heroes\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            35,
            39,
            55,
            60,
            93,
            94
        ],
        "categories": []
    },
    {
        "id": 1026181,
        "thumbId": 1026180,
        "name": "Gamma 2",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026180_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Heroes\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            4,
            35,
            55,
            60,
            93,
            94
        ],
        "categories": []
    },
    {
        "id": 1026071,
        "thumbId": 1026070,
        "name": "Trunks (Teen) & Goten (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026070_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Friendship\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            22,
            34,
            4,
            60,
            42,
            52,
            109
        ],
        "categories": []
    },
    {
        "id": 1026170,
        "thumbId": 1026170,
        "name": "Gamma 1",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026170_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Heroes\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            35,
            39,
            55,
            60,
            93,
            94
        ],
        "categories": []
    },
    {
        "id": 1026180,
        "thumbId": 1026180,
        "name": "Gamma 2",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1026180_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Heroes\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            4,
            35,
            55,
            60,
            93,
            94
        ],
        "categories": []
    },
    {
        "id": 1011141,
        "thumbId": 1011140,
        "name": "Goku Black (Super Saiyan Rosé) & Zamasu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011140_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            120,
            119,
            97,
            66,
            50,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1014081,
        "thumbId": 1014080,
        "name": "Trunks (Teen) (Future) & Mai (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014080_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Time Travelers\" Category Ki +4 and \nHP, ATK & DEF +130%; or Super STR Type \nKi +4 and HP, ATK & DEF +100%",
        "links": [
            8,
            39,
            2,
            66,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1012741,
        "thumbId": 1012740,
        "name": "Super Saiyan God SS Vegetto",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012740_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super Type allies' Ki +3 \nand HP, ATK & DEF +120% \nwhen team includes all five Super Types",
        "links": [
            29,
            70,
            47,
            103,
            112,
            89,
            109
        ],
        "categories": []
    },
    {
        "id": 1012761,
        "thumbId": 1012760,
        "name": "Goku Black (Super Saiyan Rosé)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012760_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme Type allies' Ki +3 \nand HP, ATK & DEF +120% \nwhen team includes all five Extreme Types",
        "links": [
            29,
            120,
            119,
            97,
            66,
            50,
            109
        ],
        "categories": []
    },
    {
        "id": 1024031,
        "thumbId": 1024030,
        "name": "King Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024030_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT & PHY Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            22,
            40,
            57,
            63,
            118,
            122,
            1000
        ],
        "categories": []
    },
    {
        "id": 1024601,
        "thumbId": 1024600,
        "name": "Goku Black",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024600_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Future Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            50,
            66,
            119,
            120,
            39,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1018331,
        "thumbId": 1018330,
        "name": "Super Saiyan 3 Goku (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018330_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Dragon Ball Heroes\" Category or \nSuper STR Type Ki +3 and HP, ATK & DEF +100%",
        "links": [
            29,
            9,
            34,
            47,
            89,
            116,
            118
        ],
        "categories": []
    },
    {
        "id": 1018341,
        "thumbId": 1018340,
        "name": "Super Saiyan 3 Vegeta (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018340_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Dragon Ball Heroes\" Category or \nSuper PHY Type Ki +3 and HP, ATK & DEF +100%",
        "links": [
            29,
            9,
            40,
            26,
            89,
            116,
            118
        ],
        "categories": []
    },
    {
        "id": 1018361,
        "thumbId": 1018360,
        "name": "Supreme Kai of Time (Power of Time Unleashed)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018360_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Dragon Ball Heroes\" Category or \nSuper TEQ Type Ki +3 and HP, ATK & DEF +100%",
        "links": [
            76,
            37,
            14,
            39,
            13,
            80,
            118
        ],
        "categories": []
    },
    {
        "id": 1017301,
        "thumbId": 1017300,
        "name": "Sealas",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017300_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +70%",
        "links": [
            8,
            86,
            50,
            39,
            60,
            42,
            118
        ],
        "categories": []
    },
    {
        "id": 1017281,
        "thumbId": 1017280,
        "name": "Great Saiyaman 3",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017280_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class Ki +3 and HP, ATK & DEF +80%",
        "links": [
            42,
            15,
            93,
            69,
            37,
            25,
            118
        ],
        "categories": []
    },
    {
        "id": 1017261,
        "thumbId": 1017260,
        "name": "Great Saiyaman 4",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017260_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class Ki +2 and HP, ATK & DEF +40%",
        "links": [
            47,
            2,
            15,
            93,
            42,
            69,
            118
        ],
        "categories": []
    },
    {
        "id": 1017371,
        "thumbId": 1017370,
        "name": "Ahms (3rd Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017370_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme Class Ki +2 and HP, ATK & DEF +40%",
        "links": [
            73,
            28,
            52,
            50,
            47,
            120,
            118
        ],
        "categories": []
    },
    {
        "id": 1018401,
        "thumbId": 1018400,
        "name": "Cumber",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018400_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Dragon Ball Heroes\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            22,
            34,
            52,
            18,
            120,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1018461,
        "thumbId": 1018460,
        "name": "Super Saiyan Cumber (Giant Ape Cumber)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018460_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme Class Ki +3 and HP, ATK & DEF +80%",
        "links": [
            29,
            34,
            52,
            124,
            123,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1018301,
        "thumbId": 1018300,
        "name": "Golden Cooler",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018300_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme TEQ Type \nKi +3 and HP, ATK & DEF +100%",
        "links": [
            85,
            39,
            8,
            37,
            28,
            59,
            118
        ],
        "categories": []
    },
    {
        "id": 1018321,
        "thumbId": 1018320,
        "name": "Super Fu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018320_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Dragon Ball Heroes\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            8,
            7,
            4,
            39,
            37,
            42,
            118
        ],
        "categories": []
    },
    {
        "id": 1025341,
        "thumbId": 1025340,
        "name": "Super Saiyan 4 Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025340_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Crossover\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            22,
            29,
            30,
            97,
            124,
            117,
            118
        ],
        "categories": []
    },
    {
        "id": 1025351,
        "thumbId": 1025350,
        "name": "Super Saiyan 4 Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025350_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Giant Ape Power\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            22,
            29,
            30,
            34,
            97,
            124,
            118
        ],
        "categories": []
    },
    {
        "id": 1020891,
        "thumbId": 1020890,
        "name": "Demon God Salsa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020890_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Crossover\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            73,
            76,
            26,
            86,
            8,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1025371,
        "thumbId": 1025370,
        "name": "Supreme Kai of Time (Brainwashed)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025370_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Crossover\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            76,
            13,
            80,
            14,
            7,
            64,
            118
        ],
        "categories": []
    },
    {
        "id": 1023331,
        "thumbId": 1023330,
        "name": "Demon Goddess Putine",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023330_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Crossover\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            64,
            7,
            39,
            60,
            37,
            76,
            118
        ],
        "categories": []
    },
    {
        "id": 1025361,
        "thumbId": 1025360,
        "name": "Robelu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025360_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Dragon Ball Heroes\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            64,
            8,
            39,
            37,
            73,
            76,
            118
        ],
        "categories": []
    },
    {
        "id": 1025311,
        "thumbId": 1025310,
        "name": "Super Full Power Saiyan 4 Limit Breaker Goku (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025310_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Crossover\" or \"Full Power\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Dragon Ball Heroes\" Category",
        "links": [
            22,
            29,
            30,
            97,
            47,
            124,
            109
        ],
        "categories": []
    },
    {
        "id": 1025331,
        "thumbId": 1025330,
        "name": "Super Full Power Saiyan 4 Limit Breaker Vegeta (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025330_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Crossover\" or \"Giant Ape Power\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Dragon Ball Heroes\" Category",
        "links": [
            30,
            29,
            26,
            97,
            40,
            124,
            109
        ],
        "categories": []
    },
    {
        "id": 1025411,
        "thumbId": 1025410,
        "name": "Super Hearts",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025410_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Dragon Ball Heroes\" or \n\"Time Travelers\" Category Ki +3 and \nHP, ATK & DEF +170%, plus an additional \nHP, ATK & DEF +30% for characters \nwho also belong to the \"Crossover\" Category",
        "links": [
            17,
            37,
            60,
            39,
            50,
            8,
            109
        ],
        "categories": []
    },
    {
        "id": 1024221,
        "thumbId": 1024220,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024220_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +2 and ATK & DEF +50%",
        "links": [
            22,
            40,
            34,
            39,
            60
        ],
        "categories": []
    },
    {
        "id": 1024220,
        "thumbId": 1024220,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024220_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +2 and ATK & DEF +50%",
        "links": [
            22,
            40,
            34,
            39,
            60
        ],
        "categories": []
    },
    {
        "id": 1012031,
        "thumbId": 1012030,
        "name": "Golden Freezer (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012030_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Resurrected Warriors\" Category Ki +3, \nHP +130% and ATK & DEF +170%; \nor INT Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            26,
            59,
            65,
            85,
            18,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1013101,
        "thumbId": 1013100,
        "name": "Ginyu (Goku) (Ginyu Force)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013100_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Ginyu Force\" Category \nKi +3 and HP, ATK & DEF +100%",
        "links": [
            41,
            94,
            17,
            25,
            73,
            14,
            125
        ],
        "categories": []
    },
    {
        "id": 1009131,
        "thumbId": 1009130,
        "name": "Jaco",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009130_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Defenders of Justice\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            8,
            37,
            12,
            69,
            94,
            68,
            109
        ],
        "categories": []
    },
    {
        "id": 1024041,
        "thumbId": 1024040,
        "name": "King Cold",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024040_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +3 and HP, ATK & DEF +30%",
        "links": [
            52,
            57,
            18,
            85,
            122,
            59,
            118
        ],
        "categories": []
    },
    {
        "id": 1025471,
        "thumbId": 1025470,
        "name": "Paikuhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025470_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & STR Types \nKi +3 and HP, ATK & DEF +30%",
        "links": [
            30,
            39,
            57,
            60,
            122,
            1001,
            118
        ],
        "categories": []
    },
    {
        "id": 1023161,
        "thumbId": 1023160,
        "name": "Hacchan & Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023160_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Androids\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            35,
            42,
            52,
            39,
            37,
            2,
            118
        ],
        "categories": []
    },
    {
        "id": 1024271,
        "thumbId": 1024270,
        "name": "Mecha Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024270_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY & INT Type \nKi +3 and HP, ATK & DEF +30%",
        "links": [
            26,
            57,
            59,
            65,
            38,
            122,
            118
        ],
        "categories": []
    },
    {
        "id": 1011681,
        "thumbId": 1011680,
        "name": "Super Saiyan God SS Vegetto",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011680_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class Ki +3 and HP, ATK & DEF +70%",
        "links": [
            29,
            70,
            103,
            97,
            112,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1014181,
        "thumbId": 1014180,
        "name": "Chi-Chi",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014180_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR & PHY Types \nKi +3 and HP, ATK & DEF +70%",
        "links": [
            2,
            4,
            64,
            42,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1014191,
        "thumbId": 1014190,
        "name": "Chi-Chi (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014190_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT and PHY Type \nKi +3 and HP, ATK & DEF +70%",
        "links": [
            64,
            4,
            14,
            90,
            102,
            118
        ],
        "categories": []
    },
    {
        "id": 1014461,
        "thumbId": 1014460,
        "name": "Bulla",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014460_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & TEQ Types \nKi +3 and HP, ATK & DEF +70%",
        "links": [
            64,
            4,
            40,
            10,
            34,
            95,
            118
        ],
        "categories": []
    },
    {
        "id": 1014061,
        "thumbId": 1014060,
        "name": "Brianne de Chateau",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014060_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" or \n\"Transformation Boost\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            64,
            28,
            4,
            94,
            14,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1016371,
        "thumbId": 1016370,
        "name": "Goku (GT) & Pan (GT) & Trunks (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016370_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Dragon Ball Seekers\" Category \nKi +4 and HP, ATK & DEF +170%; or \nSuper INT Type Ki +4 and HP, ATK & DEF +100%",
        "links": [
            22,
            34,
            37,
            95,
            97,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1019701,
        "thumbId": 1019700,
        "name": "Goku & Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019700_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Goku's Family\" Category \nKi +4 and HP, ATK & DEF +120%",
        "links": [
            23,
            45,
            22,
            34,
            47,
            60,
            125
        ],
        "categories": []
    },
    {
        "id": 1024011,
        "thumbId": 1024010,
        "name": "Vegeta (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024010_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +3 and HP, ATK & DEF +30%",
        "links": [
            22,
            26,
            34,
            40,
            57,
            122,
            118
        ],
        "categories": []
    },
    {
        "id": 1025131,
        "thumbId": 1025130,
        "name": "Super Saiyan Goku (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025130_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +40%",
        "links": [
            23,
            34,
            29,
            47,
            95,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1025141,
        "thumbId": 1025140,
        "name": "Hyper Meta-Rilldo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025140_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            73,
            86,
            105,
            95,
            38,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1024781,
        "thumbId": 1024780,
        "name": "Trunks (GT) & Giru",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024780_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Friendship\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            53,
            8,
            39,
            37,
            95,
            2,
            109
        ],
        "categories": []
    },
    {
        "id": 1018191,
        "thumbId": 1018190,
        "name": "Cooler",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018190_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Terrifying Conquerors\" or \n\"Transformation Boost\" Category \nKi +3, HP +130% and ATK & DEF +170%",
        "links": [
            85,
            86,
            50,
            18,
            28,
            59,
            109
        ],
        "categories": []
    },
    {
        "id": 1025161,
        "thumbId": 1025160,
        "name": "Metal Cooler [AGL]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025160_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            105,
            106,
            107,
            18,
            86,
            85,
            118
        ],
        "categories": []
    },
    {
        "id": 1025171,
        "thumbId": 1025170,
        "name": "Metal Cooler [TEQ]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025170_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            105,
            106,
            107,
            18,
            86,
            85,
            118
        ],
        "categories": []
    },
    {
        "id": 1025181,
        "thumbId": 1025180,
        "name": "Metal Cooler [INT]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025180_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            105,
            106,
            107,
            18,
            86,
            85,
            118
        ],
        "categories": []
    },
    {
        "id": 1025191,
        "thumbId": 1025190,
        "name": "Metal Cooler [STR]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025190_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            105,
            106,
            107,
            18,
            86,
            85,
            118
        ],
        "categories": []
    },
    {
        "id": 1025201,
        "thumbId": 1025200,
        "name": "Metal Cooler [PHY]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025200_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            105,
            106,
            107,
            18,
            86,
            85,
            118
        ],
        "categories": []
    },
    {
        "id": 1018061,
        "thumbId": 1018060,
        "name": "Thouser (Cooler's Armored Squad)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018060_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Terrifying Conquerors\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            92,
            91,
            73,
            39,
            60,
            8,
            109
        ],
        "categories": []
    },
    {
        "id": 1024931,
        "thumbId": 1024930,
        "name": "Metal Cooler",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024930_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Wicked Bloodline\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            50,
            85,
            86,
            105,
            119,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1024891,
        "thumbId": 1024890,
        "name": "Super Saiyan Goku & Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024890_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Joined Forces\" or \"Movie Heroes\" Category \nKi +3 and HP, ATK & DEF +170%, plus an \nadditional HP, ATK & DEF +30% for characters \nwho also belong to the \"Pure Saiyans\" Category",
        "links": [
            9,
            29,
            97,
            60,
            34,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1024971,
        "thumbId": 1024970,
        "name": "Krilin & Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024970_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            37,
            42,
            60,
            39,
            47,
            2,
            109
        ],
        "categories": []
    },
    {
        "id": 1025211,
        "thumbId": 1025210,
        "name": "Cooler",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025210_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Terrifying Conquerors\" Category \nKi +2 and HP, ATK & DEF +50%; \nor TEQ Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            85,
            86,
            39,
            18,
            28,
            119,
            118
        ],
        "categories": []
    },
    {
        "id": 1025151,
        "thumbId": 1025150,
        "name": "Metal Cooler",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025150_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Wicked Bloodline\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            105,
            106,
            107,
            18,
            86,
            85,
            118
        ],
        "categories": []
    },
    {
        "id": 1025111,
        "thumbId": 1025110,
        "name": "Gohan (Kid)/Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1025110_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Parent and Child\" Category \nKi +2 and HP, ATK & DEF +50%; \nor PHY Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            34,
            22,
            23,
            42,
            37,
            56,
            118
        ],
        "categories": []
    },
    {
        "id": 1015311,
        "thumbId": 1015310,
        "name": "Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015310_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK +33% per TEQ Ki Sphere obtained",
        "links": [
            9,
            29,
            26,
            63,
            40,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1015291,
        "thumbId": 1015290,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015290_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK +33% per STR Ki Sphere obtained",
        "links": [
            45,
            30,
            26,
            48,
            8,
            56,
            109
        ],
        "categories": []
    },
    {
        "id": 1015371,
        "thumbId": 1015370,
        "name": "Metal Cooler",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015370_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Wicked Bloodline\" Category \nKi +3 and HP, ATK & DEF +170%; or \nExtreme AGL Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            105,
            119,
            86,
            85,
            50,
            123,
            109
        ],
        "categories": []
    },
    {
        "id": 1015571,
        "thumbId": 1015570,
        "name": "Freezer (Full Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015570_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Full Power\" Category \nKi +4 and HP, ATK & DEF +130%; or \nExtreme STR Type Ki +4 and HP, ATK & DEF +100%",
        "links": [
            26,
            59,
            85,
            50,
            89,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1017181,
        "thumbId": 1017180,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017180_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyans\" or \n\"Planet Namek Saga\" Category \nKi +3, HP +130% and ATK & DEF +170%",
        "links": [
            45,
            23,
            22,
            34,
            60,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1009101,
        "thumbId": 1009100,
        "name": "Cooler (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009100_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL, TEQ & PHY Types \nKi +2 and HP, ATK & DEF +30%",
        "links": [
            85,
            86,
            50,
            18,
            28,
            59,
            109
        ],
        "categories": []
    },
    {
        "id": 1024861,
        "thumbId": 1024860,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024860_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Powerful Comeback\" Category \nKi +3 and HP, ATK & DEF +200%",
        "links": [
            9,
            22,
            29,
            47,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1024831,
        "thumbId": 1024830,
        "name": "Cooler (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024830_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Terrifying Conquerors\" or \"Movie Bosses\" \nCategory Ki +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Transformation Boost\" Category",
        "links": [
            50,
            28,
            59,
            85,
            86,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1024951,
        "thumbId": 1024950,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024950_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            8,
            26,
            30,
            37,
            48,
            56,
            109
        ],
        "categories": []
    },
    {
        "id": 1015031,
        "thumbId": 1015030,
        "name": "Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015030_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Pure Saiyans\" Category \nKi +3 and HP, ATK & DEF +70%",
        "links": [
            9,
            29,
            26,
            63,
            40,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1013571,
        "thumbId": 1013570,
        "name": "Turles",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013570_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Movie Bosses\" Category Ki +3 \nand HP, ATK & DEF +150%; \nor Extreme Class Ki +3 \nand HP, ATK & DEF +50%",
        "links": [
            98,
            22,
            97,
            86,
            18,
            50,
            109
        ],
        "categories": []
    },
    {
        "id": 1019901,
        "thumbId": 1019900,
        "name": "Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019900_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Fusion\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            22,
            34,
            4,
            60,
            112,
            89,
            118
        ],
        "categories": []
    },
    {
        "id": 1019851,
        "thumbId": 1019850,
        "name": "Tarble",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019850_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Siblings' Bond\" Category \nKi +3 and HP, ATK & DEF +50%; or \nall Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            22,
            40,
            8,
            34,
            25,
            39,
            118
        ],
        "categories": []
    },
    {
        "id": 1024061,
        "thumbId": 1024060,
        "name": "Raditz",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024060_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Saiyan Saga\" or \"Pure Saiyans\" Category \nKi +3 and HP, ATK & DEF +170%, \nplus an additional HP, ATK & DEF +30% \nfor characters who also belong to the \n\"Space-Traveling Warriors\" Category",
        "links": [
            18,
            22,
            32,
            34,
            97,
            119,
            109
        ],
        "categories": []
    },
    {
        "id": 1024081,
        "thumbId": 1024080,
        "name": "Nappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024080_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Saiyan Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            18,
            22,
            42,
            49,
            52,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1014211,
        "thumbId": 1014210,
        "name": "Super Saiyan 4 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014210_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Goku's Family\" Category Ki +3, \nHP & ATK +170% and DEF +130%; or \nSuper AGL Type Ki +3 and HP, ATK & DEF +120%",
        "links": [
            29,
            124,
            97,
            47,
            95,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1014221,
        "thumbId": 1014220,
        "name": "Super Saiyan 4 Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014220_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Vegeta's Family\" Category Ki +3, \nHP +130% and ATK & DEF +170%; or \nSuper STR Type Ki +3 and HP, ATK & DEF +120%",
        "links": [
            29,
            124,
            97,
            63,
            95,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1014131,
        "thumbId": 1014130,
        "name": "Super Full Power Saiyan 4 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014130_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Full Power\" Category Ki +3 and \nHP, ATK & DEF +150%; or Super TEQ Type \nKi +3 and HP, ATK & DEF +90%",
        "links": [
            29,
            124,
            97,
            60,
            34,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1012901,
        "thumbId": 1012900,
        "name": "Super Saiyan Goku & Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012900_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Potara\" Category Ki +3, HP & ATK +170% \nand DEF +130%; or INT Type Ki +3 \nand HP, ATK & DEF +90%",
        "links": [
            47,
            29,
            34,
            30,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1012931,
        "thumbId": 1012930,
        "name": "Super Saiyan Goku (Angel) & \nSuper Saiyan Vegeta (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012930_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Fusion\" Category Ki +3, HP & ATK +170% \nand DEF +130%; or PHY Type Ki +3 \nand HP, ATK & DEF +90%",
        "links": [
            47,
            9,
            29,
            30,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1023891,
        "thumbId": 1023890,
        "name": "Gohan (Teen) & Goten (Kid) & Trunks (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023890_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Hybrid Saiyans\" or \n\"Joined Forces\" Category \nKi +3 and HP, ATK & DEF +80%",
        "links": [
            22,
            34,
            37,
            39,
            60,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1023931,
        "thumbId": 1023930,
        "name": "Goku & Chi-Chi",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023930_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Goku's Family\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            42,
            90,
            102,
            23,
            37,
            2,
            118
        ],
        "categories": []
    },
    {
        "id": 1023951,
        "thumbId": 1023950,
        "name": "Vegeta & Bulma",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023950_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Vegeta's Family\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            8,
            26,
            34,
            39,
            40,
            37,
            118
        ],
        "categories": []
    },
    {
        "id": 1016031,
        "thumbId": 1016030,
        "name": "Super Saiyan God Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016030_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super TEQ Type Ki +3 and \nHP, ATK & DEF +100%",
        "links": [
            22,
            80,
            29,
            97,
            89,
            70,
            109
        ],
        "categories": []
    },
    {
        "id": 1011321,
        "thumbId": 1011320,
        "name": "Omega Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011320_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Shadow Dragon Saga\" Category Ki +3 and \nHP, ATK & DEF +150%; or PHY Type Ki +3 \nand HP, ATK & DEF +50%",
        "links": [
            18,
            120,
            50,
            60,
            95,
            127,
            109
        ],
        "categories": []
    },
    {
        "id": 1011301,
        "thumbId": 1011300,
        "name": "Super Saiyan 4 Gogeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011300_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Fusion\" Category Ki +3 and \nHP, ATK & DEF +150%; or TEQ Type \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            29,
            47,
            60,
            89,
            112,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1016051,
        "thumbId": 1016050,
        "name": "Super Saiyan God Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016050_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super STR Type Ki +3 and \nHP, ATK & DEF +100%",
        "links": [
            22,
            80,
            29,
            89,
            26,
            70,
            109
        ],
        "categories": []
    },
    {
        "id": 1022351,
        "thumbId": 1022350,
        "name": "Goku & Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022350_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Pure Saiyans\" Category \nKi +3 and HP, ATK & DEF +77%",
        "links": [
            22,
            30,
            34,
            47,
            60,
            97
        ],
        "categories": []
    },
    {
        "id": 1022350,
        "thumbId": 1022350,
        "name": "Goku & Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022350_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Pure Saiyans\" Category \nKi +3 and HP, ATK & DEF +77%",
        "links": [
            22,
            30,
            34,
            47,
            60,
            97
        ],
        "categories": []
    },
    {
        "id": 1024201,
        "thumbId": 1024200,
        "name": "Goten (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024200_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and ATK & DEF +50%",
        "links": [
            22,
            23,
            34,
            47,
            4,
            60
        ],
        "categories": []
    },
    {
        "id": 1024200,
        "thumbId": 1024200,
        "name": "Goten (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024200_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and ATK & DEF +50%",
        "links": [
            22,
            23,
            34,
            47,
            4,
            60
        ],
        "categories": []
    },
    {
        "id": 1024141,
        "thumbId": 1024140,
        "name": "Goku & Piccolo/Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024140_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Saiyan Saga\" or \"Battle of Wits\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            30,
            37,
            42,
            52,
            60,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1019241,
        "thumbId": 1019240,
        "name": "Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019240_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Low-Class Warrior\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            62,
            22,
            63,
            34,
            30,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1024021,
        "thumbId": 1024020,
        "name": "Android #16",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024020_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +3 and HP, ATK & DEF +30%",
        "links": [
            35,
            38,
            17,
            52,
            1001,
            122,
            118
        ],
        "categories": []
    },
    {
        "id": 1019201,
        "thumbId": 1019200,
        "name": "Tora",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019200_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Low-Class Warrior\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            62,
            22,
            63,
            34,
            39,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1019221,
        "thumbId": 1019220,
        "name": "Shugesh",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019220_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Low-Class Warrior\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            62,
            22,
            63,
            34,
            52,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1009631,
        "thumbId": 1009630,
        "name": "Capitaine Ginyu (Ginyu Force)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009630_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types HP, ATK & DEF +77%",
        "links": [
            41,
            120,
            25,
            73,
            94,
            60,
            125
        ],
        "categories": []
    },
    {
        "id": 1019091,
        "thumbId": 1019090,
        "name": "Fasha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019090_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Low-Class Warrior\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            62,
            22,
            63,
            34,
            64,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1019171,
        "thumbId": 1019170,
        "name": "Borgos",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019170_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Low-Class Warrior\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            62,
            22,
            63,
            34,
            42,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1014941,
        "thumbId": 1014940,
        "name": "Cell (Perfect Form) & Cell Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014940_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme PHY Type Ki +4 and HP, ATK & DEF +100%; \nSuper PHY Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            17,
            19,
            50,
            60,
            108,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1024351,
        "thumbId": 1024350,
        "name": "Super Saiyan Goku & Super Saiyan Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024350_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Goku's Family\" or \"Kamehameha\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            9,
            23,
            22,
            29,
            97,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1023631,
        "thumbId": 1023630,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023630_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +30%",
        "links": [
            40,
            39,
            19,
            45,
            1001,
            122,
            118
        ],
        "categories": []
    },
    {
        "id": 1019891,
        "thumbId": 1019890,
        "name": "Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019890_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Youth\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            22,
            34,
            23,
            4,
            82,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1019881,
        "thumbId": 1019880,
        "name": "Ultimate Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019880_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Hybrid Saiyans\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            22,
            34,
            23,
            60,
            103,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1019861,
        "thumbId": 1019860,
        "name": "Goku (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019860_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Otherworld Warriors\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            22,
            34,
            23,
            47,
            30,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1011801,
        "thumbId": 1011800,
        "name": "Ultimate Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011800_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Hybrid Saiyans\" Category Ki +3 and HP & \nDEF +170%, ATK +130%",
        "links": [
            23,
            34,
            45,
            42,
            60,
            103,
            109
        ],
        "categories": []
    },
    {
        "id": 1024321,
        "thumbId": 1024320,
        "name": "Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024320_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Mastered Evolution\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            29,
            40,
            26,
            63,
            9,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1024251,
        "thumbId": 1024250,
        "name": "Androids #16 & #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1024250_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Androids\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            35,
            37,
            60,
            39,
            52,
            1001,
            109
        ],
        "categories": []
    },
    {
        "id": 1023911,
        "thumbId": 1023910,
        "name": "Mighty Mask",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023910_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & TEQ Type \nKi +3 and HP, ATK & DEF +30%",
        "links": [
            1000,
            57,
            20,
            4,
            118,
            29,
            122
        ],
        "categories": []
    },
    {
        "id": 1010571,
        "thumbId": 1010570,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010570_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & STR Types Ki +3 and HP, ATK & \nDEF +30%",
        "links": [
            45,
            23,
            22,
            97,
            1002,
            1003,
            109
        ],
        "categories": []
    },
    {
        "id": 1010581,
        "thumbId": 1010580,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010580_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT & PHY Types Ki +3 and HP, ATK & \nDEF +30%",
        "links": [
            22,
            40,
            63,
            97,
            1002,
            1003,
            109
        ],
        "categories": []
    },
    {
        "id": 1010831,
        "thumbId": 1010830,
        "name": "Boo (Super)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010830_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +3 and ATK & DEF +50%",
        "links": [
            83,
            18,
            28,
            96,
            120,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1008431,
        "thumbId": 1008430,
        "name": "Vegetto",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008430_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP and ATK +30%",
        "links": [
            22,
            8,
            97,
            103,
            112,
            109
        ],
        "categories": []
    },
    {
        "id": 1008421,
        "thumbId": 1008420,
        "name": "Vegetto",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008420_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP and ATK +30%",
        "links": [
            22,
            34,
            97,
            103,
            112,
            1003,
            109
        ],
        "categories": []
    },
    {
        "id": 1015201,
        "thumbId": 1015200,
        "name": "Supreme Kai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015200_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Realm of Gods\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            13,
            37,
            39,
            76,
            80,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1015591,
        "thumbId": 1015590,
        "name": "Gohan (Teen) & Videl",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015590_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Majin Buu Saga\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            93,
            42,
            39,
            37,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1019491,
        "thumbId": 1019490,
        "name": "Great Saiyaman 2/1",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019490_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Special Pose\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            42,
            93,
            94,
            64,
            69,
            2,
            118
        ],
        "categories": []
    },
    {
        "id": 1013831,
        "thumbId": 1013830,
        "name": "Super Saiyan God SS Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013830_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Pure Saiyans\" Category Ki +3, \nHP & DEF +170% and ATK +130%",
        "links": [
            29,
            70,
            26,
            40,
            97,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1023861,
        "thumbId": 1023860,
        "name": "Super Saiyan Goku Jr. & \nSuper Saiyan Vegeta Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023860_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"GT Heroes\" or \n\"World Tournament\" Category \nKi +3 and HP, ATK & DEF +80%",
        "links": [
            22,
            29,
            34,
            60,
            95,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1023981,
        "thumbId": 1023980,
        "name": "Majin Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023980_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Majin Buu Saga\" or \"Vegeta's Family\" Category \nKi +3 and HP, ATK & DEF +170%, plus an \nadditional HP, ATK & DEF +30% for characters \nwho also belong to the \"Gifted Warriors\" Category",
        "links": [
            22,
            29,
            40,
            63,
            89,
            1003,
            109
        ],
        "categories": []
    },
    {
        "id": 1023801,
        "thumbId": 1023800,
        "name": "Super Saiyan Trunks (Kid) & Super Saiyan Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023800_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Gifted Warriors\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            4,
            29,
            26,
            82,
            34,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1007771,
        "thumbId": 1007770,
        "name": "Baby (Youth Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007770_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            86,
            28,
            32,
            95,
            115,
            119
        ],
        "categories": []
    },
    {
        "id": 1007770,
        "thumbId": 1007770,
        "name": "Baby (Youth Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007770_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            86,
            28,
            32,
            95,
            115,
            119
        ],
        "categories": []
    },
    {
        "id": 1014051,
        "thumbId": 1014050,
        "name": "Super Saiyan Trunks (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014050_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Future Saga\" Category \nKi +3 and HP, ATK & DEF +70%",
        "links": [
            29,
            40,
            39,
            19,
            66,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1018561,
        "thumbId": 1018560,
        "name": "Android #13",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018560_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type enemies' ATK -40%",
        "links": [
            55,
            35,
            52,
            50,
            120,
            119,
            118
        ],
        "categories": []
    },
    {
        "id": 1018521,
        "thumbId": 1018520,
        "name": "Androids #14 & #15",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018520_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Target: Goku\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            55,
            35,
            52,
            39,
            120,
            119,
            118
        ],
        "categories": []
    },
    {
        "id": 1023061,
        "thumbId": 1023060,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023060_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Turtle School\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            22,
            34,
            97,
            30,
            29,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1008871,
        "thumbId": 1008870,
        "name": "Super Saiyan Trunks (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008870_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP, ATK & DEF +25%",
        "links": [
            29,
            9,
            40,
            19,
            66,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1009511,
        "thumbId": 1009510,
        "name": "Zamasu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009510_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +30%",
        "links": [
            103,
            39,
            26,
            80,
            66,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1017931,
        "thumbId": 1017930,
        "name": "Android #17 (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017930_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Androids\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            67,
            35,
            31,
            18,
            119,
            66,
            118
        ],
        "categories": []
    },
    {
        "id": 1017951,
        "thumbId": 1017950,
        "name": "Android #18 (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017950_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Siblings' Bond\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            67,
            35,
            31,
            18,
            64,
            66,
            118
        ],
        "categories": []
    },
    {
        "id": 1023641,
        "thumbId": 1023640,
        "name": "Yamhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023640_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "ATK & DEF +10% per Ki Sphere obtained",
        "links": [
            45,
            42,
            46,
            47,
            112,
            118
        ],
        "categories": []
    },
    {
        "id": 1023711,
        "thumbId": 1023710,
        "name": "Coolieza",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023710_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +80%",
        "links": [
            59,
            85,
            86,
            120,
            112,
            28,
            118
        ],
        "categories": []
    },
    {
        "id": 1023681,
        "thumbId": 1023680,
        "name": "Chiaoman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023680_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +3 and HP, ATK & DEF +80%",
        "links": [
            42,
            13,
            2,
            24,
            112,
            89,
            118
        ],
        "categories": []
    },
    {
        "id": 1023671,
        "thumbId": 1023670,
        "name": "Janembu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023670_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +80%",
        "links": [
            83,
            18,
            96,
            49,
            112,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1023691,
        "thumbId": 1023690,
        "name": "Tekka",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023690_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            2,
            47,
            14,
            15,
            42,
            118
        ],
        "categories": []
    },
    {
        "id": 1023701,
        "thumbId": 1023700,
        "name": "Pinich",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023700_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            22,
            34,
            4,
            14,
            52,
            118
        ],
        "categories": []
    },
    {
        "id": 1023661,
        "thumbId": 1023660,
        "name": "Whirus",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023660_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +3 and HP, ATK & DEF +80%",
        "links": [
            80,
            79,
            4,
            8,
            60,
            112,
            118
        ],
        "categories": []
    },
    {
        "id": 1023651,
        "thumbId": 1023650,
        "name": "Cellza",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023650_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +3 and HP, ATK & DEF +80%",
        "links": [
            18,
            119,
            60,
            26,
            50,
            112,
            118
        ],
        "categories": []
    },
    {
        "id": 1013861,
        "thumbId": 1013860,
        "name": "Super Saiyan Gohan (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013860_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Future Saga\" Category \nKi +3, HP +130% and ATK & DEF +170%",
        "links": [
            23,
            9,
            29,
            97,
            30,
            66,
            109
        ],
        "categories": []
    },
    {
        "id": 1009241,
        "thumbId": 1009240,
        "name": "Karoly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009240_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK & DEF +70%",
        "links": [
            29,
            22,
            34,
            49,
            112,
            118
        ],
        "categories": []
    },
    {
        "id": 1009251,
        "thumbId": 1009250,
        "name": "Pandel",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009250_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type HP & DEF +70%",
        "links": [
            64,
            95,
            42,
            34,
            112,
            118
        ],
        "categories": []
    },
    {
        "id": 1011851,
        "thumbId": 1011850,
        "name": "Barlot",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011850_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +3 and ATK & DEF +70% \nwhen HP is 30% or above",
        "links": [
            22,
            34,
            63,
            61,
            112,
            30,
            118
        ],
        "categories": []
    },
    {
        "id": 1009261,
        "thumbId": 1009260,
        "name": "Bulpan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009260_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type HP & DEF +70%",
        "links": [
            64,
            4,
            95,
            112,
            14,
            34,
            118
        ],
        "categories": []
    },
    {
        "id": 1010561,
        "thumbId": 1010560,
        "name": "Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010560_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL & INT Types \nKi +3 and HP, ATK & DEF +30%",
        "links": [
            35,
            120,
            31,
            4,
            119,
            110,
            109
        ],
        "categories": []
    },
    {
        "id": 1005801,
        "thumbId": 1005800,
        "name": "Hell Fighter #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005800_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT and PHY Type Ki +3 and HP, ATK & \nDEF +30%",
        "links": [
            35,
            120,
            18,
            119,
            60,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1008801,
        "thumbId": 1008800,
        "name": "Androids #17 & #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008800_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +4",
        "links": [
            110,
            119,
            31,
            4,
            120,
            60,
            125
        ],
        "categories": []
    },
    {
        "id": 1009781,
        "thumbId": 1009780,
        "name": "Super Trunks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009780_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP & ATK +30%",
        "links": [
            9,
            19,
            29,
            40,
            97,
            1001,
            109
        ],
        "categories": []
    },
    {
        "id": 1009771,
        "thumbId": 1009770,
        "name": "Super Trunks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009770_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +40%",
        "links": [
            9,
            19,
            29,
            40,
            97,
            1001,
            109
        ],
        "categories": []
    },
    {
        "id": 1014171,
        "thumbId": 1014170,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014170_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ & PHY Types \nKi +3 and HP, ATK & DEF +60%",
        "links": [
            35,
            31,
            4,
            64,
            110,
            118
        ],
        "categories": []
    },
    {
        "id": 1014141,
        "thumbId": 1014140,
        "name": "Videl",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014140_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT and STR Type Ki +3 and HP, ATK & DEF +60%",
        "links": [
            44,
            39,
            10,
            2,
            64,
            118
        ],
        "categories": []
    },
    {
        "id": 1014151,
        "thumbId": 1014150,
        "name": "Pan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014150_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & STR Types \nKi +3 and HP, ATK & DEF +60%",
        "links": [
            23,
            34,
            64,
            95,
            4,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1010331,
        "thumbId": 1010330,
        "name": "Bulma (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010330_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & PHY Types \nKi +3 and HP, ATK & DEF +40%",
        "links": [
            64,
            37,
            8,
            90,
            102,
            114,
            118
        ],
        "categories": []
    },
    {
        "id": 1014161,
        "thumbId": 1014160,
        "name": "Mai (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014160_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & INT Types \nKi +3 and HP, ATK & DEF +60%",
        "links": [
            64,
            8,
            39,
            37,
            66,
            118
        ],
        "categories": []
    },
    {
        "id": 1022701,
        "thumbId": 1022700,
        "name": "Cell (2nd Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022700_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Androids/Cell Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            19,
            50,
            33,
            1004,
            119,
            18,
            109
        ],
        "categories": []
    },
    {
        "id": 1017721,
        "thumbId": 1017720,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017720_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +2 and HP, ATK & DEF +50%",
        "links": [
            22,
            34,
            47,
            30,
            29,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1017681,
        "thumbId": 1017680,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017680_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +2 and HP, ATK & DEF +50%",
        "links": [
            35,
            31,
            4,
            64,
            110,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1023131,
        "thumbId": 1023130,
        "name": "Nappa (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023130_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +2 and HP, ATK & DEF +50%",
        "links": [
            22,
            18,
            52,
            49,
            58,
            60
        ],
        "categories": []
    },
    {
        "id": 1023130,
        "thumbId": 1023130,
        "name": "Nappa (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023130_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +2 and HP, ATK & DEF +50%",
        "links": [
            22,
            18,
            52,
            49,
            58,
            60
        ],
        "categories": []
    },
    {
        "id": 1013431,
        "thumbId": 1013430,
        "name": "Super Saiyan 2 Kefla",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013430_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Potara\" Category Ki +3 \nand HP, ATK & DEF +150%",
        "links": [
            29,
            64,
            112,
            103,
            126,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1017381,
        "thumbId": 1017380,
        "name": "Goku (Youth) & Bulma (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017380_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Youth\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            90,
            102,
            4,
            2,
            26,
            37,
            125
        ],
        "categories": []
    },
    {
        "id": 1020391,
        "thumbId": 1020390,
        "name": "Super Saiyan 2 Caulifla",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020390_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            29,
            64,
            26,
            126,
            97,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1020401,
        "thumbId": 1020400,
        "name": "Super Saiyan 2 Kale",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020400_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            29,
            64,
            37,
            126,
            97,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1013531,
        "thumbId": 1013530,
        "name": "Super Saiyan 2 Cabba",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013530_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            9,
            29,
            34,
            63,
            126,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1015671,
        "thumbId": 1015670,
        "name": "Hit",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015670_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Universe 6\" Category Ki +3 and \nHP, ATK & DEF +170%; or \"Universe Survival Saga\" \nCategory Ki +3 and HP, ATK & DEF +150%",
        "links": [
            30,
            39,
            42,
            60,
            130,
            126,
            109
        ],
        "categories": []
    },
    {
        "id": 1022861,
        "thumbId": 1022860,
        "name": "Super Saiyan Cabba",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022860_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Master and Disciple\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            22,
            34,
            2,
            126,
            130,
            29,
            109
        ],
        "categories": []
    },
    {
        "id": 1014741,
        "thumbId": 1014740,
        "name": "Android #16",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014740_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super TEQ Type Ki +2 and \nHP, ATK & DEF +90%",
        "links": [
            35,
            38,
            17,
            65,
            37,
            52,
            109
        ],
        "categories": []
    },
    {
        "id": 1021991,
        "thumbId": 1021990,
        "name": "Super Saiyan 3 Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021990_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyan 3\" Category \nKi +3 and HP, ATK & DEF +120%; \nor PHY Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            29,
            22,
            9,
            40,
            26,
            116,
            109
        ],
        "categories": []
    },
    {
        "id": 1023391,
        "thumbId": 1023390,
        "name": "Super Saiyan 2 Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023390_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Crossover\" Category \nKi +3 and HP, ATK & DEF +120%; \nor all Types Ki +3 and HP, ATK & DEF +70%",
        "links": [
            9,
            34,
            29,
            40,
            22,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1016751,
        "thumbId": 1016750,
        "name": "Super Paikuhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016750_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +60%",
        "links": [
            17,
            8,
            52,
            60,
            30,
            16,
            118
        ],
        "categories": []
    },
    {
        "id": 1016731,
        "thumbId": 1016730,
        "name": "Baby Janemba",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016730_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +3 and HP, ATK & DEF +80%",
        "links": [
            86,
            60,
            28,
            32,
            120,
            115,
            118
        ],
        "categories": []
    },
    {
        "id": 1016781,
        "thumbId": 1016780,
        "name": "Boo (Kid) (Babidi)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016780_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +3 and HP, ATK & DEF +80%",
        "links": [
            83,
            18,
            76,
            14,
            28,
            119,
            118
        ],
        "categories": []
    },
    {
        "id": 1021981,
        "thumbId": 1021980,
        "name": "Super Saiyan 3 Vegeta (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021980_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyan 3\" Category \nKi +3 and HP, ATK & DEF +120%; \nor TEQ Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            29,
            9,
            40,
            26,
            116,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1007741,
        "thumbId": 1007740,
        "name": "Super Saiyan 3 Gotenks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007740_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +2 and ATK & DEF +70%",
        "links": [
            29,
            112,
            89,
            116,
            82,
            47,
            109
        ],
        "categories": []
    },
    {
        "id": 1016761,
        "thumbId": 1016760,
        "name": "Darkness Towa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016760_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +3 and HP, ATK & DEF +80%",
        "links": [
            76,
            7,
            64,
            37,
            114,
            86,
            118
        ],
        "categories": []
    },
    {
        "id": 1016741,
        "thumbId": 1016740,
        "name": "Super Saiyan 3 Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016740_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +3 and HP, ATK & DEF +80%",
        "links": [
            29,
            40,
            9,
            39,
            89,
            116,
            118
        ],
        "categories": []
    },
    {
        "id": 1016771,
        "thumbId": 1016770,
        "name": "Super Saiyan 3 Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016770_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +3 and HP, ATK & DEF +80%",
        "links": [
            29,
            34,
            22,
            30,
            89,
            116,
            118
        ],
        "categories": []
    },
    {
        "id": 1014661,
        "thumbId": 1014660,
        "name": "Android #21 (Transformed)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014660_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Androids\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            35,
            28,
            64,
            8,
            120,
            50,
            109
        ],
        "categories": []
    },
    {
        "id": 1013391,
        "thumbId": 1013390,
        "name": "Great Saiyaman 1 & 2",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013390_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "Super Type allies' HP, ATK & DEF +100% \nwhen team includes all five Super Types",
        "links": [
            93,
            69,
            94,
            42,
            1003,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1006771,
        "thumbId": 1006770,
        "name": "Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006770_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL, INT & PHY Type HP, ATK & DEF +50%",
        "links": [
            29,
            22,
            9,
            40,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1011371,
        "thumbId": 1011370,
        "name": "Super Saiyan 2 Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011370_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP & ATK +40%",
        "links": [
            9,
            22,
            29,
            45,
            60,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1010261,
        "thumbId": 1010260,
        "name": "Super Saiyan 3 Goku (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010260_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super TEQ Type Ki +3 and HP, ATK & \nDEF +120%; Extreme TEQ Type Ki +1 and \nHP, ATK & DEF +50%",
        "links": [
            9,
            29,
            34,
            89,
            116,
            65,
            109
        ],
        "categories": []
    },
    {
        "id": 1005751,
        "thumbId": 1005750,
        "name": "Majuub",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005750_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3",
        "links": [
            37,
            76,
            83,
            39,
            95,
            112,
            118
        ],
        "categories": []
    },
    {
        "id": 1006741,
        "thumbId": 1006740,
        "name": "Super Saiyan 2 Goku (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006740_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP & ATK + 30%",
        "links": [
            9,
            34,
            29,
            23,
            95,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1010941,
        "thumbId": 1010940,
        "name": "Paikuhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010940_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & STR Types \nKi +3 and HP, ATK & DEF +30%",
        "links": [
            17,
            8,
            52,
            60,
            30,
            37,
            109
        ],
        "categories": []
    },
    {
        "id": 1008571,
        "thumbId": 1008570,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008570_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, TEQ and STR Type HP & ATK +30%",
        "links": [
            9,
            22,
            29,
            45,
            97,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1008551,
        "thumbId": 1008550,
        "name": "Super Saiyan 2 Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008550_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ, STR & PHY Type Ki +3",
        "links": [
            9,
            22,
            29,
            26,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1021901,
        "thumbId": 1021900,
        "name": "Freezer (Final Form) & Army of the Dead",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021900_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Revenge\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            86,
            119,
            120,
            50,
            65,
            26,
            118
        ],
        "categories": []
    },
    {
        "id": 1022281,
        "thumbId": 1022280,
        "name": "Super Saiyan Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022280_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            29,
            22,
            9,
            56,
            45,
            23
        ],
        "categories": []
    },
    {
        "id": 1022280,
        "thumbId": 1022280,
        "name": "Super Saiyan Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022280_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            29,
            22,
            9,
            56,
            45,
            23
        ],
        "categories": []
    },
    {
        "id": 1006331,
        "thumbId": 1006330,
        "name": "Li Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006330_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type ATK & DEF +60%",
        "links": [
            18,
            120,
            50,
            95,
            127,
            109
        ],
        "categories": []
    },
    {
        "id": 1022121,
        "thumbId": 1022120,
        "name": "Goku & Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022120_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Saviors\" Category \nKi +4 and HP, ATK & DEF +130%; \nor INT Type Ki +4 and HP, ATK & DEF +100%",
        "links": [
            42,
            60,
            52,
            30,
            37,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1022311,
        "thumbId": 1022310,
        "name": "Piccolo & Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022310_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Heavenly Events\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            37,
            39,
            45,
            30,
            47,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1009091,
        "thumbId": 1009090,
        "name": "Cooler (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009090_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme PHY Type Ki +3 and HP, ATK & \nDEF +120%; Super PHY Type Ki +1 and HP, \nATK & DEF +50%",
        "links": [
            85,
            86,
            50,
            60,
            28,
            59,
            109
        ],
        "categories": []
    },
    {
        "id": 1010811,
        "thumbId": 1010810,
        "name": "Goku (Youth) (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010810_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP, ATK and DEF +50%",
        "links": [
            47,
            4,
            102,
            90,
            123,
            124,
            118
        ],
        "categories": []
    },
    {
        "id": 1007681,
        "thumbId": 1007680,
        "name": "Vegeta (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007680_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +2 and HP & DEF +70%",
        "links": [
            22,
            40,
            50,
            58,
            123,
            124,
            118
        ],
        "categories": []
    },
    {
        "id": 1010781,
        "thumbId": 1010780,
        "name": "Raditz (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010780_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "When HP is 30% or above, Ki +3 and ATK & \nDEF +30%",
        "links": [
            34,
            22,
            18,
            119,
            123,
            124,
            118
        ],
        "categories": []
    },
    {
        "id": 1022061,
        "thumbId": 1022060,
        "name": "Super Garlic Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022060_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Heavenly Events\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            6,
            28,
            50,
            65,
            86,
            119,
            109
        ],
        "categories": []
    },
    {
        "id": 1014021,
        "thumbId": 1014020,
        "name": "Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014020_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "Super PHY Type Ki +4 and HP, ATK & DEF +100%; \nExtreme PHY Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            22,
            34,
            62,
            63,
            97,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1013211,
        "thumbId": 1013210,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013210_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Ki +3 and ATK & DEF +40% \nwhen HP is 30% or above",
        "links": [
            45,
            23,
            34,
            36,
            47,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1013091,
        "thumbId": 1013090,
        "name": "Capitaine Ginyu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013090_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            41,
            94,
            17,
            25,
            73,
            118
        ],
        "categories": []
    },
    {
        "id": 1023001,
        "thumbId": 1023000,
        "name": "Zarbon & Dodoria",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1023000_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Space-Traveling Warriors\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            51,
            43,
            119,
            73,
            18,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1022881,
        "thumbId": 1022880,
        "name": "Krilin/Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022880_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Planet Namek Saga\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            36,
            45,
            2,
            37,
            8,
            1,
            118
        ],
        "categories": []
    },
    {
        "id": 1014761,
        "thumbId": 1014760,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014760_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class Ki +3 and HP, ATK & DEF +120%",
        "links": [
            23,
            9,
            29,
            30,
            47,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1022981,
        "thumbId": 1022980,
        "name": "Freezer (1st Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022980_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Space-Traveling Warriors\" Category \nKi +3 and HP, ATK & DEF +35%",
        "links": [
            85,
            59,
            28,
            86,
            50,
            120
        ],
        "categories": []
    },
    {
        "id": 1013051,
        "thumbId": 1013050,
        "name": "Barta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013050_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            41,
            94,
            53,
            54,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1013031,
        "thumbId": 1013030,
        "name": "Jiece",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013030_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            41,
            94,
            54,
            8,
            12,
            118
        ],
        "categories": []
    },
    {
        "id": 1022971,
        "thumbId": 1022970,
        "name": "Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022970_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Space-Traveling Warriors\" Category \nKi +3 and HP, ATK & DEF +35%",
        "links": [
            22,
            34,
            62,
            63,
            97,
            61
        ],
        "categories": []
    },
    {
        "id": 1022980,
        "thumbId": 1022980,
        "name": "Freezer (1st Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022980_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Space-Traveling Warriors\" Category \nKi +3 and HP, ATK & DEF +35%",
        "links": [
            85,
            59,
            28,
            86,
            50,
            120
        ],
        "categories": []
    },
    {
        "id": 1022970,
        "thumbId": 1022970,
        "name": "Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022970_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Space-Traveling Warriors\" Category \nKi +3 and HP, ATK & DEF +35%",
        "links": [
            22,
            34,
            62,
            63,
            97,
            61
        ],
        "categories": []
    },
    {
        "id": 1014821,
        "thumbId": 1014820,
        "name": "Freezer (1st Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014820_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme Class Ki +3 and HP, ATK & DEF +120%",
        "links": [
            85,
            59,
            28,
            86,
            50,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1022961,
        "thumbId": 1022960,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022960_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Turtle School\" Category \nKi +3 and HP, ATK & DEF +120%; \nor all Types Ki +3 and HP, ATK & DEF +70%",
        "links": [
            29,
            22,
            9,
            47,
            109
        ],
        "categories": []
    },
    {
        "id": 1022451,
        "thumbId": 1022450,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022450_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Planet Namek Saga\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            45,
            30,
            48,
            8,
            60,
            56,
            109
        ],
        "categories": []
    },
    {
        "id": 1022471,
        "thumbId": 1022470,
        "name": "Freezer (3rd Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022470_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Sworn Enemies\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            18,
            26,
            59,
            60,
            85,
            50,
            109
        ],
        "categories": []
    },
    {
        "id": 1013011,
        "thumbId": 1013010,
        "name": "Reacum",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013010_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            41,
            94,
            18,
            52,
            42,
            118
        ],
        "categories": []
    },
    {
        "id": 1013071,
        "thumbId": 1013070,
        "name": "Ghourd",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013070_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            41,
            94,
            13,
            18,
            8,
            118
        ],
        "categories": []
    },
    {
        "id": 1018721,
        "thumbId": 1018720,
        "name": "Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018720_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class Ki +3 and HP, ATK & DEF +40%",
        "links": [
            8,
            34,
            22,
            23,
            39,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1018701,
        "thumbId": 1018700,
        "name": "Yamu & Spopovich",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018700_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"World Tournament\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            18,
            11,
            7,
            49,
            52,
            32,
            118
        ],
        "categories": []
    },
    {
        "id": 1021621,
        "thumbId": 1021620,
        "name": "Tortue Géniale",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021620_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Turtle School\" Category \nKi +3 and HP, ATK & DEF +80%",
        "links": [
            36,
            47,
            16,
            8,
            130,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1014971,
        "thumbId": 1014970,
        "name": "Goku & Freezer (Final Form) (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014970_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Representatives of Universe 7\" Category \nKi +3 and HP, ATK & DEF +177%; or \nTEQ Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            89,
            30,
            37,
            60,
            130,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1021701,
        "thumbId": 1021700,
        "name": "Goku (Ultra Instinct -Sign-)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021700_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe Survival Saga\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            47,
            97,
            30,
            80,
            130,
            117,
            118
        ],
        "categories": []
    },
    {
        "id": 1021641,
        "thumbId": 1021640,
        "name": "Krilin & Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021640_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Joined Forces\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            30,
            2,
            39,
            8,
            37,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1021541,
        "thumbId": 1021540,
        "name": "Tortue Géniale & Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021540_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Earthlings\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            30,
            8,
            52,
            39,
            37,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1021351,
        "thumbId": 1021350,
        "name": "Ultimate Gohan & Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021350_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Master and Disciple\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            39,
            8,
            37,
            47,
            53,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1021371,
        "thumbId": 1021370,
        "name": "Golden Freezer (Angel) & Ultimate Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021370_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Battle of Wits\" Category \nKi +3 and HP, ATK & DEF +130%",
        "links": [
            39,
            8,
            42,
            53,
            60,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1020231,
        "thumbId": 1020230,
        "name": "Goku (Ultra Instinct)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020230_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Representatives of Universe 7\" Category \nKi +3 and HP, ATK & DEF +66%",
        "links": [
            47,
            80,
            89,
            97,
            117,
            130
        ],
        "categories": []
    },
    {
        "id": 1020230,
        "thumbId": 1020230,
        "name": "Goku (Ultra Instinct)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020230_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Representatives of Universe 7\" Category \nKi +3 and HP, ATK & DEF +66%",
        "links": [
            47,
            80,
            89,
            97,
            117,
            130
        ],
        "categories": []
    },
    {
        "id": 1021751,
        "thumbId": 1021750,
        "name": "Vegeta (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021750_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +50%",
        "links": [
            22,
            34,
            51,
            26,
            97,
            40
        ],
        "categories": []
    },
    {
        "id": 1021750,
        "thumbId": 1021750,
        "name": "Vegeta (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021750_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +50%",
        "links": [
            22,
            34,
            51,
            26,
            97,
            40
        ],
        "categories": []
    },
    {
        "id": 1021971,
        "thumbId": 1021970,
        "name": "Tapion & Minotia",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021970_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Storied Figures\" or \n\"Siblings' Bond\" Category \nKi +3 and HP, ATK & DEF +150%",
        "links": [
            15,
            30,
            8,
            39,
            37,
            109,
            125
        ],
        "categories": []
    },
    {
        "id": 1012421,
        "thumbId": 1012420,
        "name": "Tapion (Hirudegarn)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012420_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Giant Form\" Category Ki +3 \nand HP, ATK & DEF +150%; \nmaximum number of turning \nGiant Form +1 for all allies",
        "links": [
            15,
            30,
            8,
            65,
            123,
            37,
            109
        ],
        "categories": []
    },
    {
        "id": 1011061,
        "thumbId": 1011060,
        "name": "Super Saiyan 3 Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011060_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super PHY Type Ki +3 and HP, ATK & \nDEF +120%; Extreme PHY Type Ki +1 and \nHP, ATK & DEF +50%",
        "links": [
            29,
            112,
            89,
            116,
            4,
            82,
            109
        ],
        "categories": []
    },
    {
        "id": 1021871,
        "thumbId": 1021870,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021870_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Saviors\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            36,
            30,
            2,
            1,
            37,
            47,
            109
        ],
        "categories": []
    },
    {
        "id": 1008071,
        "thumbId": 1008070,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008070_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR & PHY Types \nKi +3 and HP, ATK & DEF +30%",
        "links": [
            35,
            64,
            31,
            60,
            110,
            10,
            118
        ],
        "categories": []
    },
    {
        "id": 1005671,
        "thumbId": 1005670,
        "name": "Super Saiyan Trunks (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005670_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and HP & DEF +70%",
        "links": [
            9,
            40,
            29,
            4,
            82,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1005661,
        "thumbId": 1005660,
        "name": "Super Saiyan Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005660_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +2 and HP & DEF +70%",
        "links": [
            9,
            47,
            29,
            4,
            82,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1015911,
        "thumbId": 1015910,
        "name": "Pan (GT) (Honey)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015910_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "Recovers 3333 HP per Ki Sphere of \ncharacter's Type obtained",
        "links": [
            23,
            34,
            64,
            95,
            4,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1016301,
        "thumbId": 1016300,
        "name": "Giru",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016300_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type allies' Ki +2 and ATK & DEF +40%",
        "links": [
            14,
            12,
            37,
            38,
            95,
            118
        ],
        "categories": []
    },
    {
        "id": 1018221,
        "thumbId": 1018220,
        "name": "Trunks (Kid) (Great Saiyaman)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018220_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Youth\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            4,
            40,
            82,
            10,
            93,
            2,
            118
        ],
        "categories": []
    },
    {
        "id": 1021101,
        "thumbId": 1021100,
        "name": "Grand-père Gohan & Pan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021100_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Kamehameha\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            47,
            23,
            2,
            37,
            39,
            118
        ],
        "categories": []
    },
    {
        "id": 1014501,
        "thumbId": 1014500,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014500_thumb.png",
        "type": "INT",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +100%",
        "links": [
            23,
            45,
            22,
            34,
            30,
            2,
            125
        ],
        "categories": []
    },
    {
        "id": 1022001,
        "thumbId": 1022000,
        "name": "Meta-Rilldo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022000_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +3 and HP, ATK & DEF +90% ",
        "links": [
            50,
            86,
            28,
            95,
            119,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1022041,
        "thumbId": 1022040,
        "name": "Gohan (GT) & Goten (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022040_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"GT Heroes\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            22,
            23,
            34,
            37,
            39,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1022021,
        "thumbId": 1022020,
        "name": "Trunks (GT) & Goten (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1022020_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"GT Heroes\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            22,
            34,
            37,
            39,
            53,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1020261,
        "thumbId": 1020260,
        "name": "Goku (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020260_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            23,
            4,
            36,
            102,
            90,
            47
        ],
        "categories": []
    },
    {
        "id": 1020260,
        "thumbId": 1020260,
        "name": "Goku (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020260_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            23,
            4,
            36,
            102,
            90,
            47
        ],
        "categories": []
    },
    {
        "id": 1016491,
        "thumbId": 1016490,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016490_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Vegeta's Family\" Category \nKi +3 and HP, ATK & DEF +120%; or \nPHY Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            22,
            40,
            63,
            26,
            97,
            58,
            118
        ],
        "categories": []
    },
    {
        "id": 1016461,
        "thumbId": 1016460,
        "name": "Goku (Kaioken)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016460_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Goku's Family\" Category \nKi +3 and HP, ATK & DEF +120%; or \nTEQ Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            45,
            23,
            34,
            47,
            60,
            89,
            118
        ],
        "categories": []
    },
    {
        "id": 1010871,
        "thumbId": 1010870,
        "name": "Super Janemba",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010870_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme STR Type Ki +3 and HP, ATK & \nDEF +120%; Super STR Type Ki +1 and HP, \nATK & DEF +50%",
        "links": [
            50,
            60,
            28,
            18,
            119,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1021561,
        "thumbId": 1021560,
        "name": "Veku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021560_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Fusion\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            22,
            52,
            113,
            112,
            89,
            129,
            118
        ],
        "categories": []
    },
    {
        "id": 1021491,
        "thumbId": 1021490,
        "name": "Goku (Dokkan Butoden)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021490_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Goku's Family\" Category \nKi +4 and HP, ATK & DEF +44%; or \nSuper Class Ki +2 and HP, ATK & DEF +22%",
        "links": [
            22,
            97,
            42,
            23,
            34,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1021501,
        "thumbId": 1021500,
        "name": "Vegeta (Dokkan Butoden)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021500_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Vegeta's Family\" Category \nKi +4 and HP, ATK & DEF +44%; or \nExtreme Class Ki +2 and HP, ATK & DEF +22%",
        "links": [
            22,
            97,
            40,
            26,
            34,
            58,
            118
        ],
        "categories": []
    },
    {
        "id": 1006661,
        "thumbId": 1006660,
        "name": "Goku (Kaioken)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006660_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP & ATK +30%",
        "links": [
            23,
            34,
            47,
            60,
            89,
            118
        ],
        "categories": []
    },
    {
        "id": 1008541,
        "thumbId": 1008540,
        "name": "Super Saiyan Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008540_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +30%",
        "links": [
            9,
            29,
            34,
            45,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1021721,
        "thumbId": 1021720,
        "name": "Super Saiyan Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021720_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Hybrid Saiyans\" Category \nKi +4 and HP, ATK & DEF +120%",
        "links": [
            19,
            29,
            9,
            39,
            40,
            66,
            109
        ],
        "categories": []
    },
    {
        "id": 1008621,
        "thumbId": 1008620,
        "name": "Super Saiyan God SS Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008620_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK +33% for every TEQ Ki \nSphere obtained",
        "links": [
            29,
            70,
            47,
            71,
            68,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1008611,
        "thumbId": 1008610,
        "name": "Super Saiyan God SS Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008610_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, STR and PHY Type HP & ATK +30%",
        "links": [
            29,
            70,
            47,
            71,
            68,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1010851,
        "thumbId": 1010850,
        "name": "Super Gogeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010850_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super INT Type Ki +3 and HP, ATK & \nDEF +120%; Extreme INT Type Ki +1 and \nHP, ATK & DEF +50%",
        "links": [
            9,
            29,
            97,
            89,
            112,
            30,
            109
        ],
        "categories": []
    },
    {
        "id": 1019661,
        "thumbId": 1019660,
        "name": "Whis",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019660_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            80,
            60,
            79,
            17,
            8,
            39,
            118
        ],
        "categories": []
    },
    {
        "id": 1021031,
        "thumbId": 1021030,
        "name": "Zangya",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021030_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Space-Traveling Warriors\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            87,
            88,
            64,
            18,
            65,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1020431,
        "thumbId": 1020430,
        "name": "Super Hatchiyack",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020430_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            115,
            49,
            52,
            50,
            42,
            120,
            118
        ],
        "categories": []
    },
    {
        "id": 1009381,
        "thumbId": 1009380,
        "name": "Freezer (1st Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009380_thumb.png",
        "type": "PUI",
        "rarity": "LR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types ATK +7000",
        "links": [
            85,
            59,
            28,
            86,
            50,
            120,
            125
        ],
        "categories": []
    },
    {
        "id": 1020931,
        "thumbId": 1020930,
        "name": "Towa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020930_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK & DEF +15% per Ki Sphere obtained, \nand recovers 1000 HP per Ki Sphere of \ncharacter's Type obtained",
        "links": [
            7,
            64,
            37,
            114,
            120,
            121,
            109
        ],
        "categories": []
    },
    {
        "id": 1020941,
        "thumbId": 1020940,
        "name": "Mira",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020940_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            35,
            7,
            52,
            47,
            120,
            121,
            109
        ],
        "categories": []
    },
    {
        "id": 1020921,
        "thumbId": 1020920,
        "name": "Demigra",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020920_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +70%",
        "links": [
            80,
            50,
            8,
            65,
            120,
            121,
            109
        ],
        "categories": []
    },
    {
        "id": 1010291,
        "thumbId": 1010290,
        "name": "Masked Saiyan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010290_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +50%",
        "links": [
            34,
            22,
            18,
            49,
            58,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1020971,
        "thumbId": 1020970,
        "name": "Nuova Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020970_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Shadow Dragon Saga\" Category \nKi +4 and HP, ATK & DEF +120%",
        "links": [
            17,
            39,
            60,
            95,
            127,
            65,
            109
        ],
        "categories": []
    },
    {
        "id": 1021451,
        "thumbId": 1021450,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021450_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            45,
            36,
            2,
            1,
            37,
            8,
            118
        ],
        "categories": []
    },
    {
        "id": 1021441,
        "thumbId": 1021440,
        "name": "Bardock (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021440_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Giant Form\" Category \nKi +4 and HP, ATK & DEF +50%; or \nAGL Type Ki +3 and HP, ATK & DEF +50%",
        "links": [
            22,
            34,
            62,
            63,
            124,
            123,
            118
        ],
        "categories": []
    },
    {
        "id": 1013881,
        "thumbId": 1013880,
        "name": "Toppo (God of Destruction Mode)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013880_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +70%",
        "links": [
            16,
            52,
            60,
            37,
            80,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1013911,
        "thumbId": 1013910,
        "name": "Dyspo (Super Speed Mode)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013910_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            94,
            93,
            53,
            60,
            42,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1009641,
        "thumbId": 1009640,
        "name": "Boo (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009640_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme INT Type \nKi +3 and HP, ATK & DEF +120%; \nSuper INT Type Ki +1 and HP, ATK & DEF +50%",
        "links": [
            83,
            18,
            14,
            50,
            96,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1020601,
        "thumbId": 1020600,
        "name": "Perfect Cell (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020600_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            50,
            108,
            120,
            60,
            119,
            129,
            109
        ],
        "categories": []
    },
    {
        "id": 1020591,
        "thumbId": 1020590,
        "name": "Freezer (Final Form) (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020590_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            26,
            85,
            59,
            60,
            119,
            129,
            109
        ],
        "categories": []
    },
    {
        "id": 1020501,
        "thumbId": 1020500,
        "name": "Freezer (Final Form) (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020500_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Resurrected Warriors\" or \n\"Otherworld Warriors\" Category \nKi +4 and HP, ATK & DEF +150%",
        "links": [
            26,
            85,
            59,
            60,
            119,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1020251,
        "thumbId": 1020250,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020250_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super AGL Type \nKi +2 and HP, ATK & DEF +70%",
        "links": [
            4,
            42,
            6,
            22,
            56,
            23
        ],
        "categories": []
    },
    {
        "id": 1020250,
        "thumbId": 1020250,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020250_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Super AGL Type \nKi +2 and HP, ATK & DEF +70%",
        "links": [
            4,
            42,
            6,
            22,
            56,
            23
        ],
        "categories": []
    },
    {
        "id": 1013421,
        "thumbId": 1013420,
        "name": "Kale (Berserk)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013420_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +90%",
        "links": [
            64,
            49,
            34,
            126,
            97,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1013411,
        "thumbId": 1013410,
        "name": "Super Saiyan 2 Caulifla",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013410_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +70%",
        "links": [
            64,
            29,
            9,
            126,
            97,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1015421,
        "thumbId": 1015420,
        "name": "Super Ribrianne",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015420_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" Category \nKi +3 and HP, ATK & DEF +88%",
        "links": [
            64,
            28,
            4,
            94,
            14,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1020181,
        "thumbId": 1020180,
        "name": "Kakunsa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020180_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Special Pose\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            64,
            28,
            4,
            94,
            14,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1020191,
        "thumbId": 1020190,
        "name": "Rozie",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020190_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Special Pose\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            64,
            28,
            4,
            94,
            14,
            130,
            118
        ],
        "categories": []
    },
    {
        "id": 1021510,
        "thumbId": 1021510,
        "name": "Gohan (Kid) (Santa)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1021510_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Guarantees Super Attack to level up by 1 \nin Training",
        "links": [],
        "categories": []
    },
    {
        "id": 1020031,
        "thumbId": 1020030,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020030_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Representatives of Universe 7\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            30,
            36,
            37,
            8,
            2,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1011171,
        "thumbId": 1011170,
        "name": "Super Saiyan 3 Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011170_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme TEQ Type Ki +3 \nand HP, ATK & DEF +120%; \nSuper TEQ Type Ki +1 \nand HP, ATK & DEF +50%",
        "links": [
            34,
            49,
            97,
            29,
            119,
            116,
            109
        ],
        "categories": []
    },
    {
        "id": 1013731,
        "thumbId": 1013730,
        "name": "Goku (Kaioken)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013730_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Pure Saiyans\" Category \nKi +2 and HP, ATK & DEF +30%",
        "links": [
            23,
            34,
            45,
            60,
            89,
            118
        ],
        "categories": []
    },
    {
        "id": 1019871,
        "thumbId": 1019870,
        "name": "Lord Slug",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019870_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Namekians\" Category \nKi +3 and HP, ATK & DEF +70%",
        "links": [
            48,
            119,
            28,
            86,
            50,
            6,
            118
        ],
        "categories": []
    },
    {
        "id": 1007121,
        "thumbId": 1007120,
        "name": "Majin Boo (Good)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007120_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types ATK +30%",
        "links": [
            4,
            65,
            76,
            83,
            96,
            1004,
            118
        ],
        "categories": []
    },
    {
        "id": 1004391,
        "thumbId": 1004390,
        "name": "Majin Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004390_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL, TEQ & STR Types HP & ATK +25%",
        "links": [
            9,
            29,
            22,
            63,
            89,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1020151,
        "thumbId": 1020150,
        "name": "Freezer (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020150_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +2 and HP, ATK & DEF +50%",
        "links": [
            26,
            59,
            60,
            85,
            119,
            111,
            109
        ],
        "categories": []
    },
    {
        "id": 1009111,
        "thumbId": 1009110,
        "name": "Cooler",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009110_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL & INT Type Ki +2 and ATK & DEF +50%",
        "links": [
            85,
            86,
            39,
            18,
            119,
            109
        ],
        "categories": []
    },
    {
        "id": 1007181,
        "thumbId": 1007180,
        "name": "Super #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007180_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme AGL Type Ki +3 and \nHP, ATK & DEF +120%; Super AGL Type \nKi +1 and HP, ATK & DEF +50%",
        "links": [
            35,
            120,
            112,
            119,
            95,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1018501,
        "thumbId": 1018500,
        "name": "Vegetto (Candy)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018500_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "ATK & DEF +10% per Ki Sphere obtained",
        "links": [
            14,
            60,
            89,
            103,
            42,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1018411,
        "thumbId": 1018410,
        "name": "Super Saiyan Gotenks & Ghost",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018410_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Fusion\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            9,
            29,
            97,
            4,
            112,
            34,
            118
        ],
        "categories": []
    },
    {
        "id": 1012701,
        "thumbId": 1012700,
        "name": "Raditz",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012700_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Low-Class Warrior\" Category Ki +4 \nand HP & DEF +40% and ATK +80%",
        "links": [
            34,
            22,
            32,
            18,
            119,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1008131,
        "thumbId": 1008130,
        "name": "Majin Boo (South Supreme Kai)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008130_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK & DEF +60%",
        "links": [
            83,
            18,
            49,
            50,
            96,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1020111,
        "thumbId": 1020110,
        "name": "West Supreme Kai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020110_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Realm of Gods\" Category \nKi +4 and HP, ATK & DEF +100%",
        "links": [
            64,
            4,
            2,
            60,
            80,
            1003,
            109
        ],
        "categories": []
    },
    {
        "id": 1020131,
        "thumbId": 1020130,
        "name": "Supreme Kai & Kibito",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020130_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Potara\" Category \nKi +4 and HP, ATK & DEF +100%",
        "links": [
            13,
            37,
            39,
            76,
            80,
            1003,
            109
        ],
        "categories": []
    },
    {
        "id": 1020811,
        "thumbId": 1020810,
        "name": "Uub (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020810_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Earthlings\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            42,
            52,
            20,
            65,
            49,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1020861,
        "thumbId": 1020860,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020860_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Majin Buu Saga\" Category \nKi +3 and HP, ATK & DEF +35%",
        "links": [
            9,
            22,
            29,
            23,
            47,
            97
        ],
        "categories": []
    },
    {
        "id": 1020871,
        "thumbId": 1020870,
        "name": "Super Saiyan Vegeta (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020870_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Majin Buu Saga\" Category \nKi +3 and HP, ATK & DEF +35%",
        "links": [
            9,
            22,
            29,
            40,
            26,
            97
        ],
        "categories": []
    },
    {
        "id": 1020860,
        "thumbId": 1020860,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020860_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Majin Buu Saga\" Category \nKi +3 and HP, ATK & DEF +35%",
        "links": [
            9,
            22,
            29,
            23,
            47,
            97
        ],
        "categories": []
    },
    {
        "id": 1020870,
        "thumbId": 1020870,
        "name": "Super Saiyan Vegeta (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020870_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Majin Buu Saga\" Category \nKi +3 and HP, ATK & DEF +35%",
        "links": [
            9,
            22,
            29,
            40,
            26,
            97
        ],
        "categories": []
    },
    {
        "id": 1012401,
        "thumbId": 1012400,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012400_thumb.png",
        "type": "END",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +77%",
        "links": [
            23,
            45,
            22,
            34,
            4,
            49,
            125
        ],
        "categories": []
    },
    {
        "id": 1010901,
        "thumbId": 1010900,
        "name": "Mr. Satan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010900_thumb.png",
        "type": "TEC",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP and DEF +100%",
        "links": [
            15,
            1001,
            1002,
            1003,
            4,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1020621,
        "thumbId": 1020620,
        "name": "Super Saiyan 3 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020620_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Final Trump Card\" Category \nKi +2 and HP, ATK & DEF +50%; or \nINT Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            9,
            29,
            47,
            89,
            116,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1020771,
        "thumbId": 1020770,
        "name": "Mr. Satan/Majin Boo (Good)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020770_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Majin Buu Saga\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            27,
            44,
            15,
            10,
            2,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1020281,
        "thumbId": 1020280,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020280_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Earthlings\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            5,
            30,
            37,
            39,
            45,
            2,
            109
        ],
        "categories": []
    },
    {
        "id": 1020531,
        "thumbId": 1020530,
        "name": "Majin Boo (Piccolo)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1020530_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Power Absorption\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            6,
            8,
            28,
            83,
            119,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1018931,
        "thumbId": 1018930,
        "name": "Broly (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018930_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Pure Saiyans\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            22,
            34,
            4,
            26,
            52,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1018951,
        "thumbId": 1018950,
        "name": "Vegeta (Kid) & Raditz (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018950_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Joined Forces\" Category \nKi +2 and HP, ATK & DEF +50%; or \nExtreme Class Ki +2 and HP, ATK & DEF +30%",
        "links": [
            22,
            34,
            51,
            18,
            86,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1011401,
        "thumbId": 1011400,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011400_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +2000",
        "links": [
            22,
            40,
            63,
            26,
            58
        ],
        "categories": []
    },
    {
        "id": 1014431,
        "thumbId": 1014430,
        "name": "Freezer (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014430_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            26,
            59,
            60,
            85,
            119
        ],
        "categories": []
    },
    {
        "id": 1017451,
        "thumbId": 1017450,
        "name": "Super Saiyan God SS Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017450_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Realm of Gods\" Category \nKi +5 and HP, ATK & DEF +55% \nwhen team includes all five Super Types",
        "links": [
            29,
            70,
            80,
            47,
            60,
            97
        ],
        "categories": []
    },
    {
        "id": 1011400,
        "thumbId": 1011400,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011400_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +2000",
        "links": [
            22,
            40,
            63,
            26,
            58
        ],
        "categories": []
    },
    {
        "id": 1014430,
        "thumbId": 1014430,
        "name": "Freezer (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014430_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            26,
            59,
            60,
            85,
            119
        ],
        "categories": []
    },
    {
        "id": 1017450,
        "thumbId": 1017450,
        "name": "Super Saiyan God SS Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017450_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Realm of Gods\" Category \nKi +5 and HP, ATK & DEF +55% \nwhen team includes all five Super Types",
        "links": [
            29,
            70,
            80,
            47,
            60,
            97
        ],
        "categories": []
    },
    {
        "id": 1008751,
        "thumbId": 1008750,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008750_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ, INT & STR Types HP & ATK +30%",
        "links": [
            26,
            59,
            65,
            71,
            68,
            85,
            109
        ],
        "categories": []
    },
    {
        "id": 1008741,
        "thumbId": 1008740,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008740_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK +33% \nper AGL Ki Sphere obtained",
        "links": [
            26,
            59,
            65,
            71,
            68,
            85,
            109
        ],
        "categories": []
    },
    {
        "id": 1009581,
        "thumbId": 1009580,
        "name": "Super Saiyan Trunks (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009580_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class Ki +1 and HP, ATK & \nDEF +70%",
        "links": [
            29,
            9,
            40,
            19,
            66,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1019261,
        "thumbId": 1019260,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019260_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Realm of Gods\" Category \nKi +3 and HP, ATK & DEF +40%; \nTEQ & INT Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            9,
            29,
            97,
            47,
            23,
            60,
            118
        ],
        "categories": []
    },
    {
        "id": 1019361,
        "thumbId": 1019360,
        "name": "Whis",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019360_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Master and Disciple\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            80,
            39,
            79,
            17,
            60,
            37,
            109
        ],
        "categories": []
    },
    {
        "id": 1008581,
        "thumbId": 1008580,
        "name": "Super Saiyan 2 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008580_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR & PHY Types HP, ATK & DEF +30%",
        "links": [
            9,
            22,
            29,
            47,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1008561,
        "thumbId": 1008560,
        "name": "Super Saiyan 2 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008560_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, TEQ and STR Type HP & ATK +30%",
        "links": [
            9,
            22,
            29,
            47,
            61,
            118
        ],
        "categories": []
    },
    {
        "id": 1007611,
        "thumbId": 1007610,
        "name": "Super Saiyan 2 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007610_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ and STR Type HP & ATK +50%",
        "links": [
            9,
            22,
            29,
            47,
            42,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1015901,
        "thumbId": 1015900,
        "name": "Majin Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015900_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Vegeta's Family\" Category \nKi +3 and HP, ATK & DEF +120%; or \nSTR Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            29,
            22,
            63,
            40,
            89,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1015891,
        "thumbId": 1015890,
        "name": "Super Saiyan 2 Goku (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015890_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Goku's Family\" Category \nKi +3 and HP, ATK & DEF +120%; or \nAGL Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            9,
            29,
            23,
            22,
            97,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1018681,
        "thumbId": 1018680,
        "name": "Dabra",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018680_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Majin Buu Saga\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            18,
            73,
            76,
            77,
            119,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1018581,
        "thumbId": 1018580,
        "name": "Great Saiyaman (SS)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018580_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Hybrid Saiyans\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            8,
            9,
            29,
            47,
            93,
            1003,
            109
        ],
        "categories": []
    },
    {
        "id": 1005401,
        "thumbId": 1005400,
        "name": "Super Saiyan Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005400_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ, INT and STR Type HP & ATK +25%",
        "links": [
            19,
            29,
            40,
            97,
            9,
            118
        ],
        "categories": []
    },
    {
        "id": 1009791,
        "thumbId": 1009790,
        "name": "Fusion Zamasu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009790_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme Class Ki +1 and HP, ATK & \nDEF +70%",
        "links": [
            119,
            80,
            120,
            112,
            66,
            50,
            109
        ],
        "categories": []
    },
    {
        "id": 1005551,
        "thumbId": 1005550,
        "name": "Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005550_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ, INT and STR Types ATK & DEF +30%",
        "links": [
            97,
            29,
            22,
            9,
            40,
            1000,
            118
        ],
        "categories": []
    },
    {
        "id": 1010481,
        "thumbId": 1010480,
        "name": "Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010480_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ, INT and STR Type Ki +3 and HP, ATK \n& DEF +20%",
        "links": [
            110,
            35,
            31,
            4,
            1001,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1010491,
        "thumbId": 1010490,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010490_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ, INT and STR Type Ki +2 and HP, ATK \n& DEF +30%",
        "links": [
            110,
            35,
            31,
            64,
            1001,
            119,
            109
        ],
        "categories": []
    },
    {
        "id": 1019301,
        "thumbId": 1019300,
        "name": "Raditz",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1019300_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Low-Class Warrior\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            22,
            34,
            32,
            18,
            119,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1005581,
        "thumbId": 1005580,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005580_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "ATK & DEF +30% when HP is 80% or \nbelow",
        "links": [
            117,
            26,
            30,
            48,
            56,
            1001,
            118
        ],
        "categories": []
    },
    {
        "id": 1018171,
        "thumbId": 1018170,
        "name": "Invisible Man",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018170_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            101,
            42,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1018170,
        "thumbId": 1018170,
        "name": "Invisible Man",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018170_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            101,
            42,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1005391,
        "thumbId": 1005390,
        "name": "Super Saiyan Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005390_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, INT & PHY Type HP & ATK +25%",
        "links": [
            29,
            22,
            9,
            56,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1005541,
        "thumbId": 1005540,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005540_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, INT & PHY Types ATK & DEF +30%",
        "links": [
            117,
            29,
            22,
            9,
            47,
            1000,
            118
        ],
        "categories": []
    },
    {
        "id": 1004881,
        "thumbId": 1004880,
        "name": "Beerus",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004880_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ, INT & STR Types HP & ATK +30%",
        "links": [
            80,
            26,
            79,
            4,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1009861,
        "thumbId": 1009860,
        "name": "Super Saiyan Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009860_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3",
        "links": [
            9,
            29,
            97,
            4,
            112,
            34,
            109
        ],
        "categories": []
    },
    {
        "id": 1007191,
        "thumbId": 1007190,
        "name": "Super Saiyan Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007190_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK & DEF +60%",
        "links": [
            9,
            29,
            97,
            4,
            112,
            34,
            109
        ],
        "categories": []
    },
    {
        "id": 1011191,
        "thumbId": 1011190,
        "name": "Super Saiyan Trunks (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011190_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type HP, ATK & DEF +70%",
        "links": [
            9,
            34,
            29,
            40,
            97,
            66,
            109
        ],
        "categories": []
    },
    {
        "id": 1009921,
        "thumbId": 1009920,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009920_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP, ATK & DEF +50%",
        "links": [
            9,
            22,
            29,
            45,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1009901,
        "thumbId": 1009900,
        "name": "Majin Boo (Pure Evil)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009900_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ, INT & STR Type Ki +3 and HP & \nATK +30%",
        "links": [
            83,
            18,
            47,
            96,
            119,
            1004,
            118
        ],
        "categories": []
    },
    {
        "id": 1009891,
        "thumbId": 1009890,
        "name": "Super Saiyan 2 Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009890_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, TEQ & PHY Types \nKi +3 and HP & ATK +30%",
        "links": [
            29,
            22,
            9,
            40,
            65,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1010801,
        "thumbId": 1010800,
        "name": "Fusion Android #13",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010800_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ, STR and PHY Type Ki +2 and ATK & \nDEF +40%",
        "links": [
            55,
            35,
            52,
            28,
            119,
            120,
            118
        ],
        "categories": []
    },
    {
        "id": 1010791,
        "thumbId": 1010790,
        "name": "Fusion Android #13",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010790_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type enemy ATK -43%",
        "links": [
            55,
            35,
            52,
            28,
            119,
            120,
            118
        ],
        "categories": []
    },
    {
        "id": 1009931,
        "thumbId": 1009930,
        "name": "Metal Cooler",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009930_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +20%",
        "links": [
            105,
            60,
            119,
            85,
            86,
            120,
            118
        ],
        "categories": []
    },
    {
        "id": 1018161,
        "thumbId": 1018160,
        "name": "Super Saiyan Gohan (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018160_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +30%",
        "links": [
            39,
            23,
            9,
            29,
            30,
            47,
            66
        ],
        "categories": []
    },
    {
        "id": 1009911,
        "thumbId": 1009910,
        "name": "Nuova Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009910_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +3 and HP & DEF +100%",
        "links": [
            60,
            17,
            39,
            95,
            127,
            118
        ],
        "categories": []
    },
    {
        "id": 1018160,
        "thumbId": 1018160,
        "name": "Super Saiyan Gohan (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018160_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +30%",
        "links": [
            39,
            23,
            9,
            29,
            30,
            47,
            66
        ],
        "categories": []
    },
    {
        "id": 1008821,
        "thumbId": 1008820,
        "name": "Perfect Cell",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008820_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type HP, ATK & DEF +100%",
        "links": [
            65,
            19,
            50,
            47,
            119,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1017511,
        "thumbId": 1017510,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017510_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & PHY Types \nKi +3 and HP, ATK & DEF +70%",
        "links": [
            34,
            49,
            6,
            4,
            56,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1016691,
        "thumbId": 1016690,
        "name": "Super Saiyan 2 Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016690_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL and PHY Types \nKi +2 and HP, ATK & DEF +40%",
        "links": [
            9,
            22,
            29,
            23,
            45,
            97
        ],
        "categories": []
    },
    {
        "id": 1007391,
        "thumbId": 1007390,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007390_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type HP, ATK & DEF +100%",
        "links": [
            59,
            65,
            71,
            68,
            85,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1016690,
        "thumbId": 1016690,
        "name": "Super Saiyan 2 Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016690_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL and PHY Types \nKi +2 and HP, ATK & DEF +40%",
        "links": [
            9,
            22,
            29,
            23,
            45,
            97
        ],
        "categories": []
    },
    {
        "id": 1018741,
        "thumbId": 1018740,
        "name": "Super Saiyan God SS Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018740_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Bond of Master and Disciple\" Category \nKi +3 and HP, ATK & DEF +120%; or \nPHY Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            29,
            70,
            47,
            71,
            68,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1018791,
        "thumbId": 1018790,
        "name": "Super Saiyan God SS Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018790_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Worthy Rivals\" Category \nKi +3 and HP, ATK & DEF +120%; or \nTEQ Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            29,
            70,
            26,
            71,
            68,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1018801,
        "thumbId": 1018800,
        "name": "Bergamo (Giant Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018800_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme Class Ki +3 and HP, ATK & DEF +80%; \nmaximum number of turning Giant Form +1 \nfor all allies",
        "links": [
            18,
            42,
            8,
            32,
            123,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1017041,
        "thumbId": 1017040,
        "name": "Vados",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017040_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe 6\" Category \nKi +2 and HP, ATK & DEF +66%",
        "links": [
            4,
            8,
            37,
            39,
            60,
            80,
            118
        ],
        "categories": []
    },
    {
        "id": 1018550,
        "thumbId": 1018550,
        "name": "Goku (Santa)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1018550_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Guarantees Super Attack to level up by 1 \nin Training",
        "links": [],
        "categories": []
    },
    {
        "id": 1017241,
        "thumbId": 1017240,
        "name": "Gogeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017240_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Fusion\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            22,
            34,
            89,
            60,
            112,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1016211,
        "thumbId": 1016210,
        "name": "Super Saiyan 3 Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016210_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyan 3\" Category \nKi +2 and HP, ATK & DEF +30%",
        "links": [
            29,
            112,
            89,
            116,
            4,
            82
        ],
        "categories": []
    },
    {
        "id": 1016201,
        "thumbId": 1016200,
        "name": "Duplicate Vegeta (Super Saiyan God SS)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016200_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme Class Ki +3 and HP, ATK & DEF +40%",
        "links": [
            28,
            42,
            52,
            60,
            14,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1016210,
        "thumbId": 1016210,
        "name": "Super Saiyan 3 Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016210_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyan 3\" Category \nKi +2 and HP, ATK & DEF +30%",
        "links": [
            29,
            112,
            89,
            116,
            4,
            82
        ],
        "categories": []
    },
    {
        "id": 1007461,
        "thumbId": 1007460,
        "name": "Legendary Super Saiyan Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007460_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +3 and HP, ATK & DEF +70%",
        "links": [
            104,
            22,
            29,
            34,
            49,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1017161,
        "thumbId": 1017160,
        "name": "Freezer (2nd Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017160_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            18,
            85,
            59,
            26,
            120,
            50,
            118
        ],
        "categories": []
    },
    {
        "id": 1017221,
        "thumbId": 1017220,
        "name": "Freezer (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017220_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Planet Namek Saga\" Category \nKi +3 and HP, ATK & DEF +120%; or \nAGL Type Ki +3 and HP, ATK & DEF +90%",
        "links": [
            85,
            59,
            26,
            86,
            50,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1006081,
        "thumbId": 1006080,
        "name": "Ox King",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006080_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            42,
            52,
            102,
            90,
            36
        ],
        "categories": []
    },
    {
        "id": 1006080,
        "thumbId": 1006080,
        "name": "Ox King",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006080_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            42,
            52,
            102,
            90,
            36
        ],
        "categories": []
    },
    {
        "id": 1009501,
        "thumbId": 1009500,
        "name": "Super Saiyan 2 Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009500_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP & ATK +30%",
        "links": [
            9,
            22,
            29,
            47,
            1001,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1017661,
        "thumbId": 1017660,
        "name": "Super Vegeta/Super Trunks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017660_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Vegeta's Family\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            29,
            40,
            9,
            34,
            1001,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1017741,
        "thumbId": 1017740,
        "name": "Super Saiyan Goku/Super Saiyan Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017740_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Goku's Family\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            9,
            29,
            22,
            23,
            97,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1017821,
        "thumbId": 1017820,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017820_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Androids/Cell Saga\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            30,
            45,
            36,
            42,
            60,
            37,
            118
        ],
        "categories": []
    },
    {
        "id": 1017841,
        "thumbId": 1017840,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017840_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Siblings' Bond\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            110,
            35,
            31,
            4,
            64,
            67,
            118
        ],
        "categories": []
    },
    {
        "id": 1017861,
        "thumbId": 1017860,
        "name": "Mr. Satan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017860_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Androids/Cell Saga\" Category \nKi +3 and HP, ATK & DEF +33%",
        "links": [
            42,
            27,
            44,
            15,
            10,
            1001
        ],
        "categories": []
    },
    {
        "id": 1017871,
        "thumbId": 1017870,
        "name": "Cell (Perfect Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017870_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Androids/Cell Saga\" Category \nKi +3 and HP, ATK & DEF +33%",
        "links": [
            17,
            19,
            33,
            50,
            119,
            108
        ],
        "categories": []
    },
    {
        "id": 1017860,
        "thumbId": 1017860,
        "name": "Mr. Satan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017860_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Androids/Cell Saga\" Category \nKi +3 and HP, ATK & DEF +33%",
        "links": [
            42,
            27,
            44,
            15,
            10,
            1001
        ],
        "categories": []
    },
    {
        "id": 1017870,
        "thumbId": 1017870,
        "name": "Cell (Perfect Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1017870_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Androids/Cell Saga\" Category \nKi +3 and HP, ATK & DEF +33%",
        "links": [
            17,
            19,
            33,
            50,
            119,
            108
        ],
        "categories": []
    },
    {
        "id": 1006691,
        "thumbId": 1006690,
        "name": "Ultimate Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006690_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type ATK +70%",
        "links": [
            22,
            34,
            42,
            60,
            103,
            109
        ],
        "categories": []
    },
    {
        "id": 1006671,
        "thumbId": 1006670,
        "name": "Ultimate Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006670_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3",
        "links": [
            23,
            34,
            47,
            60,
            103,
            1003,
            109
        ],
        "categories": []
    },
    {
        "id": 1016581,
        "thumbId": 1016580,
        "name": "Goku (GT)  ",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016580_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            23,
            22,
            30,
            97,
            63,
            95,
            118
        ],
        "categories": []
    },
    {
        "id": 1011341,
        "thumbId": 1011340,
        "name": "Super Saiyan Vegeta Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011340_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            34,
            40,
            42,
            95,
            29,
            9,
            118
        ],
        "categories": []
    },
    {
        "id": 1016441,
        "thumbId": 1016440,
        "name": "Super Saiyan Trunks (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016440_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, TEQ & PHY Type \nKi +3 and HP, ATK & DEF +70%",
        "links": [
            29,
            40,
            9,
            39,
            95,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1016451,
        "thumbId": 1016450,
        "name": "Super Saiyan 2 Goku (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016450_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +70%",
        "links": [
            9,
            34,
            29,
            23,
            95,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1016431,
        "thumbId": 1016430,
        "name": "Super Saiyan Trunks (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016430_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            29,
            40,
            22,
            39,
            95
        ],
        "categories": []
    },
    {
        "id": 1016430,
        "thumbId": 1016430,
        "name": "Super Saiyan Trunks (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016430_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            29,
            40,
            22,
            39,
            95
        ],
        "categories": []
    },
    {
        "id": 1010361,
        "thumbId": 1010360,
        "name": "Super Saiyan Goku Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010360_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            2,
            23,
            34,
            95,
            29,
            9,
            118
        ],
        "categories": []
    },
    {
        "id": 1015851,
        "thumbId": 1015850,
        "name": "Super Saiyan 4 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015850_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Pure Saiyans\" Category \nKi +4 and HP, ATK & DEF +44%",
        "links": [
            29,
            47,
            60,
            95,
            97,
            124
        ],
        "categories": []
    },
    {
        "id": 1015850,
        "thumbId": 1015850,
        "name": "Super Saiyan 4 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015850_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Pure Saiyans\" Category \nKi +4 and HP, ATK & DEF +44%",
        "links": [
            29,
            47,
            60,
            95,
            97,
            124
        ],
        "categories": []
    },
    {
        "id": 1016331,
        "thumbId": 1016330,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016330_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ, INT and STR Type Ki +2 \nand HP, ATK & DEF +30%",
        "links": [
            45,
            23,
            42,
            47,
            20,
            30
        ],
        "categories": []
    },
    {
        "id": 1016330,
        "thumbId": 1016330,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016330_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ, INT and STR Type Ki +2 \nand HP, ATK & DEF +30%",
        "links": [
            45,
            23,
            42,
            47,
            20,
            30
        ],
        "categories": []
    },
    {
        "id": 1015881,
        "thumbId": 1015880,
        "name": "Majin Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015880_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme Class Ki +3 and \nHP, ATK & DEF +90%",
        "links": [
            29,
            22,
            63,
            40,
            89,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1015871,
        "thumbId": 1015870,
        "name": "Super Saiyan 2 Goku (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015870_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class Ki +3 and \nHP, ATK & DEF +90%",
        "links": [
            9,
            29,
            23,
            22,
            97,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1016651,
        "thumbId": 1016650,
        "name": "Tortue Géniale",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016650_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"DB Saga\" Category \nKi +3 and HP, ATK & DEF +120%; \nor Super TEQ Type \nKi +3 and HP, ATK & DEF +90%",
        "links": [
            36,
            42,
            16,
            8,
            27,
            90,
            109
        ],
        "categories": []
    },
    {
        "id": 1016631,
        "thumbId": 1016630,
        "name": "Démon Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016630_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"DB Saga\" Category \nKi +3 and HP, ATK & DEF +120%; \nor Extreme STR Type \nKi +3 and HP, ATK & DEF +90%",
        "links": [
            86,
            6,
            84,
            90,
            102,
            119,
            109
        ],
        "categories": []
    },
    {
        "id": 1016231,
        "thumbId": 1016230,
        "name": "Goku (Youth) & Arale Norimaki",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016230_thumb.png",
        "type": "AGI",
        "rarity": "LR",
        "alignment": "SUPER",
        "leaderSkill": "\"Dragon Ball Seekers\" Category \nKi +3 and HP, ATK & DEF +77%",
        "links": [
            128,
            4,
            42,
            102,
            90,
            118,
            125
        ],
        "categories": []
    },
    {
        "id": 1016901,
        "thumbId": 1016900,
        "name": "Super Saiyan Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016900_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\" Category \nKi +3 and HP, ATK & DEF +120%",
        "links": [
            23,
            29,
            34,
            9,
            39,
            1000,
            109
        ],
        "categories": []
    },
    {
        "id": 1005741,
        "thumbId": 1005740,
        "name": "Super Saiyan 3 Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005740_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3",
        "links": [
            29,
            22,
            9,
            40,
            26,
            116,
            109
        ],
        "categories": []
    },
    {
        "id": 1003761,
        "thumbId": 1003760,
        "name": "Perfect Cell",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003760_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK +30% for all Types",
        "links": [
            65,
            19,
            50,
            47,
            33,
            108,
            109
        ],
        "categories": []
    },
    {
        "id": 1015321,
        "thumbId": 1015320,
        "name": "Cyclopian Guard",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015320_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme AGL Type Ki +2 and HP, ATK & DEF +40%",
        "links": [
            38,
            18,
            52,
            73,
            119,
            120
        ],
        "categories": []
    },
    {
        "id": 1015320,
        "thumbId": 1015320,
        "name": "Cyclopian Guard",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015320_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme AGL Type Ki +2 and HP, ATK & DEF +40%",
        "links": [
            38,
            18,
            52,
            73,
            119,
            120
        ],
        "categories": []
    },
    {
        "id": 1010501,
        "thumbId": 1010500,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010500_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +2500",
        "links": [
            45,
            37,
            36,
            53,
            42,
            118
        ],
        "categories": []
    },
    {
        "id": 1009711,
        "thumbId": 1009710,
        "name": "Super Saiyan God SS Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009710_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP, ATK & DEF +25%",
        "links": [
            29,
            22,
            70,
            26,
            40,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1009701,
        "thumbId": 1009700,
        "name": "Super Saiyan Trunks (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009700_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP, ATK & DEF +2500",
        "links": [
            29,
            9,
            40,
            19,
            66,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1005001,
        "thumbId": 1005000,
        "name": "Boo (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005000_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP +70%",
        "links": [
            83,
            18,
            14,
            50,
            96,
            109,
            1004
        ],
        "categories": []
    },
    {
        "id": 1015351,
        "thumbId": 1015350,
        "name": "Pasta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015350_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme INT Type Ki +2 and \nHP, ATK & DEF +40%",
        "links": [
            64,
            32,
            73,
            18,
            102,
            90
        ],
        "categories": []
    },
    {
        "id": 1015350,
        "thumbId": 1015350,
        "name": "Pasta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015350_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme INT Type Ki +2 and \nHP, ATK & DEF +40%",
        "links": [
            64,
            32,
            73,
            18,
            102,
            90
        ],
        "categories": []
    },
    {
        "id": 1016101,
        "thumbId": 1016100,
        "name": "Super Saiyan God SS Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016100_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            22,
            29,
            47,
            30,
            70,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1016121,
        "thumbId": 1016120,
        "name": "Super Saiyan God SS Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016120_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Movie Heroes\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            22,
            40,
            26,
            29,
            70,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1016151,
        "thumbId": 1016150,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1016150_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Transformation Boost\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            85,
            59,
            26,
            86,
            60,
            18,
            118
        ],
        "categories": []
    },
    {
        "id": 1014981,
        "thumbId": 1014980,
        "name": "Super Saiyan Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014980_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Movie Bosses\" Category \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            22,
            29,
            26,
            49,
            60,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1014511,
        "thumbId": 1014510,
        "name": "Broly (Wrathful)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014510_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme AGL Type Ki +3 and \nHP, ATK & DEF +100%",
        "links": [
            22,
            34,
            26,
            49,
            60,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1005031,
        "thumbId": 1005030,
        "name": "Super Saiyan 3 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005030_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +30%",
        "links": [
            9,
            22,
            29,
            89,
            116,
            109,
            1003
        ],
        "categories": []
    },
    {
        "id": 1006731,
        "thumbId": 1006730,
        "name": "Majin Boo (Pure Evil)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006730_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type enemies' ATK -30%",
        "links": [
            83,
            49,
            18,
            96,
            119,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1008151,
        "thumbId": 1008150,
        "name": "West Supreme Kai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008150_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super STR Type Ki +2 and HP, ATK & DEF +40%",
        "links": [
            64,
            4,
            2,
            60,
            80,
            1003
        ],
        "categories": []
    },
    {
        "id": 1006730,
        "thumbId": 1006730,
        "name": "Majin Boo (Pure Evil)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006730_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type enemies' ATK -30%",
        "links": [
            83,
            49,
            18,
            96,
            119,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1008150,
        "thumbId": 1008150,
        "name": "West Supreme Kai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008150_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Super STR Type Ki +2 and HP, ATK & DEF +40%",
        "links": [
            64,
            4,
            2,
            60,
            80,
            1003
        ],
        "categories": []
    },
    {
        "id": 1015831,
        "thumbId": 1015820,
        "name": "Bota Magetta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015820_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Reduces damage received by 40%",
        "links": [
            52,
            42,
            14,
            37,
            126,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1015821,
        "thumbId": 1015820,
        "name": "Bota Magetta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015820_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type enemies' ATK -40%",
        "links": [
            52,
            42,
            14,
            37,
            126,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1015830,
        "thumbId": 1015820,
        "name": "Bota Magetta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015820_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Reduces damage received by 40%",
        "links": [
            52,
            42,
            14,
            37,
            126,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1015820,
        "thumbId": 1015820,
        "name": "Bota Magetta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015820_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type enemies' ATK -40%",
        "links": [
            52,
            42,
            14,
            37,
            126,
            130,
            109
        ],
        "categories": []
    },
    {
        "id": 1015860,
        "thumbId": 1015860,
        "name": "Trunks (Kid) & Mai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015860_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Guarantees Super Attack to level up by 1 \nin Training",
        "links": [],
        "categories": []
    },
    {
        "id": 1014301,
        "thumbId": 1014300,
        "name": "Freezer (Final Form) (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014300_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            26,
            59,
            60,
            85,
            119,
            95
        ],
        "categories": []
    },
    {
        "id": 1014311,
        "thumbId": 1014310,
        "name": "Cell (Perfect Form) (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014310_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            17,
            8,
            60,
            108,
            119,
            95
        ],
        "categories": []
    },
    {
        "id": 1014300,
        "thumbId": 1014300,
        "name": "Freezer (Final Form) (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014300_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            26,
            59,
            60,
            85,
            119,
            95
        ],
        "categories": []
    },
    {
        "id": 1014310,
        "thumbId": 1014310,
        "name": "Cell (Perfect Form) (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014310_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            17,
            8,
            60,
            108,
            119,
            95
        ],
        "categories": []
    },
    {
        "id": 1015411,
        "thumbId": 1015410,
        "name": "Beerus (Monaka Costume)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1015410_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Representatives of Universe 7\" Category \nKi +3 and HP, ATK & DEF +50%",
        "links": [
            80,
            26,
            14,
            60,
            79,
            42,
            118
        ],
        "categories": []
    },
    {
        "id": 1013711,
        "thumbId": 1013710,
        "name": "Lord Slug (Giant Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013710_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Giant Form\" Category \nKi +3 and HP, ATK & DEF +120%; \nor Extreme PHY Type \nKi +3 and HP, ATK & DEF +70%",
        "links": [
            48,
            119,
            28,
            86,
            50,
            123,
            118
        ],
        "categories": []
    },
    {
        "id": 1008501,
        "thumbId": 1008500,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008500_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & PHY Type HP & ATK +20%",
        "links": [
            23,
            42,
            60,
            27,
            36
        ],
        "categories": []
    },
    {
        "id": 1013311,
        "thumbId": 1013310,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013310_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & TEQ Type ATK & DEF +20%",
        "links": [
            36,
            2,
            1,
            47
        ],
        "categories": []
    },
    {
        "id": 1013351,
        "thumbId": 1013350,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013350_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type ATK +30%",
        "links": [
            36,
            53,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1008500,
        "thumbId": 1008500,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008500_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & PHY Type HP & ATK +20%",
        "links": [
            23,
            42,
            60,
            27,
            36
        ],
        "categories": []
    },
    {
        "id": 1013310,
        "thumbId": 1013310,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013310_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & TEQ Type ATK & DEF +20%",
        "links": [
            36,
            2,
            1,
            47
        ],
        "categories": []
    },
    {
        "id": 1013350,
        "thumbId": 1013350,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013350_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type ATK +30%",
        "links": [
            36,
            53,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1013141,
        "thumbId": 1013140,
        "name": "Yajirobe",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013140_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +2",
        "links": [
            52,
            42,
            32,
            12
        ],
        "categories": []
    },
    {
        "id": 1013140,
        "thumbId": 1013140,
        "name": "Yajirobe",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013140_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +2",
        "links": [
            52,
            42,
            32,
            12
        ],
        "categories": []
    },
    {
        "id": 1013241,
        "thumbId": 1013240,
        "name": "Tora (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013240_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL and STR Type \nKi +2 and HP, ATK & DEF +50%",
        "links": [
            22,
            62,
            63,
            34,
            123,
            124,
            118
        ],
        "categories": []
    },
    {
        "id": 1013251,
        "thumbId": 1013250,
        "name": "Shugesh (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013250_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            62,
            63,
            52,
            34,
            123,
            124,
            118
        ],
        "categories": []
    },
    {
        "id": 1013261,
        "thumbId": 1013260,
        "name": "Borgos (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013260_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +70%",
        "links": [
            62,
            63,
            42,
            34,
            123,
            124,
            118
        ],
        "categories": []
    },
    {
        "id": 1012711,
        "thumbId": 1012710,
        "name": "Jiren",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012710_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe Survival Saga\" Category \nHP, ATK & DEF +60%",
        "links": [
            39,
            60,
            93,
            80,
            130
        ],
        "categories": []
    },
    {
        "id": 1012710,
        "thumbId": 1012710,
        "name": "Jiren",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012710_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Universe Survival Saga\" Category \nHP, ATK & DEF +60%",
        "links": [
            39,
            60,
            93,
            80,
            130
        ],
        "categories": []
    },
    {
        "id": 1014681,
        "thumbId": 1014680,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014680_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            45,
            30,
            48,
            8,
            60,
            56,
            118
        ],
        "categories": []
    },
    {
        "id": 1014401,
        "thumbId": 1014400,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014400_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            45,
            9,
            22,
            29,
            47
        ],
        "categories": []
    },
    {
        "id": 1014400,
        "thumbId": 1014400,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014400_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            45,
            9,
            22,
            29,
            47
        ],
        "categories": []
    },
    {
        "id": 1014391,
        "thumbId": 1014390,
        "name": "Freezer (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014390_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme STR Type Ki +2 and HP, ATK & DEF +90%",
        "links": [
            85,
            59,
            26,
            86,
            50,
            60,
            109
        ],
        "categories": []
    },
    {
        "id": 1014371,
        "thumbId": 1014370,
        "name": "Goku (Kaioken)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1014370_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super PHY Type Ki +2 and HP, ATK & DEF +90%",
        "links": [
            45,
            23,
            22,
            47,
            60,
            97,
            109
        ],
        "categories": []
    },
    {
        "id": 1012561,
        "thumbId": 1012560,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012560_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT & PHY Type Ki +2 \nand HP +40%",
        "links": [
            5,
            13,
            24,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1012560,
        "thumbId": 1012560,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012560_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT & PHY Type Ki +2 \nand HP +40%",
        "links": [
            5,
            13,
            24,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1006141,
        "thumbId": 1006140,
        "name": "Man-Wolf",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006140_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +2",
        "links": [
            32,
            14,
            28,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1006151,
        "thumbId": 1006150,
        "name": "Pamput",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006150_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2",
        "links": [
            42,
            44,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1006140,
        "thumbId": 1006140,
        "name": "Man-Wolf",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006140_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +2",
        "links": [
            32,
            14,
            28,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1006150,
        "thumbId": 1006150,
        "name": "Pamput",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006150_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2",
        "links": [
            42,
            44,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1008921,
        "thumbId": 1008920,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008920_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, INT & STR Type HP, ATK & \nDEF +30%",
        "links": [
            1000,
            9,
            22,
            29,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1008931,
        "thumbId": 1008930,
        "name": "Super Saiyan Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008930_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +40%",
        "links": [
            1000,
            9,
            22,
            29,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1008941,
        "thumbId": 1008940,
        "name": "Super Saiyan Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008940_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +7% per Ki Sphere obtained",
        "links": [
            1000,
            9,
            22,
            29,
            47,
            118
        ],
        "categories": []
    },
    {
        "id": 1013801,
        "thumbId": 1013800,
        "name": "Whis",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013800_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +50%",
        "links": [
            80,
            60,
            79,
            17,
            8,
            37
        ],
        "categories": []
    },
    {
        "id": 1013800,
        "thumbId": 1013800,
        "name": "Whis",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013800_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and HP, ATK & DEF +50%",
        "links": [
            80,
            60,
            79,
            17,
            8,
            37
        ],
        "categories": []
    },
    {
        "id": 1013401,
        "thumbId": 1013400,
        "name": "Elder Kai (Dozing)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013400_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "30% chance for Super Attack \nto level up by 1 in Training",
        "links": [],
        "categories": []
    },
    {
        "id": 1013400,
        "thumbId": 1013400,
        "name": "Elder Kai (Dozing)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013400_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "30% chance for Super Attack \nto level up by 1 in Training",
        "links": [],
        "categories": []
    },
    {
        "id": 1013161,
        "thumbId": 1013160,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1013160_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +2 and HP, ATK & DEF +30%",
        "links": [
            34,
            23,
            22,
            45,
            56,
            4,
            118
        ],
        "categories": []
    },
    {
        "id": 1012851,
        "thumbId": 1012850,
        "name": "Super Saiyan 3 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012850_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyan 3\" Category \nKi +3 and HP, ATK & DEF +33%",
        "links": [
            22,
            29,
            30,
            47,
            89,
            116
        ],
        "categories": []
    },
    {
        "id": 1012850,
        "thumbId": 1012850,
        "name": "Super Saiyan 3 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012850_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyan 3\" Category \nKi +3 and HP, ATK & DEF +33%",
        "links": [
            22,
            29,
            30,
            47,
            89,
            116
        ],
        "categories": []
    },
    {
        "id": 1011231,
        "thumbId": 1011230,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011230_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"World Tournament\" Category Ki +2 \nand HP & ATK +20%",
        "links": [
            60,
            42,
            53,
            102,
            90
        ],
        "categories": []
    },
    {
        "id": 1011221,
        "thumbId": 1011220,
        "name": "Ranfan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011220_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" Category Ki +2 \nand ATK & DEF +20%",
        "links": [
            64,
            8,
            32,
            102,
            90
        ],
        "categories": []
    },
    {
        "id": 1011230,
        "thumbId": 1011230,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011230_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "\"World Tournament\" Category Ki +2 \nand HP & ATK +20%",
        "links": [
            60,
            42,
            53,
            102,
            90
        ],
        "categories": []
    },
    {
        "id": 1011220,
        "thumbId": 1011220,
        "name": "Ranfan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011220_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" Category Ki +2 \nand ATK & DEF +20%",
        "links": [
            64,
            8,
            32,
            102,
            90
        ],
        "categories": []
    },
    {
        "id": 1012781,
        "thumbId": 1012780,
        "name": "Super Saiyan 3 Vegeta (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012780_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            29,
            9,
            40,
            26,
            116,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1008191,
        "thumbId": 1008190,
        "name": "Super Saiyan 3 Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008190_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyan 3\" Category, \nAGL, INT & PHY Types \nKi +2 and HP, ATK & DEF +40%",
        "links": [
            22,
            29,
            97,
            30,
            89,
            116,
            109
        ],
        "categories": []
    },
    {
        "id": 1008190,
        "thumbId": 1008190,
        "name": "Super Saiyan 3 Bardock",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008190_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Super Saiyan 3\" Category, \nAGL, INT & PHY Types \nKi +2 and HP, ATK & DEF +40%",
        "links": [
            22,
            29,
            97,
            30,
            89,
            116,
            109
        ],
        "categories": []
    },
    {
        "id": 1012491,
        "thumbId": 1012490,
        "name": "Great Saiyaman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012490_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class ATK +50% \nwhen HP is 50% or above",
        "links": [
            45,
            69,
            93,
            94,
            60,
            47
        ],
        "categories": []
    },
    {
        "id": 1012501,
        "thumbId": 1012500,
        "name": "Great Saiyaman 2",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012500_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" Category Ki +2 \nand HP & ATK +30%",
        "links": [
            64,
            69,
            93,
            94,
            42
        ],
        "categories": []
    },
    {
        "id": 1012451,
        "thumbId": 1012450,
        "name": "Tapion",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012450_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and ATK & DEF +30%",
        "links": [
            15,
            2,
            30,
            65,
            8,
            37
        ],
        "categories": []
    },
    {
        "id": 1012490,
        "thumbId": 1012490,
        "name": "Great Saiyaman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012490_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class ATK +50% \nwhen HP is 50% or above",
        "links": [
            45,
            69,
            93,
            94,
            60,
            47
        ],
        "categories": []
    },
    {
        "id": 1012500,
        "thumbId": 1012500,
        "name": "Great Saiyaman 2",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012500_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" Category Ki +2 \nand HP & ATK +30%",
        "links": [
            64,
            69,
            93,
            94,
            42
        ],
        "categories": []
    },
    {
        "id": 1012450,
        "thumbId": 1012450,
        "name": "Tapion",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012450_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and ATK & DEF +30%",
        "links": [
            15,
            2,
            30,
            65,
            8,
            37
        ],
        "categories": []
    },
    {
        "id": 1012471,
        "thumbId": 1012470,
        "name": "Hoi",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012470_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL and STR Types HP & ATK +30%",
        "links": [
            8,
            32,
            86,
            12,
            76
        ],
        "categories": []
    },
    {
        "id": 1012481,
        "thumbId": 1012480,
        "name": "Minotia",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012480_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type enemies' ATK -25%",
        "links": [
            15,
            2,
            30,
            8,
            37
        ],
        "categories": []
    },
    {
        "id": 1012470,
        "thumbId": 1012470,
        "name": "Hoi",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012470_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL and STR Types HP & ATK +30%",
        "links": [
            8,
            32,
            86,
            12,
            76
        ],
        "categories": []
    },
    {
        "id": 1012480,
        "thumbId": 1012480,
        "name": "Minotia",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012480_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type enemies' ATK -25%",
        "links": [
            15,
            2,
            30,
            8,
            37
        ],
        "categories": []
    },
    {
        "id": 1012941,
        "thumbId": 1012940,
        "name": "Super Saiyan Trunks (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012940_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class Ki +1 and HP, ATK & DEF +25%",
        "links": [
            29,
            9,
            40,
            19,
            66,
            97
        ],
        "categories": []
    },
    {
        "id": 1012971,
        "thumbId": 1012970,
        "name": "Zamasu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012970_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme Class Ki +1 and HP, ATK & DEF +25%",
        "links": [
            103,
            39,
            26,
            80,
            66,
            120
        ],
        "categories": []
    },
    {
        "id": 1012940,
        "thumbId": 1012940,
        "name": "Super Saiyan Trunks (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012940_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class Ki +1 and HP, ATK & DEF +25%",
        "links": [
            29,
            9,
            40,
            19,
            66,
            97
        ],
        "categories": []
    },
    {
        "id": 1012970,
        "thumbId": 1012970,
        "name": "Zamasu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012970_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme Class Ki +1 and HP, ATK & DEF +25%",
        "links": [
            103,
            39,
            26,
            80,
            66,
            120
        ],
        "categories": []
    },
    {
        "id": 1012351,
        "thumbId": 1012350,
        "name": "Gokua",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012350_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme STR Type Ki +3; \nSTR Type ATK +80%",
        "links": [
            87,
            88,
            42,
            73,
            60,
            119
        ],
        "categories": []
    },
    {
        "id": 1012350,
        "thumbId": 1012350,
        "name": "Gokua",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012350_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Extreme STR Type Ki +3; \nSTR Type ATK +80%",
        "links": [
            87,
            88,
            42,
            73,
            60,
            119
        ],
        "categories": []
    },
    {
        "id": 1012221,
        "thumbId": 1012220,
        "name": "Freezer (Final Form) (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012220_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Resurrected Warriors\" Category \nKi +2 and ATK & DEF +20%",
        "links": [
            26,
            59,
            65,
            85,
            18,
            130
        ],
        "categories": []
    },
    {
        "id": 1012220,
        "thumbId": 1012220,
        "name": "Freezer (Final Form) (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012220_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Resurrected Warriors\" Category \nKi +2 and ATK & DEF +20%",
        "links": [
            26,
            59,
            65,
            85,
            18,
            130
        ],
        "categories": []
    },
    {
        "id": 1011981,
        "thumbId": 1011980,
        "name": "Golden Freezer (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011980_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +2; \nExtreme STR Type HP, ATK & DEF +40%",
        "links": [
            26,
            59,
            65,
            85,
            119,
            18,
            130
        ],
        "categories": []
    },
    {
        "id": 1011980,
        "thumbId": 1011980,
        "name": "Golden Freezer (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011980_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +2; \nExtreme STR Type HP, ATK & DEF +40%",
        "links": [
            26,
            59,
            65,
            85,
            119,
            18,
            130
        ],
        "categories": []
    },
    {
        "id": 1011921,
        "thumbId": 1011920,
        "name": "Yurin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011920_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" Category Ki +1 \nand HP, ATK & DEF +20%",
        "links": [
            64,
            5,
            32,
            42,
            8
        ],
        "categories": []
    },
    {
        "id": 1012011,
        "thumbId": 1012010,
        "name": "Ultimate Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012010_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +1; \nSuper AGL Type HP, ATK & DEF +20%",
        "links": [
            22,
            42,
            60,
            103,
            47,
            130
        ],
        "categories": []
    },
    {
        "id": 1011920,
        "thumbId": 1011920,
        "name": "Yurin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011920_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Peppy Gals\" Category Ki +1 \nand HP, ATK & DEF +20%",
        "links": [
            64,
            5,
            32,
            42,
            8
        ],
        "categories": []
    },
    {
        "id": 1012010,
        "thumbId": 1012010,
        "name": "Ultimate Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012010_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +1; \nSuper AGL Type HP, ATK & DEF +20%",
        "links": [
            22,
            42,
            60,
            103,
            47,
            130
        ],
        "categories": []
    },
    {
        "id": 1012270,
        "thumbId": 1012270,
        "name": "Grand Kai [PHY]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012270_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Guarantees PHY Type character's \nSuper Attack to level up by 1 in Training",
        "links": [],
        "categories": []
    },
    {
        "id": 1012260,
        "thumbId": 1012260,
        "name": "Grand Kai [STR]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012260_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Guarantees STR Type character's \nSuper Attack to level up by 1 in Training",
        "links": [],
        "categories": []
    },
    {
        "id": 1012250,
        "thumbId": 1012250,
        "name": "Grand Kai [INT]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012250_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Guarantees INT Type character's \nSuper Attack to level up by 1 in Training",
        "links": [],
        "categories": []
    },
    {
        "id": 1012240,
        "thumbId": 1012240,
        "name": "Grand Kai [TEQ]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012240_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Guarantees TEQ Type character's \nSuper Attack to level up by 1 in Training",
        "links": [],
        "categories": []
    },
    {
        "id": 1012230,
        "thumbId": 1012230,
        "name": "Grand Kai [AGL]",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012230_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Guarantees AGL Type character's \nSuper Attack to level up by 1 in Training",
        "links": [],
        "categories": []
    },
    {
        "id": 1011181,
        "thumbId": 1011180,
        "name": "Super Saiyan 3 Broly",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011180_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +2 and ATK & DEF +30%",
        "links": [
            104,
            22,
            29,
            34,
            116,
            111,
            109
        ],
        "categories": []
    },
    {
        "id": 1010771,
        "thumbId": 1010770,
        "name": "Super Saiyan Trunks (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010770_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Recovers 1500 HP per Ki Sphere of \ncharacter's Type obtained",
        "links": [
            29,
            40,
            22,
            39,
            95,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1011471,
        "thumbId": 1011470,
        "name": "Super Saiyan Trunks (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011470_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +2 and HP, ATK & DEF +40%",
        "links": [
            69,
            39,
            9,
            97,
            29,
            121,
            118
        ],
        "categories": []
    },
    {
        "id": 1012591,
        "thumbId": 1012590,
        "name": "Vegetto",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012590_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Majin Buu Saga\" Category \nKi +2 and HP & DEF +30%",
        "links": [
            22,
            8,
            97,
            103,
            112,
            1003
        ],
        "categories": []
    },
    {
        "id": 1012590,
        "thumbId": 1012590,
        "name": "Vegetto",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012590_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "\"Majin Buu Saga\" Category \nKi +2 and HP & DEF +30%",
        "links": [
            22,
            8,
            97,
            103,
            112,
            1003
        ],
        "categories": []
    },
    {
        "id": 1012631,
        "thumbId": 1012630,
        "name": "Super Saiyan 2 Vegeta & Bulma",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012630_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +2 and HP & DEF +50%",
        "links": [
            22,
            40,
            26,
            9,
            49,
            97
        ],
        "categories": []
    },
    {
        "id": 1012630,
        "thumbId": 1012630,
        "name": "Super Saiyan 2 Vegeta & Bulma",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012630_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +2 and HP & DEF +50%",
        "links": [
            22,
            40,
            26,
            9,
            49,
            97
        ],
        "categories": []
    },
    {
        "id": 1012541,
        "thumbId": 1012540,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012540_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK & DEF +30%",
        "links": [
            35,
            31,
            110,
            67,
            4,
            64
        ],
        "categories": []
    },
    {
        "id": 1012540,
        "thumbId": 1012540,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1012540_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK & DEF +30%",
        "links": [
            35,
            31,
            110,
            67,
            4,
            64
        ],
        "categories": []
    },
    {
        "id": 1011791,
        "thumbId": 1011790,
        "name": "Ultimate Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011790_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Hybrid Saiyans\" Category \nKi +2 and HP & ATK +20%",
        "links": [
            23,
            34,
            42,
            60,
            103,
            47
        ],
        "categories": []
    },
    {
        "id": 1011790,
        "thumbId": 1011790,
        "name": "Ultimate Gohan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011790_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "\"Hybrid Saiyans\" Category \nKi +2 and HP & ATK +20%",
        "links": [
            23,
            34,
            42,
            60,
            103,
            47
        ],
        "categories": []
    },
    {
        "id": 1007621,
        "thumbId": 1007620,
        "name": "Super Saiyan 2 Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007620_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and ATK & DEF +30%",
        "links": [
            9,
            22,
            29,
            40,
            26,
            97
        ],
        "categories": []
    },
    {
        "id": 1007620,
        "thumbId": 1007620,
        "name": "Super Saiyan 2 Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007620_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and ATK & DEF +30%",
        "links": [
            9,
            22,
            29,
            40,
            26,
            97
        ],
        "categories": []
    },
    {
        "id": 1009391,
        "thumbId": 1009390,
        "name": "Super Janemba",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009390_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL & PHY Types \nKi +2 and HP, ATK & DEF +30%",
        "links": [
            50,
            60,
            28,
            18,
            119,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1011501,
        "thumbId": 1011500,
        "name": "Omega Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011500_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Shadow Dragon Saga\" Category Ki +2 and \nATK & DEF +50%",
        "links": [
            18,
            120,
            50,
            60,
            95,
            127,
            109
        ],
        "categories": []
    },
    {
        "id": 1009390,
        "thumbId": 1009390,
        "name": "Super Janemba",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009390_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL & PHY Types \nKi +2 and HP, ATK & DEF +30%",
        "links": [
            50,
            60,
            28,
            18,
            119,
            120,
            109
        ],
        "categories": []
    },
    {
        "id": 1011500,
        "thumbId": 1011500,
        "name": "Omega Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011500_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "\"Shadow Dragon Saga\" Category Ki +2 and \nATK & DEF +50%",
        "links": [
            18,
            120,
            50,
            60,
            95,
            127,
            109
        ],
        "categories": []
    },
    {
        "id": 1011741,
        "thumbId": 1011740,
        "name": "Super Saiyan 3 Goku (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011740_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "\"Shadow Dragon Saga\" Category Ki +2 and \nHP & ATK +50%",
        "links": [
            9,
            47,
            29,
            89,
            95,
            116,
            109
        ],
        "categories": []
    },
    {
        "id": 1011740,
        "thumbId": 1011740,
        "name": "Super Saiyan 3 Goku (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011740_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "\"Shadow Dragon Saga\" Category Ki +2 and \nHP & ATK +50%",
        "links": [
            9,
            47,
            29,
            89,
            95,
            116,
            109
        ],
        "categories": []
    },
    {
        "id": 1007901,
        "thumbId": 1007900,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007900_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and ATK +20% when HP is \n80% or below",
        "links": [
            45,
            36,
            2,
            1,
            37,
            47
        ],
        "categories": []
    },
    {
        "id": 1007900,
        "thumbId": 1007900,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007900_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2 and ATK +20% when HP is \n80% or below",
        "links": [
            45,
            36,
            2,
            1,
            37,
            47
        ],
        "categories": []
    },
    {
        "id": 1010601,
        "thumbId": 1010600,
        "name": "Boo (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010600_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ & STR Types \nKi +2 and HP & ATK +50%",
        "links": [
            83,
            18,
            14,
            50,
            96,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1010600,
        "thumbId": 1010600,
        "name": "Boo (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010600_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ & STR Types \nKi +2 and HP & ATK +50%",
        "links": [
            83,
            18,
            14,
            50,
            96,
            1004,
            109
        ],
        "categories": []
    },
    {
        "id": 1011351,
        "thumbId": 1011350,
        "name": "Bardock (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011350_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP & ATK +50%",
        "links": [
            22,
            34,
            62,
            63,
            123,
            124,
            118
        ],
        "categories": []
    },
    {
        "id": 1011361,
        "thumbId": 1011360,
        "name": "Fasha (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011360_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Ki +3 and ATK & DEF +30% when HP is \n30% or above",
        "links": [
            22,
            62,
            63,
            64,
            123,
            124,
            118
        ],
        "categories": []
    },
    {
        "id": 1010821,
        "thumbId": 1010820,
        "name": "Super #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010820_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT & STR Type enemies' ATK -25%",
        "links": [
            35,
            120,
            112,
            119,
            50,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1007171,
        "thumbId": 1007170,
        "name": "Super #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007170_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL & INT Type enemies' ATK -25%",
        "links": [
            35,
            120,
            112,
            119,
            50,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1010820,
        "thumbId": 1010820,
        "name": "Super #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010820_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT & STR Type enemies' ATK -25%",
        "links": [
            35,
            120,
            112,
            119,
            50,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1007170,
        "thumbId": 1007170,
        "name": "Super #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007170_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL & INT Type enemies' ATK -25%",
        "links": [
            35,
            120,
            112,
            119,
            50,
            95,
            109
        ],
        "categories": []
    },
    {
        "id": 1010191,
        "thumbId": 1010190,
        "name": "Thouser",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010190_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +2 and ATK & DEF +20%",
        "links": [
            92,
            91,
            73,
            39,
            60,
            111
        ],
        "categories": []
    },
    {
        "id": 1010741,
        "thumbId": 1010740,
        "name": "Super Saiyan God Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010740_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR & PHY Types \nKi +2, ATK & DEF +50%",
        "links": [
            80,
            70,
            29,
            47,
            23,
            34,
            109
        ],
        "categories": []
    },
    {
        "id": 1004101,
        "thumbId": 1004100,
        "name": "Mr. Satan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004100_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class Ki +3",
        "links": [
            27,
            44,
            15,
            10,
            20
        ],
        "categories": []
    },
    {
        "id": 1004100,
        "thumbId": 1004100,
        "name": "Mr. Satan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004100_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Super Class Ki +3",
        "links": [
            27,
            44,
            15,
            10,
            20
        ],
        "categories": []
    },
    {
        "id": 1010721,
        "thumbId": 1010720,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010720_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +2 and HP & DEF +70%",
        "links": [
            9,
            97,
            29,
            47,
            61,
            117,
            118
        ],
        "categories": []
    },
    {
        "id": 1010411,
        "thumbId": 1010410,
        "name": "Super Saiyan 2 Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010410_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL and STR Type Ki +3 and HP, ATK & \nDEF +30%",
        "links": [
            9,
            22,
            29,
            47,
            97,
            118
        ],
        "categories": []
    },
    {
        "id": 1010461,
        "thumbId": 1010460,
        "name": "Full Power Boujack",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010460_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL and INT Type Ki +2 and ATK & \nDEF +50%",
        "links": [
            87,
            88,
            50,
            86,
            32,
            1004,
            118
        ],
        "categories": []
    },
    {
        "id": 1010451,
        "thumbId": 1010450,
        "name": "Full Power Boujack",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010450_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type Ki +2 and ATK & DEF +50%",
        "links": [
            87,
            88,
            50,
            86,
            32,
            1004,
            118
        ],
        "categories": []
    },
    {
        "id": 1010471,
        "thumbId": 1010470,
        "name": "Zangya",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010470_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "When HP is 30% or above, Ki +2 and ATK & \nDEF +20%",
        "links": [
            87,
            88,
            64,
            18,
            73,
            60
        ],
        "categories": []
    },
    {
        "id": 1010470,
        "thumbId": 1010470,
        "name": "Zangya",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010470_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "When HP is 30% or above, Ki +2 and ATK & \nDEF +20%",
        "links": [
            87,
            88,
            64,
            18,
            73,
            60
        ],
        "categories": []
    },
    {
        "id": 1011441,
        "thumbId": 1011440,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011440_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and ATK & DEF +20%",
        "links": [
            45,
            23,
            29,
            30,
            9,
            1003,
            118
        ],
        "categories": []
    },
    {
        "id": 1011411,
        "thumbId": 1011410,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011410_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +2000",
        "links": [
            45,
            36,
            53,
            42,
            37
        ],
        "categories": []
    },
    {
        "id": 1011410,
        "thumbId": 1011410,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1011410_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +2000",
        "links": [
            45,
            36,
            53,
            42,
            37
        ],
        "categories": []
    },
    {
        "id": 1010651,
        "thumbId": 1010650,
        "name": "Super Saiyan Goku (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010650_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +50%",
        "links": [
            23,
            29,
            9,
            22,
            47,
            129
        ],
        "categories": []
    },
    {
        "id": 1010650,
        "thumbId": 1010650,
        "name": "Super Saiyan Goku (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010650_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2 and HP, ATK & DEF +50%",
        "links": [
            23,
            29,
            9,
            22,
            47,
            129
        ],
        "categories": []
    },
    {
        "id": 1010701,
        "thumbId": 1010700,
        "name": "King Cold (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010700_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL & INT Type enemies' ATK -20%",
        "links": [
            18,
            85,
            52,
            86,
            129
        ],
        "categories": []
    },
    {
        "id": 1010700,
        "thumbId": 1010700,
        "name": "King Cold (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010700_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL & INT Type enemies' ATK -20%",
        "links": [
            18,
            85,
            52,
            86,
            129
        ],
        "categories": []
    },
    {
        "id": 1006021,
        "thumbId": 1006020,
        "name": "Super Baby 1",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006020_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types HP, ATK & DEF +30%",
        "links": [
            86,
            28,
            32,
            95,
            115,
            119,
            118
        ],
        "categories": []
    },
    {
        "id": 1009881,
        "thumbId": 1009880,
        "name": "Super Saiyan 2 Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009880_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Ki +2 and ATK & DEF +20% when HP is \n30% or above",
        "links": [
            9,
            22,
            29,
            47,
            45,
            61,
            118
        ],
        "categories": []
    },
    {
        "id": 1009871,
        "thumbId": 1009870,
        "name": "Goku (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009870_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "HP +50%",
        "links": [
            23,
            4,
            36,
            102,
            90
        ],
        "categories": []
    },
    {
        "id": 1009870,
        "thumbId": 1009870,
        "name": "Goku (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009870_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "HP +50%",
        "links": [
            23,
            4,
            36,
            102,
            90
        ],
        "categories": []
    },
    {
        "id": 1008831,
        "thumbId": 1008830,
        "name": "Cell (1st Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008830_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK +50%",
        "links": [
            12,
            19,
            50,
            47,
            33,
            1004,
            111
        ],
        "categories": []
    },
    {
        "id": 1008830,
        "thumbId": 1008830,
        "name": "Cell (1st Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008830_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK +50%",
        "links": [
            12,
            19,
            50,
            47,
            33,
            1004,
            111
        ],
        "categories": []
    },
    {
        "id": 1010041,
        "thumbId": 1010040,
        "name": "Freezer (1st Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010040_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Enemy ATK -10%",
        "links": [
            50,
            26,
            51,
            85,
            86
        ],
        "categories": []
    },
    {
        "id": 1010040,
        "thumbId": 1010040,
        "name": "Freezer (1st Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010040_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Enemy ATK -10%",
        "links": [
            50,
            26,
            51,
            85,
            86
        ],
        "categories": []
    },
    {
        "id": 1009681,
        "thumbId": 1009680,
        "name": "Fusion Zamasu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009680_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type enemies' ATK & DEF -20%",
        "links": [
            119,
            66,
            112,
            39,
            50
        ],
        "categories": []
    },
    {
        "id": 1009680,
        "thumbId": 1009680,
        "name": "Fusion Zamasu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009680_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type enemies' ATK & DEF -20%",
        "links": [
            119,
            66,
            112,
            39,
            50
        ],
        "categories": []
    },
    {
        "id": 1008491,
        "thumbId": 1008490,
        "name": "Bulma (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008490_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2",
        "links": [
            10,
            37,
            8,
            90,
            102,
            114
        ],
        "categories": []
    },
    {
        "id": 1008481,
        "thumbId": 1008480,
        "name": "Bulma (Bunny)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008480_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +25%",
        "links": [
            10,
            37,
            8,
            90,
            102,
            114
        ],
        "categories": []
    },
    {
        "id": 1009801,
        "thumbId": 1009800,
        "name": "Monster Carrot",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009800_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type HP & DEF +50%",
        "links": [
            8,
            32,
            90,
            102,
            14
        ],
        "categories": []
    },
    {
        "id": 1008490,
        "thumbId": 1008490,
        "name": "Bulma (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008490_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +2",
        "links": [
            10,
            37,
            8,
            90,
            102,
            114
        ],
        "categories": []
    },
    {
        "id": 1008480,
        "thumbId": 1008480,
        "name": "Bulma (Bunny)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008480_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +25%",
        "links": [
            10,
            37,
            8,
            90,
            102,
            114
        ],
        "categories": []
    },
    {
        "id": 1009800,
        "thumbId": 1009800,
        "name": "Monster Carrot",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009800_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type HP & DEF +50%",
        "links": [
            8,
            32,
            90,
            102,
            14
        ],
        "categories": []
    },
    {
        "id": 1009071,
        "thumbId": 1009070,
        "name": "Tao Pai Pai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009070_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK +50%",
        "links": [
            32,
            18,
            46,
            90,
            102,
            128
        ],
        "categories": []
    },
    {
        "id": 1009061,
        "thumbId": 1009060,
        "name": "General Blue",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009060_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type HP & DEF +60%",
        "links": [
            55,
            13,
            18,
            90,
            102,
            128
        ],
        "categories": []
    },
    {
        "id": 1009521,
        "thumbId": 1009520,
        "name": "Arale Norimaki",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009520_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Reduces damage received by 20%",
        "links": [
            38,
            4,
            60,
            65,
            64,
            128,
            111
        ],
        "categories": []
    },
    {
        "id": 1009001,
        "thumbId": 1009000,
        "name": "Arale Norimaki",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009000_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type ATK & DEF +60%",
        "links": [
            38,
            4,
            60,
            65,
            64,
            128,
            118
        ],
        "categories": []
    },
    {
        "id": 1008981,
        "thumbId": 1008980,
        "name": "Arale Norimaki",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008980_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK & DEF +60%",
        "links": [
            38,
            4,
            60,
            65,
            64,
            128,
            118
        ],
        "categories": []
    },
    {
        "id": 1008961,
        "thumbId": 1008960,
        "name": "Arale Norimaki",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008960_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +3 and HP, ATK & DEF +30%",
        "links": [
            38,
            4,
            60,
            65,
            64,
            128,
            109
        ],
        "categories": []
    },
    {
        "id": 1009051,
        "thumbId": 1009050,
        "name": "Obotchaman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009050_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type HP & DEF +60%",
        "links": [
            38,
            2,
            8,
            17,
            60,
            128
        ],
        "categories": []
    },
    {
        "id": 1009031,
        "thumbId": 1009030,
        "name": "Sourman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009030_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type HP & DEF +60%",
        "links": [
            15,
            32,
            12,
            69,
            94,
            128
        ],
        "categories": []
    },
    {
        "id": 1009070,
        "thumbId": 1009070,
        "name": "Tao Pai Pai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009070_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK +50%",
        "links": [
            32,
            18,
            46,
            90,
            102,
            128
        ],
        "categories": []
    },
    {
        "id": 1009060,
        "thumbId": 1009060,
        "name": "General Blue",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009060_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type HP & DEF +60%",
        "links": [
            55,
            13,
            18,
            90,
            102,
            128
        ],
        "categories": []
    },
    {
        "id": 1009050,
        "thumbId": 1009050,
        "name": "Obotchaman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009050_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type HP & DEF +60%",
        "links": [
            38,
            2,
            8,
            17,
            60,
            128
        ],
        "categories": []
    },
    {
        "id": 1009030,
        "thumbId": 1009030,
        "name": "Sourman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009030_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type HP & DEF +60%",
        "links": [
            15,
            32,
            12,
            69,
            94,
            128
        ],
        "categories": []
    },
    {
        "id": 1010511,
        "thumbId": 1010510,
        "name": "Saibaiman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010510_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types ATK & DEF +3181",
        "links": [
            42,
            21,
            47,
            54,
            18,
            60
        ],
        "categories": []
    },
    {
        "id": 1010510,
        "thumbId": 1010510,
        "name": "Saibaiman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010510_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types ATK & DEF +3181",
        "links": [
            42,
            21,
            47,
            54,
            18,
            60
        ],
        "categories": []
    },
    {
        "id": 1008601,
        "thumbId": 1008600,
        "name": "Goku Black",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008600_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type enemy ATK & DEF -20%",
        "links": [
            39,
            47,
            66,
            119,
            50
        ],
        "categories": []
    },
    {
        "id": 1008600,
        "thumbId": 1008600,
        "name": "Goku Black",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008600_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type enemy ATK & DEF -20%",
        "links": [
            39,
            47,
            66,
            119,
            50
        ],
        "categories": []
    },
    {
        "id": 1007341,
        "thumbId": 1007340,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007340_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK -1000",
        "links": [
            45,
            37,
            36,
            53,
            42
        ],
        "categories": []
    },
    {
        "id": 1007321,
        "thumbId": 1007320,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007320_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types DEF -1000",
        "links": [
            45,
            37,
            36,
            53,
            42,
            47
        ],
        "categories": []
    },
    {
        "id": 1010190,
        "thumbId": 1010190,
        "name": "Thouser",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1010190_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +2 and ATK & DEF +20%",
        "links": [
            92,
            91,
            73,
            39,
            60,
            111
        ],
        "categories": []
    },
    {
        "id": 1006351,
        "thumbId": 1006350,
        "name": "Eis Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006350_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ & PHY Type enemy ATK -20%",
        "links": [
            60,
            18,
            32,
            95,
            127
        ],
        "categories": []
    },
    {
        "id": 1006350,
        "thumbId": 1006350,
        "name": "Eis Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006350_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ & PHY Type enemy ATK -20%",
        "links": [
            60,
            18,
            32,
            95,
            127
        ],
        "categories": []
    },
    {
        "id": 1006341,
        "thumbId": 1006340,
        "name": "Haze Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006340_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type enemy ATK -10%",
        "links": [
            32,
            14,
            95,
            8,
            127
        ],
        "categories": []
    },
    {
        "id": 1006371,
        "thumbId": 1006370,
        "name": "Rage Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006370_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Immune to negative effects",
        "links": [
            52,
            123,
            95,
            127
        ],
        "categories": []
    },
    {
        "id": 1006381,
        "thumbId": 1006380,
        "name": "Oceanus Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006380_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            60,
            14,
            95,
            127
        ],
        "categories": []
    },
    {
        "id": 1006401,
        "thumbId": 1006400,
        "name": "Naturon Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006400_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP +15%",
        "links": [
            18,
            32,
            95,
            127
        ],
        "categories": []
    },
    {
        "id": 1006340,
        "thumbId": 1006340,
        "name": "Haze Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006340_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type enemy ATK -10%",
        "links": [
            32,
            14,
            95,
            8,
            127
        ],
        "categories": []
    },
    {
        "id": 1006370,
        "thumbId": 1006370,
        "name": "Rage Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006370_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "Immune to negative effects",
        "links": [
            52,
            123,
            95,
            127
        ],
        "categories": []
    },
    {
        "id": 1006380,
        "thumbId": 1006380,
        "name": "Oceanus Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006380_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            60,
            14,
            95,
            127
        ],
        "categories": []
    },
    {
        "id": 1006400,
        "thumbId": 1006400,
        "name": "Naturon Shenron",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006400_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP +15%",
        "links": [
            18,
            32,
            95,
            127
        ],
        "categories": []
    },
    {
        "id": 1007051,
        "thumbId": 1007050,
        "name": "Frost (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007050_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL & INT Types Ki +2",
        "links": [
            59,
            28,
            18,
            32,
            126,
            130
        ],
        "categories": []
    },
    {
        "id": 1007050,
        "thumbId": 1007050,
        "name": "Frost (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007050_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL & INT Types Ki +2",
        "links": [
            59,
            28,
            18,
            32,
            126,
            130
        ],
        "categories": []
    },
    {
        "id": 1008121,
        "thumbId": 1008120,
        "name": "Majin Boo (Piccolo)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008120_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type enemy ATK -30%",
        "links": [
            8,
            6,
            83,
            28,
            119,
            1004,
            111
        ],
        "categories": []
    },
    {
        "id": 1008111,
        "thumbId": 1008110,
        "name": "Majin Boo (Gotenks)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008110_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK +5% for every Ki Sphere obtained",
        "links": [
            89,
            6,
            83,
            28,
            119,
            1004,
            111
        ],
        "categories": []
    },
    {
        "id": 1008120,
        "thumbId": 1008120,
        "name": "Majin Boo (Piccolo)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008120_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type enemy ATK -30%",
        "links": [
            8,
            6,
            83,
            28,
            119,
            1004,
            111
        ],
        "categories": []
    },
    {
        "id": 1008110,
        "thumbId": 1008110,
        "name": "Majin Boo (Gotenks)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008110_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK +5% for every Ki Sphere obtained",
        "links": [
            89,
            6,
            83,
            28,
            119,
            1004,
            111
        ],
        "categories": []
    },
    {
        "id": 1003561,
        "thumbId": 1003560,
        "name": "Majin Boo (Ultimate Gohan)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003560_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type HP, ATK and DEF +20%",
        "links": [
            83,
            50,
            28,
            47,
            1004
        ],
        "categories": []
    },
    {
        "id": 1003560,
        "thumbId": 1003560,
        "name": "Majin Boo (Ultimate Gohan)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003560_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type HP, ATK and DEF +20%",
        "links": [
            83,
            50,
            28,
            47,
            1004
        ],
        "categories": []
    },
    {
        "id": 1008371,
        "thumbId": 1008370,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008370_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type HP + 50%",
        "links": [
            22,
            34,
            45,
            30,
            23,
            47
        ],
        "categories": []
    },
    {
        "id": 1008370,
        "thumbId": 1008370,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008370_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type HP + 50%",
        "links": [
            22,
            34,
            45,
            30,
            23,
            47
        ],
        "categories": []
    },
    {
        "id": 1007031,
        "thumbId": 1007030,
        "name": "Frost",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007030_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types ATK +15%",
        "links": [
            59,
            28,
            18,
            32,
            126
        ],
        "categories": []
    },
    {
        "id": 1007041,
        "thumbId": 1007040,
        "name": "Frost (Assault Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007040_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK +40%",
        "links": [
            59,
            28,
            18,
            32,
            126
        ],
        "categories": []
    },
    {
        "id": 1009850,
        "thumbId": 1009850,
        "name": "Tortue Géniale (Santa)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1009850_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Guarantees Super Attack to level up by 1 \nin Training",
        "links": [],
        "categories": []
    },
    {
        "id": 1007030,
        "thumbId": 1007030,
        "name": "Frost",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007030_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types ATK +15%",
        "links": [
            59,
            28,
            18,
            32,
            126
        ],
        "categories": []
    },
    {
        "id": 1007040,
        "thumbId": 1007040,
        "name": "Frost (Assault Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007040_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK +40%",
        "links": [
            59,
            28,
            18,
            32,
            126
        ],
        "categories": []
    },
    {
        "id": 1003701,
        "thumbId": 1003700,
        "name": "Uub (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003700_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            42,
            52,
            20,
            65,
            49
        ],
        "categories": []
    },
    {
        "id": 1003700,
        "thumbId": 1003700,
        "name": "Uub (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003700_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            42,
            52,
            20,
            65,
            49
        ],
        "categories": []
    },
    {
        "id": 1008361,
        "thumbId": 1008360,
        "name": "Goku (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008360_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type HP + 50%",
        "links": [
            23,
            4,
            36,
            102,
            90
        ],
        "categories": []
    },
    {
        "id": 1008391,
        "thumbId": 1008390,
        "name": "Super Saiyan God SS Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008390_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type HP +50%",
        "links": [
            29,
            70,
            47,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 1008381,
        "thumbId": 1008380,
        "name": "Goku (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008380_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type HP +50%",
        "links": [
            23,
            34,
            36,
            47,
            95
        ],
        "categories": []
    },
    {
        "id": 1008641,
        "thumbId": 1008640,
        "name": "Turles",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008640_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +3",
        "links": [
            98,
            22,
            97,
            86,
            50,
            118
        ],
        "categories": []
    },
    {
        "id": 1008360,
        "thumbId": 1008360,
        "name": "Goku (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008360_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type HP + 50%",
        "links": [
            23,
            4,
            36,
            102,
            90
        ],
        "categories": []
    },
    {
        "id": 1008390,
        "thumbId": 1008390,
        "name": "Super Saiyan God SS Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008390_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type HP +50%",
        "links": [
            29,
            70,
            47,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 1008380,
        "thumbId": 1008380,
        "name": "Goku (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008380_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type HP +50%",
        "links": [
            23,
            34,
            36,
            47,
            95
        ],
        "categories": []
    },
    {
        "id": 1004471,
        "thumbId": 1004470,
        "name": "Grand Supreme Kai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004470_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 20%",
        "links": [
            76,
            39,
            14,
            13
        ],
        "categories": []
    },
    {
        "id": 1004470,
        "thumbId": 1004470,
        "name": "Grand Supreme Kai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004470_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 20%",
        "links": [
            76,
            39,
            14,
            13
        ],
        "categories": []
    },
    {
        "id": 1007211,
        "thumbId": 1007210,
        "name": "Super Saiyan Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007210_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & INT Types Ki +3",
        "links": [
            9,
            29,
            97,
            4,
            112,
            111
        ],
        "categories": []
    },
    {
        "id": 1007201,
        "thumbId": 1007200,
        "name": "Super Saiyan Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007200_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & INT Types HP & ATK +30%",
        "links": [
            9,
            29,
            97,
            4,
            112,
            111
        ],
        "categories": []
    },
    {
        "id": 1007210,
        "thumbId": 1007210,
        "name": "Super Saiyan Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007210_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & INT Types Ki +3",
        "links": [
            9,
            29,
            97,
            4,
            112,
            111
        ],
        "categories": []
    },
    {
        "id": 1007200,
        "thumbId": 1007200,
        "name": "Super Saiyan Gotenks",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007200_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & INT Types HP & ATK +30%",
        "links": [
            9,
            29,
            97,
            4,
            112,
            111
        ],
        "categories": []
    },
    {
        "id": 1008031,
        "thumbId": 1008030,
        "name": "Trunks (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1008030_thumb.png",
        "type": "END",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types HP & ATK + 30%",
        "links": [
            40,
            39,
            19,
            121,
            118,
            97
        ],
        "categories": []
    },
    {
        "id": 1003991,
        "thumbId": 1003990,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003990_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 20% for all Types",
        "links": [
            9,
            22,
            29,
            47,
            23
        ],
        "categories": []
    },
    {
        "id": 1003990,
        "thumbId": 1003990,
        "name": "Super Saiyan Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003990_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 20% for all Types",
        "links": [
            9,
            22,
            29,
            47,
            23
        ],
        "categories": []
    },
    {
        "id": 1005131,
        "thumbId": 1005130,
        "name": "Nappa (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005130_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type HP, ATK and DEF +30%",
        "links": [
            22,
            18,
            52,
            49,
            58,
            123,
            124
        ],
        "categories": []
    },
    {
        "id": 1007751,
        "thumbId": 1007750,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007750_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type HP & ATK +30%",
        "links": [
            22,
            40,
            50,
            26,
            58
        ],
        "categories": []
    },
    {
        "id": 1005130,
        "thumbId": 1005130,
        "name": "Nappa (Giant Ape)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005130_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type HP, ATK and DEF +30%",
        "links": [
            22,
            18,
            52,
            49,
            58,
            123,
            124
        ],
        "categories": []
    },
    {
        "id": 1007750,
        "thumbId": 1007750,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1007750_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type HP & ATK +30%",
        "links": [
            22,
            40,
            50,
            26,
            58
        ],
        "categories": []
    },
    {
        "id": 1005841,
        "thumbId": 1005840,
        "name": "Beerus",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005840_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK +50%",
        "links": [
            80,
            26,
            79,
            4,
            60,
            111
        ],
        "categories": []
    },
    {
        "id": 1005840,
        "thumbId": 1005840,
        "name": "Beerus",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005840_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK +50%",
        "links": [
            80,
            26,
            79,
            4,
            60,
            111
        ],
        "categories": []
    },
    {
        "id": 1006251,
        "thumbId": 1006250,
        "name": "Gohan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006250_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +15%",
        "links": [
            39,
            22,
            34,
            8,
            95
        ],
        "categories": []
    },
    {
        "id": 1004021,
        "thumbId": 1004020,
        "name": "Goten (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004020_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & STR Types Ki +2",
        "links": [
            22,
            34,
            95,
            47
        ],
        "categories": []
    },
    {
        "id": 1006250,
        "thumbId": 1006250,
        "name": "Gohan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006250_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +15%",
        "links": [
            39,
            22,
            34,
            8,
            95
        ],
        "categories": []
    },
    {
        "id": 1004020,
        "thumbId": 1004020,
        "name": "Goten (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004020_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & STR Types Ki +2",
        "links": [
            22,
            34,
            95,
            47
        ],
        "categories": []
    },
    {
        "id": 1004931,
        "thumbId": 1004930,
        "name": "Boujack",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004930_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type enemy ATK -30%",
        "links": [
            87,
            88,
            50,
            86,
            65
        ],
        "categories": []
    },
    {
        "id": 1004930,
        "thumbId": 1004930,
        "name": "Boujack",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004930_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type enemy ATK -30%",
        "links": [
            87,
            88,
            50,
            86,
            65
        ],
        "categories": []
    },
    {
        "id": 1005081,
        "thumbId": 1005080,
        "name": "Super Saiyan Vegeta (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005080_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +20%",
        "links": [
            9,
            22,
            29,
            26,
            40,
            111
        ],
        "categories": []
    },
    {
        "id": 1005080,
        "thumbId": 1005080,
        "name": "Super Saiyan Vegeta (Angel)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005080_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +20%",
        "links": [
            9,
            22,
            29,
            26,
            40,
            111
        ],
        "categories": []
    },
    {
        "id": 1005421,
        "thumbId": 1005420,
        "name": "Tarble",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005420_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 15%",
        "links": [
            22,
            40,
            8,
            34,
            25
        ],
        "categories": []
    },
    {
        "id": 1005420,
        "thumbId": 1005420,
        "name": "Tarble",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005420_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 15%",
        "links": [
            22,
            40,
            8,
            34,
            25
        ],
        "categories": []
    },
    {
        "id": 1005871,
        "thumbId": 1005870,
        "name": "Pan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005870_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & PHY Types Ki +2",
        "links": [
            23,
            34,
            64,
            95
        ],
        "categories": []
    },
    {
        "id": 1006001,
        "thumbId": 1006000,
        "name": "Baby (Youth Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006000_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Recover 300 HP per Ki of character's Type \ngained",
        "links": [
            86,
            28,
            32,
            95
        ],
        "categories": []
    },
    {
        "id": 1005870,
        "thumbId": 1005870,
        "name": "Pan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005870_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & PHY Types Ki +2",
        "links": [
            23,
            34,
            64,
            95
        ],
        "categories": []
    },
    {
        "id": 1006000,
        "thumbId": 1006000,
        "name": "Baby (Youth Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1006000_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Recover 300 HP per Ki of character's Type \ngained",
        "links": [
            86,
            28,
            32,
            95
        ],
        "categories": []
    },
    {
        "id": 1002911,
        "thumbId": 1002910,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002910_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type enemy ATK -30%",
        "links": [
            1002,
            24,
            5,
            13,
            46,
            2
        ],
        "categories": []
    },
    {
        "id": 1002921,
        "thumbId": 1002920,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002920_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK +50%",
        "links": [
            1002,
            36,
            53,
            42,
            37
        ],
        "categories": []
    },
    {
        "id": 1004741,
        "thumbId": 1004740,
        "name": "Super Saiyan 2 Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004740_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +25%",
        "links": [
            9,
            22,
            29,
            97,
            47
        ],
        "categories": []
    },
    {
        "id": 1002910,
        "thumbId": 1002910,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002910_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type enemy ATK -30%",
        "links": [
            1002,
            24,
            5,
            13,
            46,
            2
        ],
        "categories": []
    },
    {
        "id": 1002920,
        "thumbId": 1002920,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002920_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK +50%",
        "links": [
            1002,
            36,
            53,
            42,
            37
        ],
        "categories": []
    },
    {
        "id": 1004740,
        "thumbId": 1004740,
        "name": "Super Saiyan 2 Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004740_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +25%",
        "links": [
            9,
            22,
            29,
            97,
            47
        ],
        "categories": []
    },
    {
        "id": 1001611,
        "thumbId": 1001610,
        "name": "Ginyu (Goku)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001610_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP + 30%",
        "links": [
            41,
            17,
            25,
            73,
            94,
            14
        ],
        "categories": []
    },
    {
        "id": 1001610,
        "thumbId": 1001610,
        "name": "Ginyu (Goku)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001610_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP + 30%",
        "links": [
            41,
            17,
            25,
            73,
            94,
            14
        ],
        "categories": []
    },
    {
        "id": 1005471,
        "thumbId": 1005470,
        "name": "Bulma (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005470_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "HP +30%",
        "links": [
            10,
            37,
            8,
            90,
            102,
            114
        ],
        "categories": []
    },
    {
        "id": 1005591,
        "thumbId": 1005590,
        "name": "Namu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005590_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Ki +2 when HP is 80% or below",
        "links": [
            2,
            39,
            8,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1005470,
        "thumbId": 1005470,
        "name": "Bulma (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005470_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP +30%",
        "links": [
            10,
            37,
            8,
            90,
            102,
            114
        ],
        "categories": []
    },
    {
        "id": 1005590,
        "thumbId": 1005590,
        "name": "Namu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005590_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Ki +2 when HP is 80% or below",
        "links": [
            2,
            39,
            8,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1005601,
        "thumbId": 1005600,
        "name": "Bacterian",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005600_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            18,
            32,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1005600,
        "thumbId": 1005600,
        "name": "Bacterian",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005600_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            18,
            32,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1005511,
        "thumbId": 1005510,
        "name": "Supreme Kai of Time",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005510_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Ki +2 when HP is 80% or below",
        "links": [
            76,
            37,
            39,
            14,
            121
        ],
        "categories": []
    },
    {
        "id": 1005510,
        "thumbId": 1005510,
        "name": "Supreme Kai of Time",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005510_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Ki +2 when HP is 80% or below",
        "links": [
            76,
            37,
            39,
            14,
            121
        ],
        "categories": []
    },
    {
        "id": 1002411,
        "thumbId": 1002410,
        "name": "Veku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002410_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type HP & ATK & DEF + 20%",
        "links": [
            47,
            22,
            52,
            113,
            112
        ],
        "categories": []
    },
    {
        "id": 1002410,
        "thumbId": 1002410,
        "name": "Veku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002410_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type HP & ATK & DEF + 20%",
        "links": [
            47,
            22,
            52,
            113,
            112
        ],
        "categories": []
    },
    {
        "id": 1005241,
        "thumbId": 1005240,
        "name": "Nail",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005240_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Recover 300 HP per Ki of character's Type \ngained",
        "links": [
            48,
            39,
            15,
            16,
            30
        ],
        "categories": []
    },
    {
        "id": 1001531,
        "thumbId": 1001530,
        "name": "Super Zarbon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001530_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type enemy ATK - 25%",
        "links": [
            28,
            51,
            49,
            39,
            119
        ],
        "categories": []
    },
    {
        "id": 1005240,
        "thumbId": 1005240,
        "name": "Nail",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005240_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Recover 300 HP per Ki of character's Type \ngained",
        "links": [
            48,
            39,
            15,
            16,
            30
        ],
        "categories": []
    },
    {
        "id": 1001530,
        "thumbId": 1001530,
        "name": "Super Zarbon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001530_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type enemy ATK - 25%",
        "links": [
            28,
            51,
            49,
            39,
            119
        ],
        "categories": []
    },
    {
        "id": 1003451,
        "thumbId": 1003450,
        "name": "Mutaito",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003450_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 15% for all Types",
        "links": [
            16,
            39,
            25,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1003450,
        "thumbId": 1003450,
        "name": "Mutaito",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003450_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 15% for all Types",
        "links": [
            16,
            39,
            25,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1004761,
        "thumbId": 1004760,
        "name": "Super Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004760_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Ki +2 when HP is 80% or below",
        "links": [
            9,
            22,
            29,
            26,
            40,
            1001
        ],
        "categories": []
    },
    {
        "id": 1004760,
        "thumbId": 1004760,
        "name": "Super Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004760_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Ki +2 when HP is 80% or below",
        "links": [
            9,
            22,
            29,
            26,
            40,
            1001
        ],
        "categories": []
    },
    {
        "id": 1003471,
        "thumbId": 1003470,
        "name": "Kibito Kai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003470_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +15% for all Types",
        "links": [
            103,
            112,
            76,
            37,
            39
        ],
        "categories": []
    },
    {
        "id": 1003470,
        "thumbId": 1003470,
        "name": "Kibito Kai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003470_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +15% for all Types",
        "links": [
            103,
            112,
            76,
            37,
            39
        ],
        "categories": []
    },
    {
        "id": 1004701,
        "thumbId": 1004700,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004700_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK + 20%",
        "links": [
            45,
            26,
            30,
            48,
            56
        ],
        "categories": []
    },
    {
        "id": 1004691,
        "thumbId": 1004690,
        "name": "Super Saiyan Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004690_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 30%",
        "links": [
            29,
            22,
            9,
            56,
            47,
            45
        ],
        "categories": []
    },
    {
        "id": 1004700,
        "thumbId": 1004700,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004700_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK + 20%",
        "links": [
            45,
            26,
            30,
            48,
            56
        ],
        "categories": []
    },
    {
        "id": 1004690,
        "thumbId": 1004690,
        "name": "Super Saiyan Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004690_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 30%",
        "links": [
            29,
            22,
            9,
            56,
            47,
            45
        ],
        "categories": []
    },
    {
        "id": 1003461,
        "thumbId": 1003460,
        "name": "Kibito",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003460_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type HP & ATK +30%",
        "links": [
            20,
            17,
            76,
            1003,
            1002
        ],
        "categories": []
    },
    {
        "id": 1003460,
        "thumbId": 1003460,
        "name": "Kibito",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003460_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type HP & ATK +30%",
        "links": [
            20,
            17,
            76,
            1003,
            1002
        ],
        "categories": []
    },
    {
        "id": 1002711,
        "thumbId": 1002710,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002710_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2",
        "links": [
            23,
            34,
            60,
            45,
            1
        ],
        "categories": []
    },
    {
        "id": 1002871,
        "thumbId": 1002870,
        "name": "Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002870_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 30%",
        "links": [
            23,
            45,
            22,
            34,
            1002
        ],
        "categories": []
    },
    {
        "id": 1003401,
        "thumbId": 1003400,
        "name": "Dr. Lychee",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003400_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type enemy ATK - 20%",
        "links": [
            114,
            115,
            65,
            8
        ],
        "categories": []
    },
    {
        "id": 1002710,
        "thumbId": 1002710,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002710_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +2",
        "links": [
            23,
            34,
            60,
            45,
            1
        ],
        "categories": []
    },
    {
        "id": 1002870,
        "thumbId": 1002870,
        "name": "Gohan (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002870_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 30%",
        "links": [
            23,
            45,
            22,
            34,
            1002
        ],
        "categories": []
    },
    {
        "id": 1003400,
        "thumbId": 1003400,
        "name": "Dr. Lychee",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003400_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type enemy ATK - 20%",
        "links": [
            114,
            115,
            65,
            8
        ],
        "categories": []
    },
    {
        "id": 1004411,
        "thumbId": 1004410,
        "name": "Boo (Super)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004410_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 20% for all Types",
        "links": [
            83,
            18,
            4,
            28,
            96,
            111,
            1004
        ],
        "categories": []
    },
    {
        "id": 1004461,
        "thumbId": 1004460,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004460_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +15%",
        "links": [
            45,
            36,
            2,
            1,
            47,
            1003
        ],
        "categories": []
    },
    {
        "id": 1004410,
        "thumbId": 1004410,
        "name": "Boo (Super)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004410_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 20% for all Types",
        "links": [
            83,
            18,
            4,
            28,
            96,
            111,
            1004
        ],
        "categories": []
    },
    {
        "id": 1005251,
        "thumbId": 1005250,
        "name": "Uub (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005250_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "HP +30%",
        "links": [
            42,
            52,
            65,
            47,
            1003,
            95
        ],
        "categories": []
    },
    {
        "id": 1004460,
        "thumbId": 1004460,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004460_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +15%",
        "links": [
            45,
            36,
            2,
            1,
            47,
            1003
        ],
        "categories": []
    },
    {
        "id": 1005250,
        "thumbId": 1005250,
        "name": "Uub (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1005250_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP +30%",
        "links": [
            42,
            52,
            65,
            47,
            1003,
            95
        ],
        "categories": []
    },
    {
        "id": 1004841,
        "thumbId": 1004840,
        "name": "Super Saiyan Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004840_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK +40%",
        "links": [
            9,
            29,
            47,
            74,
            68
        ],
        "categories": []
    },
    {
        "id": 1004871,
        "thumbId": 1004870,
        "name": "Jaco",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004870_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +1",
        "links": [
            8,
            12,
            75,
            69,
            68
        ],
        "categories": []
    },
    {
        "id": 1004831,
        "thumbId": 1004830,
        "name": "Tortue Géniale (Max Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004830_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 15% for all Types",
        "links": [
            27,
            36,
            47,
            16,
            68
        ],
        "categories": []
    },
    {
        "id": 1003481,
        "thumbId": 1003480,
        "name": "Supreme Kai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003480_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "INT & STR Types Ki +2",
        "links": [
            20,
            37,
            39,
            76,
            1003
        ],
        "categories": []
    },
    {
        "id": 1004840,
        "thumbId": 1004840,
        "name": "Super Saiyan Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004840_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK +40%",
        "links": [
            9,
            29,
            47,
            74,
            68
        ],
        "categories": []
    },
    {
        "id": 1004870,
        "thumbId": 1004870,
        "name": "Jaco",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004870_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +1",
        "links": [
            8,
            12,
            75,
            69,
            68
        ],
        "categories": []
    },
    {
        "id": 1004830,
        "thumbId": 1004830,
        "name": "Tortue Géniale (Max Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004830_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 15% for all Types",
        "links": [
            27,
            36,
            47,
            16,
            68
        ],
        "categories": []
    },
    {
        "id": 1003480,
        "thumbId": 1003480,
        "name": "Supreme Kai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003480_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "INT & STR Types Ki +2",
        "links": [
            20,
            37,
            39,
            76,
            1003
        ],
        "categories": []
    },
    {
        "id": 1004401,
        "thumbId": 1004400,
        "name": "Cell (Perfect Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004400_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type HP, ATK and DEF +25%",
        "links": [
            17,
            19,
            50,
            47,
            33,
            108,
            111
        ],
        "categories": []
    },
    {
        "id": 1001711,
        "thumbId": 1001710,
        "name": "Cell (2nd Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001710_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK +30%",
        "links": [
            19,
            50,
            33,
            1004
        ],
        "categories": []
    },
    {
        "id": 1004400,
        "thumbId": 1004400,
        "name": "Cell (Perfect Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004400_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type HP, ATK and DEF +25%",
        "links": [
            17,
            19,
            50,
            47,
            33,
            108,
            111
        ],
        "categories": []
    },
    {
        "id": 1001710,
        "thumbId": 1001710,
        "name": "Cell (2nd Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001710_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK +30%",
        "links": [
            19,
            50,
            33,
            1004
        ],
        "categories": []
    },
    {
        "id": 2000851,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK + 30%",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000841,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +3",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000831,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +2",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000821,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ, INT, STR Type HP & ATK + 20%",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000811,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ & STR Types ATK +25%",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000801,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 30%",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000791,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK + 30%",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000781,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK +25%",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000771,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types ATK +15%",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 1003531,
        "thumbId": 1003530,
        "name": "Tortue Géniale (Max Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003530_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type ATK +30%",
        "links": [
            27,
            36,
            47,
            16,
            3
        ],
        "categories": []
    },
    {
        "id": 1002351,
        "thumbId": 1002350,
        "name": "Tortue Géniale (Max Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002350_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK +30%",
        "links": [
            27,
            36,
            47,
            16,
            3
        ],
        "categories": []
    },
    {
        "id": 1002481,
        "thumbId": 1002480,
        "name": "Cooler (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002480_thumb.png",
        "type": "INT",
        "rarity": "UR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ & INT Types ATK +25%",
        "links": [
            85,
            86,
            26,
            50
        ],
        "categories": []
    },
    {
        "id": 1003581,
        "thumbId": 1003580,
        "name": "Great Saiyaman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003580_thumb.png",
        "type": "AGI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, TEQ & STR Types ATK +30%",
        "links": [
            8,
            45,
            69,
            93,
            94,
            1003
        ],
        "categories": []
    },
    {
        "id": 1003591,
        "thumbId": 1003590,
        "name": "Great Saiyaman 2",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003590_thumb.png",
        "type": "PUI",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +25%",
        "links": [
            1000,
            42,
            64,
            93,
            94,
            69,
            1003
        ],
        "categories": []
    },
    {
        "id": 1002951,
        "thumbId": 1002950,
        "name": "Great Saiyaman 2",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002950_thumb.png",
        "type": "TEC",
        "rarity": "UR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & STR Types Ki +2",
        "links": [
            1000,
            42,
            93,
            94,
            64,
            69,
            1003
        ],
        "categories": []
    },
    {
        "id": 1004281,
        "thumbId": 1004280,
        "name": "Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004280_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & PHY Types HP & ATK +20%",
        "links": [
            9,
            22,
            29,
            26,
            97
        ],
        "categories": []
    },
    {
        "id": 1003221,
        "thumbId": 1003220,
        "name": "Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003220_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK +40%",
        "links": [
            22,
            29,
            97,
            9,
            40
        ],
        "categories": []
    },
    {
        "id": 1002431,
        "thumbId": 1002430,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002430_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK + 25%",
        "links": [
            23,
            1,
            47,
            75,
            68
        ],
        "categories": []
    },
    {
        "id": 1002131,
        "thumbId": 1002130,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002130_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK +30%",
        "links": [
            23,
            1,
            47,
            75,
            68
        ],
        "categories": []
    },
    {
        "id": 1000851,
        "thumbId": 1000850,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000850_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, INT & PHY Types Ki +1",
        "links": [
            45,
            23,
            34,
            47,
            30
        ],
        "categories": []
    },
    {
        "id": 1000031,
        "thumbId": 1000030,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000030_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & STR Types Ki +2",
        "links": [
            45,
            23,
            42,
            47,
            1
        ],
        "categories": []
    },
    {
        "id": 1003871,
        "thumbId": 1003870,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003870_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & INT Types HP & ATK +20%",
        "links": [
            22,
            40,
            63,
            26
        ],
        "categories": []
    },
    {
        "id": 1002141,
        "thumbId": 1002140,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002140_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type ATK +30%",
        "links": [
            22,
            40,
            50,
            26,
            68
        ],
        "categories": []
    },
    {
        "id": 1000861,
        "thumbId": 1000860,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000860_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type ATK & DEF +20%",
        "links": [
            22,
            40,
            50,
            26
        ],
        "categories": []
    },
    {
        "id": 1000041,
        "thumbId": 1000040,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000040_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +25% when HP is 30% or less",
        "links": [
            22,
            40,
            50,
            26
        ],
        "categories": []
    },
    {
        "id": 1000071,
        "thumbId": 1000070,
        "name": "Cell (1st Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000070_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK +25%",
        "links": [
            12,
            19,
            50,
            47,
            33,
            1004
        ],
        "categories": []
    },
    {
        "id": 1001621,
        "thumbId": 1001620,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001620_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +20% when HP is 80% or less",
        "links": [
            23,
            45,
            34
        ],
        "categories": []
    },
    {
        "id": 1000871,
        "thumbId": 1000870,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000870_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +25% when HP is 30% or less",
        "links": [
            23,
            45,
            49
        ],
        "categories": []
    },
    {
        "id": 1000091,
        "thumbId": 1000090,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000090_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & STR Types ATK +25%",
        "links": [
            23,
            45,
            49
        ],
        "categories": []
    },
    {
        "id": 1001861,
        "thumbId": 1001860,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001860_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & PHY Types ATK +25%",
        "links": [
            40,
            39,
            19,
            45,
            1001
        ],
        "categories": []
    },
    {
        "id": 1000881,
        "thumbId": 1000880,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000880_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +2",
        "links": [
            40,
            39,
            19,
            45
        ],
        "categories": []
    },
    {
        "id": 1000811,
        "thumbId": 1000810,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000810_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 10% for all Types",
        "links": [
            40,
            39,
            19,
            45
        ],
        "categories": []
    },
    {
        "id": 1000101,
        "thumbId": 1000100,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000100_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & PHY Types ATK +25%",
        "links": [
            40,
            39,
            19,
            45
        ],
        "categories": []
    },
    {
        "id": 1000891,
        "thumbId": 1000890,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000890_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & STR Types ATK +25%",
        "links": [
            45,
            36,
            2,
            1
        ],
        "categories": []
    },
    {
        "id": 1000111,
        "thumbId": 1000110,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000110_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +20% when HP is 80% or less",
        "links": [
            45,
            36,
            2,
            1
        ],
        "categories": []
    },
    {
        "id": 1003511,
        "thumbId": 1003510,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003510_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & STR Types ATK +25%",
        "links": [
            45,
            26,
            30,
            48,
            33
        ],
        "categories": []
    },
    {
        "id": 1000901,
        "thumbId": 1000900,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000900_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +20% when HP is 80% or less",
        "links": [
            45,
            26,
            8,
            48
        ],
        "categories": []
    },
    {
        "id": 1000121,
        "thumbId": 1000120,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000120_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Ki +1 when HP is 80% or less",
        "links": [
            45,
            26,
            30,
            48,
            8
        ],
        "categories": []
    },
    {
        "id": 1002601,
        "thumbId": 1002600,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002600_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & INT Types ATK +25%",
        "links": [
            45,
            24,
            5,
            2,
            68
        ],
        "categories": []
    },
    {
        "id": 1001771,
        "thumbId": 1001770,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001770_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 15% for all Types",
        "links": [
            24,
            5,
            39,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1001451,
        "thumbId": 1001450,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001450_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type ATK +40%",
        "links": [
            45,
            24,
            5,
            46,
            37
        ],
        "categories": []
    },
    {
        "id": 1000911,
        "thumbId": 1000910,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000910_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +2",
        "links": [
            45,
            24,
            5,
            2,
            37
        ],
        "categories": []
    },
    {
        "id": 1000131,
        "thumbId": 1000130,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000130_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +25% when HP is 30% or less",
        "links": [
            45,
            24,
            5,
            39,
            37
        ],
        "categories": []
    },
    {
        "id": 1001461,
        "thumbId": 1001460,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001460_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +15%",
        "links": [
            45,
            24,
            5,
            13,
            46
        ],
        "categories": []
    },
    {
        "id": 1000921,
        "thumbId": 1000920,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000920_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type DEF + 30%",
        "links": [
            45,
            24,
            5,
            13,
            2
        ],
        "categories": []
    },
    {
        "id": 1000141,
        "thumbId": 1000140,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000140_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type HP + 25%",
        "links": [
            45,
            24,
            5,
            13,
            46
        ],
        "categories": []
    },
    {
        "id": 1002331,
        "thumbId": 1002330,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002330_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type enemy ATK - 25%",
        "links": [
            8,
            37,
            53,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1001441,
        "thumbId": 1001440,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001440_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & STR Types Ki +2",
        "links": [
            45,
            37,
            36,
            53,
            47
        ],
        "categories": []
    },
    {
        "id": 1000931,
        "thumbId": 1000930,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000930_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +2",
        "links": [
            45,
            37,
            36,
            53,
            42
        ],
        "categories": []
    },
    {
        "id": 1000151,
        "thumbId": 1000150,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000150_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Enemies' DEF -25%",
        "links": [
            45,
            37,
            36,
            53
        ],
        "categories": []
    },
    {
        "id": 1001431,
        "thumbId": 1001430,
        "name": "Raditz",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001430_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL & PHY Types ATK +25%",
        "links": [
            34,
            22,
            32,
            18
        ],
        "categories": []
    },
    {
        "id": 1000161,
        "thumbId": 1000160,
        "name": "Raditz",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000160_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK +25% when HP is 30% or less",
        "links": [
            34,
            22,
            32
        ],
        "categories": []
    },
    {
        "id": 1001421,
        "thumbId": 1001420,
        "name": "Nappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001420_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type HP & ATK +20%",
        "links": [
            22,
            18,
            52,
            49,
            42
        ],
        "categories": []
    },
    {
        "id": 1000961,
        "thumbId": 1000960,
        "name": "Nappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000960_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK +25% when HP is 30% or less",
        "links": [
            22,
            18,
            52,
            49,
            42
        ],
        "categories": []
    },
    {
        "id": 1000171,
        "thumbId": 1000170,
        "name": "Nappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000170_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type HP & ATK +20%",
        "links": [
            22,
            21,
            52,
            49,
            42
        ],
        "categories": []
    },
    {
        "id": 1000941,
        "thumbId": 1000940,
        "name": "Zarbon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000940_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK & DEF + 15% when HP 80% or below",
        "links": [
            28,
            51,
            43
        ],
        "categories": []
    },
    {
        "id": 1000181,
        "thumbId": 1000180,
        "name": "Zarbon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000180_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK + 25%",
        "links": [
            28,
            51,
            43
        ],
        "categories": []
    },
    {
        "id": 1000951,
        "thumbId": 1000950,
        "name": "Capitaine Ginyu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000950_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK +25%",
        "links": [
            41,
            17,
            25,
            73,
            94
        ],
        "categories": []
    },
    {
        "id": 1000191,
        "thumbId": 1000190,
        "name": "Capitaine Ginyu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000190_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP +25%",
        "links": [
            41,
            17,
            25,
            73,
            94
        ],
        "categories": []
    },
    {
        "id": 1001831,
        "thumbId": 1001830,
        "name": "Android #19",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001830_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Enemy DEF - 25%",
        "links": [
            35,
            81,
            18,
            12
        ],
        "categories": []
    },
    {
        "id": 1000201,
        "thumbId": 1000200,
        "name": "Android #19",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000200_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 15% when HP is 50% or above",
        "links": [
            35,
            52,
            73,
            81
        ],
        "categories": []
    },
    {
        "id": 1001841,
        "thumbId": 1001840,
        "name": "Dr. Gero",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001840_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type enemy ATK -25%",
        "links": [
            35,
            81,
            18,
            26,
            86,
            114
        ],
        "categories": []
    },
    {
        "id": 1000981,
        "thumbId": 1000980,
        "name": "Dr. Gero",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000980_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK + 25%",
        "links": [
            35,
            55,
            8,
            12,
            86,
            114,
            81
        ],
        "categories": []
    },
    {
        "id": 1000211,
        "thumbId": 1000210,
        "name": "Dr. Gero",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000210_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type enemy ATK - 25%",
        "links": [
            35,
            55,
            8,
            12,
            86,
            114,
            81
        ],
        "categories": []
    },
    {
        "id": 1000991,
        "thumbId": 1000990,
        "name": "Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000990_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK +15% when HP is 50% or more",
        "links": [
            35,
            31,
            4,
            110
        ],
        "categories": []
    },
    {
        "id": 1000221,
        "thumbId": 1000220,
        "name": "Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000220_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type enemies' ATK -25%",
        "links": [
            35,
            31,
            4,
            1001,
            110
        ],
        "categories": []
    },
    {
        "id": 1001001,
        "thumbId": 1001000,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001000_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Ki +1 when HP is 50% or more",
        "links": [
            35,
            31,
            4,
            64,
            110
        ],
        "categories": []
    },
    {
        "id": 1000231,
        "thumbId": 1000230,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000230_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT & STR Types ATK +25%",
        "links": [
            35,
            31,
            4,
            64,
            1001,
            110
        ],
        "categories": []
    },
    {
        "id": 1001011,
        "thumbId": 1001010,
        "name": "Android #16",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001010_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK +15% when HP is 50% or more",
        "links": [
            35,
            38,
            17
        ],
        "categories": []
    },
    {
        "id": 1000241,
        "thumbId": 1000240,
        "name": "Android #16",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000240_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type HP & ATK +20%",
        "links": [
            35,
            38,
            17
        ],
        "categories": []
    },
    {
        "id": 1000251,
        "thumbId": 1000250,
        "name": "Tortue Géniale",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000250_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +2",
        "links": [
            42,
            27,
            36,
            47,
            16,
            3
        ],
        "categories": []
    },
    {
        "id": 1000261,
        "thumbId": 1000260,
        "name": "Tao Pai Pai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000260_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +2",
        "links": [
            5,
            16,
            18,
            32,
            90
        ],
        "categories": []
    },
    {
        "id": 1001041,
        "thumbId": 1001040,
        "name": "Chi-Chi",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001040_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK +25%",
        "links": [
            23,
            64
        ],
        "categories": []
    },
    {
        "id": 1001051,
        "thumbId": 1001050,
        "name": "Dodoria",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001050_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ, STR & PHY Types HP +20%",
        "links": [
            32,
            51,
            43,
            73
        ],
        "categories": []
    },
    {
        "id": 1001061,
        "thumbId": 1001060,
        "name": "Reacum",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001060_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type ATK + 30%",
        "links": [
            41,
            18,
            52,
            42,
            94
        ],
        "categories": []
    },
    {
        "id": 1001071,
        "thumbId": 1001070,
        "name": "Ghourd",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001070_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Enemy DEF - 25%",
        "links": [
            41,
            13,
            18,
            8,
            94
        ],
        "categories": []
    },
    {
        "id": 1001081,
        "thumbId": 1001080,
        "name": "Barta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001080_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +1",
        "links": [
            41,
            53,
            54,
            94
        ],
        "categories": []
    },
    {
        "id": 1001091,
        "thumbId": 1001090,
        "name": "Jiece",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001090_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type enemy ATK - 25%",
        "links": [
            41,
            54,
            94
        ],
        "categories": []
    },
    {
        "id": 1001101,
        "thumbId": 1001100,
        "name": "Nail",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001100_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Immune to negative effects",
        "links": [
            48,
            39,
            15
        ],
        "categories": []
    },
    {
        "id": 1000821,
        "thumbId": 1000820,
        "name": "Mr. Satan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000820_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, INT & PHY Types Ki +1",
        "links": [
            27,
            44,
            15,
            10,
            20
        ],
        "categories": []
    },
    {
        "id": 1001111,
        "thumbId": 1001110,
        "name": "Cui",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001110_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 25%",
        "links": [
            32,
            43
        ],
        "categories": []
    },
    {
        "id": 1001381,
        "thumbId": 1001380,
        "name": "Master Shen",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001380_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK + 25%",
        "links": [
            5,
            24,
            3,
            90
        ],
        "categories": []
    },
    {
        "id": 2000161,
        "thumbId": 2000160,
        "name": "Trunks (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000160_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 10% for all Types",
        "links": [
            40,
            39,
            19,
            121
        ],
        "categories": []
    },
    {
        "id": 1001501,
        "thumbId": 1001500,
        "name": "Fasha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001500_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 15% for all Types",
        "links": [
            22,
            62,
            63,
            64
        ],
        "categories": []
    },
    {
        "id": 1001731,
        "thumbId": 1001730,
        "name": "Android #17 (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001730_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type enemies' ATK -25%",
        "links": [
            35,
            18,
            66,
            67
        ],
        "categories": []
    },
    {
        "id": 1001741,
        "thumbId": 1001740,
        "name": "Android #18 (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001740_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT & PHY Types ATK +25%",
        "links": [
            35,
            18,
            64,
            66,
            67
        ],
        "categories": []
    },
    {
        "id": 1002241,
        "thumbId": 1002240,
        "name": "Goku (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002240_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 10% for all Types",
        "links": [
            23,
            34,
            36,
            47,
            90
        ],
        "categories": []
    },
    {
        "id": 1002421,
        "thumbId": 1002420,
        "name": "Super Saiyan God SS Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002420_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 15% for all Types",
        "links": [
            29,
            70,
            47,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000850,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK + 30%",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000840,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +3",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000830,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +2",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000820,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ, INT, STR Type HP & ATK + 20%",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000810,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ & STR Types ATK +25%",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000800,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 30%",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000790,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK + 30%",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000780,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK +25%",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 2000770,
        "thumbId": 2000770,
        "name": "Golden Freezer",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000770_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types ATK +15%",
        "links": [
            26,
            59,
            65,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 1003901,
        "thumbId": 1003900,
        "name": "Beerus",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003900_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +2",
        "links": [
            80,
            26,
            79,
            4
        ],
        "categories": []
    },
    {
        "id": 1002201,
        "thumbId": 1002200,
        "name": "Super Saiyan Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002200_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & PHY Type ATK +25%",
        "links": [
            9,
            29,
            47,
            74,
            68
        ],
        "categories": []
    },
    {
        "id": 1002211,
        "thumbId": 1002210,
        "name": "Jaco",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002210_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +15% when HP is 50% or more",
        "links": [
            8,
            12,
            75,
            69,
            68
        ],
        "categories": []
    },
    {
        "id": 1003530,
        "thumbId": 1003530,
        "name": "Tortue Géniale (Max Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003530_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type ATK +30%",
        "links": [
            27,
            36,
            47,
            16,
            3
        ],
        "categories": []
    },
    {
        "id": 1002350,
        "thumbId": 1002350,
        "name": "Tortue Géniale (Max Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002350_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK +30%",
        "links": [
            27,
            36,
            47,
            16,
            3
        ],
        "categories": []
    },
    {
        "id": 1002221,
        "thumbId": 1002220,
        "name": "Tortue Géniale (Max Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002220_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 25%",
        "links": [
            27,
            36,
            47,
            16,
            68
        ],
        "categories": []
    },
    {
        "id": 1003821,
        "thumbId": 1003820,
        "name": "Dabra",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003820_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type enemy ATK -25%",
        "links": [
            18,
            7,
            73,
            76,
            77,
            119
        ],
        "categories": []
    },
    {
        "id": 1001981,
        "thumbId": 1001980,
        "name": "Dabra",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001980_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK +40%",
        "links": [
            18,
            7,
            73,
            76,
            77,
            119
        ],
        "categories": []
    },
    {
        "id": 1002051,
        "thumbId": 1002050,
        "name": "Babidi",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002050_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL, INT and PHY Type Ki +1",
        "links": [
            18,
            76,
            77
        ],
        "categories": []
    },
    {
        "id": 1001761,
        "thumbId": 1001760,
        "name": "Trunks (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001760_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +2",
        "links": [
            4,
            40,
            10,
            27,
            45
        ],
        "categories": []
    },
    {
        "id": 1002311,
        "thumbId": 1002310,
        "name": "General Blue",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002310_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL and INT Type ATK + 20%",
        "links": [
            55,
            13,
            18,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1001721,
        "thumbId": 1001720,
        "name": "Cell (Perfect Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001720_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL, INT & PHY Types Ki +1",
        "links": [
            17,
            19,
            33,
            47,
            1004
        ],
        "categories": []
    },
    {
        "id": 1003281,
        "thumbId": 1003280,
        "name": "Super Saiyan Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003280_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type enemies' ATK -25%",
        "links": [
            19,
            29,
            40,
            45,
            9
        ],
        "categories": []
    },
    {
        "id": 1004441,
        "thumbId": 1004440,
        "name": "Super Saiyan Trunks (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004440_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & STR Types ATK +25%",
        "links": [
            1000,
            9,
            22,
            29,
            40
        ],
        "categories": []
    },
    {
        "id": 1002571,
        "thumbId": 1002570,
        "name": "Super Saiyan Trunks (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002570_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK +30%",
        "links": [
            9,
            29,
            40,
            45,
            82
        ],
        "categories": []
    },
    {
        "id": 1002581,
        "thumbId": 1002580,
        "name": "Super Saiyan Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002580_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +15%",
        "links": [
            9,
            29,
            47,
            45,
            82
        ],
        "categories": []
    },
    {
        "id": 1002281,
        "thumbId": 1002280,
        "name": "Piccolo Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002280_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +3",
        "links": [
            50,
            57,
            52,
            6,
            84
        ],
        "categories": []
    },
    {
        "id": 2000181,
        "thumbId": 2000180,
        "name": "Chilled",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000180_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type enemy ATK - 20%",
        "links": [
            18,
            32,
            85,
            86
        ],
        "categories": []
    },
    {
        "id": 1003541,
        "thumbId": 1003540,
        "name": "Chi-Chi (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003540_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 15%",
        "links": [
            4,
            64,
            90
        ],
        "categories": []
    },
    {
        "id": 1002321,
        "thumbId": 1002320,
        "name": "Chi-Chi (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002320_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 15%",
        "links": [
            4,
            64,
            90
        ],
        "categories": []
    },
    {
        "id": 1002981,
        "thumbId": 1002980,
        "name": "Pan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002980_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Enemies' DEF -25%",
        "links": [
            23,
            34,
            64,
            95
        ],
        "categories": []
    },
    {
        "id": 1002480,
        "thumbId": 1002480,
        "name": "Cooler (Final Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002480_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ & INT Types ATK +25%",
        "links": [
            85,
            86,
            26,
            50
        ],
        "categories": []
    },
    {
        "id": 1002031,
        "thumbId": 1002030,
        "name": "Uub (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002030_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 15% for all Types",
        "links": [
            42,
            52,
            20,
            65,
            49
        ],
        "categories": []
    },
    {
        "id": 2000691,
        "thumbId": 2000690,
        "name": "Great Saiyaman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000690_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +1",
        "links": [
            45,
            69,
            93,
            94
        ],
        "categories": []
    },
    {
        "id": 1003580,
        "thumbId": 1003580,
        "name": "Great Saiyaman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003580_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, TEQ & STR Types ATK +30%",
        "links": [
            8,
            45,
            69,
            93,
            94,
            1003
        ],
        "categories": []
    },
    {
        "id": 1002941,
        "thumbId": 1002940,
        "name": "Great Saiyaman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002940_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL and STR Type ATK +25%",
        "links": [
            8,
            45,
            69,
            93,
            94,
            1003
        ],
        "categories": []
    },
    {
        "id": 1003590,
        "thumbId": 1003590,
        "name": "Great Saiyaman 2",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003590_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +25%",
        "links": [
            1000,
            42,
            64,
            93,
            94,
            69,
            1003
        ],
        "categories": []
    },
    {
        "id": 1002950,
        "thumbId": 1002950,
        "name": "Great Saiyaman 2",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002950_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & STR Types Ki +2",
        "links": [
            1000,
            42,
            93,
            94,
            64,
            69,
            1003
        ],
        "categories": []
    },
    {
        "id": 1002341,
        "thumbId": 1002340,
        "name": "Krilin (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002340_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "AGL and STR Type ATK +25%",
        "links": [
            90,
            36,
            2,
            47
        ],
        "categories": []
    },
    {
        "id": 1003331,
        "thumbId": 1003330,
        "name": "Mr. Boo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003330_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 30%",
        "links": [
            4,
            76,
            83,
            96,
            1003
        ],
        "categories": []
    },
    {
        "id": 1003921,
        "thumbId": 1003920,
        "name": "Cacao",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003920_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL and STR Type HP & ATK + 20%",
        "links": [
            98,
            100,
            73,
            53,
            38
        ],
        "categories": []
    },
    {
        "id": 1003931,
        "thumbId": 1003930,
        "name": "Daiz",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003930_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR & PHY Types Ki +2",
        "links": [
            98,
            100,
            73,
            37
        ],
        "categories": []
    },
    {
        "id": 1003941,
        "thumbId": 1003940,
        "name": "Amond",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003940_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 40%",
        "links": [
            98,
            100,
            73,
            52
        ],
        "categories": []
    },
    {
        "id": 1002361,
        "thumbId": 1002360,
        "name": "Devilman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002360_thumb.png",
        "type": "AGI",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 25% when HP is 30% or below",
        "links": [
            7,
            27,
            101,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1003161,
        "thumbId": 1003160,
        "name": "Oolong",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003160_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ and PHY Type HP & ATK + 20%",
        "links": [
            28,
            12,
            32,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1003001,
        "thumbId": 1003000,
        "name": "Vegeta (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003000_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK + 40%",
        "links": [
            22,
            26,
            34,
            40,
            95
        ],
        "categories": []
    },
    {
        "id": 1003131,
        "thumbId": 1003130,
        "name": "Super Saiyan Gohan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003130_thumb.png",
        "type": "TEC",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ and PHY Type Ki +2",
        "links": [
            23,
            34,
            29,
            47,
            95
        ],
        "categories": []
    },
    {
        "id": 1003970,
        "thumbId": 1003970,
        "name": "Elder Kai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003970_thumb.png",
        "type": "INT",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "Guarantees Super Attack to level up by 1 \nin Training",
        "links": [],
        "categories": []
    },
    {
        "id": 2000761,
        "thumbId": 2000760,
        "name": "Paragus",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000760_thumb.png",
        "type": "END",
        "rarity": "SSR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +1",
        "links": [
            104,
            22,
            86,
            32
        ],
        "categories": []
    },
    {
        "id": 1004191,
        "thumbId": 1004190,
        "name": "Launch",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004190_thumb.png",
        "type": "PUI",
        "rarity": "SSR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK + 30%",
        "links": [
            102,
            90,
            12
        ],
        "categories": []
    },
    {
        "id": 1004280,
        "thumbId": 1004280,
        "name": "Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004280_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & PHY Types HP & ATK +20%",
        "links": [
            9,
            22,
            29,
            26,
            97
        ],
        "categories": []
    },
    {
        "id": 1003220,
        "thumbId": 1003220,
        "name": "Super Saiyan Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003220_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK +40%",
        "links": [
            22,
            29,
            97,
            9,
            40
        ],
        "categories": []
    },
    {
        "id": 1002430,
        "thumbId": 1002430,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002430_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK + 25%",
        "links": [
            23,
            1,
            47,
            75,
            68
        ],
        "categories": []
    },
    {
        "id": 1002130,
        "thumbId": 1002130,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002130_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK +30%",
        "links": [
            23,
            1,
            47,
            75,
            68
        ],
        "categories": []
    },
    {
        "id": 1001751,
        "thumbId": 1001750,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001750_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type ATK + 15%",
        "links": [
            45,
            23,
            34,
            47,
            30
        ],
        "categories": []
    },
    {
        "id": 1000850,
        "thumbId": 1000850,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000850_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, INT & PHY Types Ki +1",
        "links": [
            45,
            23,
            34,
            47,
            30
        ],
        "categories": []
    },
    {
        "id": 1000030,
        "thumbId": 1000030,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000030_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & STR Types Ki +2",
        "links": [
            45,
            23,
            42,
            47,
            1
        ],
        "categories": []
    },
    {
        "id": 1003870,
        "thumbId": 1003870,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003870_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & INT Types HP & ATK +20%",
        "links": [
            22,
            40,
            63,
            26
        ],
        "categories": []
    },
    {
        "id": 1002140,
        "thumbId": 1002140,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002140_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type ATK +30%",
        "links": [
            22,
            40,
            50,
            26,
            68
        ],
        "categories": []
    },
    {
        "id": 1000860,
        "thumbId": 1000860,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000860_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type ATK & DEF +20%",
        "links": [
            22,
            40,
            50,
            26
        ],
        "categories": []
    },
    {
        "id": 1000040,
        "thumbId": 1000040,
        "name": "Vegeta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000040_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +25% when HP is 30% or less",
        "links": [
            22,
            40,
            50,
            26
        ],
        "categories": []
    },
    {
        "id": 1000070,
        "thumbId": 1000070,
        "name": "Cell (1st Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000070_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK +25%",
        "links": [
            12,
            19,
            50,
            47,
            33,
            1004
        ],
        "categories": []
    },
    {
        "id": 2000021,
        "thumbId": 2000020,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000020_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK + 20%",
        "links": [
            23,
            45,
            34
        ],
        "categories": []
    },
    {
        "id": 1001620,
        "thumbId": 1001620,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001620_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +20% when HP is 80% or less",
        "links": [
            23,
            45,
            34
        ],
        "categories": []
    },
    {
        "id": 1001151,
        "thumbId": 1001150,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001150_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 25%",
        "links": [
            23,
            45,
            49,
            6
        ],
        "categories": []
    },
    {
        "id": 1000870,
        "thumbId": 1000870,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000870_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +25% when HP is 30% or less",
        "links": [
            23,
            45,
            49
        ],
        "categories": []
    },
    {
        "id": 1000271,
        "thumbId": 1000270,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000270_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type ATK + 15%",
        "links": [
            23,
            45,
            49,
            6
        ],
        "categories": []
    },
    {
        "id": 1000090,
        "thumbId": 1000090,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000090_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & STR Types ATK +25%",
        "links": [
            23,
            45,
            49
        ],
        "categories": []
    },
    {
        "id": 1001860,
        "thumbId": 1001860,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001860_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & PHY Types ATK +25%",
        "links": [
            40,
            39,
            19,
            45,
            1001
        ],
        "categories": []
    },
    {
        "id": 1000880,
        "thumbId": 1000880,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000880_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +2",
        "links": [
            40,
            39,
            19,
            45
        ],
        "categories": []
    },
    {
        "id": 1000810,
        "thumbId": 1000810,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000810_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 10% for all Types",
        "links": [
            40,
            39,
            19,
            45
        ],
        "categories": []
    },
    {
        "id": 1000281,
        "thumbId": 1000280,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000280_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            1000,
            40,
            39,
            19,
            45
        ],
        "categories": []
    },
    {
        "id": 1000100,
        "thumbId": 1000100,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000100_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & PHY Types ATK +25%",
        "links": [
            40,
            39,
            19,
            45
        ],
        "categories": []
    },
    {
        "id": 1001681,
        "thumbId": 1001680,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001680_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            45,
            36,
            2,
            1,
            47
        ],
        "categories": []
    },
    {
        "id": 1001161,
        "thumbId": 1001160,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001160_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            45,
            36,
            2,
            1
        ],
        "categories": []
    },
    {
        "id": 1000890,
        "thumbId": 1000890,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000890_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & STR Types ATK +25%",
        "links": [
            45,
            36,
            2,
            1
        ],
        "categories": []
    },
    {
        "id": 1000291,
        "thumbId": 1000290,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000290_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type ATK + 15%",
        "links": [
            1000,
            45,
            36,
            2,
            1
        ],
        "categories": []
    },
    {
        "id": 1000110,
        "thumbId": 1000110,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000110_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +20% when HP is 80% or less",
        "links": [
            45,
            36,
            2,
            1
        ],
        "categories": []
    },
    {
        "id": 1003510,
        "thumbId": 1003510,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003510_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & STR Types ATK +25%",
        "links": [
            45,
            26,
            30,
            48,
            33
        ],
        "categories": []
    },
    {
        "id": 1002611,
        "thumbId": 1002610,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002610_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            26,
            8,
            48,
            74,
            68
        ],
        "categories": []
    },
    {
        "id": 1001171,
        "thumbId": 1001170,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001170_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +1",
        "links": [
            1000,
            45,
            8,
            6,
            48
        ],
        "categories": []
    },
    {
        "id": 1000900,
        "thumbId": 1000900,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000900_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +20% when HP is 80% or less",
        "links": [
            45,
            26,
            8,
            48
        ],
        "categories": []
    },
    {
        "id": 1000301,
        "thumbId": 1000300,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000300_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            45,
            26,
            6,
            48,
            33
        ],
        "categories": []
    },
    {
        "id": 1000120,
        "thumbId": 1000120,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000120_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Ki +1 when HP is 80% or less",
        "links": [
            45,
            26,
            30,
            48,
            8
        ],
        "categories": []
    },
    {
        "id": 1002600,
        "thumbId": 1002600,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002600_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & INT Types ATK +25%",
        "links": [
            45,
            24,
            5,
            2,
            68
        ],
        "categories": []
    },
    {
        "id": 1002231,
        "thumbId": 1002230,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002230_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +2",
        "links": [],
        "categories": []
    },
    {
        "id": 1001770,
        "thumbId": 1001770,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001770_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 15% for all Types",
        "links": [
            24,
            5,
            39,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1001450,
        "thumbId": 1001450,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001450_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type ATK +40%",
        "links": [
            45,
            24,
            5,
            46,
            37
        ],
        "categories": []
    },
    {
        "id": 1001181,
        "thumbId": 1001180,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001180_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            45,
            24,
            5,
            2,
            37
        ],
        "categories": []
    },
    {
        "id": 1000910,
        "thumbId": 1000910,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000910_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +2",
        "links": [
            45,
            24,
            5,
            2,
            37
        ],
        "categories": []
    },
    {
        "id": 1000311,
        "thumbId": 1000310,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000310_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            45,
            24,
            5,
            39,
            37
        ],
        "categories": []
    },
    {
        "id": 1000130,
        "thumbId": 1000130,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000130_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +25% when HP is 30% or less",
        "links": [
            45,
            24,
            5,
            39,
            37
        ],
        "categories": []
    },
    {
        "id": 1001460,
        "thumbId": 1001460,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001460_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +15%",
        "links": [
            45,
            24,
            5,
            13,
            46
        ],
        "categories": []
    },
    {
        "id": 1001191,
        "thumbId": 1001190,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001190_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type enemy DEF - 30%",
        "links": [
            45,
            24,
            5,
            13,
            46
        ],
        "categories": []
    },
    {
        "id": 1000920,
        "thumbId": 1000920,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000920_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type DEF + 30%",
        "links": [
            45,
            24,
            5,
            13,
            2
        ],
        "categories": []
    },
    {
        "id": 1000321,
        "thumbId": 1000320,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000320_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            45,
            24,
            5,
            13,
            2
        ],
        "categories": []
    },
    {
        "id": 1000140,
        "thumbId": 1000140,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000140_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type HP + 25%",
        "links": [
            45,
            24,
            5,
            13,
            46
        ],
        "categories": []
    },
    {
        "id": 1003521,
        "thumbId": 1003520,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003520_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +1",
        "links": [
            45,
            36,
            53,
            42,
            37,
            1001
        ],
        "categories": []
    },
    {
        "id": 1002330,
        "thumbId": 1002330,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002330_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "INT Type enemy ATK - 25%",
        "links": [
            8,
            37,
            53,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1001440,
        "thumbId": 1001440,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001440_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ & STR Types Ki +2",
        "links": [
            45,
            37,
            36,
            53,
            47
        ],
        "categories": []
    },
    {
        "id": 1001201,
        "thumbId": 1001200,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001200_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            45,
            36,
            53,
            42,
            37
        ],
        "categories": []
    },
    {
        "id": 1000930,
        "thumbId": 1000930,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000930_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +2",
        "links": [
            45,
            37,
            36,
            53,
            42
        ],
        "categories": []
    },
    {
        "id": 1000331,
        "thumbId": 1000330,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000330_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK + 15%",
        "links": [
            45,
            36,
            53,
            42,
            37
        ],
        "categories": []
    },
    {
        "id": 1000150,
        "thumbId": 1000150,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000150_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Enemies' DEF -25%",
        "links": [
            45,
            37,
            36,
            53
        ],
        "categories": []
    },
    {
        "id": 1001430,
        "thumbId": 1001430,
        "name": "Raditz",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001430_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL & PHY Types ATK +25%",
        "links": [
            34,
            22,
            32,
            18
        ],
        "categories": []
    },
    {
        "id": 1001131,
        "thumbId": 1001130,
        "name": "Raditz",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001130_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK + 15%",
        "links": [
            34,
            22,
            32
        ],
        "categories": []
    },
    {
        "id": 1000341,
        "thumbId": 1000340,
        "name": "Raditz",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000340_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK + 15%",
        "links": [
            34,
            22,
            32
        ],
        "categories": []
    },
    {
        "id": 1000160,
        "thumbId": 1000160,
        "name": "Raditz",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000160_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK +25% when HP is 30% or less",
        "links": [
            34,
            22,
            32
        ],
        "categories": []
    },
    {
        "id": 1001420,
        "thumbId": 1001420,
        "name": "Nappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001420_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type HP & ATK +20%",
        "links": [
            22,
            18,
            52,
            49,
            42
        ],
        "categories": []
    },
    {
        "id": 1001141,
        "thumbId": 1001140,
        "name": "Nappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001140_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 20% when HP is 30% or below",
        "links": [
            22,
            18,
            52,
            21,
            42
        ],
        "categories": []
    },
    {
        "id": 1000960,
        "thumbId": 1000960,
        "name": "Nappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000960_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK +25% when HP is 30% or less",
        "links": [
            22,
            18,
            52,
            49,
            42
        ],
        "categories": []
    },
    {
        "id": 1000351,
        "thumbId": 1000350,
        "name": "Nappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000350_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type ATK + 15%",
        "links": [
            22,
            21,
            52,
            49,
            42
        ],
        "categories": []
    },
    {
        "id": 1000170,
        "thumbId": 1000170,
        "name": "Nappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000170_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type HP & ATK +20%",
        "links": [
            22,
            21,
            52,
            49,
            42
        ],
        "categories": []
    },
    {
        "id": 1001211,
        "thumbId": 1001210,
        "name": "Zarbon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001210_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 15%",
        "links": [
            28,
            51,
            43
        ],
        "categories": []
    },
    {
        "id": 1000940,
        "thumbId": 1000940,
        "name": "Zarbon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000940_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK & DEF + 15% when HP 80% or below",
        "links": [
            28,
            51,
            43
        ],
        "categories": []
    },
    {
        "id": 1000361,
        "thumbId": 1000360,
        "name": "Zarbon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000360_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type DEF + 20%",
        "links": [
            28,
            51,
            43
        ],
        "categories": []
    },
    {
        "id": 1000180,
        "thumbId": 1000180,
        "name": "Zarbon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000180_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK + 25%",
        "links": [
            28,
            51,
            43
        ],
        "categories": []
    },
    {
        "id": 1001221,
        "thumbId": 1001220,
        "name": "Capitaine Ginyu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001220_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP + 15%",
        "links": [
            41,
            17,
            25,
            73,
            94
        ],
        "categories": []
    },
    {
        "id": 1000950,
        "thumbId": 1000950,
        "name": "Capitaine Ginyu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000950_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK +25%",
        "links": [
            41,
            17,
            25,
            73,
            94
        ],
        "categories": []
    },
    {
        "id": 1000371,
        "thumbId": 1000370,
        "name": "Capitaine Ginyu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000370_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP + 15%",
        "links": [
            41,
            17,
            25,
            73,
            94
        ],
        "categories": []
    },
    {
        "id": 1000190,
        "thumbId": 1000190,
        "name": "Capitaine Ginyu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000190_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP +25%",
        "links": [
            41,
            17,
            25,
            73,
            94
        ],
        "categories": []
    },
    {
        "id": 1001830,
        "thumbId": 1001830,
        "name": "Android #19",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001830_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Enemy DEF - 25%",
        "links": [
            35,
            81,
            18,
            12
        ],
        "categories": []
    },
    {
        "id": 1001231,
        "thumbId": 1001230,
        "name": "Android #19",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001230_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            35,
            52,
            73,
            81
        ],
        "categories": []
    },
    {
        "id": 1000971,
        "thumbId": 1000970,
        "name": "Android #19",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000970_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 10% when HP is 50% or above",
        "links": [
            35,
            52,
            73,
            81
        ],
        "categories": []
    },
    {
        "id": 1000381,
        "thumbId": 1000380,
        "name": "Android #19",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000380_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            35,
            52,
            73,
            81
        ],
        "categories": []
    },
    {
        "id": 1000200,
        "thumbId": 1000200,
        "name": "Android #19",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000200_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 15% when HP is 50% or above",
        "links": [
            35,
            52,
            73,
            81
        ],
        "categories": []
    },
    {
        "id": 1001840,
        "thumbId": 1001840,
        "name": "Dr. Gero",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001840_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type enemy ATK -25%",
        "links": [
            35,
            81,
            18,
            26,
            86,
            114
        ],
        "categories": []
    },
    {
        "id": 1001241,
        "thumbId": 1001240,
        "name": "Dr. Gero",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001240_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK + 15%",
        "links": [
            35,
            55,
            12,
            86,
            114,
            81
        ],
        "categories": []
    },
    {
        "id": 1000980,
        "thumbId": 1000980,
        "name": "Dr. Gero",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000980_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK + 25%",
        "links": [
            35,
            55,
            8,
            12,
            86,
            114,
            81
        ],
        "categories": []
    },
    {
        "id": 1000391,
        "thumbId": 1000390,
        "name": "Dr. Gero",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000390_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK + 15%",
        "links": [
            35,
            55,
            12,
            86,
            114,
            81
        ],
        "categories": []
    },
    {
        "id": 1000210,
        "thumbId": 1000210,
        "name": "Dr. Gero",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000210_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type enemy ATK - 25%",
        "links": [
            35,
            55,
            8,
            12,
            86,
            114,
            81
        ],
        "categories": []
    },
    {
        "id": 1001251,
        "thumbId": 1001250,
        "name": "Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001250_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK + 15%",
        "links": [
            35,
            31,
            4,
            67
        ],
        "categories": []
    },
    {
        "id": 1000990,
        "thumbId": 1000990,
        "name": "Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000990_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK +15% when HP is 50% or more",
        "links": [
            35,
            31,
            4,
            110
        ],
        "categories": []
    },
    {
        "id": 1000401,
        "thumbId": 1000400,
        "name": "Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000400_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type enemy DEF - 30%",
        "links": [
            35,
            31,
            4,
            110
        ],
        "categories": []
    },
    {
        "id": 1000220,
        "thumbId": 1000220,
        "name": "Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000220_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type enemies' ATK -25%",
        "links": [
            35,
            31,
            4,
            1001,
            110
        ],
        "categories": []
    },
    {
        "id": 1001261,
        "thumbId": 1001260,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001260_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 10% when HP is 50% or above",
        "links": [
            35,
            31,
            4,
            64,
            67
        ],
        "categories": []
    },
    {
        "id": 1001000,
        "thumbId": 1001000,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001000_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Ki +1 when HP is 50% or more",
        "links": [
            35,
            31,
            4,
            64,
            110
        ],
        "categories": []
    },
    {
        "id": 1000411,
        "thumbId": 1000410,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000410_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            35,
            31,
            4,
            64,
            110
        ],
        "categories": []
    },
    {
        "id": 1000230,
        "thumbId": 1000230,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000230_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT & STR Types ATK +25%",
        "links": [
            35,
            31,
            4,
            64,
            1001,
            110
        ],
        "categories": []
    },
    {
        "id": 1001271,
        "thumbId": 1001270,
        "name": "Android #16",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001270_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP + 15%",
        "links": [
            35,
            38,
            17,
            1001
        ],
        "categories": []
    },
    {
        "id": 1001010,
        "thumbId": 1001010,
        "name": "Android #16",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001010_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK +15% when HP is 50% or more",
        "links": [
            35,
            38,
            17
        ],
        "categories": []
    },
    {
        "id": 1000421,
        "thumbId": 1000420,
        "name": "Android #16",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000420_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type DEF + 20%",
        "links": [
            35,
            38,
            17
        ],
        "categories": []
    },
    {
        "id": 1000240,
        "thumbId": 1000240,
        "name": "Android #16",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000240_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type HP & ATK +20%",
        "links": [
            35,
            38,
            17
        ],
        "categories": []
    },
    {
        "id": 1000250,
        "thumbId": 1000250,
        "name": "Tortue Géniale",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000250_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +2",
        "links": [
            42,
            27,
            36,
            47,
            16,
            3
        ],
        "categories": []
    },
    {
        "id": 1001031,
        "thumbId": 1001030,
        "name": "Tao Pai Pai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001030_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL and INT Type ATK + 15%",
        "links": [
            5,
            16,
            32,
            18,
            46
        ],
        "categories": []
    },
    {
        "id": 1000441,
        "thumbId": 1000440,
        "name": "Tao Pai Pai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000440_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +1",
        "links": [
            5,
            18,
            32,
            90
        ],
        "categories": []
    },
    {
        "id": 1000260,
        "thumbId": 1000260,
        "name": "Tao Pai Pai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000260_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +2",
        "links": [
            5,
            16,
            18,
            32,
            90
        ],
        "categories": []
    },
    {
        "id": 1000451,
        "thumbId": 1000450,
        "name": "Fusion Machine Pilaf",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000450_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP + 15%",
        "links": [
            38,
            18,
            8,
            86,
            90
        ],
        "categories": []
    },
    {
        "id": 1000461,
        "thumbId": 1000460,
        "name": "Shen",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000460_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            42,
            17,
            84
        ],
        "categories": []
    },
    {
        "id": 1000471,
        "thumbId": 1000470,
        "name": "Tambourine",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000470_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 15%",
        "links": [
            6,
            18,
            90
        ],
        "categories": []
    },
    {
        "id": 1000481,
        "thumbId": 1000480,
        "name": "Cymbal",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000480_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type ATK + 15%",
        "links": [
            6,
            90
        ],
        "categories": []
    },
    {
        "id": 1000491,
        "thumbId": 1000490,
        "name": "Drum",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000490_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK + 15%",
        "links": [
            6,
            14,
            90
        ],
        "categories": []
    },
    {
        "id": 1001040,
        "thumbId": 1001040,
        "name": "Chi-Chi",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001040_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK +25%",
        "links": [
            23,
            64
        ],
        "categories": []
    },
    {
        "id": 1001291,
        "thumbId": 1001290,
        "name": "Dodoria",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001290_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type ATK + 15%",
        "links": [
            32,
            51,
            43,
            73
        ],
        "categories": []
    },
    {
        "id": 1001050,
        "thumbId": 1001050,
        "name": "Dodoria",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001050_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ, STR & PHY Types HP +20%",
        "links": [
            32,
            51,
            43,
            73
        ],
        "categories": []
    },
    {
        "id": 1000511,
        "thumbId": 1000510,
        "name": "Dodoria",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000510_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 15%",
        "links": [
            32,
            51,
            43,
            73
        ],
        "categories": []
    },
    {
        "id": 1001301,
        "thumbId": 1001300,
        "name": "Reacum",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001300_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 15%",
        "links": [
            41,
            18,
            52,
            42,
            94
        ],
        "categories": []
    },
    {
        "id": 1001060,
        "thumbId": 1001060,
        "name": "Reacum",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001060_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type ATK + 30%",
        "links": [
            41,
            18,
            52,
            42,
            94
        ],
        "categories": []
    },
    {
        "id": 1000521,
        "thumbId": 1000520,
        "name": "Reacum",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000520_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type ATK + 15%",
        "links": [
            41,
            52,
            42,
            94
        ],
        "categories": []
    },
    {
        "id": 1001671,
        "thumbId": 1001670,
        "name": "Ghourd",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001670_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type DEF + 20%",
        "links": [
            41,
            13,
            18,
            8,
            94
        ],
        "categories": []
    },
    {
        "id": 1001311,
        "thumbId": 1001310,
        "name": "Ghourd",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001310_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type DEF + 15%",
        "links": [
            41,
            13,
            18,
            8,
            94
        ],
        "categories": []
    },
    {
        "id": 1001070,
        "thumbId": 1001070,
        "name": "Ghourd",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001070_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Enemy DEF - 25%",
        "links": [
            41,
            13,
            18,
            8,
            94
        ],
        "categories": []
    },
    {
        "id": 1000531,
        "thumbId": 1000530,
        "name": "Ghourd",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000530_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type DEF + 20%",
        "links": [
            41,
            13,
            18,
            8,
            94
        ],
        "categories": []
    },
    {
        "id": 1001321,
        "thumbId": 1001320,
        "name": "Barta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001320_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            41,
            53,
            54,
            94
        ],
        "categories": []
    },
    {
        "id": 1001080,
        "thumbId": 1001080,
        "name": "Barta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001080_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +1",
        "links": [
            41,
            53,
            54,
            94
        ],
        "categories": []
    },
    {
        "id": 1000541,
        "thumbId": 1000540,
        "name": "Barta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000540_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            41,
            53,
            54,
            94
        ],
        "categories": []
    },
    {
        "id": 1001331,
        "thumbId": 1001330,
        "name": "Jiece",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001330_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK + 15%",
        "links": [
            41,
            54,
            94
        ],
        "categories": []
    },
    {
        "id": 1001090,
        "thumbId": 1001090,
        "name": "Jiece",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001090_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type enemy ATK - 25%",
        "links": [
            41,
            54,
            94
        ],
        "categories": []
    },
    {
        "id": 1000551,
        "thumbId": 1000550,
        "name": "Jiece",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000550_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 15%",
        "links": [
            41,
            54,
            94
        ],
        "categories": []
    },
    {
        "id": 1001341,
        "thumbId": 1001340,
        "name": "Yajirobe",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001340_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +1",
        "links": [
            52,
            42,
            32,
            12
        ],
        "categories": []
    },
    {
        "id": 1000561,
        "thumbId": 1000560,
        "name": "Yajirobe",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000560_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type ATK + 15%",
        "links": [
            52,
            42,
            32,
            12
        ],
        "categories": []
    },
    {
        "id": 1001571,
        "thumbId": 1001570,
        "name": "Nail",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001570_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            48,
            39,
            15
        ],
        "categories": []
    },
    {
        "id": 1001351,
        "thumbId": 1001350,
        "name": "Nail",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001350_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            48,
            39,
            15
        ],
        "categories": []
    },
    {
        "id": 1001100,
        "thumbId": 1001100,
        "name": "Nail",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001100_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Immune to negative effects",
        "links": [
            48,
            39,
            15
        ],
        "categories": []
    },
    {
        "id": 1000571,
        "thumbId": 1000570,
        "name": "Nail",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000570_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            48,
            39,
            15
        ],
        "categories": []
    },
    {
        "id": 1000820,
        "thumbId": 1000820,
        "name": "Mr. Satan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000820_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL, INT & PHY Types Ki +1",
        "links": [
            27,
            44,
            15,
            10,
            20
        ],
        "categories": []
    },
    {
        "id": 1000581,
        "thumbId": 1000580,
        "name": "Mr. Satan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000580_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            27,
            44,
            15,
            10,
            20
        ],
        "categories": []
    },
    {
        "id": 1001371,
        "thumbId": 1001370,
        "name": "Videl",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001370_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            44,
            39,
            10,
            42,
            64
        ],
        "categories": []
    },
    {
        "id": 1000591,
        "thumbId": 1000590,
        "name": "Videl",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000590_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type enemy DEF - 30%",
        "links": [
            44,
            39,
            10,
            2,
            64
        ],
        "categories": []
    },
    {
        "id": 1000601,
        "thumbId": 1000600,
        "name": "Cell Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000600_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            33,
            18,
            4,
            47
        ],
        "categories": []
    },
    {
        "id": 1000611,
        "thumbId": 1000610,
        "name": "Spopovich",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000610_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK + 15%",
        "links": [
            18,
            52,
            11,
            7
        ],
        "categories": []
    },
    {
        "id": 1000621,
        "thumbId": 1000620,
        "name": "Yamu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000620_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK + 15%",
        "links": [
            11,
            7,
            49
        ],
        "categories": []
    },
    {
        "id": 1002061,
        "thumbId": 1002060,
        "name": "Yakon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002060_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            11,
            73,
            60,
            77
        ],
        "categories": []
    },
    {
        "id": 1000631,
        "thumbId": 1000630,
        "name": "Yakon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000630_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK + 15%",
        "links": [
            11,
            73,
            60,
            77
        ],
        "categories": []
    },
    {
        "id": 1002071,
        "thumbId": 1002070,
        "name": "Pui Pui",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002070_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            11,
            73,
            77
        ],
        "categories": []
    },
    {
        "id": 1001361,
        "thumbId": 1001360,
        "name": "Cui",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001360_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK + 15%",
        "links": [
            32,
            43
        ],
        "categories": []
    },
    {
        "id": 1001110,
        "thumbId": 1001110,
        "name": "Cui",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001110_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 25%",
        "links": [
            32,
            43
        ],
        "categories": []
    },
    {
        "id": 1001380,
        "thumbId": 1001380,
        "name": "Master Shen",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001380_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK + 25%",
        "links": [
            5,
            24,
            3,
            90
        ],
        "categories": []
    },
    {
        "id": 2000160,
        "thumbId": 2000160,
        "name": "Trunks (Xeno)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000160_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 10% for all Types",
        "links": [
            40,
            39,
            19,
            121
        ],
        "categories": []
    },
    {
        "id": 1001500,
        "thumbId": 1001500,
        "name": "Fasha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001500_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 15% for all Types",
        "links": [
            22,
            62,
            63,
            64
        ],
        "categories": []
    },
    {
        "id": 1001541,
        "thumbId": 1001540,
        "name": "Tora",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001540_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            22,
            62,
            63
        ],
        "categories": []
    },
    {
        "id": 1001551,
        "thumbId": 1001550,
        "name": "Borgos",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001550_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK + 20%",
        "links": [
            22,
            62,
            63,
            42
        ],
        "categories": []
    },
    {
        "id": 1001561,
        "thumbId": 1001560,
        "name": "Shugesh",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001560_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            22,
            62,
            63,
            52
        ],
        "categories": []
    },
    {
        "id": 1001730,
        "thumbId": 1001730,
        "name": "Android #17 (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001730_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type enemies' ATK -25%",
        "links": [
            35,
            18,
            66,
            67
        ],
        "categories": []
    },
    {
        "id": 1001740,
        "thumbId": 1001740,
        "name": "Android #18 (Future)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001740_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT & PHY Types ATK +25%",
        "links": [
            35,
            18,
            64,
            66,
            67
        ],
        "categories": []
    },
    {
        "id": 1002240,
        "thumbId": 1002240,
        "name": "Goku (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002240_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 10% for all Types",
        "links": [
            23,
            34,
            36,
            47,
            90
        ],
        "categories": []
    },
    {
        "id": 1002420,
        "thumbId": 1002420,
        "name": "Super Saiyan God SS Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002420_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 15% for all Types",
        "links": [
            29,
            70,
            47,
            71,
            68
        ],
        "categories": []
    },
    {
        "id": 1003900,
        "thumbId": 1003900,
        "name": "Beerus",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003900_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +2",
        "links": [
            80,
            26,
            79,
            4
        ],
        "categories": []
    },
    {
        "id": 1002161,
        "thumbId": 1002160,
        "name": "Sorbet",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002160_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 500 for all Types",
        "links": [
            8,
            43,
            72,
            73,
            68
        ],
        "categories": []
    },
    {
        "id": 1002171,
        "thumbId": 1002170,
        "name": "Tagoma",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002170_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP + 15%",
        "links": [
            43,
            72,
            73,
            68
        ],
        "categories": []
    },
    {
        "id": 1002181,
        "thumbId": 1002180,
        "name": "Krilin (Police Officer)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002180_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type DEF + 25%",
        "links": [
            45,
            2,
            1,
            69,
            68
        ],
        "categories": []
    },
    {
        "id": 1002191,
        "thumbId": 1002190,
        "name": "Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002190_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +1",
        "links": [
            8,
            23,
            45,
            34,
            68
        ],
        "categories": []
    },
    {
        "id": 1002200,
        "thumbId": 1002200,
        "name": "Super Saiyan Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002200_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & PHY Type ATK +25%",
        "links": [
            9,
            29,
            47,
            74,
            68
        ],
        "categories": []
    },
    {
        "id": 1002210,
        "thumbId": 1002210,
        "name": "Jaco",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002210_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK +15% when HP is 50% or more",
        "links": [
            8,
            12,
            75,
            69,
            68
        ],
        "categories": []
    },
    {
        "id": 1002220,
        "thumbId": 1002220,
        "name": "Tortue Géniale (Max Power)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002220_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 25%",
        "links": [
            27,
            36,
            47,
            16,
            68
        ],
        "categories": []
    },
    {
        "id": 1002591,
        "thumbId": 1002590,
        "name": "Shisami",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002590_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 20%",
        "links": [
            43,
            72,
            73,
            68
        ],
        "categories": []
    },
    {
        "id": 1003820,
        "thumbId": 1003820,
        "name": "Dabra",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003820_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type enemy ATK -25%",
        "links": [
            18,
            7,
            73,
            76,
            77,
            119
        ],
        "categories": []
    },
    {
        "id": 1001980,
        "thumbId": 1001980,
        "name": "Dabra",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001980_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK +40%",
        "links": [
            18,
            7,
            73,
            76,
            77,
            119
        ],
        "categories": []
    },
    {
        "id": 1002050,
        "thumbId": 1002050,
        "name": "Babidi",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002050_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL, INT and PHY Type Ki +1",
        "links": [
            18,
            76,
            77
        ],
        "categories": []
    },
    {
        "id": 1001760,
        "thumbId": 1001760,
        "name": "Trunks (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001760_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +2",
        "links": [
            4,
            40,
            10,
            27,
            45
        ],
        "categories": []
    },
    {
        "id": 1002001,
        "thumbId": 1002000,
        "name": "Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002000_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            4,
            23,
            47,
            1003
        ],
        "categories": []
    },
    {
        "id": 1002301,
        "thumbId": 1002300,
        "name": "Murasaki",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002300_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            55,
            12,
            32,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1002310,
        "thumbId": 1002310,
        "name": "General Blue",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002310_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL and INT Type ATK + 20%",
        "links": [
            55,
            13,
            18,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1001720,
        "thumbId": 1001720,
        "name": "Cell (Perfect Form)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001720_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL, INT & PHY Types Ki +1",
        "links": [
            17,
            19,
            33,
            47,
            1004
        ],
        "categories": []
    },
    {
        "id": 1003280,
        "thumbId": 1003280,
        "name": "Super Saiyan Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003280_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type enemies' ATK -25%",
        "links": [
            19,
            29,
            40,
            45,
            9
        ],
        "categories": []
    },
    {
        "id": 1004440,
        "thumbId": 1004440,
        "name": "Super Saiyan Trunks (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004440_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL & STR Types ATK +25%",
        "links": [
            1000,
            9,
            22,
            29,
            40
        ],
        "categories": []
    },
    {
        "id": 1002570,
        "thumbId": 1002570,
        "name": "Super Saiyan Trunks (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002570_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK +30%",
        "links": [
            9,
            29,
            40,
            45,
            82
        ],
        "categories": []
    },
    {
        "id": 1002580,
        "thumbId": 1002580,
        "name": "Super Saiyan Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002580_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "All Types ATK +15%",
        "links": [
            9,
            29,
            47,
            45,
            82
        ],
        "categories": []
    },
    {
        "id": 1002280,
        "thumbId": 1002280,
        "name": "Piccolo Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002280_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type Ki +3",
        "links": [
            50,
            57,
            52,
            6,
            84
        ],
        "categories": []
    },
    {
        "id": 2000180,
        "thumbId": 2000180,
        "name": "Chilled",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000180_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type enemy ATK - 20%",
        "links": [
            18,
            32,
            85,
            86
        ],
        "categories": []
    },
    {
        "id": 2000721,
        "thumbId": 2000720,
        "name": "Gokua",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000720_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            87,
            88,
            42,
            73
        ],
        "categories": []
    },
    {
        "id": 2000731,
        "thumbId": 2000730,
        "name": "Bido",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000730_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP +15%",
        "links": [
            87,
            88,
            52,
            73
        ],
        "categories": []
    },
    {
        "id": 2000741,
        "thumbId": 2000740,
        "name": "Bujin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000740_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type enemy ATK - 10%",
        "links": [
            87,
            88,
            13,
            73
        ],
        "categories": []
    },
    {
        "id": 1003540,
        "thumbId": 1003540,
        "name": "Chi-Chi (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003540_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 15%",
        "links": [
            4,
            64,
            90
        ],
        "categories": []
    },
    {
        "id": 1002320,
        "thumbId": 1002320,
        "name": "Chi-Chi (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002320_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 15%",
        "links": [
            4,
            64,
            90
        ],
        "categories": []
    },
    {
        "id": 1002980,
        "thumbId": 1002980,
        "name": "Pan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002980_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Enemies' DEF -25%",
        "links": [
            23,
            34,
            64,
            95
        ],
        "categories": []
    },
    {
        "id": 1002501,
        "thumbId": 1002500,
        "name": "Doure",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002500_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            92,
            91,
            73,
            42
        ],
        "categories": []
    },
    {
        "id": 1002511,
        "thumbId": 1002510,
        "name": "Naise",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002510_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP +15%",
        "links": [
            92,
            91,
            73,
            37
        ],
        "categories": []
    },
    {
        "id": 1002030,
        "thumbId": 1002030,
        "name": "Uub (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002030_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "ATK + 15% for all Types",
        "links": [
            42,
            52,
            20,
            65,
            49
        ],
        "categories": []
    },
    {
        "id": 2000690,
        "thumbId": 2000690,
        "name": "Great Saiyaman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000690_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "All Types Ki +1",
        "links": [
            45,
            69,
            93,
            94
        ],
        "categories": []
    },
    {
        "id": 1002940,
        "thumbId": 1002940,
        "name": "Great Saiyaman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002940_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL and STR Type ATK +25%",
        "links": [
            8,
            45,
            69,
            93,
            94,
            1003
        ],
        "categories": []
    },
    {
        "id": 1003881,
        "thumbId": 1003880,
        "name": "Bulma",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003880_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP +15%",
        "links": [
            10,
            12,
            8,
            37,
            114
        ],
        "categories": []
    },
    {
        "id": 1002340,
        "thumbId": 1002340,
        "name": "Krilin (Youth)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002340_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "AGL and STR Type ATK +25%",
        "links": [
            90,
            36,
            2,
            47
        ],
        "categories": []
    },
    {
        "id": 1003330,
        "thumbId": 1003330,
        "name": "Mr. Boo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003330_thumb.png",
        "type": "INT",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 30%",
        "links": [
            4,
            76,
            83,
            96,
            1003
        ],
        "categories": []
    },
    {
        "id": 1003920,
        "thumbId": 1003920,
        "name": "Cacao",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003920_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL and STR Type HP & ATK + 20%",
        "links": [
            98,
            100,
            73,
            53,
            38
        ],
        "categories": []
    },
    {
        "id": 1003930,
        "thumbId": 1003930,
        "name": "Daiz",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003930_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR & PHY Types Ki +2",
        "links": [
            98,
            100,
            73,
            37
        ],
        "categories": []
    },
    {
        "id": 1003940,
        "thumbId": 1003940,
        "name": "Amond",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003940_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 40%",
        "links": [
            98,
            100,
            73,
            52
        ],
        "categories": []
    },
    {
        "id": 1003951,
        "thumbId": 1003950,
        "name": "Rasin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003950_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            98,
            100,
            73,
            33
        ],
        "categories": []
    },
    {
        "id": 1003961,
        "thumbId": 1003960,
        "name": "Lakasei",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003960_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +1",
        "links": [
            98,
            100,
            73,
            33
        ],
        "categories": []
    },
    {
        "id": 1002360,
        "thumbId": 1002360,
        "name": "Devilman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002360_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 25% when HP is 30% or below",
        "links": [
            7,
            27,
            101,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1003160,
        "thumbId": 1003160,
        "name": "Oolong",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003160_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ and PHY Type HP & ATK + 20%",
        "links": [
            28,
            12,
            32,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1003151,
        "thumbId": 1003150,
        "name": "King Chappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003150_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            16,
            27,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1002381,
        "thumbId": 1002380,
        "name": "Dracula Man",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002380_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Immune to negative effects",
        "links": [
            28,
            12,
            101,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1002371,
        "thumbId": 1002370,
        "name": "Bandages",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002370_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP + 15%",
        "links": [
            14,
            52,
            101,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1003000,
        "thumbId": 1003000,
        "name": "Vegeta (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003000_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK + 40%",
        "links": [
            22,
            26,
            34,
            40,
            95
        ],
        "categories": []
    },
    {
        "id": 1003130,
        "thumbId": 1003130,
        "name": "Super Saiyan Gohan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003130_thumb.png",
        "type": "TEC",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "TEQ and PHY Type Ki +2",
        "links": [
            23,
            34,
            29,
            47,
            95
        ],
        "categories": []
    },
    {
        "id": 1003061,
        "thumbId": 1003060,
        "name": "Mr. Satan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003060_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            27,
            44,
            15,
            10,
            95
        ],
        "categories": []
    },
    {
        "id": 1002041,
        "thumbId": 1002040,
        "name": "Pan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002040_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            23,
            34,
            64,
            1003
        ],
        "categories": []
    },
    {
        "id": 2000760,
        "thumbId": 2000760,
        "name": "Paragus",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000760_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "All Types Ki +1",
        "links": [
            104,
            22,
            86,
            32
        ],
        "categories": []
    },
    {
        "id": 1003651,
        "thumbId": 1003650,
        "name": "Cyclopian Guard",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003650_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            38,
            18
        ],
        "categories": []
    },
    {
        "id": 1004190,
        "thumbId": 1004190,
        "name": "Launch",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004190_thumb.png",
        "type": "PUI",
        "rarity": "SR",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK + 30%",
        "links": [
            102,
            90,
            12
        ],
        "categories": []
    },
    {
        "id": 1004671,
        "thumbId": 1004670,
        "name": "Staff Officer Black",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004670_thumb.png",
        "type": "END",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            102,
            90,
            55,
            8
        ],
        "categories": []
    },
    {
        "id": 1004661,
        "thumbId": 1004660,
        "name": "Giran",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004660_thumb.png",
        "type": "AGI",
        "rarity": "SR",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP +15%",
        "links": [
            102,
            90,
            14,
            32
        ],
        "categories": []
    },
    {
        "id": 1001750,
        "thumbId": 1001750,
        "name": "Goku",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001750_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type ATK + 15%",
        "links": [
            45,
            23,
            34,
            47,
            30
        ],
        "categories": []
    },
    {
        "id": 2000020,
        "thumbId": 2000020,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000020_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK + 20%",
        "links": [
            23,
            45,
            34
        ],
        "categories": []
    },
    {
        "id": 1001150,
        "thumbId": 1001150,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001150_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "HP + 25%",
        "links": [
            23,
            45,
            49,
            6
        ],
        "categories": []
    },
    {
        "id": 1000270,
        "thumbId": 1000270,
        "name": "Gohan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000270_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "INT Type ATK + 15%",
        "links": [
            23,
            45,
            49,
            6
        ],
        "categories": []
    },
    {
        "id": 1000280,
        "thumbId": 1000280,
        "name": "Trunks (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000280_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            1000,
            40,
            39,
            19,
            45
        ],
        "categories": []
    },
    {
        "id": 1001881,
        "thumbId": 1001880,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001880_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [],
        "categories": []
    },
    {
        "id": 1001880,
        "thumbId": 1001880,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001880_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [],
        "categories": []
    },
    {
        "id": 1001680,
        "thumbId": 1001680,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001680_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            45,
            36,
            2,
            1,
            47
        ],
        "categories": []
    },
    {
        "id": 1001160,
        "thumbId": 1001160,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001160_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            45,
            36,
            2,
            1
        ],
        "categories": []
    },
    {
        "id": 1000290,
        "thumbId": 1000290,
        "name": "Krilin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000290_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type ATK + 15%",
        "links": [
            1000,
            45,
            36,
            2,
            1
        ],
        "categories": []
    },
    {
        "id": 1002610,
        "thumbId": 1002610,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002610_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            26,
            8,
            48,
            74,
            68
        ],
        "categories": []
    },
    {
        "id": 1001170,
        "thumbId": 1001170,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001170_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +1",
        "links": [
            1000,
            45,
            8,
            6,
            48
        ],
        "categories": []
    },
    {
        "id": 1000300,
        "thumbId": 1000300,
        "name": "Piccolo",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000300_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            45,
            26,
            6,
            48,
            33
        ],
        "categories": []
    },
    {
        "id": 1002230,
        "thumbId": 1002230,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002230_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "STR Type Ki +2",
        "links": [],
        "categories": []
    },
    {
        "id": 1001901,
        "thumbId": 1001900,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001900_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            5,
            45
        ],
        "categories": []
    },
    {
        "id": 1001180,
        "thumbId": 1001180,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001180_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            45,
            24,
            5,
            2,
            37
        ],
        "categories": []
    },
    {
        "id": 1000310,
        "thumbId": 1000310,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000310_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            45,
            24,
            5,
            39,
            37
        ],
        "categories": []
    },
    {
        "id": 1001911,
        "thumbId": 1001910,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001910_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            5,
            45
        ],
        "categories": []
    },
    {
        "id": 1001190,
        "thumbId": 1001190,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001190_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "INT Type enemy DEF - 30%",
        "links": [
            45,
            24,
            5,
            13,
            46
        ],
        "categories": []
    },
    {
        "id": 1000320,
        "thumbId": 1000320,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000320_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            45,
            24,
            5,
            13,
            2
        ],
        "categories": []
    },
    {
        "id": 1003520,
        "thumbId": 1003520,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003520_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "INT Type Ki +1",
        "links": [
            45,
            36,
            53,
            42,
            37,
            1001
        ],
        "categories": []
    },
    {
        "id": 1001891,
        "thumbId": 1001890,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001890_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            45,
            36
        ],
        "categories": []
    },
    {
        "id": 1001871,
        "thumbId": 1001870,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001870_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [],
        "categories": []
    },
    {
        "id": 1001870,
        "thumbId": 1001870,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001870_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [],
        "categories": []
    },
    {
        "id": 1001200,
        "thumbId": 1001200,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001200_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            45,
            36,
            53,
            42,
            37
        ],
        "categories": []
    },
    {
        "id": 1000330,
        "thumbId": 1000330,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000330_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type ATK + 15%",
        "links": [
            45,
            36,
            53,
            42,
            37
        ],
        "categories": []
    },
    {
        "id": 1001130,
        "thumbId": 1001130,
        "name": "Raditz",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001130_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK + 15%",
        "links": [
            34,
            22,
            32
        ],
        "categories": []
    },
    {
        "id": 1000340,
        "thumbId": 1000340,
        "name": "Raditz",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000340_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK + 15%",
        "links": [
            34,
            22,
            32
        ],
        "categories": []
    },
    {
        "id": 1001140,
        "thumbId": 1001140,
        "name": "Nappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001140_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 20% when HP is 30% or below",
        "links": [
            22,
            18,
            52,
            21,
            42
        ],
        "categories": []
    },
    {
        "id": 1000350,
        "thumbId": 1000350,
        "name": "Nappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000350_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type ATK + 15%",
        "links": [
            22,
            21,
            52,
            49,
            42
        ],
        "categories": []
    },
    {
        "id": 1001210,
        "thumbId": 1001210,
        "name": "Zarbon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001210_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 15%",
        "links": [
            28,
            51,
            43
        ],
        "categories": []
    },
    {
        "id": 1000360,
        "thumbId": 1000360,
        "name": "Zarbon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000360_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type DEF + 20%",
        "links": [
            28,
            51,
            43
        ],
        "categories": []
    },
    {
        "id": 1001220,
        "thumbId": 1001220,
        "name": "Capitaine Ginyu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001220_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP + 15%",
        "links": [
            41,
            17,
            25,
            73,
            94
        ],
        "categories": []
    },
    {
        "id": 1000370,
        "thumbId": 1000370,
        "name": "Capitaine Ginyu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000370_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP + 15%",
        "links": [
            41,
            17,
            25,
            73,
            94
        ],
        "categories": []
    },
    {
        "id": 1001230,
        "thumbId": 1001230,
        "name": "Android #19",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001230_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            35,
            52,
            73,
            81
        ],
        "categories": []
    },
    {
        "id": 1000970,
        "thumbId": 1000970,
        "name": "Android #19",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000970_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 10% when HP is 50% or above",
        "links": [
            35,
            52,
            73,
            81
        ],
        "categories": []
    },
    {
        "id": 1000380,
        "thumbId": 1000380,
        "name": "Android #19",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000380_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            35,
            52,
            73,
            81
        ],
        "categories": []
    },
    {
        "id": 1001240,
        "thumbId": 1001240,
        "name": "Dr. Gero",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001240_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK + 15%",
        "links": [
            35,
            55,
            12,
            86,
            114,
            81
        ],
        "categories": []
    },
    {
        "id": 1000390,
        "thumbId": 1000390,
        "name": "Dr. Gero",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000390_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK + 15%",
        "links": [
            35,
            55,
            12,
            86,
            114,
            81
        ],
        "categories": []
    },
    {
        "id": 1001250,
        "thumbId": 1001250,
        "name": "Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001250_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK + 15%",
        "links": [
            35,
            31,
            4,
            67
        ],
        "categories": []
    },
    {
        "id": 1000400,
        "thumbId": 1000400,
        "name": "Android #17",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000400_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type enemy DEF - 30%",
        "links": [
            35,
            31,
            4,
            110
        ],
        "categories": []
    },
    {
        "id": 1001260,
        "thumbId": 1001260,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001260_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 10% when HP is 50% or above",
        "links": [
            35,
            31,
            4,
            64,
            67
        ],
        "categories": []
    },
    {
        "id": 1000410,
        "thumbId": 1000410,
        "name": "Android #18",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000410_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            35,
            31,
            4,
            64,
            110
        ],
        "categories": []
    },
    {
        "id": 1001270,
        "thumbId": 1001270,
        "name": "Android #16",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001270_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP + 15%",
        "links": [
            35,
            38,
            17,
            1001
        ],
        "categories": []
    },
    {
        "id": 1000420,
        "thumbId": 1000420,
        "name": "Android #16",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000420_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type DEF + 20%",
        "links": [
            35,
            38,
            17
        ],
        "categories": []
    },
    {
        "id": 1001030,
        "thumbId": 1001030,
        "name": "Tao Pai Pai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001030_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL and INT Type ATK + 15%",
        "links": [
            5,
            16,
            32,
            18,
            46
        ],
        "categories": []
    },
    {
        "id": 1000440,
        "thumbId": 1000440,
        "name": "Tao Pai Pai",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000440_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type Ki +1",
        "links": [
            5,
            18,
            32,
            90
        ],
        "categories": []
    },
    {
        "id": 1000450,
        "thumbId": 1000450,
        "name": "Fusion Machine Pilaf",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000450_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP + 15%",
        "links": [
            38,
            18,
            8,
            86,
            90
        ],
        "categories": []
    },
    {
        "id": 1000460,
        "thumbId": 1000460,
        "name": "Shen",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000460_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            42,
            17,
            84
        ],
        "categories": []
    },
    {
        "id": 1000470,
        "thumbId": 1000470,
        "name": "Tambourine",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000470_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 15%",
        "links": [
            6,
            18,
            90
        ],
        "categories": []
    },
    {
        "id": 1000480,
        "thumbId": 1000480,
        "name": "Cymbal",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000480_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type ATK + 15%",
        "links": [
            6,
            90
        ],
        "categories": []
    },
    {
        "id": 1000490,
        "thumbId": 1000490,
        "name": "Drum",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000490_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK + 15%",
        "links": [
            6,
            14,
            90
        ],
        "categories": []
    },
    {
        "id": 1001290,
        "thumbId": 1001290,
        "name": "Dodoria",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001290_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type ATK + 15%",
        "links": [
            32,
            51,
            43,
            73
        ],
        "categories": []
    },
    {
        "id": 1000510,
        "thumbId": 1000510,
        "name": "Dodoria",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000510_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 15%",
        "links": [
            32,
            51,
            43,
            73
        ],
        "categories": []
    },
    {
        "id": 1001300,
        "thumbId": 1001300,
        "name": "Reacum",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001300_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 15%",
        "links": [
            41,
            18,
            52,
            42,
            94
        ],
        "categories": []
    },
    {
        "id": 1000520,
        "thumbId": 1000520,
        "name": "Reacum",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000520_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type ATK + 15%",
        "links": [
            41,
            52,
            42,
            94
        ],
        "categories": []
    },
    {
        "id": 1001670,
        "thumbId": 1001670,
        "name": "Ghourd",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001670_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "PHY Type DEF + 20%",
        "links": [
            41,
            13,
            18,
            8,
            94
        ],
        "categories": []
    },
    {
        "id": 1001310,
        "thumbId": 1001310,
        "name": "Ghourd",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001310_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type DEF + 15%",
        "links": [
            41,
            13,
            18,
            8,
            94
        ],
        "categories": []
    },
    {
        "id": 1000530,
        "thumbId": 1000530,
        "name": "Ghourd",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000530_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type DEF + 20%",
        "links": [
            41,
            13,
            18,
            8,
            94
        ],
        "categories": []
    },
    {
        "id": 1001320,
        "thumbId": 1001320,
        "name": "Barta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001320_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            41,
            53,
            54,
            94
        ],
        "categories": []
    },
    {
        "id": 1000540,
        "thumbId": 1000540,
        "name": "Barta",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000540_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            41,
            53,
            54,
            94
        ],
        "categories": []
    },
    {
        "id": 1001330,
        "thumbId": 1001330,
        "name": "Jiece",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001330_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK + 15%",
        "links": [
            41,
            54,
            94
        ],
        "categories": []
    },
    {
        "id": 1000550,
        "thumbId": 1000550,
        "name": "Jiece",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000550_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 15%",
        "links": [
            41,
            54,
            94
        ],
        "categories": []
    },
    {
        "id": 1001340,
        "thumbId": 1001340,
        "name": "Yajirobe",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001340_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type Ki +1",
        "links": [
            52,
            42,
            32,
            12
        ],
        "categories": []
    },
    {
        "id": 1000560,
        "thumbId": 1000560,
        "name": "Yajirobe",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000560_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type ATK + 15%",
        "links": [
            52,
            42,
            32,
            12
        ],
        "categories": []
    },
    {
        "id": 1001570,
        "thumbId": 1001570,
        "name": "Nail",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001570_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            48,
            39,
            15
        ],
        "categories": []
    },
    {
        "id": 1001350,
        "thumbId": 1001350,
        "name": "Nail",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001350_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            48,
            39,
            15
        ],
        "categories": []
    },
    {
        "id": 1000570,
        "thumbId": 1000570,
        "name": "Nail",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000570_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            48,
            39,
            15
        ],
        "categories": []
    },
    {
        "id": 1000641,
        "thumbId": 1000640,
        "name": "Mr. Satan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000640_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            27,
            44,
            15,
            10,
            20
        ],
        "categories": []
    },
    {
        "id": 1000580,
        "thumbId": 1000580,
        "name": "Mr. Satan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000580_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            27,
            44,
            15,
            10,
            20
        ],
        "categories": []
    },
    {
        "id": 1001370,
        "thumbId": 1001370,
        "name": "Videl",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001370_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            44,
            39,
            10,
            42,
            64
        ],
        "categories": []
    },
    {
        "id": 1000651,
        "thumbId": 1000650,
        "name": "Videl",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000650_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            44,
            39,
            10,
            42,
            64
        ],
        "categories": []
    },
    {
        "id": 1000590,
        "thumbId": 1000590,
        "name": "Videl",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000590_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type enemy DEF - 30%",
        "links": [
            44,
            39,
            10,
            2,
            64
        ],
        "categories": []
    },
    {
        "id": 3000241,
        "thumbId": 1000660,
        "name": "Cell Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000660_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            33,
            18,
            4
        ],
        "categories": []
    },
    {
        "id": 3000231,
        "thumbId": 1000660,
        "name": "Cell Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000660_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            33,
            18,
            4
        ],
        "categories": []
    },
    {
        "id": 3000221,
        "thumbId": 1000660,
        "name": "Cell Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000660_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            33,
            18,
            4
        ],
        "categories": []
    },
    {
        "id": 3000211,
        "thumbId": 1000660,
        "name": "Cell Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000660_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            33,
            18,
            4
        ],
        "categories": []
    },
    {
        "id": 1000661,
        "thumbId": 1000660,
        "name": "Cell Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000660_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            33,
            18,
            4
        ],
        "categories": []
    },
    {
        "id": 1000600,
        "thumbId": 1000600,
        "name": "Cell Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000600_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            33,
            18,
            4,
            47
        ],
        "categories": []
    },
    {
        "id": 1000671,
        "thumbId": 1000670,
        "name": "Spopovich",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000670_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            18,
            52,
            11
        ],
        "categories": []
    },
    {
        "id": 1000610,
        "thumbId": 1000610,
        "name": "Spopovich",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000610_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK + 15%",
        "links": [
            18,
            52,
            11,
            7
        ],
        "categories": []
    },
    {
        "id": 1000681,
        "thumbId": 1000680,
        "name": "Yamu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000680_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            11,
            7
        ],
        "categories": []
    },
    {
        "id": 1000620,
        "thumbId": 1000620,
        "name": "Yamu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000620_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type ATK + 15%",
        "links": [
            11,
            7,
            49
        ],
        "categories": []
    },
    {
        "id": 1002060,
        "thumbId": 1002060,
        "name": "Yakon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002060_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            11,
            73,
            60,
            77
        ],
        "categories": []
    },
    {
        "id": 1000691,
        "thumbId": 1000690,
        "name": "Yakon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000690_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            11
        ],
        "categories": []
    },
    {
        "id": 1000630,
        "thumbId": 1000630,
        "name": "Yakon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000630_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type ATK + 15%",
        "links": [
            11,
            73,
            60,
            77
        ],
        "categories": []
    },
    {
        "id": 1002070,
        "thumbId": 1002070,
        "name": "Pui Pui",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002070_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            11,
            73,
            77
        ],
        "categories": []
    },
    {
        "id": 1000701,
        "thumbId": 1000700,
        "name": "Pui Pui",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000700_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            11
        ],
        "categories": []
    },
    {
        "id": 1000711,
        "thumbId": 1000710,
        "name": "Appule",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000710_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            43
        ],
        "categories": []
    },
    {
        "id": 1001360,
        "thumbId": 1001360,
        "name": "Cui",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001360_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "INT Type ATK + 15%",
        "links": [
            32,
            43
        ],
        "categories": []
    },
    {
        "id": 1000721,
        "thumbId": 1000720,
        "name": "Cui",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000720_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            32,
            43
        ],
        "categories": []
    },
    {
        "id": 1000731,
        "thumbId": 1000730,
        "name": "Babidi's Fighter",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000730_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            11
        ],
        "categories": []
    },
    {
        "id": 1000741,
        "thumbId": 1000740,
        "name": "Pintar",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000740_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            20,
            14
        ],
        "categories": []
    },
    {
        "id": 1000751,
        "thumbId": 1000750,
        "name": "Jewel",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000750_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            20
        ],
        "categories": []
    },
    {
        "id": 1000761,
        "thumbId": 1000760,
        "name": "Killa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000760_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            20
        ],
        "categories": []
    },
    {
        "id": 1000771,
        "thumbId": 1000770,
        "name": "Pirate Robot",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000770_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            38
        ],
        "categories": []
    },
    {
        "id": 3000291,
        "thumbId": 1000780,
        "name": "Saibaiman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000780_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            42,
            21
        ],
        "categories": []
    },
    {
        "id": 3000281,
        "thumbId": 1000780,
        "name": "Saibaiman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000780_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            42,
            21
        ],
        "categories": []
    },
    {
        "id": 3000271,
        "thumbId": 1000780,
        "name": "Saibaiman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000780_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            42,
            21
        ],
        "categories": []
    },
    {
        "id": 3000261,
        "thumbId": 1000780,
        "name": "Saibaiman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000780_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            42,
            21
        ],
        "categories": []
    },
    {
        "id": 1000781,
        "thumbId": 1000780,
        "name": "Saibaiman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000780_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            42,
            21
        ],
        "categories": []
    },
    {
        "id": 3000601,
        "thumbId": 1000790,
        "name": "Freezer Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000790_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            43
        ],
        "categories": []
    },
    {
        "id": 3000591,
        "thumbId": 1000790,
        "name": "Freezer Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000790_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            43
        ],
        "categories": []
    },
    {
        "id": 3000581,
        "thumbId": 1000790,
        "name": "Freezer Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000790_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            43
        ],
        "categories": []
    },
    {
        "id": 3000561,
        "thumbId": 1000790,
        "name": "Freezer Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000790_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            43
        ],
        "categories": []
    },
    {
        "id": 1000791,
        "thumbId": 1000790,
        "name": "Freezer Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000790_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            43
        ],
        "categories": []
    },
    {
        "id": 3001151,
        "thumbId": 1000800,
        "name": "Red Ribbon Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000800_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            55
        ],
        "categories": []
    },
    {
        "id": 3001141,
        "thumbId": 1000800,
        "name": "Red Ribbon Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000800_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            55
        ],
        "categories": []
    },
    {
        "id": 3001131,
        "thumbId": 1000800,
        "name": "Red Ribbon Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000800_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            55
        ],
        "categories": []
    },
    {
        "id": 3001111,
        "thumbId": 1000800,
        "name": "Red Ribbon Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000800_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            55
        ],
        "categories": []
    },
    {
        "id": 1000801,
        "thumbId": 1000800,
        "name": "Red Ribbon Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000800_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            55
        ],
        "categories": []
    },
    {
        "id": 1001540,
        "thumbId": 1001540,
        "name": "Tora",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001540_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            22,
            62,
            63
        ],
        "categories": []
    },
    {
        "id": 1001550,
        "thumbId": 1001550,
        "name": "Borgos",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001550_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "STR Type ATK + 20%",
        "links": [
            22,
            62,
            63,
            42
        ],
        "categories": []
    },
    {
        "id": 1001560,
        "thumbId": 1001560,
        "name": "Shugesh",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001560_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            22,
            62,
            63,
            52
        ],
        "categories": []
    },
    {
        "id": 1002160,
        "thumbId": 1002160,
        "name": "Sorbet",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002160_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "ATK + 500 for all Types",
        "links": [
            8,
            43,
            72,
            73,
            68
        ],
        "categories": []
    },
    {
        "id": 1002170,
        "thumbId": 1002170,
        "name": "Tagoma",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002170_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP + 15%",
        "links": [
            43,
            72,
            73,
            68
        ],
        "categories": []
    },
    {
        "id": 1002180,
        "thumbId": 1002180,
        "name": "Krilin (Police Officer)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002180_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "PHY Type DEF + 25%",
        "links": [
            45,
            2,
            1,
            69,
            68
        ],
        "categories": []
    },
    {
        "id": 1002190,
        "thumbId": 1002190,
        "name": "Gohan (Teen)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002190_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "TEQ Type Ki +1",
        "links": [
            8,
            23,
            45,
            34,
            68
        ],
        "categories": []
    },
    {
        "id": 1002590,
        "thumbId": 1002590,
        "name": "Shisami",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002590_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "STR Type ATK + 20%",
        "links": [
            43,
            72,
            73,
            68
        ],
        "categories": []
    },
    {
        "id": 1002000,
        "thumbId": 1002000,
        "name": "Goten (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002000_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            4,
            23,
            47,
            1003
        ],
        "categories": []
    },
    {
        "id": 1002300,
        "thumbId": 1002300,
        "name": "Murasaki",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002300_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "AGL Type Ki +1",
        "links": [
            55,
            12,
            32,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 2000720,
        "thumbId": 2000720,
        "name": "Gokua",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000720_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            87,
            88,
            42,
            73
        ],
        "categories": []
    },
    {
        "id": 2000730,
        "thumbId": 2000730,
        "name": "Bido",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000730_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP +15%",
        "links": [
            87,
            88,
            52,
            73
        ],
        "categories": []
    },
    {
        "id": 2000740,
        "thumbId": 2000740,
        "name": "Bujin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_2000740_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type enemy ATK - 10%",
        "links": [
            87,
            88,
            13,
            73
        ],
        "categories": []
    },
    {
        "id": 1002541,
        "thumbId": 1002540,
        "name": "Android #14",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002540_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [],
        "categories": []
    },
    {
        "id": 1002540,
        "thumbId": 1002540,
        "name": "Android #14",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002540_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [],
        "categories": []
    },
    {
        "id": 1002551,
        "thumbId": 1002550,
        "name": "Android #15",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002550_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [],
        "categories": []
    },
    {
        "id": 1002550,
        "thumbId": 1002550,
        "name": "Android #15",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002550_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [],
        "categories": []
    },
    {
        "id": 1002500,
        "thumbId": 1002500,
        "name": "Doure",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002500_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            92,
            91,
            73,
            42
        ],
        "categories": []
    },
    {
        "id": 1002510,
        "thumbId": 1002510,
        "name": "Naise",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002510_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP +15%",
        "links": [
            92,
            91,
            73,
            37
        ],
        "categories": []
    },
    {
        "id": 1003880,
        "thumbId": 1003880,
        "name": "Bulma",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003880_thumb.png",
        "type": "INT",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "HP +15%",
        "links": [
            10,
            12,
            8,
            37,
            114
        ],
        "categories": []
    },
    {
        "id": 1003950,
        "thumbId": 1003950,
        "name": "Rasin",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003950_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            98,
            100,
            73,
            33
        ],
        "categories": []
    },
    {
        "id": 1003960,
        "thumbId": 1003960,
        "name": "Lakasei",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003960_thumb.png",
        "type": "TEC",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "TEQ Type Ki +1",
        "links": [
            98,
            100,
            73,
            33
        ],
        "categories": []
    },
    {
        "id": 1003150,
        "thumbId": 1003150,
        "name": "King Chappa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003150_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            16,
            27,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1002380,
        "thumbId": 1002380,
        "name": "Dracula Man",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002380_thumb.png",
        "type": "PUI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "Immune to negative effects",
        "links": [
            28,
            12,
            101,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1002370,
        "thumbId": 1002370,
        "name": "Bandages",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002370_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP + 15%",
        "links": [
            14,
            52,
            101,
            90,
            102
        ],
        "categories": []
    },
    {
        "id": 1003060,
        "thumbId": 1003060,
        "name": "Mr. Satan (GT)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003060_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            27,
            44,
            15,
            10,
            95
        ],
        "categories": []
    },
    {
        "id": 1002040,
        "thumbId": 1002040,
        "name": "Pan (Kid)",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1002040_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "SUPER",
        "leaderSkill": "HP + 15%",
        "links": [
            23,
            34,
            64,
            1003
        ],
        "categories": []
    },
    {
        "id": 1003650,
        "thumbId": 1003650,
        "name": "Cyclopian Guard",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1003650_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            38,
            18
        ],
        "categories": []
    },
    {
        "id": 1004670,
        "thumbId": 1004670,
        "name": "Staff Officer Black",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004670_thumb.png",
        "type": "END",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "Damage received reduced by 10%",
        "links": [
            102,
            90,
            55,
            8
        ],
        "categories": []
    },
    {
        "id": 1004660,
        "thumbId": 1004660,
        "name": "Giran",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1004660_thumb.png",
        "type": "AGI",
        "rarity": "R",
        "alignment": "EXTRÊME",
        "leaderSkill": "HP +15%",
        "links": [
            102,
            90,
            14,
            32
        ],
        "categories": []
    },
    {
        "id": 1001900,
        "thumbId": 1001900,
        "name": "Tenshinhan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001900_thumb.png",
        "type": "PUI",
        "rarity": "N",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            5,
            45
        ],
        "categories": []
    },
    {
        "id": 1001910,
        "thumbId": 1001910,
        "name": "Chaozu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001910_thumb.png",
        "type": "INT",
        "rarity": "N",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            5,
            45
        ],
        "categories": []
    },
    {
        "id": 1001890,
        "thumbId": 1001890,
        "name": "Yamcha",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1001890_thumb.png",
        "type": "TEC",
        "rarity": "N",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            45,
            36
        ],
        "categories": []
    },
    {
        "id": 1000640,
        "thumbId": 1000640,
        "name": "Mr. Satan",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000640_thumb.png",
        "type": "INT",
        "rarity": "N",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            27,
            44,
            15,
            10,
            20
        ],
        "categories": []
    },
    {
        "id": 1000650,
        "thumbId": 1000650,
        "name": "Videl",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000650_thumb.png",
        "type": "PUI",
        "rarity": "N",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            44,
            39,
            10,
            42,
            64
        ],
        "categories": []
    },
    {
        "id": 3000240,
        "thumbId": 1000660,
        "name": "Cell Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000660_thumb.png",
        "type": "PUI",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            33,
            18,
            4
        ],
        "categories": []
    },
    {
        "id": 3000230,
        "thumbId": 1000660,
        "name": "Cell Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000660_thumb.png",
        "type": "INT",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            33,
            18,
            4
        ],
        "categories": []
    },
    {
        "id": 3000220,
        "thumbId": 1000660,
        "name": "Cell Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000660_thumb.png",
        "type": "TEC",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            33,
            18,
            4
        ],
        "categories": []
    },
    {
        "id": 3000210,
        "thumbId": 1000660,
        "name": "Cell Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000660_thumb.png",
        "type": "AGI",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            33,
            18,
            4
        ],
        "categories": []
    },
    {
        "id": 1000660,
        "thumbId": 1000660,
        "name": "Cell Jr.",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000660_thumb.png",
        "type": "END",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            33,
            18,
            4
        ],
        "categories": []
    },
    {
        "id": 1000670,
        "thumbId": 1000670,
        "name": "Spopovich",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000670_thumb.png",
        "type": "END",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            18,
            52,
            11
        ],
        "categories": []
    },
    {
        "id": 1000680,
        "thumbId": 1000680,
        "name": "Yamu",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000680_thumb.png",
        "type": "INT",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            11,
            7
        ],
        "categories": []
    },
    {
        "id": 1000690,
        "thumbId": 1000690,
        "name": "Yakon",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000690_thumb.png",
        "type": "AGI",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            11
        ],
        "categories": []
    },
    {
        "id": 1000700,
        "thumbId": 1000700,
        "name": "Pui Pui",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000700_thumb.png",
        "type": "AGI",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            11
        ],
        "categories": []
    },
    {
        "id": 1000710,
        "thumbId": 1000710,
        "name": "Appule",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000710_thumb.png",
        "type": "PUI",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            43
        ],
        "categories": []
    },
    {
        "id": 1000720,
        "thumbId": 1000720,
        "name": "Cui",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000720_thumb.png",
        "type": "PUI",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            32,
            43
        ],
        "categories": []
    },
    {
        "id": 1000730,
        "thumbId": 1000730,
        "name": "Babidi's Fighter",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000730_thumb.png",
        "type": "INT",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            11
        ],
        "categories": []
    },
    {
        "id": 1000740,
        "thumbId": 1000740,
        "name": "Pintar",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000740_thumb.png",
        "type": "AGI",
        "rarity": "N",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            20,
            14
        ],
        "categories": []
    },
    {
        "id": 1000750,
        "thumbId": 1000750,
        "name": "Jewel",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000750_thumb.png",
        "type": "TEC",
        "rarity": "N",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            20
        ],
        "categories": []
    },
    {
        "id": 1000760,
        "thumbId": 1000760,
        "name": "Killa",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000760_thumb.png",
        "type": "PUI",
        "rarity": "N",
        "alignment": "SUPER",
        "leaderSkill": "None",
        "links": [
            20
        ],
        "categories": []
    },
    {
        "id": 1000770,
        "thumbId": 1000770,
        "name": "Pirate Robot",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000770_thumb.png",
        "type": "TEC",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            38
        ],
        "categories": []
    },
    {
        "id": 3000290,
        "thumbId": 1000780,
        "name": "Saibaiman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000780_thumb.png",
        "type": "PUI",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            42,
            21
        ],
        "categories": []
    },
    {
        "id": 3000280,
        "thumbId": 1000780,
        "name": "Saibaiman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000780_thumb.png",
        "type": "INT",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            42,
            21
        ],
        "categories": []
    },
    {
        "id": 3000270,
        "thumbId": 1000780,
        "name": "Saibaiman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000780_thumb.png",
        "type": "TEC",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            42,
            21
        ],
        "categories": []
    },
    {
        "id": 3000260,
        "thumbId": 1000780,
        "name": "Saibaiman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000780_thumb.png",
        "type": "AGI",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            42,
            21
        ],
        "categories": []
    },
    {
        "id": 1000780,
        "thumbId": 1000780,
        "name": "Saibaiman",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000780_thumb.png",
        "type": "END",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            42,
            21
        ],
        "categories": []
    },
    {
        "id": 3000600,
        "thumbId": 1000790,
        "name": "Freezer Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000790_thumb.png",
        "type": "END",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            43
        ],
        "categories": []
    },
    {
        "id": 3000590,
        "thumbId": 1000790,
        "name": "Freezer Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000790_thumb.png",
        "type": "PUI",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            43
        ],
        "categories": []
    },
    {
        "id": 3000580,
        "thumbId": 1000790,
        "name": "Freezer Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000790_thumb.png",
        "type": "INT",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            43
        ],
        "categories": []
    },
    {
        "id": 3000560,
        "thumbId": 1000790,
        "name": "Freezer Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000790_thumb.png",
        "type": "AGI",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            43
        ],
        "categories": []
    },
    {
        "id": 1000790,
        "thumbId": 1000790,
        "name": "Freezer Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000790_thumb.png",
        "type": "TEC",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            43
        ],
        "categories": []
    },
    {
        "id": 3001150,
        "thumbId": 1000800,
        "name": "Red Ribbon Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000800_thumb.png",
        "type": "END",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            55
        ],
        "categories": []
    },
    {
        "id": 3001140,
        "thumbId": 1000800,
        "name": "Red Ribbon Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000800_thumb.png",
        "type": "PUI",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            55
        ],
        "categories": []
    },
    {
        "id": 3001130,
        "thumbId": 1000800,
        "name": "Red Ribbon Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000800_thumb.png",
        "type": "INT",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            55
        ],
        "categories": []
    },
    {
        "id": 3001110,
        "thumbId": 1000800,
        "name": "Red Ribbon Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000800_thumb.png",
        "type": "AGI",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            55
        ],
        "categories": []
    },
    {
        "id": 1000800,
        "thumbId": 1000800,
        "name": "Red Ribbon Soldier",
        "img": "https://cdn.dokkan.fyi/assets/en/character/thumb/card_1000800_thumb.png",
        "type": "TEC",
        "rarity": "N",
        "alignment": "EXTRÊME",
        "leaderSkill": "None",
        "links": [
            55
        ],
        "categories": []
    }
];