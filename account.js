let all_employee =[];
function employee (department, level,salary)      {
    this.department = department;
    this.level = level;
    this.salary=salary;
    all_employee.push(this);
    
}

function getdata (){
  
    let get = localStorage.getItem('info');
    let objArr = JSON.parse(get);
//  console.log(objArr);
for (let i = 0; i < objArr.length; i++){
    new employee (objArr[i].department, objArr[i].level,objArr[i].salary);
           }}
           getdata ();
/////////////////



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
let AdminEmp=document.getElementById("a0");
AdminEmp.textContent=a[0];
  let DevelopmentEmp=document.getElementById("a1");
  DevelopmentEmp.textContent=a[1];
  let MarketingEmp=document.getElementById("a2");
  MarketingEmp.textContent=a[2];
  let FinanceEmp=document.getElementById("a3");
  FinanceEmp.textContent=a[3];
    
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
    let totalavgsal = document.getElementById("toavgsal");
    totalavgsal.textContent=(avgsal_3/a[3])+(avgsal_2/a[2])+(avgsal_1/a[1])+(avgsal_0/a[0]);
    
    let totalAdmin = document.getElementById("t0");
    totalAdmin.textContent=(avgsal_0);
let totalDev = document.getElementById("t1");
totalDev.textContent=(avgsal_1);
let totalMarketing = document.getElementById("t2");
totalMarketing.textContent=(avgsal_2);
let totalFinance = document.getElementById("t3");
totalFinance.textContent=(avgsal_3);

let totalSalaries = document.getElementById("t4");
totalSalaries.textContent=(avgsal_3+avgsal_2+avgsal_1+avgsal_0);