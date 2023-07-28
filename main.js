var menu = document.getElementById('menu');
var link = document.getElementById('link');
var close = document.getElementById('close');;

menu.addEventListener('click', function(){
    link.style.display = 'block';
    menu.style.display = 'none';
    close.style.display = 'block';
})

close.addEventListener('click', function(){
    link.style.display = 'none';
    menu.style.display = 'block';
    close.style.display = 'none';
})



const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');



form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value ==='' || email.value == null) {
        messages.push('email is required')
    }
    if (messages.length > 0) {
        e.preventDefault()
        error.innerText = messages.join(',')
    }
    
})

// form.onsubmit = function(event){
//     event.preventDefault();