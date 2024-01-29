import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-team-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css'
})
export class TeamDetailsComponent {
  employeeDetails:any=[
    {
      imgSrc: "",
      name:"akhil",
      role:"junior Java Developer"
    },{
      imgSrc: "",
      name:"NIKIL",
      role:"junior Java Developer"
    },
    {
      imgSrc: "",
      name:"akhil",
      role:"junior Java Developer"
    },
    {
      imgSrc: "",
      name:"ak",
      role:"junior Java Developer"
    },
    {
      imgSrc: "",
      name:"nagendra",
      role:"junior Java Developer"
    },{
      imgSrc: "",
      name:"Bala murali",
      role:"junior Java Developer"
    },
    {
      imgSrc: "",
      name:"sai ram",
      role:"junior Java Developer"
    }, {
      imgSrc: "",
      name:"Vidya sagar",
      role:"junior Java Developer"
    }
   ]
}
