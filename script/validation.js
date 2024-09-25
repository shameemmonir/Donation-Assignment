function inputValidation(money) {
    if(isNaN(money) || money ==='' || money <= 0)
    {
        alert("Invalid Donation amount");
        return 0;
    }

    if(money > parseFloat(document.getElementById('yourNetBalance').innerText))
    {
        alert("Insufficient balance");
        return 0;
    }

    else {

        my_modal_5.showModal();
        return parseFloat(money);

    }
}

function inputValidation(money) {
    if(isNaN(money) || money ==='' || money <= 0)
    {
        alert("Invalid Donation amount");
        return 0;
    }

    if(money > parseFloat(document.getElementById('yourNetBalance').innerText))
    {
        alert("Insufficient balance");
        return 0;
    }

    else {

        my_modal_5.showModal();
        return parseFloat(money);

    }
}