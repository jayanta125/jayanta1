var Employee2 = /** @class */ (function () {
    function Employee2(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Employee2.prototype.displayFirstName = function () {
        console.log(this.firstname);
    };
    Employee2.prototype.displayLastName = function () {
        console.log(this.lastname);
    };
    return Employee2;
}());
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
var emp1 = new Employee2("jayanta", "paul");
emp1.displayFirstName();
emp1.displayLastName();
/* var mgr=new Manager("simanta",23,5);
 mgr.displayName();
 console.log(mgr.getNoOfTeams());

 console.log(Employee1.getNoOfObject());*/ 
