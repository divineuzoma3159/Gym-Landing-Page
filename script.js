const openUp = document.querySelector('#openUp');
const myList = document.querySelector('#myList');
openUp.addEventListener('click',() => {
    myList.classList.toggle('hide');
});
const myTips = document.querySelector('#myTips');
function moveIn1(){
    myTips.scrollIntoView({behavior:'smooth'});
    myTips.style.animation = `flooring ${1}s ease-in-out`;
};
const muscleGroup = document.querySelector('#muscleGroup');
function moveIn2(){
    muscleGroup.scrollIntoView({behavior:'smooth'});
    muscleGroup.style.animation = `flooring ${1}s ease-in-out`;
};
const footer = document.querySelector('footer');
function moveIn3(){
    footer.scrollIntoView({behavior:'smooth'});
    footer.style.animation =  `flooring ${1}s ease-in-out`;
};
const lastInit = document.querySelector('#lastInit');
function joinNow(){
    lastInit.scrollIntoView({behavior:'smooth'});
    lastInit.style.animation =  `flooring ${1}s ease-in-out`;
};
const myForm = document.querySelector('form');
myForm.addEventListener('submit',e => {
    e.preventDefault();
})
const myCancel = document.querySelector('#myCancel');
const myName = document.querySelector('#myName');
const myEmail = document.querySelector('#myEmail');
const myWeight = document.querySelector('#myWeight');
const myHeight = document.querySelector('#myHeight');
myCancel.addEventListener('click', () => {
    alert('your info has been recieved');
    myForm.reset();
});
const scrolls = document.querySelectorAll('.scroll');
function scrolling(){
    scrolls.forEach(into => {
        const inner = into.getBoundingClientRect();
        if(inner.top < window.innerHeight - 100){
            into.classList.add('show');
        }
    });
}
window.addEventListener("scroll",scrolling);
scrolling();