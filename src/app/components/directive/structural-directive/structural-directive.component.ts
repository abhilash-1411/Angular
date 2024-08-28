import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;

  num1:string='';
  num2:string='';
  selectedState:string='Goa';

  isActive:boolean = false;

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
