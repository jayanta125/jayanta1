class Employee2
{
   private firstname:string;
   private lastname:string;


 
    constructor(firstname:string,lastname:string){
        this.firstname=firstname;
        this.lastname=lastname;
        
    }
    displayFirstName():void{
        console.log(this.firstname);
    }
    displayLastName():void{
        console.log(this.lastname);
    }
        
}


/*class Manager extends Employee2{
    private noOfTeams:number;

    constructor(name:string,age:number,noOfTeams:number){
    super(name,lastname);
    this.noOfTeams=noOfTeams;
    }
    getNoOfTeams():number {
		return this.noOfTeams;
	}
	
}*/
    var emp1=new Employee2("jayanta","paul");
    emp1.displayFirstName();
    emp1.displayLastName();
   /* var mgr=new Manager("simanta",23,5);
    mgr.displayName();
    console.log(mgr.getNoOfTeams());

    console.log(Employee1.getNoOfObject());*/