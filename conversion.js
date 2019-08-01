//This JS file will convert the data entered by the users into the parameters
//that will be used as part of the GET request
//The parameters being: flex, curve, ageLevel, price

//get age from user input and turn it into integer
function getAge() {
    var age = document.getElementById("age");
    var ageInt = parseInt(age);
    return ageInt;
}

//get height from user input - turn the height in inches into integer and height in feet into integer
//convert those to get total height in inches
function getHeight() {
    var heightFeet = document.getElementById("heightFeet");
    var heightInches = document.getElementById("heightInches");

    var heightFeetInt = parseInt(heightFeet);
    var heightInchesInt = parseInt(heightInches);

    var TotalHeight = (heightFeetInt * 12) + heightInchesInt;
    return TotalHeight;
}

//get weight from user input - turn weight into integer
function getWeight() {
    var weight = document.getElementById("weight");
    var weightInt = parseInt(weight);
    return weightInt;
}

//get position from user input
function getPosition() {
    var position = document.getElementById("position");
    return position;
}

//get playing style from user input
function getPlayingStyle() {
    var playingStyle = document.getElementById("playingStyle");
    return playingStyle;
}

//get maximum price from user input - turn price into integer
function getMaxPrice() {
    var maxPrice = document.getElementById("maxPrice");
    var maxPriceInt = parseInt(maxPrice);
    return maxPriceInt;
}

var ageLevel;

//use user's weight and height to determine what age level of stick best fits them (Youth/Junior/Intermediate/Senior)
function findAgeLevel(weightInt, TotalHeight) {
    if(weightInt < 120 && TotalHeight < 45) {
        ageLevel = "Youth";
    }
    else if (weightInt < 120 && TotalHeight >= 45 && TotalHeight < 54) {
        ageLevel = "Junior";
    }
    else if (weightInt < 120 && TotalHeight >= 54 && TotalHeight < 57) {
        ageLevel = "Junior";
    }
    else if (weightInt < 120 && TotalHeight >= 57 && TotalHeight < 63) {
        ageLevel = "Intermediate";
    }
    else if (weightInt >= 120 && weight < 160 && TotalHeight < 45) {
        ageLevel = "Youth";
    }
    else if (weightInt >= 120 && weight < 160 && TotalHeight >= 45 && TotalHeight < 54) {
        ageLevel = "Junior";
    }
    else if (weightInt >= 120 && weight < 160 && TotalHeight >= 54 && TotalHeight < 57) {
        ageLevel = "Intermediate";
    }
    else if (weightInt >= 120 && weight < 160 && TotalHeight >= 57 && TotalHeight < 63) {
        ageLevel = "Intermediate";
    }
    else if (weightInt >= 120 && weight < 160 && TotalHeight >= 63) {
        ageLevel = "Senior";
    }
    else if (weightInt < 120  && TotalHeight >= 63) {
        ageLevel = "Senior";
    }
    else if (weightInt >= 160  && TotalHeight < 45) {
        ageLevel = "Youth";
    }
    else if (weightInt >= 160  && TotalHeight >= 45 && TotalHeight < 54) {
        ageLevel = "Junior";
    }
    else if (weightInt >= 160  && TotalHeight >= 54 && TotalHeight < 57) {
        ageLevel = "Intermediate";
    }
    else if (weightInt >= 160  && TotalHeight >= 57 && TotalHeight < 63) {
        ageLevel = "Senior";
    }
    else if (weightInt >= 160  && TotalHeight >= 63) {
        ageLevel = "Senior";
    }

    return ageLevel;
    
}

var flex;

//use user's age level (determined by last function), age, and position to determine what flex (stiffness) best fits their needs
function findFlex(ageLevel, ageInt, position) {
    if(ageLevel == "Junior" && ageInt <= 10) {
        flex = 40;
    }
    else if(ageLevel == "Junior" && ageInt > 10) {
        flex = 50;
    }
    else if(ageLevel == "Intermediate" && ageInt <= 12) {
        flex = 55;
    }
    else if(ageLevel == "Intermediate" && ageInt > 12 && ageInt <=15) {
        flex = 60;
    }
    else if(ageLevel == "Intermediate" && ageInt > 16) {
        flex = 65;
    }
    else if(ageLevel == "Senior" && ageInt <= 18) {
        flex = 77;
    }
    else if(ageLevel == "Senior" && ageInt > 18 && ageInt <= 22) {
        flex = 87;
    }
    else if(ageLevel == "Senior" && ageInt > 22 && ageInt <= 30) {
        flex = 95;
    }
    else if(ageLevel == "Senior" && ageInt > 22 && ageInt <= 30 && position =="D") {
        flex = 102;
    }
    return flex;
}

var curve;

//use user's position and playing style to determine which stick curve best fits their needs
function findCurve(position, playingStyle) {
    if((position == "LW" || position == "C" || position == "RW") && playingStyle == "jackofalltrades") {
        curve = "P92"
    }
    else if((position == "LW" || position == "C" || position == "RW") && playingStyle == "playmaker") {
        curve = "P88"
    }
    else if((position == "LW" || position == "C" || position == "RW") && playingStyle == "sniper") {
        curve = "P28"
    }
    else if(position == "D" && playingStyle == "slapshot"){
        curve = "P02"
    }
    else if((position == "LW" || position == "C" || position == "RW") && playingStyle == "dangler") {
        curve = "P92"
    }
    return curve;
}