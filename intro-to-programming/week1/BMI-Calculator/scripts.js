var calcBMI = function(mass, height) {
  return mass / (height * height) * 703;
};

var mass = parseInt(prompt("Enter your weight in pounds"));
var height = parseInt(prompt("Enter your height in inches"));
var BMI = calcBMI(mass, height);
alert("Your BMI is " + BMI);
