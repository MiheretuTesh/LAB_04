var number1;
var number2;
var chooseOperation;

chooseOperation = prompt("Choose Operation\n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division");
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
number1 = prompt("Enter First number:")
number2 = prompt("Enter Second number:")
console.log(number2)
if(choice==="addition"){
    console.log(add(number1,number2))
    alert(add(number1,number2))
}
else if(choice==="subtraction"){
    console.log(sub(number1,number2))
    alert(sub(number1,number2))
}
else if(choice==="division"){
    if(number1!=0){
        console.log(divide(number1,number2))
        alert(divide(number1,number2))
    }
    else{
        alert("Nominator is zero")
    }
}
else{
    console.log(multiply(number1,number2))
    alert(multiply(number1,number2))
}

