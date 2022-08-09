/* function productUpdateNumber(product, price, isIncrement){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncrement){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber>0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    //calling subtotal function
    calculateTotal();
    
}

function getProductInput(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getProductInput('phone') * 1219;
    const caseTotal = getProductInput('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}
//phone handle
document.getElementById('phone-plus').addEventListener('click',function(){
    productUpdateNumber('phone',1219,true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    productUpdateNumber('phone',1219,false);
})
//case handle
document.getElementById('case-plus').addEventListener('click', function(){
    productUpdateNumber('case',59, true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    productUpdateNumber('case',59,false);
}) */
