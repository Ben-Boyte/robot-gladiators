var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
  
}



var fight = function(enemyName) {
 
  while(enemyHealth > 0 && enemyHealth > 0){

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney)
      break;
    }
  }

  if (promptFight === "fight" || promptFight === "FIGHT") {
 
  enemyHealth = enemyHealth - playerAttack;

console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
  playerMoney = playerMoney + 20;
  // leave while() loop since enemy is dead
  break;
  }

else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

  playerHealth = playerHealth - enemyAttack;

  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    window.alert("You have lost your robot in battle! Game Over!");
  break;

  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
}
  }
};

for(var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
} 
};