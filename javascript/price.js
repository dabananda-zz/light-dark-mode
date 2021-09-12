const amountEl = document.getElementById('amount');
const addEl = document.getElementById('add');
const deleteEl = document.getElementById('delete');
const totalPriceEl = document.getElementById('total-price');

// Price and item quantity set to zero on change of select tag options
function onSelectChange() {
    amountEl.innerText = 0;
    totalPriceEl.innerText = '00.00';
}

// Count and set total price
function totalPriceCount(value) {
    const selectEl = document.getElementById('select');
    const selectValue = parseInt(selectEl.options[select.selectedIndex].value);
    let totalPrice = 0;

    switch (selectValue) {
        case 1:
            totalPrice = 3.99 * value;
            break;
        case 2:
            totalPrice = 4.99 * value;
            break;
        case 3:
            totalPrice = 1.99 * value;
            break;
        case 4:
            totalPrice = 1.29 * value;
            break;
        case 5:
            totalPrice = 1.49 * value;
            break;
        default:
            totalPrice = '00.00';
            alert('Please select a food first')
            break;
    }

    totalPriceEl.innerText = totalPrice;
}

// Functionality of increase button (+)
function increaseAmount() {
    let value = parseInt(amountEl.innerText);
    value += 1;
    amountEl.innerText = value;
    totalPriceCount(value);
}

// Functionality of decrease button (-)
function decreaseAmount() {
    let value = parseInt(amountEl.innerText);
    value -= 1;
    if (value < 1) {
        alert('Food item can not be 0');
    } else {
        amountEl.innerText = value;
    }
    totalPriceCount(value);
}

addEl.addEventListener('click', increaseAmount);
deleteEl.addEventListener('click', decreaseAmount);
