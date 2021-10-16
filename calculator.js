let resultsArray = [];
let continueLoop = true;

while (continueLoop) {
    // get the three values
    let xVal = prompt("Value of x");
    let operatorVal = prompt("Operator (+, -, %, /, *)");
    let yVal = prompt("Value of y");

    let result = 0;
    let resultString = "";

    // validate x, op, y
    if (isNaN(parseFloat(xVal)) || isNaN(parseFloat(yVal))) {
        result = NaN;
        resultString = "bad input number"
    } else {
        switch (operatorVal) {
            case "+":
                result = xVal + yVal;
                break;
            case "-":
                result = xVal - yVal;
                break;
            case "*":
                result = xVal * yVal;
                break;
            case "/":
                // check for divide by 0
                if (parseFloat(yVal) === 0) {
                    result = NaN;
                    resultString = "divide by 0: undefined";
                } else {
                    result = xVal / yVal;
                }
                break;
            case "%":
                result = xVal % yVal;
                break;
            default:
                result = NaN;
                resultString = "bad operator";
                break;
        }

        // set resultString value
        if (!(isNaN(result))) {
            resultString = result.toString();
            resultsArray.push(result);
        }
    }

    console.log("x value: " + xVal);
    console.log("operator: " + operatorVal);
    console.log("y value: " + yVal);
    console.log("result: " + resultString);

    // get confirmation if user wants to repeat
    continueLoop = confirm("Continue loop?");
}

console.log("Final results");
for (const result of resultsArray) {
    console.log(result)
}