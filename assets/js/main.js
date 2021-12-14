/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.style.bottom = "0"
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.style.bottom = "-100%"
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link")

navLink.forEach((item) => {
    item.addEventListener("click", () => {
        navMenu.style.bottom = "-100%"
    })
})


/*==================== ACCORDION SKILLS ====================*/
// not gonna be working on this section coz, i'm sticking with the front end development, no additional section


/*==================== QUALIFICATION TABS ====================*/
// not needed FOR NOW!!!!!


/*==================== SERVICES MODAL ====================*/
const services = document.querySelectorAll(".services_modal");
const openBtn = document.querySelectorAll(".services_button");
const closeBtn = document.querySelectorAll(".services_modal-close")

openBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        services[index].classList.add("active_modal")
    })
})

closeBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        services[index].classList.remove("active_modal")
    })
})




/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 