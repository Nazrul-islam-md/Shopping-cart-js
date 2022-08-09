function setQuantity(product, price, isIncrement){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    const productTotal = document.getElementById(product + '-total');
    if(isIncrement){
        productInput.value = productNumber + 1;
        productTotal.innerText = productInput.value * price;
    }
    else if (productNumber>0){
        productInput.value = productNumber - 1;
        productTotal.innerText = productInput.value * price;
    }
    setTotal();
    
}
function getProductInput(product){
    const productInput = document.getElementById(product + '-number');
    const productTotal = parseInt(productInput.value);
    return productTotal;
}

function setTotal(){
    const subTotal = document.getElementById('sub-total');
    const phoneTotal = getProductInput('phone') * 1219;
    const caseTotal = getProductInput('case') * 59;
    const tax = document.getElementById('tax-amount');
    const totalPrice = document.getElementById('total-price');
    subTotal.innerText = phoneTotal + caseTotal;
    tax.innerText = subTotal.innerText / 10;
    totalPrice.innerText = parseFloat(subTotal.innerText) + parseFloat(tax.innerText);
}

//phone
document.getElementById('phone-plus').addEventListener('click', function(){
    setQuantity('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    setQuantity('phone', 1219, false);
})
//case
document.getElementById('case-plus').addEventListener('click', function(){
    setQuantity('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function(){
    setQuantity('case', 59, false);
})