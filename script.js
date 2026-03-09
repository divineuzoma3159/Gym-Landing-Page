const openUp = document.querySelector('#openUp');//the div holding the menu bar
const myList = document.querySelector('#myList');//the remaining list shown whan the menu bar is clicked
openUp.addEventListener('click',() => {
    myList.classList.toggle('hide');//for when the menu bar shows and the phone width is less than 480px
});
const myTips = document.querySelector('#myTips');//the tips section
function moveIn1(){//to have a smoth scroll animation when moving to the tips section
    myTips.scrollIntoView({behavior:'smooth'});
    myTips.style.animation = `flooring ${1}s ease-in-out`;
};
const muscleGroup = document.querySelector('#muscleGroup');//the muscle group section
function moveIn2(){//to have a smoth scroll animation when moving to the muscle group section
    muscleGroup.scrollIntoView({behavior:'smooth'});
    muscleGroup.style.animation = `flooring ${1}s ease-in-out`;
};
const footer = document.querySelector('footer');//The footer
function moveIn3(){//to have a smoth scroll animation when moving to the footer
    footer.scrollIntoView({behavior:'smooth'});
    footer.style.animation =  `flooring ${1}s ease-in-out`;
};
const lastInit = document.querySelector('#lastInit');//the form section
function joinNow(){//to have a smoth scroll animation when moving to the form section
    lastInit.scrollIntoView({behavior:'smooth'});
    lastInit.style.animation =  `flooring ${1}s ease-in-out`;
};
const myForm = document.querySelector('form');//the form
myForm.addEventListener('submit',e => {//to prevent the form from refreshing
    e.preventDefault();
})
const myCancel = document.querySelector('#myCancel');//the submit button in the form
myCancel.addEventListener('click', () => {//to reset the form and give an alert once the submit button has been clicked
    alert('your info has been recieved');
    myForm.reset();
});
const scrolls = document.querySelectorAll('.scroll');//the sections
function scrolling(){//scroll animation for each section
    scrolls.forEach(into => {
        const inner = into.getBoundingClientRect();
        if(inner.top < window.innerHeight - 100){
            into.classList.add('show');
        }
    });
}
window.addEventListener("scroll",scrolling);

scrolling();
