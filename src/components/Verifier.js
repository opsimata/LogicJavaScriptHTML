function verify() {
    if (guessInput.value == guessTarget) {
        alert("Right guess!\nNailed it")
    } else {
        alert("Wrong guess!\n:((")
    }
    guessInput.value = "";
    guessInput.focus();
}