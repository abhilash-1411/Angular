import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  // string,number,boolean,data
  courseName: string="Angular 18";
  inputType="radio";
  myClassName:string="bg-primary";
  rollN0:number=123;
  isIndian:boolean=true;
  currentDate:Date=new Date;
  stateName:string="Madhya Pradesh";

  firstName= signal('Abhilash Chandravanshi')
  constructor(){

  }
  changeCourseName(){
    this.courseName = "Reactjs";
    this.firstName.set("MS Dhoni")
  }
  showMessage(message:string){
    alert(message);
  }
}
