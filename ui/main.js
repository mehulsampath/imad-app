var button = document.getElementById('counter');

button.onclick = function() {
  var request = new XMLHttpRequest();
  
  request.onreadystatechange = function() {
   if(request.readyState === XMLHttpRequest.Done) {
       if (request.status === 200) {
           var counter = request.responseText;
           var span = document.getElementById('count');
           span.innerHTML = counter.toString();
       }
   }
  };
  
  request.open('GET', 'http://msampath21.imad.hasura-app.io/counter', true);
  request.send(null);
  
};

var nameInput =document.getElementById('name');
var name = nameinput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
    
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i= 0; i < names.length; i++) {
        list += '<li>' + nammes[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
}