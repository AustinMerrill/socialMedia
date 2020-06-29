// 1 on toggle click change text from "dark mode" to "light mode"
// 2 change the background on toggle to white color

const toggle = document.querySelector('.toggle');
console.log(toggle);
const body= document.querySelector('body');
const followers=document.querySelectorAll('.followers');
console.log(followers);
const number=document.querySelectorAll('.number');
console.log(number);
const topContainer= document.querySelectorAll('.top-container');
console.log(topContainer);
const heroH1 =document.querySelector('.hero-h1');
const bottomContainer=document.querySelectorAll('.bottom-container');
console.log(bottomContainer);
const h2 = document.querySelector('h2');
// create an event listener on toggle for 'click' or 'change'
toggle.addEventListener('change',function(){
    // add .body-light to body when the toggle is clicked
    body.classList.toggle('body-light');
    
    heroH1.classList.toggle('hero-light-h1');

    h2.classList.toggle('lightH2');
    // problem is that we have an array of things...
    // 1. counter 2. conditional 3. iterator
    for (let i = 0; i < followers.length; i++) {
        // run code
        followers[i].classList.toggle('followers-light')
    }
    for (let i = 0; i < number.length; i++){
        number[i].classList.toggle('number-light');
    }
    for (let i = 0; i< topContainer.length; i++){
        topContainer[i].classList.toggle('top-container-light');
    }
    for (let i = 0; i < bottomContainer.length; i++){
        bottomContainer[i].classList.toggle('light-bottom-container');
    }

})

