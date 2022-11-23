function toShow() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let cur = document.documentElement.scrollTop;
    let h = window.innerHeight;
    const title1 = document.querySelector('.main-title1');
    const title2 = document.querySelector('.main-title2');
    const title3 = document.querySelector('.main-title3');
    const title4 = document.querySelector('.main-title4');
    const title5 = document.querySelector('.main-title5');
    const title6 = document.querySelector('.main-title6');
    if (cur >= 0 && cur <= 0.4 * h){
        title1.classList.add('show1');
    }
    else{
        title1.classList.remove('show1');
    }
    if (cur >= 0.5 * h && cur <= 1.4 * h){
        title2.classList.add('show1')
    }
    else{
        title2.classList.remove('show1');
    }
    if (cur >= 1.5 * h && cur <= 2.4 * h){
        title3.classList.add('show1')
    }
    else{
        title3.classList.remove('show1');
    }
    if (cur >= 2.5 * h && cur <= 3.4 * h){
        title4.classList.add('show1')
    }
    else{
        title4.classList.remove('show1');
    }
    if (cur >= 3.5 * h && cur <= 4.4 * h){
        title5.classList.add('show1')
    }
    else{
        title5.classList.remove('show1');
    }
    if (cur >= 4.5 * h && cur <= 5.4 * h){
        title6.classList.add('show1')
    }
    else{
        title6.classList.remove('show1');
    }
}

window.addEventListener('scroll', toShow, true)
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(show, 500);
});
function show(){
    const title = document.querySelector('.main-title');
    title.classList.add('show1');
}
