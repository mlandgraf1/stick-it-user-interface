function getAge() {
    var age = document.getElementById("age");
    return age;
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
    return weight;
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