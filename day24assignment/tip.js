let billAmount = 200;

//calculates tip
function calculateTip(billAmount) {
    return (billAmount * .20)
}

//logs the amount of tip based on billAmount
console.log("Tip = $" + calculateTip(billAmount))

let y = calculateTip(billAmount)

//calculates total bill
function getBillTotal(x,y) {
    return x + y
}

//logs the amount of total bill
console.log("Total bill = $" + getBillTotal(billAmount,y))
