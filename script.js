/*SCRIPT PER IL MENU A COMPARSA*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}
window.onscroll = () => {
   menuIcon.classList.remove("bx-x");
   navbar.classList.remove("active"); 
};

ScrollReveal({ 
    distance:"70px",
    duration:2000,
    delay:200
});

/*SCRIPT PER ANIMAZIONE ALL'APERTURA PAGINA*/
ScrollReveal().reveal('.home-content, .heading, .header2', {origin:"top"});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .skill-main', {origin:"bottom"});
ScrollReveal().reveal('.home-content h1, .about-img, .s-skill', {origin:"left"});
ScrollReveal().reveal('.home-content p, .about-content, .h-skill', {origin:"right"});

/*SCRIPT FRASI MULTIPLE*/
const typed = new Typed(".multiple-text",{
    strings: ["web developer", "fronted developer", "dreamer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

var a=2, b=3;

console.log(a&&b);
