console.log('Loaded!');

//chanage the text of the main-text division



//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft += 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
     var interval = setInterval(moveRight, 100);
};