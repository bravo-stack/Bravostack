/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");
const main = document.querySelector(".main")

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

// HIDE MENU IF IT'S OPEN AND USER CLICK ON THE BACKGROUND
if(main) {
    main.addEventListener("click", () => {
        navMenu.style.bottom = "-100%";
    })
}


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

services.forEach((modal) => {
    modal.addEventListener("click", () => {
        modal.classList.remove("active_modal")
    })
})




/*==================== PORTFOLIO SWIPER  ====================*/
// Initialize Swiper
let swiper = new Swiper('.swiper-container', {
    cssMode: true,
    loop: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    },
    mousewheel: true,
    keyboard: true,
});


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 