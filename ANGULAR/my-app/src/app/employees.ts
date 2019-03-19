import { employees } from './employees/employees.component';

export class Employees{
    private emp_id:number;
    private emp_name:String;
    private emp_salary:number;
    static counter:number=1000;
    
    
    constructor(){
        Employees.counter++;
        this.emp_id=Employees.counter;
    }
    public getEmpId() {
     return  this.emp_id;
   }
   
   public setEmpId(emp_id:number):void {
     this.emp_id = Employees.counter ;
   }
   public getEmpName() {
     return  this.emp_name;
   }
   
   public setEmpName(emp_name:String):void {
     this.emp_name =  emp_name;
   }
   public getEmpSalary() {
     return  this.emp_salary;
   }
   
   public setEmpSalary(emp_salary:number):void {
     this.emp_salary =  emp_salary;
   }
 }