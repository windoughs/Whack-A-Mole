let str_btn = document.getElementById("start-btn");
let var_time;
let timer;
let time = 10;
str_btn.addEventListener("click",()=>{
    showMe();
})
function showMe(){
    let div1= document.getElementById("game_start")
    let div2 = document.getElementById("game_play")
    div1.style.display = "none";
    div2.style.display = "block";
    let h1 = document.querySelector("h1");
    h1.innerHTML = "All The Best !!"
    var_time = setInterval(Timer,1500);
}
function Timer(){
    console.log("Function timer")
     timer = document.getElementById("timer");
    showMole();
    time--;
    timer.innerHTML = time;
    if(time === 0){
        clearInterval(var_time);
        showScore();
    }
}

function showMole(){
    showRandomMole(50,1200);
    showRandomMole(200,1000);
    showRandomMole(400,1500);
    showRandomMole(250,1400);

}

function showScore(){
    let div1 = document.getElementById("game_play");
    let div2 = document.getElementById("scoreCard");
    let div3 = document.getElementById("game_start");
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Well Played !!";
    div1.style.display = "none";
    div2.style.display = "flex";
    let score = document.getElementById("score");
    let final_score = document.getElementById("result");
    final_score.innerText = score.innerHTML;
    let first = document.getElementById("go_to_playBtn");
    first.addEventListener("click",()=>{
        div2.style.display = "none";
        div1.style.display = "block";
        console.log("first button")
        reset();
    })
    let second = document.getElementById("home-btn");
    second.addEventListener("click",()=>{
            div2.style.display = "none";
            div3.style.display = "flex";
            console.log("Second btn")
            reset_home();
    })

}
function reset_home(){
    let score = document.getElementById("score");
    points = 0;
    time = 10;
    timer.innerHTML = time;
    score.innerHTML = 0;
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Whack a Mole";
}
function reset(){
    let score = document.getElementById("score");
    points = 0;
    time = 10;
    timer.innerHTML = time;
    score.innerHTML = 0;
    var_time = setInterval(Timer,1500);
    let h1 = document.querySelector("h1");
    h1.innerHTML = "All The Best !!";
}
function showRandomMole(t1, t2) {
    let random = Math.floor(Math.random() * 12) + 1;
    let mole_to_display = document.getElementById(`${random}`);
    function moleHandle(){
        let score = document.getElementById("score");
        let a = parseInt(score.innerHTML);
        moleClicked = true;
        console.log("mole clicked!!");
        console.log(a+1);
        score.innerHTML = a+1;
        let my_div = document.querySelector(`.mole-break${random}`);
        let hole = document.querySelector(`#hole${random}`);

        let mole_show_time = setTimeout(() => {
            hole.style.display = "none";
            my_div.style.display = "flex";
        }, 10);

        let mole_break_time = setTimeout(() => {
            hole.style.display = "flex";
            my_div.style.display = "none";
        }, 500);
    }
    mole_to_display.addEventListener("click", moleHandle);
    setTimeout(() => {
        mole_to_display.style.display = "block";
    }, t1);

    setTimeout(() => {
        mole_to_display.style.display = "none";
        mole_to_display.removeEventListener("click", moleHandle);
    }, t2);
}
