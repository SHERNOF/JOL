const body = document.getElementById('body')


const more = document.querySelector('.ab-button')
const aboutDetails = document.getElementById('about-details')
const showAboutDetails = function () {
    if (aboutDetails.style.display = 'none') {
        aboutDetails.style.display = 'flex'
        console.log('test')
    } else {
        aboutDetails.style.display = 'none'
    }
}

const back = document.querySelector('.back')
const btnAboutB = document.getElementById('btn-about-b')
const backToHome = function () {
    if (aboutDetails.style.display = 'flex') {
        aboutDetails.style.display = 'none'
    } else {
        aboutDetails.style.display = 'flex'
    }
}

const toggle = document.querySelector('.toggle-button')
const navBar = document.querySelector('.navbar-links')
const showNav = function () {
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

const slide = document.getElementById('slide')
// const slide = document.querySelector('.card')
const up = document.getElementById('up')
const down = document.getElementById('down')

let x = 0;

up.addEventListener('click', () => {
    // console.log('test')
    if (x > "-1500") {
        x = x - 300;
        slide.style.top = x + "px"
        console.log('test')
    }
})



function postSub() {
    const submitButton = document.getElementById('#submitButton')
    const thYou = document.getElementById('thankyou_message')
    const contactRight = document.getElementById('contact-right')

    console.log('test');
    contactRight.style.display = 'none'
    thYou.style.display = 'flex'

}


down.onclick = () => {
    if (x < "0") {
        x = x + 300;
        slide.style.top = x + "px"
        console.log('testing')
    }
}







toggle.addEventListener('click', showNav)
btnAboutB.addEventListener('click', backToHome)
back.addEventListener('click', backToHome)
more.addEventListener('click', showAboutDetails)
