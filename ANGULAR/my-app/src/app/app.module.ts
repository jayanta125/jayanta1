import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { employees } from './employees/employees.component';
import { ReceipeComponent } from './receipe/receipe.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CalculatorComponent,
    employees,
    ReceipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
