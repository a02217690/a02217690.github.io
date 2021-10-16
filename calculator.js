// create tables with ID (so we can reference it later
// https://stackoverflow.com/a/14644462
// create results table
let resultsTable = document.createElement('table');
resultsTable.setAttribute('id', 'resultsTable');
//
// let resultsHeader = resultsTable.createTHead();
// resultsHeaderRow = resultsHeader.insertRow();
//
// let th = document.createElement('th');
// th.innerText = "x";
// resultsHeaderRow.appendChild(th);
//
// th = document.createElement('th');
// th.innerText = "op";
// resultsHeaderRow.appendChild(th);
//
// th = document.createElement('th');
// th.innerText = "y";
// resultsHeaderRow.appendChild(th);
//
// th = document.createElement('th');
// th.innerText = "result";
// resultsHeaderRow.appendChild(th);

document.body.appendChild(resultsTable);

insertRow(resultsTable, ['x', 'op', 'y', 'result'], true);

let averageTable = document.createElement('table');
averageTable.setAttribute('id', 'averageTable');

//DELETE THIS
document.write("<table>");
document.write("<tr><th>header1</th><th>header2</th></tr>");
document.write("</table>");

// holds some stuff
let resultsArray = [];
let continueLoop = true;
// let continueLoop = false;

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
    // append to first table

    // get confirmation if user wants to repeat
    continueLoop = confirm("Continue loop?");
}

console.log("Final results");
for (const result of resultsArray) {
    console.log(result)
}

/**
 * This function adds a row into the table.
 *
 * @param table The input table
 * @param elements An array of elements
 * @param isHeader Boolean for whether this is a header or not
 */
function insertRow(table, elements, isHeader) {

    // defines the table row and inserts it into thead or tbody
    let row;
    if (isHeader) {
        row = resultsTable.createTHead().insertRow();
    } else {
        row = table.insertRow();
    }
    let tagName = isHeader ? 'th' : 'td';

    // for each element, add it to the row
    for (elem of elements) {
        if (isHeader)
        cell = document.createElement(tagName);
        cell.innerText = elem;
        row.appendChild(cell);
    }
}