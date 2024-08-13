const timerIndicator = document.querySelector(".timer");

var timer = [0,0,0,0];

function timming(){
    let currentTime = belowTen(timer[0]) + ":"+belowTen(timer[1]) + ":" +belowTen(timer[2]);         
    timerIndicator.innerHTML = currentTime;
    timer[3]++;
    timer[0] = Math.floor(timer[3]/100/60);
    timer[1] = Math.floor(timer[3]/100) - (timer[0]*60);
    timer[2] = timer[3] - (timer[1]*100) - (timer[0]*6000);
 
}

function belowTen(time){
    if(time < 10){
        time = "0" + time;
    }
    return time;
}
/* فراخوانی تابع timming هر 10میلی ثانیه*/
setInterval(timming,10);