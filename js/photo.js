var pics=document.getElementById("pics");
var n=4;
setInterval(function(){
    if(n>4) n=1;
    pics.innerHTML="<img src='img/"+n+".jpg'/>";
    n++;
},1000);// JavaScript Document