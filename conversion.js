//This JS file will convert the data entered by the users into the parameters
//that will be used as part of the GET request
//The parameters being: flex, curve, ageLevel, price

//get maximum price from user input - turn price into integer
let maxPrice = document.getElementById("maxPrice");
const maxPriceInt = parseFloat(maxPrice);

var ageLevel;

//use user's weight and height to determine what age level of stick best fits them (Youth/Junior/Intermediate/Senior)
function findAgeLevel() {
  let weight = document.getElementById("weight");
  weightInt = parseInt(weight);
  let heightFeet = document.getElementById("heightFeet");
  let heightInches = document.getElementById("heightInches");

  const heightFeetInt = parseInt(heightFeet);
  const heightInchesInt = parseInt(heightInches);

  const TotalHeight = heightFeetInt * 12 + heightInchesInt;

  if (weightInt < 120 && TotalHeight < 45) {
    ageLevel = "Youth";
  } else if (weightInt < 120 && TotalHeight >= 45 && TotalHeight < 54) {
    ageLevel = "Junior";
  } else if (weightInt < 120 && TotalHeight >= 54 && TotalHeight < 57) {
    ageLevel = "Junior";
  } else if (weightInt < 120 && TotalHeight >= 57 && TotalHeight < 63) {
    ageLevel = "Intermediate";
  } else if (weightInt >= 120 && weightInt < 160 && TotalHeight < 45) {
    ageLevel = "Youth";
  } else if (weightInt >= 120 && weightInt < 160 && TotalHeight >= 45 && TotalHeight < 54) {
    ageLevel = "Junior";
  } else if (weightInt >= 120 && weightInt < 160 && TotalHeight >= 54 && TotalHeight < 57) {
    ageLevel = "Intermediate";
  } else if (weightInt >= 120 && weightInt < 160 && TotalHeight >= 57 && TotalHeight < 63) {
    ageLevel = "Intermediate";
  } else if (weightInt >= 120 && weightInt < 160 && TotalHeight >= 63) {
    ageLevel = "Senior";
  } else if (weightInt < 120 && TotalHeight >= 63) {
    ageLevel = "Senior";
  } else if (weightInt >= 160 && TotalHeight < 45) {
    ageLevel = "Youth";
  } else if (weightInt >= 160 && TotalHeight >= 45 && TotalHeight < 54) {
    ageLevel = "Junior";
  } else if (weightInt >= 160 && TotalHeight >= 54 && TotalHeight < 57) {
    ageLevel = "Intermediate";
  } else if (weightInt >= 160 && TotalHeight >= 57 && TotalHeight < 63) {
    ageLevel = "Senior";
  } else if (weightInt >= 160 && TotalHeight >= 63) {
    ageLevel = "Senior";
  };

  return ageLevel;
};

var ageLevelParam = findAgeLevel();

var flex;

//use user's age level (determined by last function), age, and position to determine what flex (stiffness) best fits their needs
function findFlex(ageLevel) {
  let age = document.getElementById("age");
  const ageInt = parseInt(age);

  const position = document.getElementById("position");

  if (ageLevel == "Junior" && ageInt <= 10) {
    flex = 40;
  } else if (ageLevel == "Junior" && ageInt > 10) {
    flex = 50;
  } else if (ageLevel == "Intermediate" && ageInt <= 12) {
    flex = 55;
  } else if (ageLevel == "Intermediate" && ageInt > 12 && ageInt <= 15) {
    flex = 60;
  } else if (ageLevel == "Intermediate" && ageInt > 16) {
    flex = 65;
  } else if (ageLevel == "Senior" && ageInt <= 18) {
    flex = 77;
  } else if (ageLevel == "Senior" && ageInt > 18 && ageInt <= 22) {
    flex = 87;
  } else if (ageLevel == "Senior" && ageInt > 22 && ageInt <= 30) {
    flex = 95;
  } else if (ageLevel == "Senior" && ageInt > 22 && ageInt <= 30 && position == "D") {
    flex = 102;
  };
  return flex;
};

var flexParam = findFlex(ageLevelParam);

var curve;

//use user's position and playing style to determine which stick curve best fits their needs
function findCurve() {
  const position = document.getElementById("position");
  const playingStyle = document.getElementById("playingStyle");

  if (
    (position == "LW" || position == "C" || position == "RW") &&  playingStyle == "jackofalltrades") {
    curve = "P92";
  } else if ((position == "LW" || position == "C" || position == "RW") && playingStyle == "playmaker") {
    curve = "P88";
  } else if ((position == "LW" || position == "C" || position == "RW") && playingStyle == "sniper") {
    curve = "P28";
  } else if (position == "D" && playingStyle == "slapshot") {
    curve = "P02";
  } else if ((position == "LW" || position == "C" || position == "RW") && playingStyle == "dangler") {
    curve = "P92";
  }
  return curve;
};

var curveParam = findCurve();

const hockey = e => {
  e.preventDefault();

  fetch(`/hockey/${flexParam}/${curveParam}/${ageLevelParam}/${maxPriceInt}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log("error fetching data", err));
};

document.getElementById("submit").addEventListener("click", hockey);
