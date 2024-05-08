function footLoadForIndex(){
    document.getElementById("footRegion").innerHTML =
        "<nav>"+
            "<ul id = 'footerNavi'>"+
                "<li><a href = '#'>SHOPLE 소개</a></li>"+
                "<li><a href = '#'>이용약관</a></li>"+
                "<li><a href = '#'>개인정보 처리방침</a></li>"+
                "<li><a href = './html/notification.html'>공지사항</a></li>"+
            "</ul>"+
        "</nav>"+
        "<hr>"+
        "<div id = 'footBox'>"+
            "<div id = 'bottomLeft'>"+
                "<img src = './img/headerImg/logo.png'>"+
                "<p><b>회사명 : (주)쇼플</b></p>"+
                "<p>주소 : 서울시 노원구 초안산로</p>"+
                "<p>계좌번호 : 012345-67-890123 국민</p>"+
            "</div>"+
            "<div id = 'bottomRight'>"+
                "<b class = 'footTitle'>Copyright ⓒ2024.04 Team 6 All Right Reserved</b>"+
            "</div>"+
        "</div>";
}
function footLoad(){
    document.getElementById("footRegion").innerHTML =
        "<nav>"+
            "<ul id = 'footerNavi'>"+
                "<li><a href = '#'>SHOPLE 소개</a></li>"+
                "<li><a href = '#'>이용약관</a></li>"+
                "<li><a href = '#'>개인정보 처리방침</a></li>"+
                "<li><a href = './notification.html'>공지사항</a></li>"+
            "</ul>"+
        "</nav>"+
        "<hr>"+
        "<div id = 'footBox'>"+
            "<div id = 'bottomLeft'>"+
                "<img src = './../img/headerImg/logo.png'>"+
                "<p><b>회사명 : (주)쇼플</b></p>"+
                "<p>주소 : 서울시 노원구 초안산로</p>"+
                "<p>계좌번호 : 012345-67-890123 국민</p>"+
            "</div>"+
            "<div id = 'bottomRight'>"+
                "<b class = 'footTitle'>Copyright ⓒ2024.04 Team 6 All Right Reserved</b>"+
            "</div>"+
        "</div>";
}