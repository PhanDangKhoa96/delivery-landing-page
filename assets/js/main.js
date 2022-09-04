// SHOW MENU

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

navLink.forEach(n => n.addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}))

// CHANGE BACKGROUND HEADER
window.addEventListener('scroll', () => {
    const header = document.getElementById('header')

    if (scrollY >= 80) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
})

// SHOW SCROLL UP
window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scroll-up')
    if (scrollY >= 560) {
        scrollUp.classList.add('show-scrollup')
    } else {
        scrollUp.classList.remove('show-scrollup')
    }
})

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 50
        const sectionId = section.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link')
        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => {
    document.body.classList.contains(darkTheme) ? 'dark' : 'light'
}
const getCurrentIcon = () => {
    themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'
}

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})