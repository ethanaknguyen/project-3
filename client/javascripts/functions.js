// jshint esversion: 7

//fill an array with the numbers from start to stop, in steps of step
//a.
let fillArray = (start, stop, step) => Array.from({
  length: (stop - start) / step + 1
}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);




//b.)
let bitBatBotOrNot = (n) => {
  //your code goes here
  let result = "";
  //is n divisible by 3?
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if (n % 3 != 0 && n % 5 != 0 && n % 7 != 0) {
    result = `${result}Not`;
  }
  return result;
};



//c.)
let findAllbitBatBotOrNots1 = (arr) => {
  let newArr = [];
  arr.map(number => {
    newNumber = `${number} : ${bitBatBotOrNot(number)}`;
    newArr.push(newNumber);
  });
  return newArr;
};



//d.)

let findAllbitBatBotOrNots2 = (arr) => {
  let newArr = [];
  let newElem;
  for (var i = 0; i < arr.length; i++) {
    newElem = `${arr[i]} : ${bitBatBotOrNot(arr[i])}`;
    newArr.push(newElem);
  }
  return newArr;
};

//e.)

let findAllbitBatBotOrNots3 = (arr) => {
  let newArr = [];
  let elem;
  for (let elem of arr){
    elem = `${elem} : ${bitBatBotOrNot(arr)}`;
      newArr.push(elem);
  }
  return newArr;
};




let findAllbitBatBotOrNots4 = (arr) => {
  let newArr = [];
  let elem;
  arr.forEach(function(elem) {
      elem = `${elem} : ${bitBatBotOrNot(arr)}`;
    newArr.push(elem);
  });
  return newArr;
};


//test the functions

findAllbitBatBotOrNots1(arrOf1To100)

findAllbitBatBotOrNots2(arrOf1To100)

findAllbitBatBotOrNots3(arrOf1To100)

findAllbitBatBotOrNots4(arrOf1To100)
