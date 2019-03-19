import { Component, OnInit } from '@angular/core';
import{Receipe}from '../receipe';
import { empty } from 'rxjs';

@Component({
  selector: 'app-receipe1',
  template:`
  Receipe name:
  <input type="text" required #txt1=ngModel pattern="[a-zA-Z]+" [(ngModel)]=receipe_name/>
  <span *ngIf="txt1.invalid" [ngStyle]="{'color':'red'}">invalid value</span>
  <br/>
  Receipe d:
  <input type="text" #txt2=ngModel pattern="[a-z A-Z]+"   required  [(ngModel)]=receipe_ingredients/>
  <span *ngIf="txt2.invalid" [ngStyle]="{'color':'red'}">invalid value</span>
  {{txt2.className}}<br/>
  
  <input type="button" value="add" (click)="callme()"/>

  <span *ngIf=char>
  plese entered correctly  {{data}} 
  </span>
 

  <table  border=2>
  <tr id=id1><th>Receipe Id</th><th>Receipe Name</th><th>Receipe Ingredients</th><th>Opction</th></tr> 
  <tr *ngFor="let x of receipe_Arr"  [ngStyle]="{'background-color':getColor(x.receipe_name)?'yellow':'lightblue'}">
  <span *ngIf="x.box then thenblock else elseblock"></span>

  <ng-template #elseblock>
  <td>{{x.receipe_id}}</td><td id="id2">{{x.receipe_name}}</td><td>{{x.receipe_ingredients}}</td>
  <input type="button" value="edit" (click)="editagain(x)"/>
  <input  type="button"  value="delete" (click)="callme1(x)"/>                
  </ng-template>

  <ng-template #thenblock>
  <td>{{x.receipe_id}}</td><td><input id="id2" type=text [(ngModel)]=x.receipe_name/></td><td><input type=text [(ngModel)]=x.receipe_ingredients/></td>
  <input type="button" value="update" (click)="updateagain(x)"/>
  </ng-template>
  </tr>

  </table> 
 
  `,

  styles:[`#id1{background-color:lightblue}`]

})
 
export class Receipe1Component implements OnInit {

  receipe_Arr:Receipe[]=[];
  flag:boolean=false;
  box:boolean=false;
  char:boolean=false;
  receipe_name:String;
  receipe_ingredients:String;
  receipe_id:number;
  data:String="invalate input";

  constructor() { }
   getColor(x:String):boolean{
    var c = x.charAt(0);
    if (c.match("^[aACcEeGg]*$")) 
    return true;
    else
    return false;
    }

  ngOnInit() {
  }



//add part only
  callme():void{
    var pattern:string="^[a-z A-Z]*$";
    if(this.receipe_name.match(pattern)!=null && this.receipe_ingredients.match(pattern)!=null){
    if(this.receipe_name!=undefined && this.receipe_ingredients!=undefined){
    this.flag=true;
    var re=new Receipe(); 
    re.getReceipeId(); 
    re.setReceipeName(this.receipe_name);
    re.setReceipeIngredients(this.receipe_ingredients);
    re.box=false;
    this.receipe_Arr.push(re);
    this.char=false;

    }
    this.sorting(this.receipe_Arr);
  }else{
    this.char=true;
  }
}



 editagain(temp):void{
    
    console.log("initial edit");
    temp.box=true;
    temp.char=false;
 }

updateagain(x):void{
  console.log(x.receipe_id);
  console.log(x.receipe_name);
  console.log(x.receipe_ingredients);

  for(var i=0;i<this.receipe_Arr.length;i++){
    var pattern:string="^[a-z A-Z]*$";
    if(x.receipe_name.match(pattern)!=null && x.receipe_ingredients.match(pattern)!=null){
      if(x.receipe_id==this.receipe_Arr[i].getReceipeId())
        {
        this.receipe_Arr[i].setReceipeName=x.receipe_name;
        this.receipe_Arr[i].setReceipeIngredients=x.receipe_ingredients;

        x.box=false;
        this.char=false;
      }
    }
    else{
      x.box=true;
      this.char=true;
      }
     } 
    }
   

callme1(x):void
{
  console.log(x.receipe_id);
  console.log(x.receipe_name);
  console.log(x.receipe_ingredients);

  for(var i=0;i<this.receipe_Arr.length;i++){        
  if(x.receipe_id==this.receipe_Arr[i].getReceipeId())
    {
      this.receipe_Arr.splice(i,1);
         
    }
  }
}


  sorting(arr:Receipe[]):void{
    arr.sort(function(a,b){
      var textA=a.getReceipeName().toUpperCase();
      var textB=b.getReceipeName().toUpperCase();
      return(textA < textB)?-1 : (textA > textB)?1:0 ;
    });
   // this.receipe_Arr.reverse(); //use for reverse order
  }


}