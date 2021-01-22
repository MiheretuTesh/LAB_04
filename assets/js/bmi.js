var weightInKg;
var heightInMeters;

weightInKg = prompt("Your Weight in KGs? ")
heightInMeters = prompt("Your Height in Meters? ")

// .toFixed(1)
let bmi = function(weight, height){
    return (weight/Math.pow(height,2));
}
console.log(bmi(weightInKg,heightInMeters))
if(bmi(weightInKg,heightInMeters)<=18.5){
    console.log("Underweight")
} else if((bmi(weightInKg,heightInMeters)<=24.9)){
    console.log("Normal");
} else if(bmi(weightInKg,heightInMeters)<=29.9){
    console.log("overweight");
} else{
    console.log("obese");
}
