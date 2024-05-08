var users;
var infos;
var inId;
var inPwd;
var loginToken;

function userInit(){
    users = localStorage.getItem("users");
    inId = document.getElementById("id");
    inPwd = document.getElementById("pwd");
    inId.focus();
}

function login(){
    if(inId.value == ""){
        alert("아이디를 입력하세요");
    } else if(inId.value.length > 0){
        inPwd.focus();
    }
    infos = users.split(/_/ig);
    let idRecent = false;
    for(let i = 0; i < infos.length; i++){
        let info = infos[i].split(/,/ig);
        if(inId.value == info[0]){
            idRecent = true;
            if(inPwd.value == info[1]){
                alert("로그인 완료");
                loginToken = info[3];
                localStorage.setItem("loginRecent", loginToken);
                history.back();
            } else if(inPwd.value != info[1]){
                alert("비밀번호가 일치하지 않습니다.");
                inPwd.select();
            }
        }
    }
    if(idRecent == false){
        alert("존재하지 않는 회원입니다.");
    }
}