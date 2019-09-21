var hands=document.getElementsByClassName("hand");

setInterval(() => {
var now = new Date();
hands[0].style.transform = `rotate(${(now.getHours()*30)%360}deg)`;
hands[1].style.transform = `rotate(${(now.getMinutes()*6)%360}deg)`;
hands[2].style.transform = `rotate(${(now.getSeconds()*6)%360}deg)`;
},1000);