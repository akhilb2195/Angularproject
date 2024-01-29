import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgFor],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
 employeeDetails:any=[
  {
    imgSrc: "",
    name:"akhil",
    role:"junior Java Developer"
  },{
    imgSrc: "",
    name:"akhil",
    role:"junior Java Developer"
  },
  {
    imgSrc: "",
    name:"akhil",
    role:"junior Java Developer"
  },
  {
    imgSrc: "",
    name:"akhil",
    role:"junior Java Developer"
  }
 ]
}
