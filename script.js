const  hamburgerEl = document.getElementsByClassName("hamburger")[0];

const  navliEl = document.getElementsByClassName("nav")[0];

hamburgerEl.addEventListener("click", () =>{
    navliEl.classList.toggle('active')
})