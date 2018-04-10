const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function formatAmount(amount) {
  return "$" + amount.toFixed( 2 );
}

//Keep buying phones while we have money
while (amount < bank_balance) {
  //buy a new phone
  amount = amount + PHONE_PRICE;
  // can we afford the accessory?
  if (amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }
}
// adding in taxes
amount = amount + calculateTax( amount );
console.log( "your purchase: " + formatAmount( amount )
);

// can you actually afford this purchase?
if (amount > bank_balance) {
console.log("you cant afford this purchase. :(");
}
//you can't afford this purchase. :(
VM49:28 your purchase: $334.76
VM49:33 you cant afford this purchase. :(
