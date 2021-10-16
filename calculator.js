// create tables with ID (so we can reference it later
// create results table
let resultsTable = document.createElement('table');
resultsTable.setAttribute('id', 'resultsTable');
document.body.appendChild(resultsTable);

// insert a header row into the table
insertRow(resultsTable, ['x', 'op', 'y', 'result'], true);

// DELETE THIS
// document.write("<table>");
// document.write("<tr><th>header1</th><th>header2</th></tr>");
// document.write("</table>");

// holds some stuff
let resultsArray = [];
let continueLoop = true;

// DELETE THIS
// let continueLoop = false;

while (continueLoop) {
    // get the three values
    let xRaw = prompt("Value of x");
    let xVal = parseFloat(xRaw);
    let operatorVal = prompt("Operator (+, -, %, /, *)");
    let yRaw = prompt("Value of y");
    let yVal = parseFloat(yRaw);

    let result = 0;
    let resultString = "";

    // validate x, op, y
    if (isNaN((xVal)) || isNaN(yVal)) {
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
                if (yVal === 0) {
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

    console.log("x value: " + xRaw);
    console.log("operator: " + operatorVal);
    console.log("y value: " + yRaw);
    console.log("result: " + resultString);

    // append to first table
    insertRow(resultsTable, [xRaw, operatorVal, yRaw, resultString], false);

    // get confirmation if user wants to repeat
    continueLoop = confirm("Continue loop?");
}

// create tables of min/max/average
let averageTable = document.createElement('table');
averageTable.setAttribute('id', 'averageTable');
document.body.appendChild(averageTable);

insertRow(averageTable, ['Min', "Max", "Average", "Total"], true);

// only calculate these if we have at least one result
if (resultsArray.length > 0) {
    // calculate min, max, total, average
    let min = Math.min(...resultsArray);    // spread syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    let max = Math.max(...resultsArray);
    let total = 0;
    for (const result of resultsArray) {
        total += result;
    }
    let average = total / resultsArray.length;

    insertRow(averageTable, [min, max, average, total]);
}


/**
 * This function adds a row into the table.
 *
 * @param table The input table
 * @param elements An array of elements
 * @param isHeader Boolean for whether this is a header or not
 */
function insertRow(table, elements, isHeader=false) {
    // inserts tTHead and TBody if needed
    if (table.tHead == null) {
        table.createTHead();
    }
    if (table.tBodies.length === 0) {
        table.createTBody();
    }

    // defines the table row and inserts it into thead or tbody
    let row;
    if (isHeader) {
        row = table.tHead.insertRow();
    } else {
        row = table.tBodies[0].insertRow();
    }

    let tagName = isHeader ? 'th' : 'td';

    // for each element, add it to the row
    for (elem of elements) {
        console.log(typeof elem);
        let cell = document.createElement(tagName);
        cell.innerText = elem;
        row.appendChild(cell);
        console.log('Appended ' + elem)
    }
}