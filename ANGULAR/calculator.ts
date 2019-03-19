class Calculator{

    private x:number;
    private y:number;
    

    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
   displaysum():void{
        console.log("sum="+(this.x+this.y));
    }

    displaysub():void{
        console.log("sub="+(this.y-this.x));
    }

    displaymulti():void{
        console.log("multi="+(this.x*this.y)); 
    }

    displaydiv():void{
        console.log("div="+(this.y/this.x));
    }
  
}
   var num=new Calculator(10,20);
 
    num.displaysum(); 
   num.displaysub();
    var num=new Calculator(10,30);
    num.displaymulti();  
    num.displaydiv();
   