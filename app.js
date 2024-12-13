const navBar = document.getElementById('navbar');

window.addEventListener('scroll',()=> {
    
    if (window.scrollY > 50) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }

});