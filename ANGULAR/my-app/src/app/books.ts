export class books{
   private book_id:number=100;
   private book_name:String;
   private book_cost:number;
   static counter:number=1000;
 
   constructor(){
       books.counter++;
       this.book_id=books.counter;
   }

   public getBookId() {
    
    return  this.book_id;
  }
  
  public setBookId(book_id:number):void {
    this.book_id = book_id ;
  }
  public getBookName() {
    return  this.book_name;
  }
  
  public setBookName(book_name:String):void {
    this.book_name =  book_name;
  }
  public getBookCost() {
    return  this.book_cost;
  }
  
  public setBookCost(book_cost:number):void {
    this.book_cost =  book_cost;
  }
}