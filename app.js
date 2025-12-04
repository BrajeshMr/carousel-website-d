let nextDom = document.getElementById('next');
let preDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom .onclick = function(){
    showSlider('next');
}
preDom.onclick = function(){
    showSlider('prev');
}
let timeRuning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() =>{
    nextDom.click();
}, timeAutoNext);
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length -1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.add('next');
        carouselDom.classList.add('prev');
    }, timeRuning);
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() =>{
        nextDom.click();
    }, timeAutoNext);
}
