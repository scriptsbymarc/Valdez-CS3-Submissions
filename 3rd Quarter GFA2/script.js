function myCalc(operation){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerHTML = "Invalid operation";
    }
    else {
        switch (operation) {
            case "add":
                ansType = "sum";
                ansFin = Math.round((num1 + num2)*10000)/10000
                break;
            case "subtract":
                ansType = "difference";
                ansFin = Math.round((num1 - num2)*10000)/10000
                break;
            case "multiply":
                ansType = "product";
                ansFin = Math.round((num1 * num2)*10000)/10000
                break;
            case "divide":
                ansType = "quotient";
                ansFin = Math.round((num1 / num2)*10000)/10000
                break;
            case "modulus":
                ansType = "remainder";
                ansFin = Math.round((num1 % num2)*10000)/10000
                break;
        }
        return textPrint(ansType, num1, num2, ansFin);
    }
    
}

function textPrint(op, num1, num2, ans){
    document.getElementById("output").innerHTML = "The " + op + " of " + num1 + " and " + num2 + " is " + ans;
}