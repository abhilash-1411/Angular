import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;

  num1:string='';
  num2:string='';
  selectedState:string='Goa';

  isActive:boolean = false;

  cityArray:string[] = ['Pune','Banglore','Indore','Bhopal'];
  studentList:any[] = [
    {studentID:1,name:"AAA",city:"Bhopal",isActive:false},
    {studentID:2,name:"BBB",city:"Indore",isActive:false},
    {studentID:3,name:"CCC",city:"Gwalior",isActive:true},
    {studentID:4,name:"DDD",city:"Pune",isActive:false},
    {studentID:5,name:"EEE",city:"Bhopal",isActive:false},
    {studentID:6,name:"FFF",city:"Mumbai",isActive:false},
  ];
  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }
  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible;
  }
}
