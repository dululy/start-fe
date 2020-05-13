
let a = "aa";
const b ="bb";

let cp ="use";
let com = `doubleuse${cp}`; 
console.log(com);

const bse = `aaa
bbb
ccc`
console.log(bse);

function sum (a , b =1 ){
    return a + b;
}

console.log(sum(1))


const arr = [1,2,3];

const newArr = arr.map(function(item){
    return item +1;
});

const newArr2 = arr.map((item) =>{ 
    return item +1;
});

const newArr3 = arr.map((item) =>item +1);
const newArr4 = arr.map(item =>item +1); 

document
    .getElementById('box')
    .addEventListener('click',(event) => console.log(1));


function sum(x,y,z){
    return x+y+z;
}
const numbers=[1,2,3];
console.log(sum(...numbers));
console.log(sum(1,2,3));

const words = ['a', 'b'];
const newWords = [...words];
console.log(newWords);

const arr1 = [3, 4, 5];
const arr2 = [1, 2, ...arr1, 6, 7];
console.log(arr2); 

function func(...param) {
    console.log(param);
}

func(1, 2, 3);


function func() {
 console.log(arguments);
}
  
func(1, 2, 3);

var team = obj.team;
var area = obj.area;
var col1 = cols[0];
var col2 = cols[1];


const { team, area } = obj;
const [col1, col2] = cols; 
const [, cols2] = cols;


function getArea(options) {
  return options.width * options.height;
}


function getArea({ width, height }) {
  return width * height;
}
const number = 1234;

const student = {
  
  number,
};
const student2 = {
    number,
    playGame() { 
      console.log('play');
    },
  };