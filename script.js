const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

let Activeslides = 0;
sidebar.style.top = `-${(slidesCount -1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
    console.log('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
    console.log('down')
})

function changeSlide(direction) {
    if (direction === 'up'){
    Activeslides++
    if (Activeslides === slidesCount){
    Activeslides = 0
}
    } else if (direction === 'down'){
        Activeslides--
    if (Activeslides < 0){
        Activeslides = slidesCount -1
    }
}

const height = container.clientHeight
mainSlide.style.transform = `translateY(-${Activeslides * height}px)`

sidebar.style.transform = `translateY(${Activeslides * height}px)`
}