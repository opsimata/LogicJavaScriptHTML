function verify() {
  var rightGuess = false;

  for (let position = 0; position < guessTarget.length; position++) {
    if (guessInput.value == guessTarget[position]) {
      alert("Right guess!\nNailed it! :))");
      rightGuess = true;
      break;
    }
  }
  if (rightGuess == false) {
    alert("Wrong guess!\nBetter luck next time! :((");
  }
  guessInput.value = "";
  guessInput.focus();
}
