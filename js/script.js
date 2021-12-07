// BURGER ACTIVE ON/OFF

const burger = document.querySelector(".burger");
// const menuLettering = document.querySelector(".inscription");

const burgerOnOff = () => {
    burger.classList.toggle("burger--active");
}
burger.addEventListener("click", burgerOnOff)
// menuLettering.addEventListener("click", burgerOnOff)

// SECTION ABOUT

// $(window).on("scroll", function() {

//     const windowHeight = $(window).height();
//     const scrollHeight = $(window).scrollTop();

//     const section = $(".about").offset().top;

//     const sectionHeight = $(".about").outerHeight();

//     if (scrollHeight > section + sectionHeight / 8 - windowHeight) {
//         $(".about__container-title, .about__container-paragraph1, .about__container-paragraph2").removeClass("active");
//         $(".about-img").addClass("active-img");
//     }
// })

const sectionAbout = document.querySelector(".about")
const aboutImg = document.querySeletor(".about-img")
const aboutElement = document.querySelectorAll(".about-element")

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (sectionAbout.offsetTop / 3 <= scrollTop) {
        aboutImg.classList.add("active-img")
        aboutElement.forEach(element => {
            element.classList.remove("active")
        })
    }

})
//SECTIONS SKILLS
const skills = document.querySelectorAll(".skills__container-card");

skills.forEach(skill => {
    skill.addEventListener("mouseover", () => {
        for (let i = 0; i < skills.length; i++) {
            skills[i].classList.add("active-filter");
        }
    })
})
skills.forEach(skill => {
    skill.addEventListener("mouseout", () => {
        for (let i = 0; i < skills.length; i++) {
            skills[i].classList.remove("active-filter");
        }
    })
})

// ROTATE CONTAINER


// SCALE DIV CARD


// SOUNDS ON PAGE TITLE
const audio = document.querySelector("audio");
// const title = document.querySelector(".header__title");
// const titleSpan = document.querySelectorAll(".header__title-name span");
// title.addEventListener("click", () => {
//     titleSpan.forEach(span => {
//         span.addEventListener("mouseover", () => {
//             audio.play();
//         })
//     })
// })

// PROJECTS

const reveal = gsap.utils.toArray(".reveal");
reveal.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%",
        // markers: true
    })
})
const images = gsap.utils.toArray(".project__card-img");
images.forEach((img, i) => {
    ScrollTrigger.create({
        trigger: img,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%",
        // markers: true
    })
})

// LETTERS ANIMATIONS
const headerTitleLetters = document.querySelectorAll(".header__title-name span");
headerTitleLetters.forEach(letter => {
    letter.addEventListener("mouseenter", () => {
        letter.classList.add("action");
        audio.play()
        setTimeout(() => {
            letter.classList.remove("action");
        }, 700)
    })
})

// headerTitle.addEventListener("mouseout", () => {
//     headerTitle.classList.remove("action")
// })