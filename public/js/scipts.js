//Viết hàm ngẫu nhiên
let getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;
//2 viết hàm changePosition
let changePosition = () => {
    const number = document.querySelectorAll(".number");
    number.forEach(function(item){
        item.style.left = getRndInteger(0,900) + "px";
        item.style.top = getRndInteger(0,500) + "px";
    })
}
changePosition();
let score = 0;
//3 click chuot start 
let t;
let start = document.querySelector(".start")

start.addEventListener('click',function(){
    
     t = setInterval(changePosition,1000);
     changePosition();
    setTimeout(timeOut,8000);
});

//4 Lay ra 10 number , duyet va bat su kien click chuot,tang score
const number = document.querySelectorAll(".number");
number.forEach(function(item){
    item.addEventListener('click',function(){
        score += +item.textContent;

    })
})
//5 Viet ham timeout
const timeout = document.querySelector(".timeout");
const score1 = document.querySelector("#score");
let timeOut = () =>{
    timeout.style.display = "block";
    score1.textContent = score;
    document.getElementById("score").innerHTML = "Của mầy là: "+score + " điểm vì mầy chơi quá nguuu!!";
    clearInterval(t);
}