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
    while (playerHealth > 0 && enemyHealth > 0) {

        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // FIGHT FUNCTION CODE STARTS HERE
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "Skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console to check whether it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health points remaining.");
        // Alert players the result of their attack
        window.alert(playerName + " attacked " + enemyName + ".");

        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;
            // Log a resulting messahe to the console to check whether it worked.
            console.log("Player money reward credited +20 points = " + playerMoney);
            // leave while() loop since enemy is dead
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health points left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console to check whether it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health points remaining.");
        // Alert players the result of the attack they suffered
        window.alert(enemyName + " attacked " + playerName + ".");

        // Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health points left.");
        }
    }   // end of while loop
};  // end of fight function

// FIGHT EACH ENEMY-ROBOT BY LOOPING OVER THEM AND FIGHTING THEM ONCE AT A TIME
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
        // reset enemyHealth before starting new fight
        enemyHealth = 50;
        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;
        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    }
    // if player isn't alive, stop the game
    else {
        window.alert('You have lost your robot in battle! Game Over!');
        break;
    }
};