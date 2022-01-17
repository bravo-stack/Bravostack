/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");
const main = document.querySelector(".main")
const footer = document.querySelector(".footer");

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
const dropMenu = () => {
    navMenu.style.bottom = "-100%";
}

if(main) {
    main.addEventListener("click", dropMenu)
}

if(footer) {
    footer.addEventListener("click", dropMenu)
}




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

/*======================= FOOTER ===================*/
const currentYear = document.querySelector("#current-year")

const yearText = new Date().getFullYear();

currentYear.textContent = yearText.toString()


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 