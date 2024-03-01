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

//contient un tableau avec un objet présenté entre accolades = [{}]
//un objet est présenté entre accolade
//une chaîne de texte est présenté entre guillemets
const locations = [
    //valeurs de la fonction "goStore"
    {
        name: "town square",
        "button text": ["Go to store","Go to cave","Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    //valeurs de la fonction "goTown"
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)","Buy weapon (30 gold)","Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    }
];

//création de fonctions
//initialisation des boutons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){

    //Elements propres à "Town Square"
    //innerText permet de changer, ici, le texte, de l'élément qui est sélectionné.
    // le texte des boutons est pris dans le tableau "button text"
    // la fonction des boutons est pris dans le tableau "button functions"
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    // \" le backslash permet d'échapper les guillemets et d'autres symboles spéciaux
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
    
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
    //Le premier objet [0] est appelé.
    update(locations[0]);
    }

function goStore() {
    }

function goCave() {
    console.log("Going to cave.");
}

function fightDragon (){
    console.log("Fighting dragon.");
}

function buyHealth (){};

function buyWeapon (){};

// step 66