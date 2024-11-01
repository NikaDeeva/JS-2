"use strict"
// 1
const range = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');
range.addEventListener('input', _.debounce((event) => {
const size = range.value;
image.style.width = `${size}px`
}, 300));