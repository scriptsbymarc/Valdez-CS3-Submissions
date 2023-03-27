var num1 = Math.floor(Math.random()*21);
var num2 = Math.floor(Math.random()*21);
var num3 = Math.floor(Math.random()*21);

function displayValue() {
    document.getElementById("bkkcount").innerHTML = num1;
    document.getElementById("mnlcount").innerHTML = num2;
    document.getElementById("sgpcount").innerHTML = num3;
}

function genAlphabet() {
    const alphabet = 'A'.charCodeAt(0);
    var letter = String.fromCharCode(alphabet + num1 - 1);
    if (num1 == 0) {
        document.getElementById("setlist").innerHTML = "The first song played from all the setlists begins with the letter: A"; 
    }
    else if (num1 > 0 && num1 <= 20) {
        document.getElementById("setlist").innerHTML = "The first song played from all the setlists begins with the letter: " + letter;
    }
}

function genTime() {
    var time = num2 * num3;
    var timeHr = Math.floor(time/60);
    var timeMin = time%60;
    document.getElementById("duration").innerHTML = "The singer's concert show in Manila lasted for (" + time + " min) " + timeHr + "hr " + timeMin + "min";
}

function compareValue() {
    var rank1 = 0;
    var rank2 = 0;
    var rank3 = 0;
    
    if (num1 >= num2) {
        rank1++;
    }
    if (num1 >= num3) {
        rank1++;
    }
    if (num2 >= num1) {
        rank2++;
    }
    if (num2 >= num3) {
        rank2++;
    }
    if (num3 >= num1) {
        rank3++;
    }
    if (num3 >= num2) {
        rank3++;
    }

    if (rank1 == 2){
        if (rank2 == 2){
            if (rank3 == 2) {
                document.getElementById("largestcrowd").innerHTML = "The concert shows with the largest crowds were Bangkok (" + num1 + " 000), Manila (" + num2 + " 000), and Singapore (" + num3 + " 000)"
            }
            else {
                document.getElementById("largestcrowd").innerHTML = "The concert shows with the largest crowds were Bangkok (" + num1 + " 000) and Manila (" + num2 + " 000)"
            }
        }
        else if (rank3 == 2){
            document.getElementById("largestcrowd").innerHTML = "The concert shows with the largest crowds were Bangkok (" + num1 + " 000) and Singapore (" + num3 + " 000)"
        }
        else {
            document.getElementById("largestcrowd").innerHTML = "The concert show with the largest crowd was Bangkok (" + num1 + " 000)"
        }
    }
    else if (rank2 == 2){
        if (rank3 == 2) {
            document.getElementById("largestcrowd").innerHTML = "The concert shows with the largest crowds were Manila (" + num2 + " 000) and Singapore (" + num3 + " 000)"
        }
        else {
            document.getElementById("largestcrowd").innerHTML = "The concert show with the largest crowd was Manila (" + num2 + " 000)"
        }
    }
    else if (rank3 == 2){
        document.getElementById("largestcrowd").innerHTML = "The concert show with the largest crowd was Singapore (" + num3 + " 000)"
    }
}