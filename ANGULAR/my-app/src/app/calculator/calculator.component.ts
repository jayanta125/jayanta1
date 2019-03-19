import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template:`
  <h1> my calculator page</h1>
  <img width="300" alt="Angular Logo" src="http://images6.fanpop.com/image/photos/39900000/IMG-6250-PNG-kion-39961687-1024-577.png">
<br>
  sum={{add()}}<br>
 sub={{sub()}}<br>
multiply={{multi()}}<br>
division={{div()}}
`,
  styles:[`p{color: rgb(0, 225, 255);
    font-size: 50px;}
    h1{background-color=blue};
    `]
})
export class CalculatorComponent implements OnInit {
 private num1:number=10;
 private num2:number=20;
  constructor() { }

add():number{
return (this.num1+this.num2)
}

sub():number{
  return (this.num1-this.num2)
  }

  multi():number{
    return (this.num1*this.num2)
    }

    div():number{
      return (this.num1/this.num2)
      }

      
  ngOnInit() {
  }

}
