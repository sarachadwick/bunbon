var muffins = 0;
var bunNum = 0;
var bunnyCost = 5;
var interval;

document.getElementById("cottontailRabbit").style.visibility = "hidden";
document.getElementById("muffinCount").innerHTML = muffins;

function increment(){
    muffins += bunNum;
    document.getElementById("muffinCount").innerHTML = muffins;
}

function makeAMuffin(){
    muffins += 1;
    document.getElementById("muffinCount").innerHTML = muffins;
    if(muffins > 3){
        document.getElementById("cottontailRabbit").style.visibility = "visible";
    }
}

function cottontailRabbit(){
    if(muffins >= bunnyCost){
        if(bunNum == 0){
            interval = setInterval(increment, 1000);
        }

        muffins -= bunnyCost;
        bunnyCost = Math.trunc(1.2*bunnyCost);
        bunNum += 1;

        document.getElementById("muffinCount").innerHTML = muffins;
        document.getElementById("cottontailRabbitText").innerHTML = 
            "Convince a cottontail bunny to join you: " + 
            bunnyCost + " muffins";
    }
}