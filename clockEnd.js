var dials = document.getElementsByClassName('dial');
var dialContainer = document.getElementsByClassName('dial-container')[0];

for (var i = 1; i < 60; i++) {
  dialContainer.innerHTML += "<div class='dial'></div>";
  dials[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function time(){
    
    let Nowdate = new Date();
    
    let seconds =Math.floor(Nowdate.getSeconds());

    let mins =Math.floor(Nowdate.getMinutes());
    
    let hours = Math.floor(Nowdate.getHours() );

   minsHand=document.getElementById("handMins");
   hourHand=document.getElementById("hourHand");
   hourDeg=  hours * 30 + mins/2
   minsDeg= mins * 6 + seconds * (360/3600) ;
   
   hourHand.style.transform="rotate(" + hourDeg + "deg)";
   minsHand.style.transform="rotate(" + minsDeg + "deg)";

 }

 setInterval(time,1000);
