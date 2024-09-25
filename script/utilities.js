
document.getElementById('btn-history').addEventListener('click', function(){
    showFlipById('btn-history');
    showFlipSectionById('historySection');
});

document.getElementById('btn-donation').addEventListener('click', function(){
    showFlipById('btn-donation');
    showFlipSectionById('donateSection');
});

document.getElementById('btn-noakhali-donate').addEventListener('click', function(){


    const inputElement =  document.getElementById('noakhali-donate-input');
    const balanceElement =  document.getElementById('noakhali-balance');
    const historyHeading =  document.getElementById('noakhali-heading');
    showAddMoney(inputElement, balanceElement, historyHeading);
});

document.getElementById('btn-feni-donate').addEventListener('click', function(){


    const inputElement =  document.getElementById('feni-donate-input');
    const balanceElement =  document.getElementById('feni-balance');
    const historyHeading =  document.getElementById('feni-heading');
    showAddMoney(inputElement, balanceElement, historyHeading);
});

document.getElementById('btn-aid-donate').addEventListener('click', function(){


    const inputElement =  document.getElementById('aid-donate-input');
    const balanceElement =  document.getElementById('aid-balance');
    const historyHeading =  document.getElementById('aid-heading');
    showAddMoney(inputElement, balanceElement, historyHeading);
});

