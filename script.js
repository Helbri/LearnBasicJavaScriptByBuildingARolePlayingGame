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
        name: "fight",
        "button text":["Attack","Dodge","Run"],
        "button functions":[attack, dodge, goTown],
        text:"You are fighting a monster."
    },
    //valeurs de la fonction "kill monster", cinquième objet
    {
        name: "kill monster",
        "button text":["Go to town square","Go to town square","Go to town square"],
        "button functions":[goTown, goTown, easterEgg],
        //pour mettre le texte Arg: entre guillemets, il est nécessaire d'enrober le reste du texte entre apostrophes.
        text:'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
    //valeurs de la fonction "lose", sixième objet
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        //le code du &#x2620 est destiné a être mis à jour pour afficher correctement le texte d'émoticône
        text: "You die. &#x2620;"
    },
    //valeurs de la fonction "win", septième objet
    {
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
    },

    //valeurs de la fonction "easter egg", huitième objet
    {
        name:"easter egg",
        "button text": ["2","8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, goTown],
        text:"You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
    }
];

//création de fonctions
//initialisation des boutons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){

    //style associé au monsterStats pour son affichage pour que l'id monsterStats ne soit pas affiché.
    monsterStats.style.display = "none";

    //Elements propres à "Town Square"
    //innerText est une propriété permet de changer, ici, le texte, de l'élément qui est sélectionné.
    //changement de innerText en innerHTML. innerHTML récupère ou définit la syntaxe HTML décrivant les descendants de l'élément.
    // le texte des boutons est pris dans le tableau "button text"
    // la fonction des boutons est pris dans le tableau "button functions"
    button1.innerHTML = location["button text"][0];
    button2.innerHTML = location["button text"][1];
    button3.innerHTML = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    // utilisation de la notation point pour la récupération du texte
    text.innerHTML = location.text;
    
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
    //argument de la fonction est mis entre parenthèses, il s'agit du nom du tableau défini plus haut.
    //Le premier objet [0] du tableau location est appelé.
    update(locations[0]);
}

    function goStore() {
    //appel de la fonction "update"
    //argument de la fonction est mis entre parenthèses, il s'agit du nom du tableau défini plus haut.
    //L'objet [1] du tableau location est appelé.
    update(locations[1]);
}

function goCave() {
    //appel de la fonction "update"
    //argument de la fonction est mis entre parenthèses, il s'agit du nom du tableau défini plus haut.
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
    }
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
    //la constante monsterStats est créée dans la fonction goFight, et a pour assignation l'id monsterStats du fichier index
    const monsterStats = document.querySelector('#monsterStats');
    //le style de monsterStats mis par défaut sur display none dans la feuille de style est réglé ici sur block
    monsterStats.style.display = 'block'
    //le nom du monstre combattu est assigné à la variable monsterName
    monsterName.innerText = monsters[fighting].name;
    //la santé du monstre en cours est assignée à la constante monsterHealthText variable
    monsterHealthText.innerText = monsterHealth;
}

function attack () {
    //on assigne au text la valeur de la phrase avec le nom du monstre en cours en le cherchant dans le tableau
    text.innerText = "The "+ monsters[fighting].name +" attacks.";
    //on ajoute après la précédente chaîne une nouvelle qui contient le nom de l'arme utilisée
    text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
    //la santé est égale à la santé moins la valeur de la fonction getMonsterAttackValue et transmet le niveau du monstre comme argument
    health -= getMonsterAttackValue(monsters[fighting].level);
    //déclaration if prenant comme condition l'appel de la fonction isMonsterHit
    if(isMonsterHit()){
        //la santé du monstre prend la valeur de: 
        //sa santé moins le dégât de l'arme à laquelle on a rajouté un nombre aléatoire entier compris entre 1 et l'exp 
        //Math.random donne un chiffre entre 0 et 0 avec un nombre infini de 9
        //ce nombre est multiplié par l'exp
        //le nombre multiplié par l'exp est ramené à son entier inférieur le plus proche, donnant ainsi des entiers entre 0 et le nombre d'exp possible
        //pour que la valeur enlevée à monsterHealth ne soit pas nulle, on rajoute 1
        monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;}
    else {
        //autrement le texte " You miss." est ajouté au text.innerText est ajouté
        text.innerText += " You miss."
    }
    //le texte healthText affiche ce qui est dans la variable health
    healthText.innerText = health;
    //le texte monsterHealthText affiche ce qui est dans la variable monsterHealth
    monsterHealthText.innerText = monsterHealth;
    //on vérifie si la santé est inférieure ou égale à 0, dans quel cas, on appelle la fonction lose indiquant la défaite du joueur
    if(health<=0){
        lose();
    }
    //on vérifie si la santé du monstre est inférieure ou égale à 0, dans quel cas, on appelle la fonction defeatMonster indiquant la défaite du monstre
    else if (monsterHealth <= 0) {
        defeatMonster();{
            if(fighting === 2){
                winGame()
            }
            else{
                defeatMonster();
            }
        }
    
    }
    //sur chaque attaque,il y a un risque l'arme du joueur casse.
    //la condition de if est si le résultat de Math.random est inférieur ou égale à 0.1
    //et si la longueur de l'inventaire est différente de 1
    //la méthode pop permet d'effacer dans l'inventaire la dernière arme utilisée et de l'afficher
    if (Math.random() <= .1 && inventory.length !== 1) {
        text.innerText += " Your "+inventory.pop()+" breaks.";
        //la valeur de currentWeapon est décrémentée
        currentWeapon--;
    }
}

//fonction getMonsterAttackValue avec "level" mis en paramètre
function getMonsterAttackValue (level) {
    //définit l'attaque du monstre à cinq fois son niveau moins un nombre aléatoire compris entre 0 et l'xp du joueur
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    //enregistrement de la valeur hit sur la console pour l'utiliser lors du débogage.
    console.log(hit);
    //opérateur ternaire qui renvoie la valeur de hit seulement si elle est supérieure à 0
    return hit > 0 ? hit : 0
};

//Cette fonction va retourner une valeur booléenne qui sera a utiliser dans l'instruction if de la fonction attack
//Elle retourne une comparaison sur ce que le chiffre aléatoire entre 0 inclu et 1 exclu puisse être supérieur à 0.2
//ou si la santé du joueur est inférieure à 20.
function isMonsterHit (){
    return Math.random()>.2 || health < 20;
}

function dodge (){
    //le texte indique que l'on esquive l'attaque du monstre avec le nom du monstre combattu.
    text.innerText = "You dodge the attack from the "  + monsters[fighting].name ;
};

function defeatMonster(){
    //on ajoute à l'or la valeur du niveau du monstre combattu multiplié par 6.7 que l'on arrondi à son entier inférieur le plus proche
    gold+= Math.floor(monsters[fighting].level * 6.7);
    // on attribue à l'exp sa valeur plus le niveau du monstre vaincu
    xp += monsters[fighting].level;
    //on attribue respectivement à goldText et xpText les valeurs obtenues pour gold et xp 
    goldText.innerText = gold;
    xpText.innerText = xp;
    //appelle la fonction update et met à jour avec les données de l'index[4] du tableau locations
    update(locations[4]);
};

function lose(){
    //appelle la fonction update et met à jour avec les données de l'index[5] du tableau locations
    update(locations[5]);
};

function winGame (){
    //appelle la fonction update et met à jour avec les données de l'index[6] du tableau locations
    update (locations[6])
}

function restart(){
    //on assigne les données de démarrage aux différentes variables
    xp=0;
    health=100;
    gold=50;
    currentWeapon=0;
    inventory=["stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown()
    };

//fonction pour un élément caché
function easterEgg() {
    update(locations[7]);
}


//les fonctions pick, pickTwo et pickEight sont utiles pour l'objet easter Egg
//création de la fonction pick
//elle sera appelée dans plusieurs fonctions (pickTwo, pickEight)
function pick(guess) {
    //initialisation de la constante numbers avec création d'un tableau vide
    const numbers=[];
    //une boucle while est créée, elle tournera tant que les conditions seront respectées
    while (numbers.length <10) {
        //on ajoute un nombre dans le tableau "numbers" avec la méthode push
        numbers.push (Math.floor(Math.random()*11))
    }
    //on affiche un text pour afficher le nombre compris dans le tableau
    // le caractère d'échappement \n permettra de faire apparaître la prochaine partie de texte insérée sur une autre ligne
    text.innerText = "You picked "+ guess +". Here are the random numbers:\n"

    //boucle for donné en exemple par le site. Syntaxe: for (a; b; c). a->initialisation de l'expression, b->condition, c->expression finale
    //ici on rajoute le chiffre sorti à la chaîne de texte précédente ainsi qu'un saut de ligne
    for (let i = 0; i < 10; i++) {
        text.innerText += numbers[i] + "\n";
    }

    //la méthode includes est utilisée. Elle détermine si le tableau contient un élément et va retourner soit vrai soit faux.
    if (numbers.includes(guess)) {
        //du texte est ajouté au précédent
        text.innerText += "Right! You win 20 gold!"
        //20 unités d'or sont ajouté à la variable gold
        gold += 20;
        //goldText.innerText est mis à jour
        goldText.innerText = gold
    }
    else {
        //du texte est ajouté au précédent
        text.innerText += "Wrong! You lose 10 health!";
        //10 unités de santé sont enlevées à la variable health
        health -= 10;
        //healthText.innerText est mis à jour
        healthText.innerText = health;
        //si la vie du joueur est inférieure ou égale à 0, le joueur a perdu. La fonction lose est appelée
        if(health<=0){
            lose()
    }
};

//la fonction pick a été appelée dans les fonctions pickTwo et pickEight. Le 2 et le 8 ont été passé en arguments de pick en fonction du nom de la fonction pick
function pickTwo(){
    pick(2)
};

function pickEight(){
    pick(8)
};


// step 174