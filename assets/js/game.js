// Game States

// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot

// "LOSE" - Player robot's health is zero or less


// Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");

// THIS STORES A STRING
var playerName = window.prompt("What is yout robots's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

// THIS IS AN ARRAY THAT CONTAINS STRINGS DATA TYPE TO STORE ENEMY NAMES
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// THIS IS A NUMBER DATA TYPE TO STORE ENEMY'S STATS
var enemyHealth = 50;
var enemyAttack = 12;


// THIS CREATES A FUNCTION NAMED "FIGHT"
var fight = function (enemyName) {

    // repeat and execute as long as the enemy-robot is alive
    while (enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // FIGHT FUNCTION CODE STARTS HERE
        // if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health points remaining.");
            // Alert players the result of their attack
            window.alert(playerName + " attacked " + enemyName + ".");

            // Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health points left.");
            }

            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;

            // Log a resulting message to the console so we know that it worked.
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health points remaining.");
            // Alert players the result of the attack they suffered
            window.alert(enemyName + " attacked " + playerName + ".");

            // Check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health points left.");
            }

            // if player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract mmoney from playerMoney for skipping
                playerMoney = playerMoney - 2;
            }
            // if no (false), ask question again by running fight() again
            else {
                fight();
            }
        } else {
            window.alert("You need to choose a valid option. Try again!");
            fight();
        }
    }

};

// THIS FOR LOOP WILL CALL THE FIGHT FUNCTION AND LOOP THROUGH ALL THE ENEMY NAMES DURING BATTLE ROUNDS
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}