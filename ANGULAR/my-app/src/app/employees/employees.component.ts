
import { Component } from '@angular/core';
import { Employees } from '../employees';

@Component({
  selector: 'app-employees',
  template: `
  
  <table  border=1>
  <tr><th>Employees Id</th><th>Employees Name</th><th>Employees Cost</th></tr>
  <tr *ngFor="let x of empArr">
  <td>{{x.emp_id}}</td><td>{{x.emp_name}}</td><td>{{x.emp_salary}}</td>
  </tr>
  
  </table>
  `,
  
  styleUrls: ['../app.component.css']
})
export class employees {
  //constructor(){
   // <tr *ngFor="let emp of empArr"><td>{{emp2.emp_id}}</td><td>{{emp2.emp_name}}</td><td>{{emp2.emp_salary}}</td></tr>
  //<tr*ngFor="let emp of empArr"><td>{{emp3.emp_id}}</td><td>{{emp3.emp_name}}</td><td>{{emp3.emp_salary}}</td></tr>

  
  /*emp1:Employees;
  emp2:Employees;
  emp3:Employees;*/
  empArr:Employees[]=[];
  constructor(){
    
    
    var emp1=new Employees();
    emp1.getEmpId();
    emp1.setEmpName("asd");
    emp1.setEmpSalary(500008);
    this.empArr[0]=emp1;

    var emp2=new Employees();
    emp2.getEmpId();
    emp2.setEmpName("asyfjvjd");
    emp2.setEmpSalary(2549618);
    this.empArr[1]=emp2;


    var emp3=new Employees();
    emp3.getEmpId();
    emp3.setEmpName("asdfji");
    emp3.setEmpSalary(258528);
    this.empArr[2]=emp3;

    var emp4=new Employees();
    emp4.getEmpId();
    emp4.setEmpName("asdfji");
    emp4.setEmpSalary(10);
    this.empArr[3]=emp4;
  }
  
}
