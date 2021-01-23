var number1;
var number2;
var chooseOperation;

chooseOperation = prompt("Choose Operation\n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division\n5.Add More than Two numbers\n6.Multiply More than numbers");
function add(num1, num2){
    return (parseInt(num1) + parseInt(num2));
}
function sub(num1, num2){
    return num1 - num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function multiply(num1, num2){
    return num1 * num2;
}

var choice = chooseOperation.toLowerCase();

console.log(number2)
if(choice==="addition"){
    number1 = prompt("Enter First number:")
number2 = prompt("Enter Second number:")
    console.log(add(number1,number2))
    alert(add(number1,number2))
}
else if(choice==="subtraction"){
    number1 = prompt("Enter First number:")
number2 = prompt("Enter Second number:")
    console.log(sub(number1,number2))
    alert(sub(number1,number2))
}
else if(choice==="division"){
    number1 = prompt("Enter First number:")
number2 = prompt("Enter Second number:")
    if(number2!=0){
        console.log(divide(number1,number2))
        alert(divide(number1,number2))
    }
    else{
        alert("Denominator is zero")
    }
}
else if(choice==="add"){

    var nom = prompt("How many number do you want to add");
    var params = new Array(parseInt(nom));
    for(let i = 0; i<nom;i++){
        let num = prompt("Enter Number");
        params.push(num);
    }
    console.log(addTwo(params));
    alert(addTwo(params))
}
else if(choice=="mult"){
    var nom = prompt("How many number do you want to multiply");
    var params = new Array(parseInt(nom));
    for(let i = 0; i<nom;i++){
        let num = prompt("Enter Number");
        params.push(num);
    }
    console.log(mult(params));
    alert(mult(params))
}
else{
    console.log(multiply(number1,number2))
    alert(multiply(number1,number2))
}

// Function to add  multiply more than two numbers


function addTwo(params){
    var result = 0;
    for(var i=0; i<params.length; i++){
        result += parseInt(params[i]);
        console.log(params[i]);
        console.log(result);
    }
    return result;
}
function mult(params){
    var result_1=1;
    var result_2=1;
    for(var i=0; i<params.length; i++){
        result_1 = params[i];
        result_2 = result_1 * result_2
        console.log(params[i]);
        console.log(result_2);
    }
    return result_2;
}
