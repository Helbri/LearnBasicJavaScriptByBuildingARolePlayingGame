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
// step 33