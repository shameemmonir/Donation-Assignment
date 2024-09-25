function showHistoryById(balance, historyName) {

    const div = document.createElement('div');
    const history = document.createElement('p');
    const date = document.createElement('p');

    div.classList.add('w-4/5');
    div.classList.add('mx-auto');
    div.classList.add('text-center');
    div.classList.add('border');
    div.classList.add('border-gray-200');
    div.classList.add('py-4');
    div.classList.add('rounded-lg');
    div.classList.add('shadow-md');
    div.classList.add('my-4');
    history.classList.add('font-bold');
    history.innerText = `${balance} Taka is ${historyName.innerText}`;
    date.innerText = Date();

    div.appendChild(history);
    div.appendChild(date);

    const historyElement = document.getElementById('historySection');
    historyElement.appendChild(div);
}