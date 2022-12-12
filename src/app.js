const hamburgerbtn = document.getElementById('hamburger')
const navlist = document.getElementById('nav-list')

function togglebtn(){
    navlist.classList.toggle('show')

}

hamburgerbtn.addEventListener('click',togglebtn)