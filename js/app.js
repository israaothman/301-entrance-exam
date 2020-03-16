'use strict';

// var today = new Date();
// console.log(today);
// var month = today.getMonth() + 1;

// if(month===3){
//   month = 'MAR';
// }
// console.log(month);

// var day = today.getDay();
// console.log(day);

// var year = today.getFullYear();
// console.log(year);


// var title = document.getElementsByName('h2');
// console.log(title);

var listArr = [];

function MyList (toDo,theDate){
  this.toDo=toDo;
  this.theDate=theDate;

  listArr.push(this);

}

function setList (){
  var str = JSON.stringify(listArr);

  localStorage.setItem('newli',str);
}



var form = document.getElementById('form');

form.addEventListener('submit' , handelSub);

function handelSub(e){
  e.preventDefault();

  var frm = e.target;
  var things = frm.firstInput.value;
  var datee = frm.datee.value;

  new MyList(things,datee);
  setList();
  render();
}


var finlList = document.getElementById('list');
var lastList;
function getList(){
  if(localStorage.newli){
    lastList = JSON.parse(localStorage.getItem('newli'));
    console.log(lastList);
  }
}

function render(){
  getList();

  for (var i =0 ; i< lastList.length ; i++){
    var liEl = document.createElement('li');
    liEl.textContent = lastList[i].toDo;
    finlList.appendChild(liEl);
    console.log(lastList[i].toDo);

    var liEl2 = document.createElement('li');
    liEl2.textContent = lastList[i].theDate;
    finlList.appendChild(liEl2);
    console.log(lastList[i].theDate);

  }
}

render();
