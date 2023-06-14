"use strict";
let all_employee =[];
function employee (employee_ID, full_Name, department, level,image_URL,salary)      {
    this.employee_ID = employee_ID;
    this.full_Name = full_Name;
    this.department = department;
    this.level = level;
    this.image_URL = image_URL;
    this.salary=salary;
    all_employee.push(this);
    
}


employee.prototype.genrate = function (){
    let min=1000;let max=9999;
    this.employee_ID =  (Math. trunc((Math.random() * (max-min) + min)));
}

let count =-1;
let formm = document.getElementById("form");
formm.addEventListener("submit",perform);
console.log(formm);
function perform (event){
    event.preventDefault();
    // console.log(event);
    let full_n = event.target.fname.value ;
    let depar = event.target.dep.value ;
    let lvll = event.target.lvl.value ;
    let imgg = event.target.urll.value ;
    let oo ="asd";
    let s=100;
    let new_emp = new employee (oo,full_n,depar,lvll,imgg,s);
    
    
    savadata(all_employee);
     render();
   

}

let diiv =document.getElementById('bodyy');
function savadata(data) {
    let stringArr = JSON.stringify(data); // array of stings 
    localStorage.setItem('info', stringArr);
   
}

window.onload = getdata;

function getdata (){
  
    let get = localStorage.getItem('info');
    let objArr = JSON.parse(get);
//   console.log(objArr);
for (let i = 0; i < objArr.length; i++){
    new employee (objArr[i].employee_ID, objArr[i].full_Name, objArr[i].department, objArr[i].level,
        objArr[i].image_URL);
       
    }
    // count = objArr.length-1;
    // localStorage.setItem('num',count);
     render();
  
}

function render (){  
    ++count;
    console.log(count , all_employee.length);
    // getdata ();
for(let i=count;i<all_employee.length;++i){
    all_employee[i].genrate();
    // all_employee[i].ransalary();
    // let card = document.createElement("div");
    let card = document.createElement("div");
    card.setAttribute("class","ahmad")

let id =  document.createElement("span");
let name =  document.createElement("span");
let depar =  document.createElement("span");
let levell =  document.createElement("span");
let img =  document.createElement("img");
id.innerHTML =  (`<span>ID - </span> ${all_employee[i].employee_ID}` ) ;
name.innerHTML = (`<span>Name - </span>${all_employee[i].full_Name}`) ;
depar.innerHTML =(`<span>Department - </span>${all_employee[i].department}`) ;// department
levell.innerHTML =(`<span>level - </span>${all_employee[i].level}`) ;
img.setAttribute('src', all_employee[i].image_URL);


card.appendChild(img);
card.appendChild(name);
card.appendChild(id);
card.appendChild(depar);
card.appendChild(levell);
diiv.appendChild(card);

} count = all_employee.length-1;}






