//Molly Kreifels, 11/17/2025

let entryCount = 0;
let gas = 0;
let total = 0;
let weeklyGas = 0;
console.log("The purpose of a function is to create code for reusability.  The ebook says 'Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.'");

function calcGasAvg(){
    while(weeklyGas!== -1) {
        weeklyGas = prompt("Enter your next week's gas total.  Enter -1 when you are done.");
        weeklyGas = parseFloat(weeklyGas);
        if (weeklyGas !== -1) {
            total += weeklyGas;
            entryCount++;
        }else {
            let gas = total / entryCount;
            confirm(userName + "'s average weekly gas bill is " + gas.toFixed(2));
            if (entryCount === 0) {
                confirm("No gas totals were entered.");
            } else if (entryCount === 1) {
                confirm(`You entered ${entryCount} gas total.`);
            } else {
                confirm(`You entered ${entryCount} gas totals.`);
            }
        }
    }
}

let userName = prompt("Enter your name:");
if (userName === null){
    alert("You cancelled the name prompt.");
    throw new Error;
    }else if (userName.trim() === ""){
        alert("You must type a name.");
        throw new Error;
}

calcGasAvg(weeklyGas);