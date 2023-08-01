let firstName = 'John';
let numAccounts = 1;
let balance = 9.80;

if (balance < 20 && numAccounts == 1) {
    console.log("Transfer funds!");
} else if (balance > 20 || firstName == 'John') {
    console.log("Go to the movies!"); 
} else if (balance == 0) {
    console.log("Deposit more money!");
}



