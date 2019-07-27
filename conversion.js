function getAge() {
    var age = document.getElementById("age");
    var ageInt = parseInt(age);
    return ageInt;
}

function getHeight() {
    var heightFeet = document.getElementById("heightFeet");
    var heightInches = document.getElementById("heightInches");

    var heightFeetInt = parseInt(heightFeet);
    var heightInchesInt = parseInt(heightInches);

    var TotalHeight = (heightFeetInt * 12) + heightInchesInt;
    return TotalHeight;
}

function getWeight() {
    var weight = document.getElementById("weight");
    var weightInt = parseInt(weight);
    return weightInt;
}

function getPosition() {
    var position = document.getElementById("position");
    return position;
}

function getPlayingStyle() {
    var playingStyle = document.getElementById("playingStyle");
    return playingStyle;
}

function getMaxPrice() {
    var maxPrice = document.getElementById("maxPrice");
    var maxPriceInt = parseInt(maxPrice);
    return maxPriceInt;
}

var ageLevel;

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

function findFlex(ageLevel, ageInt, position) {
    if(ageLevel == "Junior" && ageInt <= 10) {
        flex = 40;
    }
    if(ageLevel == "Junior" && ageInt > 10) {
        flex = 50;
    }
    if(ageLevel == "Intermediate" && ageInt <= 12) {
        flex = 55;
    }
    if(ageLevel == "Intermediate" && ageInt > 12 && ageInt <=15) {
        flex = 60;
    }
    if(ageLevel == "Intermediate" && ageInt > 16) {
        flex = 65;
    }
    if(ageLevel == "Senior" && ageInt <= 18) {
        flex = 77;
    }
    if(ageLevel == "Senior" && ageInt > 18 && ageInt <= 22) {
        flex = 87;
    }
    if(ageLevel == "Senior" && ageInt > 22 && ageInt <= 30) {
        flex = 95;
    }
    if(ageLevel == "Senior" && ageInt > 22 && ageInt <= 30 && position =="D") {
        flex = 102;
    }
}

var curve;

function findCurve(position, playingStyle) {
    
}