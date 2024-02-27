//déclaration de variables pour les différentes statistiques du jeu

// déclaration par "let" initialisation de la variable "xp" avec une valeur numérique
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
//déclaration d'une variable avec un tableau avec plusieurs valeurs -> let variable = [ "un", "deux", "trois" ];
//déclaration d'une variable avec un tableau à une valeur.
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

//création de fonctions
//initialisation des boutons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goTown() {
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    // \" le backslash permet d'échapper les guillemets et d'autres symboles spéciaux
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}

function goStore() {
//innerText permet de changer, ici, le texte, de l'élément qui est sélectionné.
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    text.innerText = "You enter the store."
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
}

function goCave() {
    console.log("Going to cave.");
}

function fightDragon (){
    console.log("Fighting dragon.");
}

function buyHealth (){};

function buyWeapon (){};

// step 49