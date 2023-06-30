
var open= document.getElementById ('open');
var close = document.getElementById('close');
var popup = document.getElementById('popup');
open.addEventListener('click',openModal);

close.addEventListener('click',closepopup);

function openModal(){
    popup.style.display ='block';
}
function closepopup(){
    popup.style.display='none';
}