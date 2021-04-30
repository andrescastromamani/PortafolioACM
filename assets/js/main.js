/*Menu Show*/
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*Active and remove menu*/
const navlink = document.querySelectorAll('.nav-link')
function linkAction(){
    //Active link
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navlink.forEach(n => n.addEventListener('click',linkAction))

/*Scroll Animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
/*Scroll Home */
sr.reveal('.home-title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home-img',{delay:400})
sr.reveal('.social-icon',{interval: 200})

/*Scroll About */
sr.reveal('.about-img',{})
sr.reveal('.about-subtitle',{delay:200})
sr.reveal('.about-text',{delay:400})

/**Scroll Skills */
sr.reveal('.skills-subtitle',{})
sr.reveal('.skills-text',{delay:200})
sr.reveal('.skills-data',{interval:200})
sr.reveal('.skills-img',{delay: 400})

/**Scroll Work */
sr.reveal('.work-img',{interval:200})

/**Scroll Contact */
sr.reveal('.contact-input',{interval:200})
