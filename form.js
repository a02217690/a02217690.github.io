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

/**
 * Checks to see if all inputs are valid or not. If valid,
 * then redirect to index.html
 */
function validateAllInputs() {
    // first, clear out warning box
    clearWarnings();

    // username: lowercase letters, numbers, between 4-12 characters
    let userName = document.getElementById('username').value;
    let userNameIsValid = /^[a-z0-9]{4,12}$/.test(userName);

    // email: contains @, ends in .net/.org/.com/.edu
    let email = document.getElementById('email').value;
    let emailIsValid = /^.+@.+\.(net|com|org|edu)$/.test(email);

    // phone number: format XXX-XXX-XXXX
    let phoneNumber = document.getElementById('phone').value;
    let phoneNumberIsValid = /^([0-9]{3}-){2}[0-9]{4}$/.test(phoneNumber);

    // password: 1 uppercase, 1 lowercase, 1 number, 1 special character
    let password = document.getElementById('password').value;
    let passwordIsValid = (/^.*[A-Z].*$/.test(password) &&
                           /^.*[a-z].*$/.test(password) &&
                           /^.*[0-9].*$/.test(password) &&
                           /^.*[^A-Za-z0-9].*$/.test(password));

    // confirm password: must be same as password
    let confirmPassword = document.getElementById('confirm-password').value;
    let confirmPasswordIsValid = (confirmPassword === password);

    // gender: one of the three radio buttons must be checked
    let genderButtons = document.getElementsByName('gender');
    let gender = null;
    for (const button of genderButtons) {
        if (button.checked) {
            gender = button.id;
            break;
        }
    }
    let genderIsValid = (gender != null);

    // birthday: all three birthdays must not be empty
    let birthdayMonth = document.getElementById('month').value;
    let birthdayDate = document.getElementById('day').value;
    let birthdayYear = document.getElementById('year').value;
    let birthdayIsValid = (birthdayYear !== "none" && birthdayMonth !== "none" && birthdayDate !== "none");

    // music: at least one checkbox is checked
    let popChecked = document.getElementById('pop').checked;
    let hiphopChecked = document.getElementById('hiphop').checked;
    let jazzChecked = document.getElementById('jazz').checked;
    let rockChecked = document.getElementById('rock').checked;
    let classicalChecked = document.getElementById('classical').checked;
    let countryChecked = document.getElementById('country').checked;
    let musicIsValid = (popChecked || hiphopChecked || jazzChecked || rockChecked
                        || classicalChecked || countryChecked);

    // Debug statements, comment out before release
    console.log('Username ' + userName + (userNameIsValid ? " is valid" : " is not valid"));
    console.log('Email ' + email + (emailIsValid ? " is valid" : " is not valid"));
    console.log('Phone number ' + phoneNumber + (phoneNumberIsValid ? " is valid" : " is not valid"));
    console.log('Password ' + password + (passwordIsValid ? " is valid" : " is not valid"));
    console.log('Confirm password ' + confirmPassword + (confirmPasswordIsValid ? " is valid" : " is not valid"));
    console.log('Gender ' + gender + (genderIsValid ? " is valid" : " is not valid"));
    console.log('Birthday' + (birthdayIsValid ? " is valid" : " is not valid"));
    console.log('Music' + (musicIsValid ? " is valid" : " is not valid"));

    // check confirm password LAST
    let inputsAreValid = userNameIsValid && emailIsValid && phoneNumberIsValid &&
                         passwordIsValid && genderIsValid && birthdayIsValid && musicIsValid;
    if (inputsAreValid) {
        if (confirmPasswordIsValid) {
            window.location.replace('index.html');
        } else {
            window.alert("Passwords do not match.");
        }
    } else {
        // else, we need to add messages for everything that's borked
        let redText = "<span style='color: red; font-weight:bold;'>";
        let orangeText = "<span style='color: orange; font-weight:bold;'>";

        if (!userNameIsValid) {
            if (userName === "") {
                addWarningMessage("Please enter " + redText + " a username </span>");
            } else {
                addWarningMessage("Please enter " + orangeText + " a valid username </span>");
            }
        }
        if (!emailIsValid) {
            if (email === "") {
                addWarningMessage("Please enter " + redText + " an email address </span>");
            } else {
                addWarningMessage("Please enter " + orangeText + " a valid email address </span>");
            }
        }
        if (!phoneNumberIsValid) {
            if (phoneNumber === "") {
                addWarningMessage("Please enter " + redText + " a phone number </span>");
            } else {
                addWarningMessage("Please enter " + orangeText + " a valid phone number </span>");
            }
        }
        if (!passwordIsValid) {
            if (password === "") {
                addWarningMessage("Please enter " + redText + " a password </span>");
            } else {
                addWarningMessage("Please enter " + orangeText + " a valid password </span>");
            }
        }
        if (!genderIsValid) {
            addWarningMessage("Please select " + redText + " a gender </span>");
        }
        if (!birthdayIsValid) {
            addWarningMessage("Please select " + redText + " a birthday </span>");
        }
        if (!musicIsValid) {
            addWarningMessage("Please select " + redText + " at least one favorite music genre </span>");
        }
    }
}

/**
 * Adds a warning message.
 */
function addWarningMessage(warningMessage) {
    let warningHolder = document.getElementById('warnings-holder');
    let warningMessageParagraph = document.createElement('p');

    warningMessageParagraph.innerHTML = warningMessage;
    warningHolder.appendChild(warningMessageParagraph);
}

/**
 * Clears all warning messages.
 */
function clearWarnings() {
    let warningHolder = document.getElementById('warnings-holder');

    while (warningHolder.firstChild != null) {
        warningHolder.removeChild(warningHolder.firstChild);
    }
}