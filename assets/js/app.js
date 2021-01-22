var firstName;
var lastName;
var birthYear;
var profession;
// code spell
let isEligible;
let familyMembers = new Array();
let numberFamily;
firstName = prompt("First Name?");
lastName = prompt ("Last Name?");
birthYear = prompt ("Birth Year?");
profession = prompt ("Profession?");
numberFamily= prompt("How many number of Family?");
let tempAge = calc(birthYear);


for(let i = 0; i< parseInt(numberFamily); i++){
    familyMembers[i] = prompt("Family Member "+ (i+1));
}
if (tempAge>=18){
    isEligible = true;
}
else{
    isEligible=false;
}



familyMembers.forEach(function(familyMember, index){
    console.log("FamilyMember "+ index+1 + " " + familyMember)
})

// Immidiate function
(function(){
    console.log("Here is Your Profile")
    console.log("Full Name "+ firstName+ " " + lastName);
    console.log("Profession "+ profession);
    console.log("You are "+ tempAge+" years old");
    console.log("Is Eligible to vote "+ isEligible);
})();
function calc(age){
    return new Date().getFullYear()-age;
}