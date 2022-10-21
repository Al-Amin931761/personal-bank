// deposit 
let depositValue = document.getElementById("deposit-value");
let depositOutput = document.getElementById('deposit-output');
// withdraw
let withdrawValue = document.getElementById("withdraw-value");
let withdrawOutput = document.getElementById('withdraw-output');
// total balance 
let balanceOutput = document.getElementById('balance-output');

function addMoney(currentAmount, newAmount) {
    return Number(currentAmount) + Number(newAmount);
};

function getMoney(currentAmount, newAmount) {
    return Number(currentAmount) - Number(newAmount);
};

// deposit 
function deposit() {
    // deposit value update 
    const totalDeposit = addMoney(depositOutput.innerText, depositValue.value);
    depositOutput.innerText = totalDeposit;
    // balance value update 
    const totalBalance = addMoney(balanceOutput.innerText, depositValue.value);
    balanceOutput.innerText = totalBalance;
    // clear input field
    depositValue.value = '';
}

// withdraw
function withdraw() {
    // withdraw value update 
    const totalWithdraw = addMoney(withdrawOutput.innerText, withdrawValue.value);
    withdrawOutput.innerText = totalWithdraw;
    // balance value update 
    const totalBalance = getMoney(balanceOutput.innerText, withdrawValue.value);
    balanceOutput.innerText = totalBalance;
    // clear input field 
    withdrawValue.value = '';
}