let startAmount = 1000;
let transactions = [
	{ currency: 'USD', amount: 12, type: 'withdrawal' },
	{ currency: 'USD', amount: 104, type: 'withdrawal' },
	{ currency: 'USD', amount: 150, type: 'deposit' },
	{ currency: 'USD', amount: 150, type: 'deposit' },
	{ currency: 'USD', amount: 250, type: 'withdrawal' },
	{ currency: 'USD', amount: 500, type: 'deposit' },
	{ currency: 'USD', amount: 447, type: 'withdrawal' },
	{ currency: 'USD', amount: 120, type: 'deposit' },
	{ currency: 'USD', amount: 58, type: 'withdrawal' },
	{ currency: 'USD', amount: 90, type: 'withdrawal' },
];
const usdToVND = 23000;
// Uses forEach() to print out the transaction history in this format:
function printTransaction(transactions){
    console.log("Balance: $" + startAmount);
    console.log("Transaction History: ");
    transactions.forEach(transaction =>{
        if(transaction.type === 'withdrawal'){
            startAmount -= transaction.amount;
            console.log(`- You withdrew $${transaction.amount}. The new balance is $${startAmount}`);
        }
        if(transaction.type === 'deposit'){
            startAmount += transaction.amount;
            console.log(`- You deposite $${transaction.amount}. The new balance is $${startAmount}`);
        }
    })
}
printTransaction(transactions);


// Uses reduce() to calculate the balance in the end.
let endBalance = transactions.reduce((total, current) => {
    if(current.type === 'withdrawal'){
        total -= current.amount;
    }
    if(current.type === 'deposit'){
        total += current.amount;
    }
    return total;
}, startAmount);
console.log(endBalance);

//Uses filter() and reduce() to calculate two numbers: the sum of withdrawal transactions (expense), and deposit transactions (income).
function typeTransactions(transactions, type){
    return transactions
            .filter(t => t.type === type)
            .reduce((sum, current) => sum + current.amount, 0);
}
console.log("The sum of withdrawal transactions: ", typeTransactions(transactions, "withdrawal"));
console.log("The sum of deposit transactions: ", typeTransactions(transactions, "deposit"));

// Uses map() to get a new array of transaction in VND
let VNDArray = transactions.map(t => ({...t, VNDAmount: t.amount * usdToVND}));
console.log(VNDArray);


// Returns an new list of transactions that sorted by type
function sortByType(transactions, type){
    return transactions.filter(t => t.type === type);
}
console.log(sortByType(transactions,"withdrawal"));
console.log(sortByType(transactions,"deposit"));

// Returns an new list of withdrawal/deposit transactions that sorted by amount
function SortByAmount(transactions, type){
    return transactions.filter(t => t.type === type)
                        .sort((a,b) => a.amount - b.amount);
}

console.log(SortByAmount(transactions, "withdrawal"));
console.log(SortByAmount(transactions, "deposit"));

// Sort 
function sortTransaction(transactions, typeSort){
    let result = transactions.sort((a,b) => {
        if(a[typeSort] < b[typeSort]) return -1;
        if(a[typeSort] > b[typeSort]) return 1;
        return 0;
    });
    return result;
}
console.log("Sort By Amount", sortTransaction(transactions, "amount"));
console.log("Sort By Type", sortTransaction(transactions, "type"));