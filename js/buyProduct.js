// 상품 구매창으로 이동
// 각 ___Item(idx) 메소드의 구매 버튼에 적용
function buyItem(ctg, idx){
    let img = ctg[idx][0];
    let name = ctg[idx][1];
    let price = ctg[idx][2];
    let txt = '<p class = "super">주문상품</p>'+
    '<div id = "left"><img src = '+img+'></div>'+
    '<div id = "right">'+
        '<p id = "pdName">'+name+'</p>'+
        '<p id = "price">'+price+'</p>'+
    '</div>';
    localStorage.setItem("item", txt);
    location.href = "./buyProduct.html";
}
function buyItemPage(){
    let buyItem = localStorage.getItem("item");
    document.getElementById("pdInfo").innerHTML = buyItem;
}