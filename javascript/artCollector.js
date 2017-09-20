// DOM loaded.
$(document).ready(function() {
  var computerGenNum = randomNumGen();
 
 // Target: Random number generator, between 19-120.
  function randomNumGen() {
    return Math.floor(Math.random() * 102) + 19;
  }
  
//Runs computer generator.
  function runGen() {
    computerGenNum = randomNumGen();
    $("#comGenDisplay").text(computerGenNum); 
  };
  runGen();
});
