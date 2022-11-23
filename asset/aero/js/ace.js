document.addEventListener("DOMContentLoaded", function() {
    setTimeout(show, 200);
});
function show(){
    const title = document.querySelector('.main-title');
    title.classList.add('show');
}
function showDetail1(){
    const detail = document.querySelector('#mar-detail');
    detail.classList.add('show-detail');
    setTimeout(showImg1, 400);
    setTimeout(showNote1, 800);
}
function showImg1(){
    const detail = document.querySelector('#mar-detail');
    const imgDiv = detail.querySelector(".img-detail");
    imgDiv.classList.add('show-img-note');
}
function showNote1(){
    const detail = document.querySelector('#mar-detail');
    const noteDiv = detail.querySelector(".note");
    noteDiv.classList.add('show-img-note');
}

function hideDetail1(){
    const detail = document.querySelector('#mar-detail');
    const imgDiv = detail.querySelector(".img-detail");
    const noteDiv = detail.querySelector(".note");
    detail.classList.remove('show-detail');
    imgDiv.classList.remove('show-img-note');
    noteDiv.classList.remove('show-img-note');
}


function showDetail2(){
    const detail = document.querySelector('#eah-detail');
    detail.classList.add('show-detail');
    setTimeout(showImg2, 400);
    setTimeout(showNote2, 800);
}
function showImg2(){
    const detail = document.querySelector('#eah-detail');
    const imgDiv = detail.querySelector(".img-detail");
    imgDiv.classList.add('show-img-note');
}
function showNote2(){
    const detail = document.querySelector('#eah-detail');
    const noteDiv = detail.querySelector(".note");
    noteDiv.classList.add('show-img-note');
}

function hideDetail2(){
    const detail = document.querySelector('#eah-detail');
    const imgDiv = detail.querySelector(".img-detail");
    const noteDiv = detail.querySelector(".note");
    detail.classList.remove('show-detail');
    imgDiv.classList.remove('show-img-note');
    noteDiv.classList.remove('show-img-note');
}


function showDetail3(){
    const detail = document.querySelector('#aip-detail');
    detail.classList.add('show-detail');
    setTimeout(showImg3, 400);
    setTimeout(showNote3, 800);
}
function showImg3(){
    const detail = document.querySelector('#aip-detail');
    const imgDiv = detail.querySelector(".img-detail");
    imgDiv.classList.add('show-img-note');
}
function showNote3(){
    const detail = document.querySelector('#aip-detail');
    const noteDiv = detail.querySelector(".note");
    noteDiv.classList.add('show-img-note');
}

function hideDetail3(){
    const detail = document.querySelector('#aip-detail');
    const imgDiv = detail.querySelector(".img-detail");
    const noteDiv = detail.querySelector(".note");
    detail.classList.remove('show-detail');
    imgDiv.classList.remove('show-img-note');
    noteDiv.classList.remove('show-img-note');
}


function showDetail4(){
    const detail = document.querySelector('#iik-detail');
    detail.classList.add('show-detail');
    setTimeout(showImg4, 400);
    setTimeout(showNote4, 800);
}
function showImg4(){
    const detail = document.querySelector('#iik-detail');
    const imgDiv = detail.querySelector(".img-detail");
    imgDiv.classList.add('show-img-note');
}
function showNote4(){
    const detail = document.querySelector('#iik-detail');
    const noteDiv = detail.querySelector(".note");
    noteDiv.classList.add('show-img-note');
}

function hideDetail4(){
    const detail = document.querySelector('#iik-detail');
    const imgDiv = detail.querySelector(".img-detail");
    const noteDiv = detail.querySelector(".note");
    detail.classList.remove('show-detail');
    imgDiv.classList.remove('show-img-note');
    noteDiv.classList.remove('show-img-note');
}


function showDetail5(){
    const detail = document.querySelector('#lyd-detail');
    detail.classList.add('show-detail');
    setTimeout(showImg5, 400);
    setTimeout(showNote5, 800);
}
function showImg5(){
    const detail = document.querySelector('#lyd-detail');
    const imgDiv = detail.querySelector(".img-detail");
    imgDiv.classList.add('show-img-note');
}
function showNote5(){
    const detail = document.querySelector('#lyd-detail');
    const noteDiv = detail.querySelector(".note");
    noteDiv.classList.add('show-img-note');
}

function hideDetail5(){
    const detail = document.querySelector('#lyd-detail');
    const imgDiv = detail.querySelector(".img-detail");
    const noteDiv = detail.querySelector(".note");
    detail.classList.remove('show-detail');
    imgDiv.classList.remove('show-img-note');
    noteDiv.classList.remove('show-img-note');
}
function showDetail6(){
    const detail = document.querySelector('#wh-detail');
    detail.classList.add('show-detail');
    setTimeout(showImg6, 400);
    setTimeout(showNote6, 800);
}
function showImg6(){
    const detail = document.querySelector('#wh-detail');
    const imgDiv = detail.querySelector(".img-detail");
    imgDiv.classList.add('show-img-note');
}
function showNote6(){
    const detail = document.querySelector('#wh-detail');
    const noteDiv = detail.querySelector(".note");
    noteDiv.classList.add('show-img-note');
}

function hideDetail6(){
    const detail = document.querySelector('#wh-detail');
    const imgDiv = detail.querySelector(".img-detail");
    const noteDiv = detail.querySelector(".note");
    detail.classList.remove('show-detail');
    imgDiv.classList.remove('show-img-note');
    noteDiv.classList.remove('show-img-note');
}