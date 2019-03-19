export class Receipe{
    private receipe_id:number=100;
    private receipe_name:String;
    private receipe_ingredients:String;
    static counter:number=1000;
  
    constructor(){
        Receipe.counter++;
        this.receipe_id=Receipe.counter;
    }
 
    public getReceipeId() {
     return  this.receipe_id;
   }
   
   public setReceipeId(receipe_id:number):void {
     this.receipe_id = Receipe.counter ;
   }
   public getReceipeName() {
     return  this.receipe_name;
   }
   
   public setReceipeName(receipe_name:String):void {
     this.receipe_name =  receipe_name;
   }
   public getReceipeIngredients() {
     return  this.receipe_ingredients;
   }
   
   public setReceipeIngredients(receipe_ingredients:String):void {
     this.receipe_ingredients =  receipe_ingredients;
   }
 }