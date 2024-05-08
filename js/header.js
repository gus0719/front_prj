var state = 0;
// ID에 해당하는 엘리먼트 클릭 시 드롭다운 메뉴 출력

var loginRecent;
var loginToken;
function headInit(){
    document.getElementById("headRegion").style.display = "none";
}
let textclear = (clearObj) => {
    clearObj.value = '';
}
let categoryShow = () => {
    let menu = document.getElementById('menu').style;
    if(state == 0){
        menu.display = 'block';
        document.getElementById('category').style.backgroundColor = '#777777';
        state = 1;
    } else {
        menu.display = 'none';
        document.getElementById('category').style.backgroundColor = 'black';
        state = 0;
    }
}
function logOut(){
    localStorage.removeItem("loginRecent");
    location.href = location.href;
}
function tokenLoad(main){
    loginRecent = localStorage.getItem("loginRecent");
    if(loginRecent != null){
        if(main == true){
            loginToken = "<a href = './html/shoppingcart.html' id = 'cart'><img src = './img/headerImg/cart.png'></a>";
        } else if(main == false){
            loginToken = "<a href = './shoppingcart.html' id = 'cart'><img src = './../img/headerImg/cart.png'></a>";
        }
        loginToken += "<div class = 'sessions' id = 'userInfo'>"+loginRecent;
        loginToken += "</div>";
        loginToken += "<div id = 'logout' class = 'sessions' onclick = 'logOut()'>로그아웃</div>";
    } else if(loginRecent == null){
        if(main == true){
            loginToken = "<a href = './html/login.html' id = 'loginBtn'>Login<span class = 'material-symbols-outlined'>login</span></a>";
        } else if(main == false){
            loginToken = "<a href = './login.html' id = 'loginBtn'>Login<span class = 'material-symbols-outlined'>login</span></a>";
        }
    }
}
function storageLoad(){ // localStorage에 있는 객체를 불러와서 이동한 페이지에 로드
    document.getElementById("wrapper").innerHTML = localStorage.getItem("lists");
}
function indexItemLoad(){
    document.getElementById("wrapper").innerHTML = localStorage.getItem("idxItem");
}
function headScrolling(){
    if(document.documentElement.scrollTop < 400){
        document.getElementById("headRegion").style.display = "none";
    } else if(document.documentElement.scrollTop >= 400){
        document.getElementById("headRegion").style.display = "block";
    }
}
function headLoadForIndex(){
    let headRegion =
        "<div id = 'navi'>" +
            "<a href = './index.html' id = 'logo'><img src = './img/headerImg/logo.png'></a>"+
            "<div id = 'category' onClick = 'categoryShow()'>카테고리"+
                "<ul id = 'menu'>"+
                    "<li><span id = 'ctg' onclick = 'funitureListShow(true)'>가구</span>"+
                        "<ul class = 'subMenu'>"+
                            "<span onclick = 'sopaListShow(true)'><li>소파</li></span>"+
                            "<span onclick = 'bedListShow(true)'><li>침대</li></span>"+
                            "<span onclick = 'drawerListShow(true)'><li>수납장</li></span>"+
                            "<span onclick = 'deskListShow(true)'><li>책상</li></span>"+
                            "<span onclick = 'chairListShow(true)'><li>의자</li></span>"+
                        "</ul>"+
                    "</li>"+
                    "<li><span id = 'ctg' onclick = 'foodListShow(true)'>식품</span>"+
                        "<ul class = 'subMenu'>"+
                            "<span onclick = 'mealKitListShow(true)'><li>밀키트</li></span>"+
                            "<span onclick = 'snackListShow(true)'><li>간식</li></span>"+
                            "<span onclick = 'freshListShow(true)'><li>농산물</li></span>"+
                            "<span onclick = 'seafoodListShow(true)'><li>수산물</li></span>"+
                            "<span onclick = 'noodleListShow(true)'><li>면</li></span>"+
                        "</ul>"+
                    "</li>"+
                    "<li><span id = 'ctg' onclick = 'digitalListShow(true)'>가전디지털</span>"+
                        "<ul class = 'subMenu'>"+
                            "<span onclick = 'tvListShow(true)'><li>TV</li></span>"+
                            "<span onclick = 'refrigListShow(true)'><li>냉장고</li></span>"+
                            "<span onclick = 'laptopListShow(true)'><li>노트북</li></span>"+
                            "<span onclick = 'desktopListShow(true)'><li>데스크톱</li></span>"+
                            "<span onclick = 'periListShow(true)'><li>컴퓨터 주변기기</li></span>"+
                        "</ul>"+
                    "</li>"+
                    "<li><span id = 'ctg' onclick = 'fashionListShow(true)'>패션</span>"+
                        "<ul class = 'subMenu'>"+
                            "<span onclick = 'shoeListShow(true)'><li>신발</li></span>"+
                            "<span onclick = 'topListShow(true)'><li>상의</li></span>"+
                            "<span onclick = 'bottomListShow(true)'><li>하의</li></span>"+
                            "<span onclick = 'capListShow(true)'><li>모자</li></span>"+
                            "<span onclick = 'bagListShow(true)'><li>가방</li></span>"+
                        "</ul>"+
                    "</li>"+
                    "<li><span id = 'ctg' onclick = 'lifeListShow(true)'>생활용품</span>"+
                        "<ul class = 'subMenu'>"+
                            "<span onclick = 'mouthListShow(true)'><li>구강용품</li></span>"+
                            "<span onclick = 'faceListShow(true)'><li>세면용품</li></span>"+
                            "<span onclick = 'towelListShow(true)'><li>수건</li></span>"+
                            "<span onclick = 'kitchenListShow(true)'><li>주방용품</li></span>"+
                            "<span onclick = 'cleanerListShow(true)'><li>청소용품</li></span>"+
                        "</ul>"+
                    "</li>"+
                "</ul>"+
            "</div>"+
            "<label for = 'searchBar'>"+
                "<fieldset>"+
                "<span id = 'searchTab' class = 'material-symbols-outlined'>shopping_bag</span>"+
                "<input type = 'text' class = 'search' id = 'searchBar' name = 'query'>"+
                "<span id = 'clearBtn' class = 'material-symbols-outlined' onclick = 'textclear(searchBar)'>close</span>"+
                "<span id = 'searchBtn' class = 'material-symbols-outlined'>search</span>"
            "</fieldset></label>";
    headRegion += loginToken + "</div>";
    document.getElementById('headRegion').innerHTML = headRegion;
}
function headLoad(){
    let headRegion =
        "<div id = 'navi'>" +
            "<a href = './../index.html' id = 'logo'><img src = './../img/headerImg/logo.png'></a>"+
            "<div id = 'category' onClick = 'categoryShow()'>카테고리"+
                "<ul id = 'menu'>"+
                    "<li><span id = 'ctg' onclick = 'funitureListShow(false)'>가구</span>"+
                        "<ul class = 'subMenu'>"+
                            "<span onclick = 'sopaListShow(false)'><li>소파</li></span>"+
                            "<span onclick = 'bedListShow(false)'><li>침대</li></span>"+
                            "<span onclick = 'drawerListShow(false)'><li>수납장</li></span>"+
                            "<span onclick = 'deskListShow(false)'><li>책상</li></span>"+
                            "<span onclick = 'chairListShow(false)'><li>의자</li></span>"+
                        "</ul>"+
                    "</li>"+
                    "<li><span id = 'ctg' onclick = 'foodListShow(false)'>식품</span>"+
                        "<ul class = 'subMenu'>"+
                            "<span onclick = 'mealKitListShow(false)'><li>밀키트</li></span>"+
                            "<span onclick = 'snackListShow(false)'><li>간식</li></span>"+
                            "<span onclick = 'freshListShow(false)'><li>농산물</li></span>"+
                            "<span onclick = 'seafoodListShow(false)'><li>수산물</li></span>"+
                            "<span onclick = 'noodleListShow(false)'><li>면</li></span>"+
                        "</ul>"+
                    "</li>"+
                    "<li><span id = 'ctg' onclick = 'digitalListShow(false)'>가전디지털</span>"+
                        "<ul class = 'subMenu'>"+
                            "<span onclick = 'tvListShow(false)'><li>TV</li></span>"+
                            "<span onclick = 'refrigListShow(false)'><li>냉장고</li></span>"+
                            "<span onclick = 'laptopListShow(false)'><li>노트북</li></span>"+
                            "<span onclick = 'desktopListShow(false)'><li>데스크톱</li></span>"+
                            "<span onclick = 'periListShow(false)'><li>컴퓨터 주변기기</li></span>"+
                        "</ul>"+
                    "</li>"+
                    "<li><span id = 'ctg' onclick = 'fashionListShow(false)'>패션</span>"+
                        "<ul class = 'subMenu'>"+
                            "<span onclick = 'shoeListShow(false)'><li>신발</li></span>"+
                            "<span onclick = 'topListShow(false)'><li>상의</li></span>"+
                            "<span onclick = 'bottomListShow(false)'><li>하의</li></span>"+
                            "<span onclick = 'capListShow(false)'><li>모자</li></span>"+
                            "<span onclick = 'bagListShow(false)'><li>가방</li></span>"+
                        "</ul>"+
                    "</li>"+
                    "<li><span id = 'ctg' onclick = 'lifeListShow(false)'>생활용품</span>"+
                        "<ul class = 'subMenu'>"+
                            "<span onclick = 'mouthListShow(false)'><li>구강용품</li></span>"+
                            "<span onclick = 'faceListShow(false)'><li>세면용품</li></span>"+
                            "<span onclick = 'towelListShow(false)'><li>수건</li></span>"+
                            "<span onclick = 'kitchenListShow(false)'><li>주방용품</li></span>"+
                            "<span onclick = 'cleanerListShow(false)'><li>청소용품</li></span>"+
                        "</ul>"+
                    "</li>"+
                "</ul>"+
            "</div>"+
            "<label for = 'searchBar'>"+
                "<fieldset>"+
                "<span id = 'searchTab' class = 'material-symbols-outlined'>shopping_bag</span>"+
                "<input type = 'text' class = 'search' id = 'searchBar' name = 'query'>"+
                "<span id = 'clearBtn' class = 'material-symbols-outlined' onclick = 'textclear(searchBar)'>close</span>"+
                "<span id = 'searchBtn' class = 'material-symbols-outlined'>search</span>"
            "</fieldset></label>";
    headRegion += loginToken + "</div>";
    document.getElementById('headRegion').innerHTML = headRegion;
}