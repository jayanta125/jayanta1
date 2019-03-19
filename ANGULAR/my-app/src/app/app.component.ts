import { Component } from '@angular/core';
import { books } from './books';


@Component({
  selector: 'app-root1',
  template: `
  
  <app-receipe></app-receipe>

  <table border=2>
  <tr id=id2><th >Book Id</th><th>Book Name</th><th>Book Cost</th></tr>
  <tr  *ngFor="let x of books_Arr" >
  <td  id=id1 >{{x.book_id}}</td><td  id=id3>{{x.book_name}}</td><td  id=id4>{{x.book_cost}}</td>
  </tr>
  </table>
  `,
  styles:[`#id2{background-color:lightblue}#id1,#id4{background-color:yellow}#id3{background-color:pink}`],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  books_Arr:books[]=[];
  constructor(){
    
    var book1=new books();
    book1.getBookId();
    book1.setBookName("asd");
    book1.setBookCost(258);
    this.books_Arr[0]=book1;

    var book2=new books();
    book2.getBookId();
    book2.setBookName("asd");
    book2.setBookCost(2545128);
    this.books_Arr[1]=book2;

    var book3=new books();
    book3.getBookId();
    book3.setBookName("asd");
    book3.setBookCost(250000000008);
    this.books_Arr[2]=book3;
  }

}
