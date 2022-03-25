// Lunar Weight Calculator 
// created by Kyle Carmichael 
// 7 Feb 2022 for GIT417

// add an event listener to the calcBtn on index.html
document.getElementById("calc-btn").addEventListener("click", calcWeight);

// create the function that determine lunar weight


function calcWeight() {

    // get the value of userWeight
    let userWeight = document.getElementById("user-weight").value;
    
    try {
        // check that the value is valid
        errorCheck(userWeight);

        // if the errorCheck is thrown, the catch block runs, 
        // otherwise the rest of this block runs

        // calculate and round
        let bodyWeight = bodyGravity(userWeight);

        // get unit from checkUnit()
        // write the answer to the DOM

        let message = ("Your weight on " + solarBody() + " is " + bodyWeight + " " + checkUnit());
        document.getElementById("lunar-weight").innerText = message;

    } catch (noInput) {
        let message = ("You need to enter a value for weight!");
        document.getElementById("lunar-weight").innerText = message;
    } 
    
}

// create an if statement that changes the unit of the output to the user selected unit

// assign global variables to the radio btns
let kgRadio = document.getElementById("kg");
let lbsRadio = document.getElementById("lbs");

// create a func to check the status of the btn
function checkUnit() {
    // if statement with a backup if no unit is selected
    if (kgRadio.checked == true) {
        let unit = "kg";
        return unit;
    } else if (lbsRadio.checked == true) {
        let unit = "lbs";
        return unit;
    } else {
        let unit = "units";
        return unit;
    }
    // returns unit when func is called
}

function errorCheck(userWeight) {

    // check to see if the user has entered a value in the input field
    if (userWeight == 0) {
        // alert the user that they must enter a value to determine their lunar weight
        throw document.getElementById("user-weight").classList.add("invalid");
    } else if (userWeight != 0 || userWeight != null) {
        document.getElementById("user-weight").classList.remove("invalid");
    }

}

// security runs onclick #find-out-btn
function security() {

    // Structure of all:
    // declare variable by getting the appropriate id
    // set the inner text of that element to the navigator/screen object value with a label

    let platform = document.getElementById("platform");
    platform.innerText = ("Your platform is " + navigator.platform);

    let geolocal = document.getElementById("geolocation");
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
        geolocal.innerText = "Latitude: " + position.coords.latitude + "\n" + "Longitude: " + position.coords.longitude + "\n";
    }
    
    let appName = document.getElementById("app-name");
    appName.innerText = ("Your application's name is " + navigator.appName + "\n");
    
    let appVersion = document.getElementById("app-version");
    appVersion.innerText = ("Your app's version is " + navigator.appVersion + "\n");

    let pixelDepth = document.getElementById("pixel-depth");
    pixelDepth.innerText = ("Your screen's pixel depth is " + screen.pixelDepth + "\n");
    
    let colorDepth = document.getElementById("color-depth");
    colorDepth.innerText = ("Your screen's color depth is " + screen.colorDepth );
    

}

// determine which weight calculation to use
function bodyGravity(userWeight) {

    // checks the selcected value and declares the corresponding gravity
    let gravity;
    switch (document.querySelector("select").value) {
        case "mercury":
            gravity = 3.78;
            break;
        case "venus":
            gravity = 9;
            break;
        case "moon":
            gravity = 1.622;
            break;
        case "mars":
            gravity = 3.7;
            break;
        case "jupiter":
            gravity = 23.6;
            break;
        case "saturn":
            gravity = 9.16;
            break;
        case "uranus":
            gravity = 8.89;
            break;
        case "neptune":
            gravity = 11.2;
            break;
        case "pluto":
            gravity = 0.07;
            break;
    }  

    let ansbodyWeight = (userWeight / 9.81) * gravity;
    let calcWeight = Math.floor(ansbodyWeight);
    return calcWeight;
}

// checks which option is selected
function solarBody(){

    // checks the selected elements value and outputs the correct name
    switch (document.querySelector("select").value) {
        case "mercury":
            return "Mercury"
        case "venus":
            return "Venus"
        case "moon":
            return "the Moon"
        case "mars":
            return "Mars"
        case "jupiter":
            return "Jupiter"
        case "saturn":
            return "Saturn"
        case "uranus":
            return "Uranus"
        case "neptune":
            return "Neptune"
        case "pluto":
            return "Pluto"
    }   
}


// Notes & what I've learned

// 7 Feb 2022 Error Handling

// For this assignment I wanted the code to check and make sure that the user has entered
// a value in the input box to calculate their lunar weight.
// I had a bit of an issue changing over to a form but utilized the Dev tools to select specific items
// quickly to understand the relevant ids and classes being applied to each element.


// 14 Feb 2022 Updating & Security

// After recieving feedback, changed the error handling to a try catch block
// Added a dropdown in nav-bar for better  usability
// Implemented Navigator objects and Screen objects with security section

// 21 Feb 2022 Form Validation and Selection list additions

// Added Selection list for the weight calculator
// By default, Moon is the selected option so there cannot be no selection
// If niether kg or lbs is selected, units show as the backup
// Included the number input to be required in addition to the previous styling/catch