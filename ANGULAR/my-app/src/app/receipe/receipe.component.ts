import { Component, OnInit } from '@angular/core';
import{Receipe}from './receipe';


@Component({
  selector: 'app-receipe',
  template:  `<table  border=1>
  <tr id=id1><th>Receipe Id</th><th>Receipe Name</th><th>Receipe Cost</th></tr>
  <tr id=id2 *ngFor="let x of Receipe_Arr">
  <td>{{x.receipe_id}}</td><td>{{x.receipe_name}}</td><td>{{x.receipe_ingredients}}</td>
  </tr>
  </table>
  `,
  styleUrls: ['./receipe.component.css'],
  styles:[`#id1{background-color:blue},
  #id2{background-color:yellow}`]
})
export class ReceipeComponent implements OnInit {
  Receipe_Arr:Receipe[]=[];
  constructor() 
  { 
    var receipe1=new Receipe();
    receipe1.getReceipeId();
    receipe1.setReceipeName("alu dum");
    receipe1.setReceipeIngredients("alu");
    this.Receipe_Arr[0]=receipe1;

    var receipe2=new Receipe();
    receipe2.getReceipeId();
    receipe2.setReceipeName("chicken");
    receipe2.setReceipeIngredients("chicken");
    this.Receipe_Arr[1]=receipe2;

  }

  ngOnInit() {
  }

}
