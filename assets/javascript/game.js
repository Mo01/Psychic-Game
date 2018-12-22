
window.onload = function what() {
    var win = 0;
    document.getElementById("win").innerHTML = "win =  " + win;
    var losse = 0;
    document.getElementById("losse").innerHTML = "losse = " + losse;
    var geuessleft = 9;
    document.getElementById("geuessleft").innerHTML = "geuessleft = " + geuessleft;
    var correctword = [];
    document.getElementById("correctword").innerHTML = "correctword = " + correctword;

    var wordlist = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    

    
    document.onkeypress = function (enterkey) {
        var userGuess = enterkey.key;
        document.getElementById("userGuess").innerHTML = "userGuess = " + userGuess;
        var compick = wordlist[Math.floor(Math.random() * wordlist.length)];
       if (geuessleft !== 0) {
            if (userGuess !== compick) {
                geuessleft--;
            }
            else if (userGuess === compick) {
                correctword.push(compick);
                win++;
                geuessleft = 9;
            }

        }
        else if (geuessleft == 0) {
            geuessleft = 9;
            losse++;

        }

        
        document.getElementById("win").innerHTML = "win =  " + win;

        document.getElementById("losse").innerHTML = "losse = " + losse;

        document.getElementById("geuessleft").innerHTML = "geuessleft = " + geuessleft;
        document.getElementById("correctword").innerHTML = "correctword = " + correctword;
        
    }
}

