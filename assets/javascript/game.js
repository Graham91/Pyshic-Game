   
    var alfabet = ["c","d","b", "a", "e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"]; 
    computerChoice = alfabet[Math.floor(Math.random() * alfabet.length)];
    console.log(computerChoice) 
    var totalLetter = 0;
   
   document.onkeyup = function(event) {
   var humanChoice = event.key.toLowerCase();
   console.log(humanChoice)       
   
   if (totalLetter < 9){
   totalLetter++;
   console.log(totalLetter)
   }
   if (totalLetter === 9){
   console.log("you lose")
   }
   if (humanChoice === computerChoice){
   console.log("you win")
}
   }