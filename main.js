
let openbtn = document.getElementById('open-btn');
let closebtn = document.getElementById('close-btn');
let modalContainer = document.getElementById('modal-container');

openbtn.addEventListener('click', function(){
    modalContainer.style.display='block'
})

closebtn.addEventListener('click', function(){
    modalContainer.style.display='none'
})

window.addEventListener('click', function(e){
    if(e.target === modalContainer)
    modalContainer.style.display='none';
})