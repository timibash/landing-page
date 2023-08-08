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

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const currentClasses = entry.target.classList;
            const newClasses = [];

            for (const classname of currentClasses) {
                if (classname.startsWith("__")) {
                    newClasses.push(`animate${classname}`);
                }
            }

            entry.target.classList.add(...newClasses);
        }
    });
},{threshold: 0.5,});
const elements = document.querySelectorAll(".animate__animated");

elements.forEach((el) => observer.observe(el));
