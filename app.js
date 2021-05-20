const body = document.getElementById('body')


const more = document.querySelector('.ab-button')
const aboutDetails = document.getElementById('about-details')
const showAboutDetails = function (){
    if(aboutDetails.style.display = 'none'){
        aboutDetails.style.display = 'flex'
        console.log('test')
    } else {
        aboutDetails.style.display = 'none'
    }
}

const back = document.querySelector('.back')
const btnAboutB = document.getElementById('btn-about-b')
const backToHome = function (){
    if(aboutDetails.style.display = 'flex'){
        aboutDetails.style.display = 'none'
    } else {
        aboutDetails.style.display = 'flex'
    }
}

const toggle = document.querySelector('.toggle-button')
const navBar = document.querySelector('.navbar-links')
const showNav = function (){
    navBar.classList.toggle('active')
    navBar.addEventListener('mouseleave', () => {
        navBar.classList.remove('active')
    })
}

const phone = document.querySelector('.phone')
const addtlInfo = document.querySelector('.addtl-info')
phone.addEventListener('click', (e) => {
    console.log('test')
    e.preventDefault()
    addtlInfo.classList.toggle('active')
    addtlInfo.innerHTML = '+61 425 806 041'
})





toggle.addEventListener('click', showNav)
btnAboutB.addEventListener('click', backToHome)
back.addEventListener('click', backToHome)
more.addEventListener('click', showAboutDetails)