// add months to select element
let month = document.getElementById('month');
let monthNameList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];
addToSelectElement(month, monthNameList);

// add days to select element
let day = document.getElementById('day');
let dayList = [];
for (let i = 1; i <= 31; i++) {
    dayList.push(i);
}
addToSelectElement(day, dayList);

// add years to select element
let year = document.getElementById('year');
let yearList = [];
for (let i = 1970; i <= 2010; i++) {
    yearList.push(i);
}
addToSelectElement(year, yearList);

/**
 * Add a list of elements as <options> to a <select> element.
 *
 * @param selectElement The select element to add to.
 * @param elementsToAdd The list of elements to add.
 */
function addToSelectElement(selectElement, elementsToAdd) {
    for (const element of elementsToAdd) {
        let newOption = document.createElement('option');
        newOption.value = element;
        newOption.textContent = element;
        selectElement.appendChild(newOption);
    }
}