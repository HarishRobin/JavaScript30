var a=document.getElementById('a');
var s=document.getElementById('s');
var d=document.getElementById('d')
var f=document.getElementById('f');
var g=document.getElementById('g');
var h=document.getElementById('h');
var j=document.getElementById('j');
var k=document.getElementById('k');
var l=document.getElementById('l');

var keys=document.querySelectorAll('button');

document.addEventListener("keydown",function(event){
    if(event.keyCode === 65){ a.click() }
    if(event.keyCode === 83){ s.click() }
    if(event.keyCode === 68){ d.click() }
    if(event.keyCode === 70){ f.click() }
    if(event.keyCode === 71){ g.click() }
    if(event.keyCode === 72){ h.click() }
    if(event.keyCode === 74){ j.click() }
    if(event.keyCode === 75){ k.click() }
    if(event.keyCode === 76){ l.click() }
});

function removeTrans(e) {
    if(e.propertyName === 'transform') {
        this.classList.remove('playing');
    }
}

function sound(type) {
    if(type===1) {
        a.classList.add('playing');
        var clap = new Audio('./sounds/clap.wav');
        clap.play();
    }
    if(type===2){
        s.classList.add("playing");
        var hihat = new Audio('./sounds/hihat.wav');
        hihat.play();
    }
    if(type===3){ 
        d.classList.add("playing");
        var kick = new Audio('./sounds/kick.wav');
        kick.play();
    }
    if(type===4){ 
        f.classList.add("playing");
        var openhat = new Audio('./sounds/openhat.wav');
        openhat.play();
    }
    if(type===5){ 
        g.classList.add("playing");
        var boom = new Audio('./sounds/boom.wav');
        boom.play();
    }
    if(type===6){ 
        h.classList.add("playing");
        var ride = new Audio('./sounds/ride.wav');
        ride.play();
    }
    if(type===7){
        j.classList.add("playing");
        var snare = new Audio('./sounds/snare.wav');
        snare.play();
    }
    if(type===8){
        k.classList.add("playing");
        var tom = new Audio('./sounds/tom.wav');
        tom.play();
    }
    if(type===9){ 
        l.classList.add("playing");
        var tink = new Audio('./sounds/tink.wav');
        tink.play();
    }
    keys.forEach(key => key.addEventListener('transitionend',removeTrans));
}