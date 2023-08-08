const returnHome = () => {
    window.location.href = "/";
};

const HamburgerMenBtn = document.querySelector('.HamburgerMenu');
const navlinks = document.querySelector(".hideshow2");
const header = document.querySelector(".head");
const frame = document.querySelector(".frame");
const CloseIconBtn = document.querySelector(".last");
const allNavlinks = document.querySelectorAll(".a");


const showNavLinks = () => {
      
    header.classList.toogle("head2");
    frame.classList.toogle("show2");
    HamburgerMenBtn.classList.toogle("active");


    
}