let listDivImg = document.querySelectorAll('.slides--list div')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let showSlide = document.querySelector('.slides--show')


let currentIndex = 0

setCurrent(currentIndex)

function setCurrent(index) {
    currentIndex = index
    showSlide.src = listDivImg[currentIndex].querySelector('img').src
    // remove all active img
    listDivImg.forEach((item) => {
        item.classList.remove('active')
    })
    // set active
    listDivImg[currentIndex].classList.add('active')
}

listDivImg.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        setCurrent(index)
    })
})


next.addEventListener('click', function () {
    if (currentIndex === listDivImg.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }

    showSlide.style.animation = ''
    setTimeout(() => {
        setCurrent(currentIndex)
        showSlide.style.animation = 'right 1s ease-in-out forwards'
    }, 200)
})


prev.addEventListener('click', function () {
    if (currentIndex === 0) {
        currentIndex = listDivImg.length - 1
    } else {
        currentIndex--
    }
    showSlide.style.animation = ''
    setTimeout(() => {
        setCurrent(currentIndex)
        showSlide.style.animation = 'left 1s ease-in-out forwards'
    }, 200)
})