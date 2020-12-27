var restart=document.querySelector('#x');
var x=document.querySelectorAll('td');

function kuthu()
{
for (var i = 0; i < x.length; i++) {
  x[i].textContent='';
}
}
restart.addEventListener('click',kuthu);

var cell1=document.querySelector('#one');
cell1.addEventListener("click",function(){
  if(cell1.textContent==='')
  cell1.textContent='X';
  else if (cell1.textContent==='X') {
    cell1.textContent='O'
  }
  else {
    cell1.textContent=''
  }
});

var cell2=document.querySelector('#two');
cell2.addEventListener("click",function(){
  if(cell2.textContent==='')
  cell2.textContent='X';
  else if (cell2.textContent==='X') {
    cell2.textContent='O'
  }
  else {
    cell2.textContent=''
  }
});

var cell3=document.querySelector('#three');
cell3.addEventListener("click",function(){
  if(cell3.textContent==='')
  cell3.textContent='X';
  else if (cell3.textContent==='X') {
    cell3.textContent='O'
  }
  else {
    cell3.textContent=''
  }
});

var cell4=document.querySelector('#four');
cell4.addEventListener("click",function(){
  if(cell4.textContent==='')
  cell4.textContent='X';
  else if (cell4.textContent==='X') {
    cell4.textContent='O'
  }
  else {
    cell4.textContent=''
  }
});

var cell5=document.querySelector('#five');
cell5.addEventListener("click",function(){
  if(cell5.textContent==='')
  cell5.textContent='X';
  else if (cell5.textContent==='X') {
    cell5.textContent='O'
  }
  else {
    cell5.textContent=''
  }
});

var cell6=document.querySelector('#six');
cell6.addEventListener("click",function(){
  if(cell6.textContent==='')
  cell6.textContent='X';
  else if (cell6.textContent==='X') {
    cell6.textContent='O'
  }
  else {
    cell6.textContent=''
  }
});

var cell7=document.querySelector('#seven');
cell7.addEventListener("click",function(){
  if(cell7.textContent==='')
  cell7.textContent='X';
  else if (cell7.textContent==='X') {
    cell7.textContent='O'
  }
  else {
    cell7.textContent=''
  }
});

var cell8=document.querySelector('#eight');
cell8.addEventListener("click",function(){
  if(cell8.textContent==='')
  cell8.textContent='X';
  else if (cell8.textContent==='X') {
    cell8.textContent='O'
  }
  else {
    cell8.textContent=''
  }
});

var cell9=document.querySelector('#nine');
cell9.addEventListener("click",function(){
  if(cell9.textContent==='')
  cell9.textContent='X';
  else if (cell9.textContent==='X') {
    cell9.textContent='O'
  }
  else {
    cell9.textContent=''
  }
});
