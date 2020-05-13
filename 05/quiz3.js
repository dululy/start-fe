
var red= false;
var hide = false;
var image = false;
//문제1 빨간색으로
function turnred()
{
    var boxlist=document.querySelectorAll('.box');
    var count=boxlist.length;
    if(red==false){
        for(i=0; i<count; i++){
            boxlist[i].classList.add('red');
            red=true;
        }
        
    }
    else if(red==true){
        
        for(i=0; i<count; i++){
            boxlist[i].className = boxlist[i].className.replace('red','');
            red=false;
        }
        
    }
}
//문제2 박스추가
function addbox()
{
    var boxlist=document.querySelector('.boxlist')
    var addbox= document.createElement('div');
    addbox.className='box';
    boxlist.appendChild(addbox);
}
//문제3 박스삭제
function deletebox()
{
    var boxlist=document.querySelector('.boxlist')
    boxlist.removeChild(boxlist.children[0]);
}
//문제 4 글자넣기
function addtext()
{
    var $text=document.getElementById('text2').value;
   
    var textingbox=document.querySelectorAll('.box');
    var count=textingbox.length;
    for(i=0; count; i++){
        textingbox[i].innerHTML=$text;//실행은되는데 오류가 뜸... 왜지?
    }
}
//문제5 초기화
function resetbox()
{
    var boxlist=document.querySelector('.boxlist')
    var count=boxlist.children.length;
    for(i=0;i<count;){
        boxlist.removeChild(boxlist.children[0]);
        count=boxlist.children.length;
        if(count==0){
            break;
        }
    }
}
//문제6 보이기,숨기기,토글
function togglebox()
{
   var boxlist=document.querySelectorAll('.box');
   var count=boxlist.length;
   
   if(hide==false){
        for(i=0; i<count; i++){
            boxlist[i].classList.add('hide');    
            hide=true;
        }
       
    }
    else if(hide==true){
        
        for(i=0; i<count; i++){
            boxlist[i].className = boxlist[i].className.replace('hide','');
            hide=false;
        }
      
    }
}
//문제7 이미지 박스
function imagebox(){
    var boxlist=document.querySelectorAll('.box');
    var count=boxlist.length;
    if(count==0) addbox();
    if(image==false){
        for(i=0; i<count; i++){
            boxlist[i].classList.add('image')   
            image=true;
        }
        
    }
    else if(image==true){
        
        for(i=0; i<count; i++){
            boxlist[i].className = boxlist[i].className.replace('image','');
            image=false;
        }
        
    }
}


function main()
{
    var $addred = document.querySelector('.add-red');
    var $addbox = document.querySelector('.add-btn');
    var $deletebox = document.querySelector('.delete-btn');
    var $addtext = document.querySelector('.text-btn');
    var $resetbox = document.querySelector('.reset-btn');
    var $togglebox = document.querySelector('.toggle-btn');
    var $imagebox = document.querySelector('.image-btn');
    $addred.addEventListener('click',turnred);
    $addbox.addEventListener('click',addbox);
    $deletebox.addEventListener('click',deletebox);
    $addtext.addEventListener('click',addtext);
    $resetbox.addEventListener('click',resetbox);
    $togglebox.addEventListener('click',togglebox);
    $imagebox.addEventListener('click',imagebox);
}




main();