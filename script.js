const returnHome = () => {
    window.location.href = "/";
};

const hamburgerMenuBtn = document.querySelector('.HamburgerMenu'); 
const navLinks = document.querySelector(".hideshow2");
const header = document.querySelector(".head");
const frame = document.querySelector(".frame");
const closeIconBtn = document.querySelector(".last"); 
const allNavLinks = document.querySelectorAll(".a");

const showNavLinks = () => {
    header.classList.toggle("head2"); 
    frame.classList.toggle("show2"); 
    hamburgerMenuBtn.classList.toggle("active"); 
    
    
};

hamburgerMenuBtn.addEventListener('click', showNavLinks);



    
}
