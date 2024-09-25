
function showAddMoney(inputElement, balanceElement, historyHeading) {

    const inputBalance = inputValidation(inputElement.value);
    balanceElement.innerText = parseFloat(balanceElement.innerText) + inputBalance;
    cashOut(inputBalance);
    inputElement.value = '';
    
    if(inputBalance){
        showHistoryById(inputBalance, historyHeading);
    }
}
