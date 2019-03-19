import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
      private name:string="IIHT"
      age:number;

  constructor() { }
  
  displayName():String{
    return this.name;
       
  }

  ngOnInit() {
    console.log("google ")
  }
  
  

}
