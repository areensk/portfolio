const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector('i');

menuBtn.addEventListener("click", (e) => {
    // console.log("you clicked me")
    navLinks.classList.toggle("open");
const isOpen = navLinks.classList.contains("open");
menuBtnIcon.setAttribute("class", isOpen ? "ri-close-fill" : "ri-menu-2-line")
})
navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-2-line")
})
// scrolll animation
const scrollRevealOption = {
distance:"50px",
origin: "bottom",
duration:1000,
}
ScrollReveal().reveal(".header__content h1",{
    ...scrollRevealOption,
})
ScrollReveal().reveal(".header__content .section__description",{
    ...scrollRevealOption,
    delay:500,
})
ScrollReveal().reveal(".header__content .header__btn",{
    ...scrollRevealOption,
    delay:1000,
})
// about container

ScrollReveal().reveal(".about__content .section__header",{
    ...scrollRevealOption,
})
ScrollReveal().reveal(".about__content .section__description",{
    ...scrollRevealOption,
    delay:500,
})
ScrollReveal().reveal(".about__content .about__btn",{
    ...scrollRevealOption,
    delay:1000,
})
// service container
ScrollReveal().reveal(".portfolio__card",{
    duration:1000,
    interval:500,
})
// portfolio container
