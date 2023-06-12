let all_employee =[];
function employee (employee_ID, full_Name, department, level,image_URL,salary)      {
    this.Employee_ID = employee_ID;
    this.Full_Name = full_Name;
    this.Department = department;
    this.Level = level;
    this.Image_URL = image_URL;
    this.Salary = salary;
    all_employee.push(this);
}

let Ghazi_Samer = new employee (1000,"Ghazi Samer","Administration","Senior");
let Lana_Ali = new employee (1001,"Lana Ali","Finance","Senior");
let Tamara_Ayoub = new employee (1002,"Tamara Ayoub","Marketing","Senior");
let Safi_Walid = new employee   (1003,"Safi Walid","Administration","Mid-Senior");
let Omar_Zaid = new employee   (1004,"Omar Zaid","Development","Senior");
let Rana_Saleh = new employee   (1005,"Rana Saleh","Development","Junior");
let Hadi_Ahmad = new employee   (1006,"Hadi Ahmad",	"Finance",	"Mid-Senior");


employee.prototype.ransalary =function (){
    let min;let max;
    if(this.Level=="Senior"){
min =1500 ; max =2000;}
    else if (this.Level=="Mid-Senior"){
        min =1000 ; max =1500;}
    else if (this.Level=="Junior"){
    min =500 ; max =1000;}
    this.Salary =  ((Math.random() * (max-min) + min)*(1-.075));
}


for (let i=0;i<all_employee.length;++i){
    all_employee[i].ransalary();
}
for (let i=0;i<all_employee.length;++i){
    document.write(`<h1>the name is ${all_employee[i].Full_Name}</h1><h2>Salary ${all_employee[i].Salary}</h2>`);
}
