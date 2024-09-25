function cashOut(money) {
    const yourTotalBalance = document.getElementById('yourNetBalance');
    yourTotalBalance.innerText = parseFloat(yourTotalBalance.innerText) - money;
 }