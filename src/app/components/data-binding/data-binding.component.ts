import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
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

  constructor(){

  }
  showMessage(message:string){
    alert(message);
  }
}
