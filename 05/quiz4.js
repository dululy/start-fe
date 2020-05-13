const $box = document.getElementById('box');

let offset = {x:0, y:0};
let isClick = false;

$box.addEventListener('mousedown', (event)=> {
    isClick = true;
    console.log($box.offsetLeft);
    offset.x = $box.offsetLeft - event.clientX;
    offset.y = $box.offsetTop - event.clientY;
});

$box.addEventListener('mouseup', (event) => {
    isClick = false;

});

document.body.addEventListener('mousemove', (event) => {
    console.log('mousemove');
    if(!isClick) return;
    console.log(event.clientX, event.clientY);

    $box.style.left = event.clientX + offset.x + 'px';
    $box.style.top = event.clientY + offset.y +  'px';
});