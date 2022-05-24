// THIS CREATES A FUNCTION NAMED "FIGHT"

function fight() {
    // THIS WILL PROMPT THE USER TO ENTER A NAME AND WILL STORE IT
    var playerName = window.prompt("What is your robot's name?");
    // THIS WILL LOG A MESSAGE TO THE DEVELOPER IN THE CONSOLE
    console.log("Player's robot " + playerName + " is being set...");
    // THESE WILL GIVE INITIAL GREETINGS TO THE PLAYERS
    window.alert(`Welcome ${playerName} !`);
    // THIS IS ANOTHER SYNTAX TO DO THE SAME AS THE PREVIOUS ALERT
    window.alert("Your robot " + playerName + " is good to go!");
    window.alert("The fight has begun!");
}

fight();