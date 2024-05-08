var advertise;

var loopTimeout;

var imgIdx;

var dot;
var pushState;

const cfImgs = [
    "./img/baner/simmons.jpg",
    "./img/baner/dynafit.jpg",
    "./img/baner/illom.jpg",
    "./img/baner/nike.jpg",
    "./img/baner/ikea.png"
];
function cfInit(){
    imgIdx = 0;
    pushState = true;
    document.getElementById("sideCF").style.display = "none";
    dot = document.getElementsByClassName("dot");
    advertise = document.querySelector("#advertise img");
    advertise.src = cfImgs[imgIdx];
    for(let i = 0; i < dot.length; i++)
        dot[i].style.backgroundColor = "#aaaaaa";
    dot[imgIdx].style.backgroundColor = "blueviolet";
    myAdvertise();
}

function prevBtn(){
    clearTimeout(loopTimeout);
    if(imgIdx < 0)
        imgIdx = cfImgs.length - 1;
    else imgIdx--;
    pushState = true;
    myAdvertise();
}
function nextBtn(){
    clearTimeout(loopTimeout);
    if(imgIdx == cfImgs.length)
        imgIdx = 0;
    else imgIdx++;
    pushState = true;
    myAdvertise();
}

function chooseIndex(n){
    clearTimeout(loopTimeout);
    imgIdx = n-1;
    pushState = true;
    myAdvertise();
}

function myAdvertise(){
    if(pushState == false)
        imgIdx++;
    if(imgIdx == cfImgs.length)
        imgIdx = 0;
    if(imgIdx < 0)
        imgIdx = cfImgs.length - 1;

    pushState = false;
    advertise.src = cfImgs[imgIdx];
    for(let i = 0; i < dot.length; i++)
        dot[i].style.backgroundColor = "#aaaaaa";
    dot[imgIdx].style.backgroundColor = "#8a2be2";
    loopTimeout = setTimeout(myAdvertise, 3000);
}

function sideCFShow(){
    // 광고 최소 범위 : 1550
    //document.querySelector("article .title").innerHTML = innerWidth;
    // innerWidth : 윈도우의 크기 반환
    // onresize 이벤트로 윈도우 크기가 변경될때마다 반환
    if(window.innerWidth <= 1550){
        document.getElementById("sideCF").style.display = "none";
    }
    if(window.innerWidth > 1550 && document.documentElement.scrollTop > 200){
        document.getElementById("sideCF").style.display = "block";
    }
}
function scrollCF(){
    if(document.documentElement.scrollTop <= 400){
        // 도큐먼트의 스크롤의 위치가 위에서부터 200 이하면
        document.getElementById("sideCF").style.display = "none";
    }
    if(window.innerWidth > 1550 && document.documentElement.scrollTop > 400){
        document.getElementById("sideCF").style.display = "block";
    }
}