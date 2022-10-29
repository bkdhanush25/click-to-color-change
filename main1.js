var btn=document.getElementById('btn');
var mainDiv=document.getElementsByTagName("BODY")[0];
btn.onclick=() => {
    mainDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
}