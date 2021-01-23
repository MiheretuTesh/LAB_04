var chooseOperation;
var depositAmount;
var withdrawAmount;
var balanceAmount;
var transferAmount;
var acctNumber;
var acctTransfer;
let accounts = {
    1 : 100,
    2: 250,
    3 : 410
};
console.log(accounts[1])
accountMoney = [100,250,430];

chooseOperation = prompt("1.Deposit\n2.Transfer\n3.Balance\n4.Withdraw");
var choice = chooseOperation.toLowerCase();
if(choice=="deposit"){
    acctNumber = prompt("Your Account Number");
    var acct = parseInt(acctNumber);
    depositAmount = prompt("The Amount");
    var depo = parseInt(depositAmount);
    deposit(acct, depo);
}else if(choice=="withdraw"){
    acctNumber = prompt("Your Account Number");
    withdrawAmount = prompt("The Amount");
    withdraw(acctNumber, withdrawAmount);
}else if(choice=="transfer"){
    acctNumber = prompt("Your Account Number");
    // var acc = parseInt(acctNumber);
    acctTransfer = prompt("Enter the account to transfer to");

    transferAmount = prompt("Enter Transfer Amount");
    var depo = parseInt(depositAmount);
    transfer(acctNumber, acctTransfer, transferAmount);
}else{
    balanceAmount = prompt("Enter account Number");
    balance(balanceAmount);
}
function balance(acct){
    console.log(accounts[acct])
    alert("Account Number: "+ acct + "\nBalance: "+accounts[acct])
    return accounts[acct];
}
function deposit(acct, amount){
    if(acct in accounts){
        accounts[acct]+=amount;
        alert("Your are Balance is "+ accounts[acct]);
        console.log(accounts[acct]);
    }else{
        alert("Such Account does not exist");
    }
}
function withdraw(acct, amount){
    if((acct in accounts)){
        if(amount<=accounts[acct]){
            accounts[acct]-=amount;
            alert("You withdraw Money. Your Balance is now "+ accounts[acct]);
        }else{
            alert("There is no sufficient Balance in your account");
        }
    }else{
        alert("Incorrect input")
    }
}

function transfer(acc, acct, amount){
    if(acc in accounts){
        if(acct in accounts){
            if(accounts[acc]>amount){
                accounts[acc]-=amount;
                accounts[acct]+=parseInt(amount);
                alert("You Successfully transferred to ");
                console.log(accounts[acc])
                console.log(accounts[acct])
            }
            else{
                alert("You do not of have enough amount")
            }
        }else{
            alert("No")
        }
    }else{
        alert("No")
    }
}

