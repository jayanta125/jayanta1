

export class Employee{
    private emp_id:number=100;
    private emp_name:String;
    private emp_entrydate:Date;
    private emp_password:String;
    private emp_email:String;
    private emp_gender:String;
    private emp_cityes:String;
    private emp_address:String;
    private emp_technology:String;
    static counter:number=1000;
    box:boolean=false;


    constructor(){
        Employee.counter++;
        this.emp_id=Employee.counter;
    }
 
    public getEmpId() {
     return  this.emp_id;
   }
   
   public setEmpId(emp_id:number):void {
     this.emp_id = Employee.counter ;
   }
   public getEmpName() {
     return  this.emp_name;
   }
   
   public setEmpName(emp_name:String):void {
     this.emp_name =  emp_name;
   }
   public getEntrydate() {
     return  this.emp_entrydate;
   }
   
   public setEntrydate(emp_entrydate:Date):void {
     this.emp_entrydate =  emp_entrydate;
   }
   public getEmpPass() {
    return  this.emp_password;
  }
  
  public setEmpPass(emp_password:String):void {
    this.emp_password =  emp_password;
  }
  public getEmpEmail() {
    return  this.emp_email;
  }
  
  public setEmpEmail(emp_email:String):void {
    this.emp_email =  emp_email;
  }
  public getEmpGender() {
    return  this.emp_gender;
  }
  
  public setEmpGender(emp_gender:String):void {
    this.emp_gender =  emp_gender;
  }
  public getEmpCitys() {
    return  this.emp_cityes;
  }
  
  public setEmpCitys(emp_cityes:String):void {
    this.emp_name =  emp_cityes;
  }
  public getEmpaddress() {
    return  this.emp_address;
  }
  
  public setEmpaddress(emp_address:String):void {
    this.emp_address =  emp_address;
  }
  public getEmpTechnology() {
    return  this.emp_technology;
  }
  
  public setEmpTechnology(emp_technology:String):void {
    this.emp_technology =  emp_technology;
  }
  
 }
    