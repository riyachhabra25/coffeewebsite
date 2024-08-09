let search = document.querySelector(".search-box");
let cart = document.querySelector(".cart-items-container");
let navbar = document.querySelector(".navbar");

document.querySelector("#search-icon").onclick = () => {
        search.classList.toggle('active');
        if (search.classList.contains('active')) {
            cart.classList.remove('active');
            navbar.classList.remove('active');
        }
}


document.querySelector("#menu-icon").onclick = () => {
        navbar.classList.toggle('active');
        if(navbar.classList.contains('active')){
            search.classList.remove('active');
            cart.classList.remove('active');
        }
}

document.querySelector("#cart-icon").onclick = () =>{
    cart.classList.toggle('active');
    if (cart.classList.contains('active')) {
        search.classList.remove('active');
        navbar.classList.remove('active');
    }
}

window.onscroll = () =>{
    search.classList.remove('active');
    navbar.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function() {
    
    const closeIcons = document.querySelectorAll('.cart-items-container .fa-times');

    
    closeIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });
});

