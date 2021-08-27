//consts
const openBtn = document.querySelector('.open')
const resnav = document.querySelector('.resnav')

//open nav button event
openBtn.addEventListener('click', function(){
    resnav.classList.toggle('openNav')
})