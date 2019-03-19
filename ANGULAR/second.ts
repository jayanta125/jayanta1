export class Employee1
{
   private name:string;
   private age:number;
private static count:number=0;


 
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
        Employee1.count++;
    }
    displayName():void{
        console.log("name= "+this.name+"\t age= "+this.age);
    }
    static getNoOfObject():number {
		return Employee1.count;
	}

    
}

class Manager extends Employee1{
    private noOfTeams:number;

    constructor(name:string,age:number,noOfTeams:number){
    super(name,age);
    this.noOfTeams=noOfTeams;
    }
    getNoOfTeams():number {
		return this.noOfTeams;
    }
    displayName():void{
        console.log(this.noOfTeams);
    }
	
}
   /* var emp=new Employee1("jayanta",23)
    emp.displayName();
    var mgr=new Manager("simanta",23,5);
    mgr.displayName();*/
    //console.log(mgr.getNoOfTeams());

  // console.log(Employee1.getNoOfObject());