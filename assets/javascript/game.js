   
    var alfabet = ["c","d","b", "a", "e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"]; 
    computerChoice = alfabet[Math.floor(Math.random() * alfabet.length)];
   console.log(computerChoice) 
   var totalLetter = 0;
   var winCount = 0;
   var lossCount = 0;
   var humanChoiceArray = [];


   document.onkeyup = function(event) {
   var humanChoice = event.key.toLowerCase();
   
   if (totalLetter < 9){
   totalLetter++;
   var guessCount = 9;
   guessCount= guessCount - totalLetter;
   console.log(totalLetter);
   document.getElementById("guessleft").innerHTML ="Guesses Left: " + guessCount;
   humanChoiceArray.push(humanChoice); 
   document.getElementById("previousGuess").innerHTML ="Your Guesses so far:" + humanChoiceArray;     
   

}
   if (totalLetter === 9){
   console.log("you lose")
   lossCount++;
   document.getElementById("losses").innerHTML ="Losses: " + lossCount;
   document.getElementById("previousGuess").innerHTML ="Your Guesses so far:";
   humanChoiceArray = [];
   totalLetter = 0;
   document.getElementById("guessleft").innerHTML ="Guesses Left: " + 9;
   }
   if (humanChoice === computerChoice){
   console.log("you win")

   
   winCount++;
   document.getElementById("wins").innerHTML ="Wins: " + winCount;
   document.getElementById("previousGuess").innerHTML ="Your Guesses so far:";
   humanChoiceArray = [];
   totalLetter = 0;
   document.getElementById("guessleft").innerHTML ="Guesses Left: " + 9;
}
   }