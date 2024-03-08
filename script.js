//déclaration de variables pour les différentes statistiques du jeu

// déclaration par "let" initialisation de la variable "xp" avec une valeur numérique
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
//déclaration d'une variable avec un tableau avec plusieurs éléments -> let variable = [ "un", "deux", "trois" ];
//déclaration d'une variable avec un tableau à un seul élément.
let inventory = ["stick"];

//déclaration de variables "button"

//const est le mot d'une bonne pratique pour signifier que la valeur de cette variable ne changera pas.
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

//déclaration de variables "xpText", "healthText", "goldText", "monsterStats", "monsterName", "text"
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const text = document.querySelector("#text");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
    {
    name: "stick",
    power: 5
    },
    {
    name: "dagger",
    power: 30
    },
    {
    name: "claw hammer",
    power: 50
    },
    {
    name: "sword",
    power: 100
    }
];

//tableau monsters
const monsters = [{
    name:"slime",
    level:2,
    health:15
},
{
    name:"fanged beast",
    level:8,
    health:60
},
{
    name:"dragon",
    level:20,
    health:300
}];

//contient un tableau avec un objet présenté entre accolades = [{}]
//un objet est présenté entre accolade
//une chaîne de texte est présenté entre guillemets
const locations = [
    //valeurs de la fonction "goStore", premier objet
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    //valeurs de la fonction "goTown", second objet
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    //valeurs de la fonction "goCave", troisième objet
    {
        name: "cave",
        "button text":["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions":[fightSlime, fightBeast, goTown],
        text:"You enter the cave. You see some monsters."
    },
    //valeurs de la fonction "fighting", quatrième objet
    {
        name:"fight",
        "button text":["Attack","Dodge","Run"],
        "button functions":[attack, dodge, goTown],
        text:"You are fighting a monster."
    }
];

//création de fonctions
//initialisation des boutons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){

    //Elements propres à "Town Square"
    //innerText est une propriété permet de changer, ici, le texte, de l'élément qui est sélectionné.
    // le texte des boutons est pris dans le tableau "button text"
    // la fonction des boutons est pris dans le tableau "button functions"
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    // utilisation de la notation point pour la récupération du texte
    text.innerText = location.text;
    
    //Elements propres au "Store"
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store.";
}

function goTown() {
    //appel de la fonction "update"
    //argument de la fonction mis entre parenthèses, il s'agit du nom du tableau défini plus haut.
    //Le premier objet [0] du tableau location est appelé.
    update(locations[0]);
}

    function goStore() {
    //appel de la fonction "update"
    //argument de la fonction mis entre parenthèses, il s'agit du nom du tableau défini plus haut.
    //L'objet [1] du tableau location est appelé.
    update(locations[1]);
}

function goCave() {
    //appel de la fonction "update"
    //argument de la fonction mis entre parenthèses, il s'agit du nom du tableau défini plus haut.
    //L'objet [2] du tableau location est appelé.
    update(locations[2]);
}

function buyHealth (){
    //condition if pour déterminer si l'action est possible
    if(gold >= 10) 
    {
        //code de l'action du joueur incrémentation et décrémentation
        //incrémentation avec syntaxe déployée entièrement x= x +10
        //incrémentation avec syntaxe contractée x += 10 (affectation après addition). Peut fonctionner aussi avec une addition de chaines de caractères
        //décrémentation avec syntaxe contractée x -= 10 (affectation après soustraction)
        gold -= 10;
        health += 10;
        //affichage des valeurs de gold et health sur l'écran de jeu
        goldText.innerText = gold;
        healthText.innerText = health;
    };
    // else pour informer le joueur qu'il ne remplit pas les conditions requises pour l'action
    else
    {
        text.innerText = "You do not have enough gold to buy health.";
    }
}

function buyWeapon() {
    //vérification que le nombre d'armes acquises par le joueur est inférieur au nombre maximum d'armes dans le tableau weapons
    if (currentWeapon < weapons.length) {
        if (gold >= 30) {
            gold -= 30;
            //incrémente le numéro correspondant à l'élément arme de 1
            currentWeapon++;
            goldText.innerText = gold;
            //récupère le nom de l'élément arme dans le tableau weapons
            let newWeapon = weapons[currentWeapon].name;
            //introduit le nom de l'arme dans la phrase grâce à la variable newWeapon
            text.innerText = "You now have a " + newWeapon + ".";
            //permet d'ajouter un autre élément représenté par la variable "newWeapon" dans le tableau "inventory"
            inventory.push(newWeapon);
            //le += permet d'assigner du texte au précédent text.innerText après addition au lieu de l'écraser.
            //permet d'afficher le contenu du tableau "inventory avec sa concaténation à la chaîne de texte"
            text.innerText += " In your inventory you have: " + inventory;
        } 
        // si la quantité d'or possédée est insuffisante
        else {
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    }
    // si la quantité d'armes possédée est déjà maximale
    else {
    text.innerText = "You already have the most powerful weapon!";
    //donne la possibilité de vendre les armes acquises
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon
        }
}

function sellWeapon() {
    if (inventory.length > 1) {
        if(gold=15){
        //incrémentation de 15 à l'or lors de la revente d'une arme
        goldText.innerText = gold += 15
        // Retire et récupère le premier élément du tableau d'inventaire, correspondant à l'arme vendue.
        let currentWeapon = inventory.shift();
        //indique l'arme vendue
        text.innerText = "You sold a " + currentWeapon + ".";
        }
        else {
            //en cas d'une seule arme, aucune action
            (inventory.length=1)
            text.innerText = "Don't sell your only weapon!"
        }
    }
}

function fightSlime() {
    //utilisation de la variable. Si elle a la valeur 0
    (fighting = 0)
    //appel de la fonction goFight
    goFight()
}

function fightBeast() {
(fighting = 1)
    goFight();
}

function fightDragon() {
(fighting = 2)
    goFight();
}

//fonction pour gérer la logique de combat qui est commune à tous les montres
function goFight() {
    //L'objet [3] du tableau location est appelé.
    update(locations[3]);
    //la variable monsterHealth reçoit la valeur de santé du monstre (fighting prends la valeur du monstre affronté)
    monsterHealth=monsters[fighting].health;
}

function attack () {};

function dodge () {};
// step 114