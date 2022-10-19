let depositValue = document.getElementById("deposit-value");
let depositOutput = document.getElementById('deposit-output');
let balanceOutput = document.getElementById('balance-output');

function deposit() {
    // deposit value update
    depositOutput.innerText = Number(depositOutput.innerText) + Number(depositValue.value);

    // balance value update 
    balanceOutput.innerText = Number(balanceOutput.innerText) + Number(depositValue.value);

    // clear input field
    depositValue.value = '';
}