console.log('Loaded!');

//chanage the text of the main-text division

var element = document.getElementById('main-text');

element.innerHTML = 'new value';

//move the image
var img = document.getElementById('madi');
img.onclick = function() {
    log.style.marginLeft = '100px';
};