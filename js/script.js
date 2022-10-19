let depositValue = document.getElementById("deposit-value");
let withdrawValue = document.getElementById("withdraw-value");
let depositOutput = document.getElementById('deposit-output');
let withdrawOutput = document.getElementById('withdraw-output');
let balanceOutput = document.getElementById('balance-output');

// deposit 
function deposit() {
    // deposit value update
    depositOutput.innerText = Number(depositOutput.innerText) + Number(depositValue.value);

    // balance value update 
    balanceOutput.innerText = Number(balanceOutput.innerText) + Number(depositValue.value);

    // clear input field
    depositValue.value = '';
}

// withdraw
function withdraw() {
    // withdraw value update 
    withdrawOutput.innerText = Number(withdrawOutput.innerText) + Number(withdrawValue.value);

    // balance value update 
    balanceOutput.innerText = Number(balanceOutput.innerText) - Number(withdrawValue.value);

    // clear input field 
    withdrawValue.value = '';
}