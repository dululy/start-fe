const $num = document.getElementById('num');
const $btn = document.getElementById('btn');
const $result = document.getElementById('result');


function print(){

    const result = [];
    const num = $num.value;

    debugger;
    if(isNaN(input)){
        alert('숫자를 입력하세요');
        return;
    }

    for(i = 0; i<9; i++){
        result.push('${num} x ${i} = ${num * i}');
    }
    $result.innerHTML=result.join('<br>');
}

$btn.addEventListener('click', print);
