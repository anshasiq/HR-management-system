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

function getdata (){
  
    let get = localStorage.getItem('info');
    let objArr = JSON.parse(get);
//  console.log(objArr);
for (let i = 0; i < objArr.length; i++){
    new employee (objArr[i].employee_ID, objArr[i].full_Name, objArr[i].department, objArr[i].level,
        objArr[i].image_URL,objArr[i].salary);
           }}
           getdata ();
/////////////////

    for (let i=0 ; i<all_employee.length;++i){
        if(all_employee[i].level=="Junior")
        all_employee[i].salary= ((Math.random() * (1000-500) + 500)*(1-.075));
        if(all_employee[i].level=="Mid-Senior")
        all_employee[i].salary= ((Math.random() * (1500-1000) + 1000)*(1-.075));
        if(all_employee[i].level=="Senior")
        all_employee[i].salary= ((Math.random() * (2000-1500) + 1500)*(1-.075));
      
}


//////////////

let a = new Array(4); for (let i=0; i<4; ++i) a[i] = 0;

// function numofemp(){
    for (let i=0 ; i<all_employee.length;++i){
        if(all_employee[i].department=="Administration") ++a[0];
        else if(all_employee[i].department=="Development") ++a[1];
        else if (all_employee[i].department=="Marketing") ++a[2];
        else if (all_employee[i].department=="Finance") ++a[3];
    }
// }
let y=document.getElementById("a0");
  y.textContent=a[0];
  let ay=document.getElementById("a1");
  ay.textContent=a[1];
  let aay=document.getElementById("a2");
  aay.textContent=a[2];
  let aaay=document.getElementById("a3");
  aaay.textContent=a[3];
    
  let sum = a.reduce(function(a, b){
    return a + b;
  });
  let toemp = document.getElementById("toemp");
  toemp.textContent=sum;
  ////////////////////////////////////////////////////////
  let avgsal_0 =0;
  for (let i=0 ; i<all_employee.length;++i){
    if(all_employee[i].department=="Administration")
    avgsal_0=avgsal_0+all_employee[i].salary;
}
    let avgsal0 = document.getElementById("avgsal0");
    avgsal0.textContent=avgsal_0/a[0];
    /////////////////////////////////////////////////////
    let avgsal_1 =0 ;
    for (let i=0 ; i<all_employee.length;++i){
        if(all_employee[i].department=="Development")
        avgsal_1=avgsal_1+all_employee[i].salary;
    }
    let avgsal1 = document.getElementById("avgsal1");
    avgsal1.textContent=avgsal_1/a[1];
    //////////////////////////////////////////////////////
    let avgsal_2 =0 ;
    for (let i=0 ; i<all_employee.length;++i){
        if(all_employee[i].department=="Marketing")
        avgsal_2=avgsal_2+all_employee[i].salary;
    }
    let avgsal2 = document.getElementById("avgsal2");
    avgsal2.textContent=avgsal_2/a[2];
    ///////////////////////////////////////////////////////
    let avgsal_3 =0 ;
    for (let i=0 ; i<all_employee.length;++i){
        if(all_employee[i].department=="Finance")
        avgsal_3=avgsal_3+all_employee[i].salary;
    }
    let avgsal3 = document.getElementById("avgsal3");
    avgsal3.textContent=avgsal_3/a[3];
    let toavgsal = document.getElementById("toavgsal");
    toavgsal.textContent=(avgsal_3/a[3])
    +(avgsal_2/a[2])+(avgsal_1/a[1])+(avgsal_0/a[0]);
    
    let t0 = document.getElementById("t0");
t0.textContent=(avgsal_0);
let t1 = document.getElementById("t1");
t1.textContent=(avgsal_1);
let t2 = document.getElementById("t2");
t2.textContent=(avgsal_2);
let t3 = document.getElementById("t3");
t3.textContent=(avgsal_3);

let t4 = document.getElementById("t4");
t4.textContent=(avgsal_3+avgsal_2+avgsal_1+avgsal_0);