let coupon;
let priceArr;
let price;
let discount = 0;
let form;
let finalPrice;
function init(){
    price = "";
    form = document.forms;
    priceArr = document.getElementById("price").innerHTML.split(/,|원/ig);
    for(let i = 0; i < priceArr.length; i++){
        price += priceArr[i];
    }
}
let useCoupon = (coupon) => {
    discount = parseInt(price) * parseFloat(coupon);
    finalPrice = price - discount;
    document.getElementById("finalPay").value = finalPrice.toLocaleString('ko-KR')+"원";
                                                        // toLocaleString()은 반드시 넘버형에 적용. 문자열이 섞이면 에러 반환
}