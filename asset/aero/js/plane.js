document.addEventListener("DOMContentLoaded", function() {
    setTimeout(show, 200);
});
function show(){
    const title = document.querySelector('.main-title');
    title.classList.add('show');
}