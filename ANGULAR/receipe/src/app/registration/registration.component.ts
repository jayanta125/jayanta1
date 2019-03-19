import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-registration',
  template:`
  <h1>Registration From</h1>
  <form>   

  Employee name:
  <input type="texy" name="full name" placeholder="Full Name" [(ngModel)]=emp_name/><br>

  Employee password:
      <input type="password" name="password" placeholder="password" [(ngModel)]=emp_password/><br>

  Entry Date:
  <input type="date" value="mydate" /><br>

  Employee email:
      <input  type="email" name="email"  placeholder="email" [(ngModel)]=emp_email/><br>
  
  Employee gendar:
      <input type="radio" name="gendar" value="male" checked/> Male
      <input type="radio" name="gendar" value="female"/> Female <br>

  cityes:
      <input type="checkbox" value="bangalore" />bangalore
      <input type="checkbox" value="westbengal"/> westbengal
      <input type="checkbox" value="bihar"/> bihar <br><br>
                  
  Address1:
      <textarea rows="3" cols="20" name="Address" [(ngModel)]=emp_address></textarea>

  Technologies:
      <select>
          <option  selected>select</option>
          <option class="k">ece</option>
          <option class="k">me </option>
          <option class="k">cse </option>
          <option class="k">ee </option>
      </select><br>

      <input type="Submit" value="Submit From" (click)="add()"/>
      <input type="Reset"  value="Reset From"/>
      <br>
      </form>



      <table *ngIf=box border=1>
      <tr ><th>Employee Id</th><th>Full Name</th><th></th><th>Entry Date</th><th>Password</th><th>Employee Email</th><th>Employee Gendar</th><th>Cityes</th><th>Address</th><th>Technology</th></tr>
      
      <tr *ngFor="let x of receipe_Arr" >

      <td>{{x.emp_id}}</td><td id="id2">{{x.emp_name}}</td><td>{{x.emp_entrydate}}</td>
      <td>{{x.emp_password}}</td><td id="id2">{{x.emp_email}}</td><td>{{x.emp_gender}}</td>
      <td>{{x.emp_cityes}}</td><td id="id2">{{x.emp_address}}</td><td>{{x.emp_technology}}</td>

      </tr>
      </table>
  `,
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  employee_arr:Employee[]=[];
  flag:boolean=false;
  box:boolean=false;
  char:boolean=false;
  emp_name:String;
  emp_entrydate:Date;
  emp_password:String;
  emp_email:String;
  emp_gender:String;
  emp_cityes:String;
  emp_address:String;
  emp_technology:String;
  emp_id:number;
  

  constructor() { }
 
  add():void{
     if(this.box=true){
    
    var re=new Employee(); 
    re.getEmpId(); 
    re.setEmpName(this.emp_name);
    re.setEntrydate(this.emp_entrydate);
    re.setEmpPass(this.emp_password);
    re.setEmpEmail(this.emp_email);
    re.setEmpGender(this.emp_gender);
    re.setEmpCitys(this.emp_cityes);
    re.setEmpaddress(this.emp_address);
    re.setEmpTechnology(this.emp_technology);
    
    this.employee_arr.push(re);
      }
      else
      {
      this.box=false;
      }
    }
      
         
   
  ngOnInit() {
  }

}
