"use strict";
let all_employee =[];
function employee (employee_ID, full_Name, department, level,image_URL)      {
    this.employee_ID = employee_ID;
    this.full_Name = full_Name;
    this.department = department;
    this.level = level;
    this.image_URL = image_URL;
    all_employee.push(this);
}

employee.prototype.genrate = function (){
    let min=1000;let max=9999;
    this.employee_ID =  (Math. trunc((Math.random() * (max-min) + min)));
}


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
    let new_emp = new employee (oo,full_n,depar,lvll,imgg);
    render();
}

let diiv =document.getElementById('bodyy');

let count =-1;
function render (){  
    ++count;
for(let i=count;i<all_employee.length;++i){
    all_employee[i].genrate();
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

}}

