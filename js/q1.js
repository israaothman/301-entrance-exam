'use strict';

var arrOne = [3,5,8,2];
var num1 = 4;
var numOfNum=0;

function greaterThan(arr,num){
  for (var i=0; i<arr.length ;i++){
    if(arr[i]>num){
      numOfNum ++;
    }
  }
}

greaterThan(arrOne,num1);
console.log(numOfNum);
